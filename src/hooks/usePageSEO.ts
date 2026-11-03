import { useEffect } from 'react';
import { PageId, Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO_DATA, PageSEOConfig } from '../data/seoData';

interface UsePageSEOOptions {
  pageId: PageId;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  customImage?: string;
}

function setOrCreateMeta(
  selector: string,
  attributeName: string,
  attributeValue: string,
  content: string
) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setOrCreateCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function setDynamicSchema(schemaObj: Record<string, unknown> | null) {
  const SCRIPT_ID = 'dynamic-seo-schema';
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

  if (!schemaObj) {
    if (script) script.remove();
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaObj, null, 2);
}

export function usePageSEO(options: PageId | UsePageSEOOptions) {
  const { language } = useLanguage();

  const pageId = typeof options === 'string' ? options : options.pageId;
  const custom: Partial<UsePageSEOOptions> = typeof options === 'string' ? {} : options;

  useEffect(() => {
    const config: PageSEOConfig = SEO_DATA[pageId] || SEO_DATA.home;

    const title = custom.customTitle || config.title[language] || config.title.es;
    const description = custom.customDescription || config.description[language] || config.description.es;
    const keywords = custom.customKeywords || config.keywords[language] || config.keywords.es;
    const ogType = config.ogType || 'website';

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://yavimediastudio.com';
    const canonicalUrl = `${origin}/#${pageId}`;
    const imageUrl = custom.customImage
      ? `${origin}${custom.customImage}`
      : `${origin}${config.image || '/images/hero_creative_workspace_1793512043090.jpg'}`;

    // 1. Update Document Title
    document.title = title;

    // 2. Standard Meta Tags
    setOrCreateMeta('meta[name="description"]', 'name', 'description', description);
    setOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', keywords);

    // 3. OpenGraph Social Tags
    setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setOrCreateMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Yavi Media Studio');

    // 4. Twitter / X Card Tags
    setOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    // 5. Canonical Link
    setOrCreateCanonical(canonicalUrl);

    // 6. Structured Schema.org Data (JSON-LD)
    if (config.schema) {
      const schemaData = config.schema(origin, language);
      setDynamicSchema(schemaData);
    }
  }, [pageId, language, custom.customTitle, custom.customDescription, custom.customKeywords, custom.customImage]);
}
