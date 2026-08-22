# Author CMS — Yara Luxe Interiors

Dashboard for writers and admins. Public blog URLs stay `/blog/[slug]`.

Canonical database: **PostgreSQL** (Neon or compatible). SQLite is not supported.

## Local setup

1. Copy `.env.example` to `.env`.
2. Start Postgres: `docker compose up -d`
3. Set `DATABASE_URL="postgresql://yara:yara@localhost:5432/yara_cms"`
4. Set `AUTH_SECRET` and, for first run only, `AUTHOR_BOOTSTRAP_PASSWORD` (min 10 characters). Never commit it.
5. Run:

```
npx prisma generate
npx prisma migrate deploy
npm run cms:bootstrap
npm run cms:import-legacy
npm run dev
```

Or in one step after Docker is up:

```
npm run cms:setup
npm run dev
```

Open:

- http://localhost:3000/author/login
- http://localhost:3000/author
- http://localhost:3000/author/authors (admin)
- http://localhost:3000/admin/authors

`cms:bootstrap` creates the first admin only if none exists. The bootstrap password is not required afterwards.

`cms:import-legacy` imports the 16 JSON posts once (by slug / legacy id). Re-running it skips duplicates. `lib/blog-posts.json` remains as reference.

## First production setup (Vercel + Neon Postgres)

In the Vercel project, set the environment variables listed below. Create a Neon Postgres database and paste its URL into `DATABASE_URL`. Then:

```
npm install
npx prisma generate
npx prisma migrate deploy
npm run cms:bootstrap
npm run cms:import-legacy
npm run build
```

Never use `prisma db push` or `prisma migrate reset` against production.

## Roles

- `admin` — all articles, media, categories, authors
- `author` — own articles, media, profile, categories

Disabled authors cannot log in. Existing sessions are revoked on disable and on password reset.

## Article statuses

| Status | Public | Sitemap | Schema | Auto-publish |
|---|---|---|---|---|
| planned | no | no | no | never |
| draft | no | no | no | no |
| scheduled | no until due | no | no | yes, when `publishAt` <= now |
| published | yes `/blog/[slug]` | yes | Article | n/a |
| trash | no | no | no | no |

`intendedPublishOn` is an editorial calendar date only. It never publishes an article.

Schedule times in the editor are **Australia/Melbourne** (daylight saving aware) and stored as UTC.

## Scheduled publishing on Vercel

`vercel.json` requests:

```
0 0 * * *   GET /api/cron/publish-scheduled
```

with `Authorization: Bearer $CRON_SECRET`.

This daily schedule fits Vercel **Hobby**. An author-chosen hour/minute is **not** guaranteed; the article publishes on the next daily run after `publishAt`.

Vercel **Pro** can use a denser schedule (e.g. every five minutes) if you upgrade and change `vercel.json`.

Local / Ubuntu:

```
npm run publish:scheduled
```

Example every-minute cron after you know the real app path:

```
* * * * * cd /path/to/yara-luxe-next && npm run publish:scheduled
```

The job publishes only `scheduled` rows that are due, is idempotent, and ignores planned/draft/trash.

## Media

Production uploads require `BLOB_READ_WRITE_TOKEN` (Vercel Blob). Production refuses to write to `/public/uploads/cms`. Local development may use that folder only when Blob is unset.

## Commands

```
npm run cms:setup
npm run cms:bootstrap
npm run cms:import-legacy
npm run publish:scheduled
npm run author:reset-login-rate-limit
npm run test:cms
npm run test:e2e
```

## Production environment variables

- `DATABASE_URL` — PostgreSQL URL (not a SQLite file)
- `AUTH_SECRET`
- `BLOB_READ_WRITE_TOKEN`
- `CRON_SECRET`
- `AUTHOR_BOOTSTRAP_EMAIL` / `AUTHOR_BOOTSTRAP_PASSWORD` — first admin only
- Existing Resend vars: `RESEND_API_KEY`, `ENQUIRY_TO`, `ENQUIRY_FROM`
