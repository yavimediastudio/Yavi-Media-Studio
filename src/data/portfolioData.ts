import { PortfolioItem } from '../types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  // 1. Grupo TRG — Logo e identidad de marca (Proyecto Externo de Cliente)
  {
    id: 'grupo-trg-identidad',
    title: 'Grupo TRG — Logo e identidad de marca',
    client: 'Grupo TRG',
    category: 'visual_identity',
    categoryLabel: {
      es: 'Identidad visual',
      en: 'Visual Identity',
    },
    description: {
      es: 'Manual de marca de Grupo TRG: desarrollo integral de la identidad corporativa, sistema de logomarca, geometría constructiva, paleta de colores y pautas de aplicación en papelería y medios.',
      en: 'Grupo TRG brand manual: full corporate identity development, logo mark system, geometric construction, corporate color palette, and multi-medium application guidelines.',
    },
    studioRole: {
      es: 'Dirección de arte, diseño de marca y redacción técnica del manual de normas gráficas.',
      en: 'Art direction, brandmark design, and technical authoring of graphic standards manual.',
    },
    servicesDone: {
      es: [
        'Diseño y vectorización de imagotipo corporativo',
        'Manual normativo integral de identidad de marca',
        'Construcción geométrica, proporciones y zonas de reserva',
        'Paleta de color corporativa (Pantone, CMYK, RGB, HEX)',
        'Normas de coexistencia y usos correctos e incorrectos',
      ],
      en: [
        'Corporate imagotype design and vectorization',
        'Comprehensive brand standards manual in PDF',
        'Geometric grid construction, proportions and clear space',
        'Corporate color palette (Pantone, CMYK, RGB, HEX)',
        'Lockup standards and correct/incorrect usage rules',
      ],
    },
    image: '/assets/portfolio/grupo-trg-portada.jpg',
    pdfUrl: 'https://javierescobar.lovable.app/__l5e/assets-v1/ff6b9584-ec80-479d-996c-c62604210b94/grupo-trg-manual-de-marca.pdf',
    year: '2025',
    deliverables: {
      es: ['Manual de marca oficial en PDF (alta resolución)', 'Paquete de logotipos en .AI, .SVG, .PNG y .PDF', 'Paleta institucional y tipografías'],
      en: ['Official brand guidelines PDF (print ready)', 'Vector logo package in .AI, .SVG, .PNG and .PDF', 'Brand assets kit and typographic specs'],
    },
    highlightMetric: {
      es: 'Manual normativo de marca completo con documento descargable',
      en: 'Comprehensive brand identity manual with downloadable guidelines',
    },
    externalUrl: 'https://javierescobar.lovable.app/es/portafolio',
  },

  // 2. Buffalo Grill Buckets — Diseño de empaque (Proyecto Externo de Cliente)
  {
    id: 'buffalo-grill-buckets',
    title: 'Buffalo Grill Buckets — Diseño de empaque',
    client: 'Buffalo Grill',
    category: 'graphic_design',
    categoryLabel: {
      es: 'Diseño gráfico y empaque',
      en: 'Graphic Design & Packaging',
    },
    description: {
      es: 'Diseño de empaque para los buckets de Buffalo Grill: etiquetas envolventes con la identidad enérgica de la marca, claims de sabor y mensajes directos en superficie.',
      en: 'Packaging design for Buffalo Grill buckets: wraparound labels expressing the high-energy brand persona, flavor claims, and bold on-pack messaging.',
    },
    studioRole: {
      es: 'Diseño estructural de gráfica de empaque, adaptación de marca para gastronomía y preparación de archivos preprensa.',
      en: 'Packaging graphic layout, food-service brand adaptation, and prepress production files.',
    },
    servicesDone: {
      es: [
        'Diseño y diagramación de etiqueta cilíndrica de bucket',
        'Tratamiento tipográfico de titulares y copies de sabor',
        'Adaptación cromática para impresión litográfica en cartón',
        'Artes mecánicos finales listos para imprenta',
      ],
      en: [
        'Cylindrical bucket label graphic design & layout',
        'Bold typographic headline and flavor claim treatment',
        'Color management calibrated for litho board printing',
        'Final prepress mechanical art files',
      ],
    },
    image: '/assets/portfolio/buffalo-grill-buckets.png',
    year: '2025',
    deliverables: {
      es: ['Planos mecánicos con líneas de troquel', 'Archivos listos para imprenta en CMYK', 'Mockups 3D hiperrealistas de presentación'],
      en: ['Mechanical dieline templates', 'Press-ready CMYK production files', 'Hyperrealistic 3D presentation mockups'],
    },
    highlightMetric: {
      es: 'Empaque de alta rotación para cadena de restaurantes',
      en: 'High-turnover packaging for commercial restaurant chain',
    },
    externalUrl: 'https://javierescobar.lovable.app/es/portafolio',
  },

  // 3. Infinitek Paris — Ilustración de empaque Madres (Proyecto Externo de Cliente)
  {
    id: 'infinitek-paris-madres',
    title: 'Ilustración de empaque y campaña Madres — Infinitek Paris',
    client: 'Infinitek Paris',
    category: 'illustration',
    categoryLabel: {
      es: 'Ilustración',
      en: 'Illustration',
    },
    description: {
      es: 'Ilustración botánica de autor para la caja conmemorativa del Día de las Madres de Infinitek Paris: pieza artística principal, patrón del empaque y aplicaciones de lujo.',
      en: 'Signature botanical illustration for Infinitek Paris Mother\'s Day limited edition box: hero artwork, seamless packaging pattern, and luxury cosmetic applications.',
    },
    studioRole: {
      es: 'Ilustración botánica artística, dirección estética de campaña y diseño de patrones para cosmética de alta gama.',
      en: 'Artistic botanical illustration, campaign aesthetic direction, and luxury cosmetic pattern design.',
    },
    servicesDone: {
      es: [
        'Ilustración floral botánica a mano alzada y vectorización',
        'Patrón de repetición continua (seamless pattern)',
        'Composición para tapa y laterales de caja rígida de lujo',
        'Definición de acabados especiales en estampado metalizado',
      ],
      en: [
        'Hand-drawn and vectorized botanical floral illustration',
        'Seamless continuous repeating pattern',
        'Lid and sidewall layout for rigid cosmetic keepsake box',
        'Foil stamping and spot varnish finishing specs',
      ],
    },
    image: '/assets/portfolio/infinitek-madres-cover-hd.jpg',
    gallery: [
      {
        type: 'image',
        src: '/assets/portfolio/infinitek-madres-hd.jpg',
        alt_es: 'Presentación de la campaña de madres de Infinitek Paris: ilustración, caja y aplicaciones',
        alt_en: 'Infinitek Paris Mother\'s Day campaign presentation: illustration, box and applications',
      },
    ],
    year: '2025',
    deliverables: {
      es: ['Ilustraciones maestras en alta resolución (300 DPI)', 'Patrón floral vectorial escalable', 'Guía de acabados litográficos de lujo'],
      en: ['300 DPI master illustration assets', 'Scalable vector floral pattern', 'Luxury litho finishing specification guide'],
    },
    highlightMetric: {
      es: 'Campaña conmemorativa internacional de cosmética',
      en: 'International commemorative cosmetic seasonal campaign',
    },
    externalUrl: 'https://javierescobar.lovable.app/es/portafolio',
  },

  // 4. Infinitek Paris — Campaña Madres piezas y aplicaciones (Proyecto Externo de Cliente)
  {
    id: 'infinitek-madres-campana',
    title: 'Campaña Madres Infinitek Paris — piezas y aplicaciones',
    client: 'Infinitek Paris',
    category: 'graphic_design',
    categoryLabel: {
      es: 'Campaña y aplicaciones',
      en: 'Campaign & Collateral',
    },
    description: {
      es: 'Aplicaciones comerciales y promocionales de la campaña de madres de Infinitek Paris: empaque floral, gift card con acabados especiales, piezas para redes sociales y kit conmemorativo Amor&Vida.',
      en: 'Omnichannel commercial collateral for Infinitek Paris Mother\'s Day campaign: floral packaging, special-finish gift cards, social media assets, and the commemorative Amor&Vida kit.',
    },
    studioRole: {
      es: 'Diseño integral de campaña, diagramación de piezas impresas y adaptación para canales digitales.',
      en: 'Comprehensive campaign design, print collateral layout, and digital channel adaptation.',
    },
    servicesDone: {
      es: [
        'Diseño de gift card con acabados especiales',
        'Piezas de comunicación visual para redes sociales (feed y stories)',
        'Material POP de soporte para tienda y puntos de distribución',
        'Diseño de presentación del kit Amor&Vida',
      ],
      en: [
        'Luxury gift card with foil accents',
        'Social media visual storytelling pieces (feed & stories)',
        'In-store retail POP collateral',
        'Amor&Vida commemorative gift kit packaging collateral',
      ],
    },
    image: '/assets/portfolio/infinitek-campana-cover.jpg',
    gallery: [
      {
        type: 'image',
        src: '/assets/portfolio/infinitek-campana-full.jpg',
        alt_es: 'Presentación completa de la campaña de madres de Infinitek Paris: empaque, gift card, redes y kit Amor&Vida',
        alt_en: 'Full presentation of the Infinitek Paris Mother\'s Day campaign: packaging, gift card, social pieces and the Amor&Vida kit',
      },
    ],
    year: '2025',
    deliverables: {
      es: ['Kit de piezas impresas para imprenta', 'Colección de plantillas para redes sociales', 'Guía de estilo de la campaña'],
      en: ['Press-ready print collateral package', 'Social media template collection', 'Campaign visual style guide'],
    },
    highlightMetric: {
      es: 'Lanzamiento especial con kit Amor&Vida para temporada de madres',
      en: 'Special Mother\'s Day kit launch across retail and digital',
    },
    externalUrl: 'https://javierescobar.lovable.app/es/portafolio',
  },

  // 5. Buffalo Grill — Campaña Desgranado Buffalo piezas impresas (Proyecto Externo de Cliente)
  {
    id: 'desgranado-buffalo-print',
    title: 'Campaña Desgranado Buffalo — piezas impresas',
    client: 'Buffalo Grill',
    category: 'graphic_design',
    categoryLabel: {
      es: 'Publicidad e impresos',
      en: 'Advertising & Print',
    },
    description: {
      es: 'Campaña Desgranado Buffalo para Buffalo Grill: creación del identificador visual de campaña y aplicaciones impresas como tropezones de mesa (table tents), flyers promocionales, etiquetas para empaques y stickers.',
      en: 'Desgranado Buffalo campaign for Buffalo Grill: creation of the campaign visual lockup and printed applications including table tents, promotional flyers, takeout packaging labels, and branded stickers.',
    },
    studioRole: {
      es: 'Diseño gráfico promocional, identidad de producto para menú y producción de material POP para restaurantes.',
      en: 'Promotional graphic design, menu product identity, and restaurant POP production.',
    },
    servicesDone: {
      es: [
        'Creación del logotipo e identificador de la campaña Desgranado',
        'Tropezones de mesa (table tents) troquelados',
        'Flyers publicitarios de entrega rápida y volantes comerciales',
        'Stickers de seguridad y personalización para empaques delivery',
      ],
      en: [
        'Custom Desgranado campaign lockup and typography',
        'Die-cut point-of-sale table tents',
        'Handout promotional flyers and insert menus',
        'Tamper-evident takeout stickers and brand badges',
      ],
    },
    image: '/assets/portfolio/desgranado-cover.jpg',
    gallery: [
      {
        type: 'image',
        src: '/assets/portfolio/desgranado-full.jpg',
        alt_es: 'Presentación completa de la campaña Desgranado Buffalo: concepto, identidad visual y aplicaciones',
        alt_en: 'Full presentation of the Desgranado Buffalo campaign: concept, visual identity and applications',
      },
    ],
    year: '2025',
    deliverables: {
      es: ['Artes finales con líneas de corte y troquel', 'Archivos listos para producción litográfica', 'Guía de montaje para locales'],
      en: ['Die-cut mechanical art files', 'Production-ready print assets in CMYK', 'Local restaurant setup instructions'],
    },
    highlightMetric: {
      es: 'Presencia en mesas y empaques en todos los restaurantes de la cadena',
      en: 'On-table and packaging presence across all chain locations',
    },
    externalUrl: 'https://javierescobar.lovable.app/es/portafolio',
  },

  // 6. Varadero — Cata de Ron campaña para redes (Proyecto Externo de Cliente)
  {
    id: 'varadero-cata-de-ron',
    title: 'Varadero — Cata de Ron: campaña para redes',
    client: 'Varadero',
    category: 'social_media',
    categoryLabel: {
      es: 'Redes y contenido',
      en: 'Social & Content',
    },
    description: {
      es: 'Campaña visual completa para la Cata de Ron de Varadero: diseño de logos del evento, paleta de color nocturna, artes promocionales para redes sociales y dirección de fotografía conceptual generada con IA.',
      en: 'Full visual campaign for Varadero\'s Rum Tasting event: event logo creation, rich nocturnal color palette, promotional social artwork, and AI-directed conceptual photography.',
    },
    studioRole: {
      es: 'Dirección creativa, diseño de campaña para redes sociales, branding de evento y generación de imágenes con IA.',
      en: 'Creative direction, social media campaign design, event branding, and AI imagery generation.',
    },
    servicesDone: {
      es: [
        'Diseño del logotipo e insignia para la Cata de Ron',
        'Paleta de color premium inspirada en el añejamiento del ron',
        'Generación y curaduría de imágenes conceptuales mediante IA',
        'Parrilla de artes promocionales para Instagram (feed y stories)',
      ],
      en: [
        'Event lockup and rum tasting badge design',
        'Warm amber palette inspired by barrel-aged rum',
        'AI conceptual scene generation and digital retouching',
        'Promotional Instagram feed and story campaign grid',
      ],
    },
    image: '/assets/portfolio/varadero-cata-ron.png',
    year: '2025',
    tools: ['IA generativa', 'Photoshop', 'Illustrator'],
    deliverables: {
      es: ['Pack de artes para redes sociales (1080x1080, 1080x1350 y 1080x1920)', 'Logotipo del evento en formatos vectoriales', 'Fotografías conceptuales en alta resolución'],
      en: ['Social media asset pack (square, portrait and story dimensions)', 'Vector event logo assets', 'High-res conceptual imagery'],
    },
    highlightMetric: {
      es: 'Integración pionera de IA generativa para imágenes publicitarias',
      en: 'Pioneering integration of generative AI for commercial campaign imagery',
    },
    externalUrl: 'https://javierescobar.lovable.app/es/portafolio',
  },

  // 7. Buffalo Grill 25 años — Stand Sabor Barranquilla (Proyecto Externo de Cliente)
  {
    id: 'buffalo-sabor-barranquilla-2026',
    title: 'Buffalo Grill 25 años — Stand y piezas para Sabor Barranquilla 2026',
    client: 'Buffalo Grill',
    category: 'graphic_design',
    categoryLabel: {
      es: 'Stand y gran formato',
      en: 'Booth & Large Format',
    },
    description: {
      es: 'Diseño arquitectónico y gráfico del stand de Buffalo Grill para la feria Sabor Barranquilla 2026 celebrando sus 25 años, junto con piezas impresas: menú ferial en gran formato, flyers comerciales y posters conmemorativos.',
      en: 'Graphic and architectural booth design for Buffalo Grill at Sabor Barranquilla 2026 celebrating 25 years, alongside commercial print collateral: large-format fair menu, promotional flyers and anniversary posters.',
    },
    studioRole: {
      es: 'Diseño espacial y gráfico para feria gastronómica, rotulación de gran formato y preparación de artes impresos.',
      en: 'Spatial and graphic exhibition booth design, large-format graphics, and print production.',
    },
    servicesDone: {
      es: [
        'Diseño de pared posterior, counter y frontis del stand ferial',
        'Identificador conmemorativo Buffalo Grill 25 Años',
        'Menú especial para asistentes a la feria en gran formato',
        'Flyers y material promocional de mano para visitantes',
      ],
      en: [
        'Backdrop wall, counter fascia and overhead booth graphics',
        'Commemorative Buffalo Grill 25th Anniversary badge',
        'Large-format exhibition menu board for event attendees',
        'Handout flyers and promotional collateral for visitors',
      ],
    },
    image: '/assets/portfolio/buffalo-sabor-barranquilla-2026.png',
    year: '2026',
    deliverables: {
      es: ['Artes en escala 1:1 a 150 DPI para impresión en lona y vinilo adhesivo', 'Plano de ensamble y guía de instalación', 'Archivos de imprenta para menú y flyers'],
      en: ['1:1 scale art at 150 DPI for vinyl and banner printing', 'Booth setup and installation layout diagram', 'Press-ready files for menus and flyers'],
    },
    highlightMetric: {
      es: 'Stand de alto flujo en la feria gastronómica más representativa del Caribe',
      en: 'High-traffic exhibition booth at the Caribbean\'s premier food expo',
    },
    externalUrl: 'https://javierescobar.lovable.app/es/portafolio',
  },
];
