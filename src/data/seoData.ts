import { PageId, Language } from '../types';

export interface PageSEOConfig {
  title: Record<Language, string>;
  description: Record<Language, string>;
  keywords: Record<Language, string>;
  ogType?: string;
  image?: string;
  schema?: (origin: string, lang: Language) => Record<string, unknown>;
}

export const SEO_DATA: Record<PageId, PageSEOConfig> = {
  home: {
    title: {
      es: 'YAVI MEDIA STUDIO – Ideas que toman forma. Marcas que dejan huella.',
      en: 'YAVI MEDIA STUDIO – Ideas That Take Shape. Brands That Leave a Mark.',
    },
    description: {
      es: 'Estudio creativo independiente en Barranquilla, Colombia. Especializado en diseño gráfico, identidad visual, diseño web con Lovable y producción audiovisual.',
      en: 'Independent creative studio in Barranquilla, Colombia. Specialized in graphic design, visual identity, web design with Lovable, and audiovisual production.',
    },
    keywords: {
      es: 'Estudio creativo en Barranquilla, Diseño gráfico en Barranquilla, Diseño de identidad visual, Diseño para redes sociales, Diseño web en Colombia, Producción audiovisual, Diseñador gráfico freelance, Yavi Media Studio, Javier Escobar',
      en: 'Creative studio Barranquilla, Graphic design in Barranquilla, Brand identity design Colombia, Social media design, Web design Colombia, Audiovisual production, Freelance graphic designer, Yavi Media Studio',
    },
    ogType: 'website',
    image: '/images/hero_creative_workspace_1793512043090.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Yavi Media Studio',
      image: `${origin}/images/hero_creative_workspace_1793512043090.jpg`,
      founder: {
        '@type': 'Person',
        name: 'Javier Escobar',
        jobTitle: lang === 'es' ? 'Director Creativo' : 'Creative Director',
      },
      description:
        lang === 'es'
          ? 'Estudio creativo independiente en Barranquilla especializado en diseño gráfico, identidad visual, diseño web con Lovable y producción audiovisual.'
          : 'Independent creative studio in Barranquilla specializing in graphic design, visual identity, Lovable web development, and audiovisual production.',
      email: 'yavimediastudio@gmail.com',
      url: `${origin}/#home`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barranquilla',
        addressRegion: 'Atlántico',
        addressCountry: 'CO',
      },
      priceRange: 'COP $40.000 - $1.500.000',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '12:00',
        },
      ],
    }),
  },

  services: {
    title: {
      es: 'Catálogo Oficial de Servicios & Precios en COP – YAVI MEDIA STUDIO',
      en: 'Official Services Catalog & Rates in COP – YAVI MEDIA STUDIO',
    },
    description: {
      es: 'Tarifas oficiales en pesos colombianos: diseño gráfico ($40k-$100k), planes de redes ($300k-$600k), identidad visual ($650k), diseño web Lovable y producción de video.',
      en: 'Official launch rates in Colombian Pesos (COP): graphic pieces, monthly social media plans, essential branding, Lovable web pages, and video production.',
    },
    keywords: {
      es: 'Precios diseño gráfico Barranquilla, Tarifas diseño web Lovable Colombia, Paquetes de redes sociales Barranquilla, Identidad visual precio COP, Yavi Media Studio catálogo, Cotización diseño gráfico',
      en: 'Graphic design pricing Barranquilla, Lovable web design cost Colombia, Social media design packages, Brand identity price COP, Yavi Media Studio services',
    },
    ogType: 'website',
    image: '/images/portfolio_digital_editorial_1793512043842.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: lang === 'es' ? 'Catálogo Comercial Yavi Media Studio' : 'Yavi Media Studio Commercial Catalog',
      description:
        lang === 'es'
          ? 'Precios y servicios de diseño gráfico, redes sociales, identidad visual y desarrollo web en Barranquilla.'
          : 'Official pricing and service offerings for graphic design, social media, branding, and web development in Barranquilla.',
      url: `${origin}/#services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'es' ? 'Pieza gráfica sencilla' : 'Standard graphic design piece',
          },
          price: '40000',
          priceCurrency: 'COP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'es' ? 'Pieza comercial' : 'Commercial graphic design piece',
          },
          price: '70000',
          priceCurrency: 'COP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'es' ? 'Identidad Visual Esencial' : 'Essential Visual Identity',
          },
          price: '65000',
          priceCurrency: 'COP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'es' ? 'Landing Page Comercial con Lovable' : 'Commercial Landing Page with Lovable',
          },
          price: '850000',
          priceCurrency: 'COP',
        },
      ],
    }),
  },

  portfolio: {
    title: {
      es: 'Portafolio de Proyectos & Casos de Estudio – YAVI MEDIA STUDIO',
      en: 'Project Portfolio & Case Studies – YAVI MEDIA STUDIO',
    },
    description: {
      es: 'Casos reales de identidad de marca, plataformas web con Lovable, diseño editorial y producción audiovisual realizados por Yavi Media Studio en Barranquilla.',
      en: 'Curated projects in brand identity, Lovable web platforms, editorial layout, and audiovisual production crafted by Yavi Media Studio in Barranquilla.',
    },
    keywords: {
      es: 'Portafolio diseñador gráfico Barranquilla, Casos de estudio diseño Colombia, Portafolio identidad visual, Trabajos Yavi Media Studio, Proyectos creativos Barranquilla',
      en: 'Graphic design portfolio Barranquilla, Design case studies Colombia, Brand identity showcase, Yavi Media Studio work, Creative projects',
    },
    ogType: 'website',
    image: '/images/portfolio_brand_identity_1793512042721.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: lang === 'es' ? 'Portafolio Creativo de Yavi Media Studio' : 'Yavi Media Studio Creative Portfolio',
      description:
        lang === 'es'
          ? 'Galería de proyectos de identidad visual, desarrollo web, contenido para redes y audiovisual.'
          : 'Curated showcase of visual identity, web development, social media assets, and video production.',
      url: `${origin}/#portfolio`,
      creator: {
        '@type': 'Person',
        name: 'Javier Escobar',
      },
    }),
  },

  about: {
    title: {
      es: 'Nosotros – Estudio Creativo de Javier Escobar en Barranquilla | YAVI',
      en: 'About Us – Independent Creative Practice by Javier Escobar | YAVI',
    },
    description: {
      es: 'Conoce a Yavi Media Studio, estudio creativo independiente fundado por Javier Escobar. Criterio visual, atención directa y red colaborativa ágil.',
      en: 'Discover Yavi Media Studio, an independent creative practice founded by Javier Escobar. Visual discernment, bespoke attention, and agile network.',
    },
    keywords: {
      es: 'Javier Escobar diseñador Barranquilla, Estudio creativo independiente Colombia, Yavi Media Studio fundador, Filosofía diseño editorial Barranquilla',
      en: 'Javier Escobar designer Barranquilla, Independent creative practice Colombia, Yavi Media Studio founder, Design philosophy',
    },
    ogType: 'profile',
    image: '/images/hero_creative_workspace_1793512043090.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: lang === 'es' ? 'Sobre Yavi Media Studio' : 'About Yavi Media Studio',
      url: `${origin}/#about`,
      mainEntity: {
        '@type': 'Person',
        name: 'Javier Escobar',
        jobTitle: lang === 'es' ? 'Fundador y Diseñador Principal' : 'Founder & Lead Designer',
        worksFor: {
          '@type': 'Organization',
          name: 'Yavi Media Studio',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Barranquilla',
            addressCountry: 'CO',
          },
        },
      },
    }),
  },

  process: {
    title: {
      es: 'Cómo Trabajamos – Metodología en 7 Pasos y Condiciones | YAVI',
      en: 'How We Work – 7-Step Creative Methodology & Terms | YAVI',
    },
    description: {
      es: 'Metodología clara y transparente: diagnóstico, propuesta formal (15 días de vigencia), anticipo del 50%, 2 rondas de ajustes incluidas y entrega garantizada.',
      en: 'A clear, transparent workflow: diagnosis, formal proposal, 50% deposit, two included revision rounds, and guaranteed final handoff.',
    },
    keywords: {
      es: 'Metodología de diseño gráfico, Proceso de trabajo estudio creativo, Rondas de ajustes diseño, Contratación diseño Colombia, Yavi Media Studio proceso',
      en: 'Graphic design process, Creative studio workflow, Revision rounds policy, Design contracting Colombia, Yavi Media Studio methodology',
    },
    ogType: 'website',
    image: '/images/portfolio_digital_editorial_1793512043842.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: lang === 'es' ? 'Metodología de Trabajo en Yavi Media Studio' : 'Working Methodology at Yavi Media Studio',
      description:
        lang === 'es'
          ? 'Proceso de contratación y desarrollo en 7 pasos para proyectos de diseño e identidad visual.'
          : 'A structured 7-step process for contracting and producing design and visual identity projects.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: lang === 'es' ? 'Nos cuentas tu idea' : 'You share your idea',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: lang === 'es' ? 'Analizamos tu necesidad' : 'We analyze your needs',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: lang === 'es' ? 'Definimos alcance y propuesta' : 'We define scope and proposal',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: lang === 'es' ? 'Comenzamos con el anticipo (50%)' : 'We begin with deposit (50%)',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: lang === 'es' ? 'Desarrollamos el proyecto' : 'We develop the project',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: lang === 'es' ? 'Revisamos y ajustamos (2 rondas)' : 'We review and adjust (2 rounds)',
        },
        {
          '@type': 'HowToStep',
          position: 7,
          name: lang === 'es' ? 'Entregamos el resultado' : 'We deliver final results',
        },
      ],
    }),
  },

  contact: {
    title: {
      es: 'Contacto & Solicitud de Cotización Directa – YAVI MEDIA STUDIO',
      en: 'Contact & Direct Project Inquiry – YAVI MEDIA STUDIO',
    },
    description: {
      es: 'Solicita tu cotización de diseño, branding o desarrollo web. Respuesta personalizada en menos de 24 horas hábiles. Escríbenos a yavimediastudio@gmail.com o WhatsApp.',
      en: 'Request a customized quote for design, branding, or web development. Response within 24 business hours. Email yavimediastudio@gmail.com or WhatsApp.',
    },
    keywords: {
      es: 'Cotizar diseño gráfico Barranquilla, Contacto Yavi Media Studio, Cotización diseño web Colombia, yavimediastudio@gmail.com, WhatsApp Javier Escobar',
      en: 'Quote graphic design Barranquilla, Contact Yavi Media Studio, Web design quote Colombia, yavimediastudio@gmail.com, WhatsApp studio chat',
    },
    ogType: 'website',
    image: '/images/hero_creative_workspace_1793512043090.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: lang === 'es' ? 'Contacto con Yavi Media Studio' : 'Contact Yavi Media Studio',
      url: `${origin}/#contact`,
      description:
        lang === 'es'
          ? 'Formulario de cotización oficial y canales directos de atención en Barranquilla.'
          : 'Official project quotation form and direct contact channels in Barranquilla.',
      mainEntity: {
        '@type': 'ProfessionalService',
        name: 'Yavi Media Studio',
        email: 'yavimediastudio@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Barranquilla',
          addressCountry: 'CO',
        },
      },
    }),
  },

  faq: {
    title: {
      es: 'Preguntas Frecuentes – Pagos, Entregas y Ajustes | YAVI MEDIA STUDIO',
      en: 'Frequently Asked Questions – Payments, Revisions & Terms | YAVI',
    },
    description: {
      es: 'Respuestas a dudas sobre contratación, pagos por Llave, Bancolombia y Nequi, 2 rondas de ajustes, mantenimiento web y horarios de atención en Barranquilla.',
      en: 'Answers regarding contracting, payment channels (Llave, Bancolombia, Nequi), 2 revision rounds, web maintenance, and studio operating hours.',
    },
    keywords: {
      es: 'Preguntas frecuentes diseño gráfico, Métodos de pago Nequi Bancolombia diseño, Tiempos de entrega identidad visual Colombia, Archivos editables diseño',
      en: 'Graphic design FAQ Colombia, Payment methods design studio, Delivery timelines visual identity, Editable source files',
    },
    ogType: 'website',
    image: '/images/portfolio_brand_identity_1793512042721.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      name: lang === 'es' ? 'Preguntas Frecuentes de Yavi Media Studio' : 'Yavi Media Studio Frequently Asked Questions',
      url: `${origin}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name:
            lang === 'es'
              ? '¿Cómo es el proceso para contratar un servicio?'
              : 'What is the process to hire a service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              lang === 'es'
                ? 'El proceso inicia al enviarnos tu brief por formulario o WhatsApp. Emitimos una cotización formal con alcance y cronograma. Tras el 50% de anticipo se inicia la producción, se realizan hasta 2 rondas de ajustes y se entrega tras el 50% final.'
                : 'The process starts with your brief. We provide a formal quote. Upon 50% deposit, production begins with up to 2 revision rounds and final handoff upon balance settlement.',
          },
        },
        {
          '@type': 'Question',
          name:
            lang === 'es'
              ? '¿Cuáles son los métodos de pago aceptados?'
              : 'What payment methods are accepted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              lang === 'es'
                ? 'Aceptamos transferencias por Llave, Bancolombia y Nequi con esquema 50% anticipo y 50% contra entrega.'
                : 'We accept Llave bank transfers, Bancolombia, and Nequi under a 50% deposit and 50% upon delivery policy.',
          },
        },
      ],
    }),
  },

  terms: {
    title: {
      es: 'Términos y Condiciones Comerciales – YAVI MEDIA STUDIO',
      en: 'Commercial Terms & Conditions – YAVI MEDIA STUDIO',
    },
    description: {
      es: 'Condiciones oficiales de contratación: política de pagos 50/50, dos rondas de ajustes, recargo por urgencias del 30%, garantía de 5 días hábiles y derechos de autor.',
      en: 'Official contracting terms: 50/50 payment policy, two revision rounds, 30% rush surcharge, 5-day technical warranty, and intellectual property rights.',
    },
    keywords: {
      es: 'Condiciones comerciales diseño gráfico, Contrato de diseño Colombia, Derechos de autor diseño gráfico Barranquilla, Garantía diseño gráfico',
      en: 'Commercial terms design studio, Design contract Colombia, Copyright and licensing graphic design, Design warranty',
    },
    ogType: 'website',
    image: '/images/hero_creative_workspace_1793512043090.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name:
        lang === 'es'
          ? 'Términos y Condiciones Comerciales de Yavi Media Studio'
          : 'Yavi Media Studio Commercial Terms & Conditions',
      url: `${origin}/#terms`,
    }),
  },

  privacy: {
    title: {
      es: 'Política de Privacidad y Habeas Data – YAVI MEDIA STUDIO',
      en: 'Privacy Policy & Data Protection – YAVI MEDIA STUDIO',
    },
    description: {
      es: 'Tratamiento responsable y seguro de datos personales según la Ley 1581 de 2012 de Colombia. Privacidad y confidencialidad garantizadas por Yavi Media Studio.',
      en: 'Responsible and secure processing of personal data in accordance with Colombian Law 1581 of 2012 and international standards.',
    },
    keywords: {
      es: 'Política de privacidad Yavi Media Studio, Habeas Data Colombia, Tratamiento de datos personales Barranquilla, Confidencialidad cliente diseño',
      en: 'Privacy policy Yavi Media Studio, Habeas Data Colombia, Personal data protection, Client confidentiality',
    },
    ogType: 'website',
    image: '/images/hero_creative_workspace_1793512043090.jpg',
    schema: (origin, lang) => ({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name:
        lang === 'es'
          ? 'Política de Privacidad de Yavi Media Studio'
          : 'Yavi Media Studio Privacy Policy',
      url: `${origin}/#privacy`,
    }),
  },
};
