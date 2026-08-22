import ProfileForm from "./ProfileForm";
import { getSessionAuthor } from "@/lib/cms/auth";

export default async function ProfilePage() {
  const author = await getSessionAuthor();
  return <ProfileForm author={author} />;
}
