import { absoluteUrl } from "./constants";

/**
 * @param {Array<{ name: string, path?: string }>} items
 *        Home should be first. The last item is the current page.
 */
export function breadcrumbList(items, pageUrl) {
  const url = pageUrl || (items[items.length - 1]?.path ? absoluteUrl(items[items.length - 1].path) : undefined);

  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => {
      const listItem = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name
      };
      if (item.path) listItem.item = absoluteUrl(item.path);
      return listItem;
    })
  };
}
