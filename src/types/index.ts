export type Language = 'es' | 'en';

export type PageId =
  | 'home'
  | 'services'
  | 'portfolio'
  | 'about'
  | 'process'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms';

export type PortfolioCategory =
  | 'all'
  | 'graphic_design'
  | 'visual_identity'
  | 'social_media'
  | 'web_design'
  | 'illustration'
  | 'audiovisual';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: { es: string; en: string };
  description: { es: string; en: string };
  studioRole: { es: string; en: string };
  servicesDone: { es: string[]; en: string[] };
  image: string;
  year: string;
  deliverables?: { es: string[]; en: string[] };
  highlightMetric?: { es: string; en: string };
}

export interface ServiceItem {
  id: string;
  category: 'graphic_design' | 'social_media' | 'visual_identity' | 'web_design' | 'web_maintenance' | 'audiovisual';
  name: { es: string; en: string };
  priceCOP: number | 'custom';
  formattedPrice: { es: string; en: string };
  unit?: { es: string; en: string };
  shortDescription: { es: string; en: string };
  includes: { es: string[]; en: string[] };
  notIncludes?: { es: string[]; en: string[] };
  conditions?: { es: string[]; en: string[] };
  turnaround?: { es: string; en: string };
  popular?: boolean;
}

export interface FaqItem {
  id: string;
  category: 'contracting' | 'payments' | 'deliveries' | 'technical' | 'rights';
  question: { es: string; en: string };
  answer: { es: string; en: string };
}

export interface QuoteFormData {
  name: string;
  email: string;
  brand: string;
  serviceCategory: string;
  projectDescription: string;
  estimatedBudget: string;
  desiredDeliveryDate: string;
  selectedServices: string[];
}
