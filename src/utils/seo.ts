/**
 * Helper function to dynamically update the document head (title and meta description)
 * as well as complementary social meta tags (og:title, og:description, twitter:title, twitter:description).
 */
export function updateDocumentHead(title: string, description: string): void {
  if (typeof document === 'undefined') return;

  // 1. Update Document Title
  document.title = title;

  // 2. Helper to set or create meta tags
  const setOrCreateMeta = (selector: string, attrName: string, attrVal: string, content: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Update standard meta description
  setOrCreateMeta('meta[name="description"]', 'name', 'description', description);

  // 4. Update OpenGraph social cards
  setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', title);
  setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description);

  // 5. Update Twitter / X social cards
  setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
}
