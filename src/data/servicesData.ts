import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  // A. Diseño gráfico
  {
    id: 'graphic-simple',
    category: 'graphic_design',
    name: {
      es: 'Pieza sencilla',
      en: 'Standard Graphic Piece',
    },
    priceCOP: 40000,
    formattedPrice: {
      es: '$40.000 COP',
      en: '$40,000 COP',
    },
    unit: {
      es: 'por pieza',
      en: 'per piece',
    },
    shortDescription: {
      es: 'Para promociones, ofertas, comunicados, avisos y piezas informativas claras.',
      en: 'For promotions, special offers, announcements, notices, and informative graphics.',
    },
    includes: {
      es: [
        'Una adaptación sencilla a otro formato',
        'Dos rondas de ajustes',
        'Entrega en formato digital JPG o PNG alta resolución',
      ],
      en: [
        'One simple adaptation to another format',
        'Two rounds of revisions',
        'High-resolution JPG or PNG delivery',
      ],
    },
    notIncludes: {
      es: [
        'Archivos editables (se cotizan por separado)',
        'Copy y redacción de textos (adicional +$10.000 COP)',
      ],
      en: [
        'Editable source files (quoted separately)',
        'Copywriting and hashtags (optional add-on +$10,000 COP)',
      ],
    },
  },
  {
    id: 'graphic-commercial',
    category: 'graphic_design',
    name: {
      es: 'Pieza comercial',
      en: 'Commercial Graphic Piece',
    },
    priceCOP: 70000,
    formattedPrice: {
      es: '$70.000 COP',
      en: '$70,000 COP',
    },
    unit: {
      es: 'por pieza',
      en: 'per piece',
    },
    shortDescription: {
      es: 'Para publicidad de productos, campañas, lanzamientos y composiciones comerciales elaboradas.',
      en: 'For product advertising, campaigns, product launches, and elaborate commercial layouts.',
    },
    includes: {
      es: [
        'Composición visual comercial estructurada',
        'Una adaptación sencilla a otro formato',
        'Dos rondas de ajustes',
        'Entrega en formato digital JPG o PNG',
      ],
      en: [
        'Structured commercial visual composition',
        'One simple adaptation to another format',
        'Two rounds of revisions',
        'High-resolution JPG or PNG delivery',
      ],
    },
    notIncludes: {
      es: [
        'Archivos editables (se cotizan por separado)',
        'Copy y hashtags (adicional +$10.000 COP por pieza)',
      ],
      en: [
        'Editable source files (quoted separately)',
        'Copywriting & hashtags (optional add-on +$10,000 COP)',
      ],
    },
    popular: true,
  },
  {
    id: 'graphic-specialized',
    category: 'graphic_design',
    name: {
      es: 'Pieza especializada',
      en: 'Specialized Graphic Piece',
    },
    priceCOP: 100000,
    formattedPrice: {
      es: '$100.000 COP',
      en: '$100,000 COP',
    },
    unit: {
      es: 'por pieza',
      en: 'per piece',
    },
    shortDescription: {
      es: 'Para fotomontajes, ilustraciones digitales, composiciones complejas y conceptos visuales personalizados.',
      en: 'For photo montages, digital illustrations, complex compositions, and custom visual concepts.',
    },
    includes: {
      es: [
        'Composición visual artística o fotomontaje avanzado',
        'Una adaptación sencilla a otro formato',
        'Dos rondas de ajustes',
        'Entrega en JPG o PNG en alta resolución',
      ],
      en: [
        'Advanced photomontage or digital artwork composition',
        'One simple adaptation to another format',
        'Two rounds of revisions',
        'High-resolution JPG or PNG delivery',
      ],
    },
    notIncludes: {
      es: [
        'Archivos editables (cotizados por separado)',
        'Copy y hashtags (adicional +$10.000 COP por pieza)',
      ],
      en: [
        'Editable source files (quoted separately)',
        'Copywriting & hashtags (add-on +$10,000 COP)',
      ],
    },
  },

  // B. Diseño para redes sociales
  {
    id: 'social-basic',
    category: 'social_media',
    name: {
      es: 'Plan Básico — Redes',
      en: 'Basic Plan — Social Media',
    },
    priceCOP: 300000,
    formattedPrice: {
      es: '$300.000 COP',
      en: '$300,000 COP',
    },
    unit: {
      es: 'paquete mensual',
      en: 'monthly package',
    },
    shortDescription: {
      es: 'Paquete de 5 diseños principales de contenido con copy profesional y adaptación a historia.',
      en: 'Monthly package of 5 core content designs with copy, hashtags, and story adaptation.',
    },
    includes: {
      es: [
        '5 diseños principales para feed',
        'Copy y hashtags estratégicos por publicación',
        'Adaptación sencilla a formato historia por diseño',
        'Dos rondas de ajustes incluidas',
      ],
      en: [
        '5 main feed designs',
        'Strategic copy and hashtags for each post',
        'Simple story format adaptation per design',
        'Two rounds of revisions included',
      ],
    },
    conditions: {
      es: [
        'Se trabaja con 15 días de anticipación respecto al mes de publicación',
        'No incluye publicación, programación ni community management (el cliente publica)',
      ],
      en: [
        'Requires 15 days in advance prior to the publication month',
        'Does not include publishing, scheduling, or community management (client publishes)',
      ],
    },
  },
  {
    id: 'social-intermediate',
    category: 'social_media',
    name: {
      es: 'Plan Intermedio — Redes',
      en: 'Intermediate Plan — Social Media',
    },
    priceCOP: 440000,
    formattedPrice: {
      es: '$440.000 COP',
      en: '$440,000 COP',
    },
    unit: {
      es: 'paquete mensual',
      en: 'monthly package',
    },
    shortDescription: {
      es: 'Paquete de 8 diseños principales con copy, hashtags y formato historia por cada publicación.',
      en: 'Package of 8 core designs with copywriting, hashtags, and story adaptation per post.',
    },
    includes: {
      es: [
        '8 diseños principales para feed',
        'Copy y hashtags redactados por publicación',
        'Adaptación sencilla a formato historia por diseño',
        'Dos rondas de ajustes incluidas',
      ],
      en: [
        '8 main feed designs',
        'Copy and hashtags crafted for each post',
        'Simple story format adaptation per design',
        'Two rounds of revisions included',
      ],
    },
    conditions: {
      es: [
        'Se trabaja con 15 días de anticipación respecto al mes de publicación',
        'No incluye administración de redes ni atención a comentarios o mensajes',
      ],
      en: [
        'Requires 15 days advance notice before publication month',
        'Does not include social account management or responding to comments/DMs',
      ],
    },
    popular: true,
  },
  {
    id: 'social-advanced',
    category: 'social_media',
    name: {
      es: 'Plan Avanzado — Redes',
      en: 'Advanced Plan — Social Media',
    },
    priceCOP: 600000,
    formattedPrice: {
      es: '$600.000 COP',
      en: '$600,000 COP',
    },
    unit: {
      es: 'paquete mensual',
      en: 'monthly package',
    },
    shortDescription: {
      es: 'Paquete de 12 diseños principales para presencia constante durante todo el mes.',
      en: 'Package of 12 core designs for continuous visual presence throughout the month.',
    },
    includes: {
      es: [
        '12 diseños principales para feed',
        'Copy y hashtags redactados por publicación',
        'Adaptación sencilla a historia por diseño',
        'Dos rondas de ajustes incluidas',
      ],
      en: [
        '12 main feed designs',
        'Copy and hashtags written for each post',
        'Simple story adaptation per design',
        'Two rounds of revisions included',
      ],
    },
    conditions: {
      es: [
        'Se trabaja con 15 días de anticipación respecto al mes de publicación',
        'El cliente se encarga de publicar y programar el contenido',
      ],
      en: [
        'Requires 15 days in advance prior to the publication month',
        'Client is responsible for publishing and scheduling content',
      ],
    },
  },

  // C. Identidad visual esencial
  {
    id: 'brand-essential',
    category: 'visual_identity',
    name: {
      es: 'Identidad Visual Esencial',
      en: 'Essential Visual Identity',
    },
    priceCOP: 650000,
    formattedPrice: {
      es: '$650.000 COP',
      en: '$650,000 COP',
    },
    unit: {
      es: 'proyecto único',
      en: 'one-time project',
    },
    shortDescription: {
      es: 'Diseño integral de marca esencial para profesionales, emprendimientos y negocios que buscan coherencia visual.',
      en: 'Essential visual branding for professionals, startups, and businesses looking for visual consistency.',
    },
    includes: {
      es: [
        'Logotipo principal',
        'Versiones secundarias y submarchas',
        'Paleta cromática oficial (códigos HEX, RGB, CMYK)',
        'Selección tipográfica recomendada',
        'Aplicaciones gráficas básicas',
        'Manual breve de identidad en PDF',
        'Archivos finales acordados (vectorial y raster)',
        'Dos rondas de ajustes',
      ],
      en: [
        'Primary logotype',
        'Secondary logo lockups and sub-marks',
        'Official color palette (HEX, RGB, CMYK)',
        'Curated typographic selection',
        'Basic graphic applications',
        'Concise PDF brand guidelines handbook',
        'Final agreed deliverable files (vector and raster)',
        'Two rounds of revisions included',
      ],
    },
    notIncludes: {
      es: [
        'Naming (creación de nombre)',
        'Investigación de mercado',
        'Estrategia integral de posicionamiento',
        'Registro de marca ante la SIC',
        'Manual corporativo extenso',
      ],
      en: [
        'Naming creation',
        'Market research studies',
        'Full corporate positioning strategy',
        'Trademark legal registration',
        'Extensive corporate manual',
      ],
    },
    popular: true,
  },

  // D. Diseño web con Lovable
  {
    id: 'web-landing-basic',
    category: 'web_design',
    name: {
      es: 'Landing Page Básica',
      en: 'Basic Landing Page',
    },
    priceCOP: 600000,
    formattedPrice: {
      es: '$600.000 COP',
      en: '$600,000 COP',
    },
    unit: {
      es: 'desarrollo',
      en: 'development',
    },
    shortDescription: {
      es: 'Página vertical de presentación efectiva de un negocio o profesional con llamadas directas al contacto.',
      en: 'Vertical one-page presentation for a business or professional with direct contact channels.',
    },
    includes: {
      es: [
        'Página vertical estructurada',
        'Presentación del negocio o profesional',
        'Sección de servicios',
        'Botones de WhatsApp y enlaces a redes',
        'Enlaces de contacto directos',
        'Formulario sencillo cuando corresponda',
        'Diseño responsive optimizado para móviles',
        'SEO técnico básico',
        'Dos rondas de ajustes',
      ],
      en: [
        'Single vertical page layout',
        'Business or professional introduction',
        'Services overview section',
        'WhatsApp direct buttons & social links',
        'Direct contact links',
        'Simple form when applicable',
        'Fully responsive mobile-first design',
        'Basic technical SEO setup',
        'Two rounds of revisions',
      ],
    },
    notIncludes: {
      es: [
        'Costos de dominio, alojamiento, suscripciones Lovable u otros servicios externos',
        'Pasarelas de pago o ecommerce',
      ],
      en: [
        'Domain, hosting, Lovable subscriptions or third-party fees',
        'E-commerce or payment gateways',
      ],
    },
  },
  {
    id: 'web-landing-commercial',
    category: 'web_design',
    name: {
      es: 'Landing Page Comercial',
      en: 'Commercial Landing Page',
    },
    priceCOP: 850000,
    formattedPrice: {
      es: '$850.000 COP',
      en: '$850,000 COP',
    },
    unit: {
      es: 'desarrollo',
      en: 'development',
    },
    shortDescription: {
      es: 'Página orientada a la conversión y captación de clientes con secciones comerciales completas.',
      en: 'Conversion-focused page structured for customer acquisition with comprehensive commercial sections.',
    },
    includes: {
      es: [
        'Todo lo contemplado en la Landing Page Básica',
        'Formulario de contacto y cotización',
        'Sección de testimonios',
        'Sección de preguntas frecuentes (FAQ)',
        'Secciones comerciales adicionales',
        'Estructura orientada a captar clientes',
        'Diseño responsive y SEO básico',
        'Dos rondas de ajustes',
      ],
      en: [
        'Everything included in the Basic Landing Page',
        'Lead capture & quote request form',
        'Testimonials section',
        'Frequently Asked Questions (FAQ) section',
        'Additional commercial modules',
        'Conversion-oriented lead structure',
        'Responsive design and basic SEO',
        'Two rounds of revisions',
      ],
    },
    notIncludes: {
      es: [
        'Costos de dominio, suscripciones Lovable o plataformas externas',
        'Sistemas complejos de reservas o ecommerce',
      ],
      en: [
        'Domain, Lovable subscription, or external host fees',
        'Complex booking systems or e-commerce transactions',
      ],
    },
    popular: true,
  },
  {
    id: 'web-business-site',
    category: 'web_design',
    name: {
      es: 'Página Web Empresarial',
      en: 'Business Website',
    },
    priceCOP: 1500000,
    formattedPrice: {
      es: '$1.500.000 COP',
      en: '$1,500,000 COP',
    },
    unit: {
      es: 'desarrollo multipágina',
      en: 'multi-page development',
    },
    shortDescription: {
      es: 'Sitio web multipágina con navegación completa (Inicio, Nosotros, Servicios, Contacto y más).',
      en: 'Multi-page website with full navigation (Home, About, Services, Contact, and more).',
    },
    includes: {
      es: [
        'Varias páginas y sistema de navegación',
        'Página de Inicio',
        'Página de Nosotros',
        'Página de Servicios detallada',
        'Página de Contacto y cotización',
        'Diseño visual personalizado y responsive',
        'Integración de WhatsApp y redes sociales',
        'Formularios de contacto',
        'Galerías visuales o testimonios',
        'SEO básico en cada página',
        'Dos rondas de ajustes',
      ],
      en: [
        'Multiple pages and full navigation architecture',
        'Home page',
        'About us page',
        'Detailed services page',
        'Contact & inquiry page',
        'Custom visual layout and mobile responsive design',
        'WhatsApp and social media integrations',
        'Inquiry contact forms',
        'Visual galleries or testimonials',
        'Basic technical SEO per page',
        'Two rounds of revisions',
      ],
    },
    notIncludes: {
      es: [
        'Ecommerce, pasarelas de pago, paneles de usuario, bases de datos complejas ni automatizaciones avanzadas',
        'Costes externos de dominio, hosting y herramientas de terceros',
      ],
      en: [
        'E-commerce, payment gateways, user accounts, complex databases or custom automations',
        'Third-party domain, hosting, and platform subscription costs',
      ],
    },
  },

  // E. Mantenimiento web
  {
    id: 'web-maintenance-basic',
    category: 'web_maintenance',
    name: {
      es: 'Mantenimiento Básico',
      en: 'Basic Web Maintenance',
    },
    priceCOP: 50000,
    formattedPrice: {
      es: '$50.000 COP',
      en: '$50,000 COP',
    },
    unit: {
      es: 'mensual',
      en: 'monthly',
    },
    shortDescription: {
      es: 'Servicio obligatorio mientras el sitio permanezca alojado o administrado desde la infraestructura del estudio.',
      en: 'Mandatory service while the site remains hosted or managed within the studio infrastructure.',
    },
    includes: {
      es: [
        'Supervisión técnica básica de disponibilidad',
        'Soporte de funcionamiento dentro del alcance acordado',
        'Monitoreo periódico de estado',
      ],
      en: [
        'Basic technical uptime supervision',
        'Functional support within the agreed scope',
        'Periodic operational health check',
      ],
    },
  },
  {
    id: 'web-maintenance-integral',
    category: 'web_maintenance',
    name: {
      es: 'Mantenimiento Integral',
      en: 'Comprehensive Web Maintenance',
    },
    priceCOP: 120000,
    formattedPrice: {
      es: '$120.000 COP',
      en: '$120,000 COP',
    },
    unit: {
      es: 'mensual',
      en: 'monthly',
    },
    shortDescription: {
      es: 'Soporte activo con actualizaciones de textos, imágenes, precios y pequeñas mejoras visuales.',
      en: 'Active support covering updates to text, imagery, prices, contact info, and minor visual refinements.',
    },
    includes: {
      es: [
        'Todo lo contemplado en el mantenimiento básico',
        'Actualización periódica de textos',
        'Actualización y reemplazo de imágenes',
        'Cambios y actualizaciones de precios',
        'Actualización de información de contacto',
        'Pequeñas mejoras visuales',
        'Revisión recurrente de enlaces y formularios',
        'Hasta dos (2) horas de soporte técnico mensual',
      ],
      en: [
        'Everything included in basic web maintenance',
        'Text content updates',
        'Image replacements and updates',
        'Pricing adjustments and updates',
        'Contact info revisions',
        'Minor layout and visual enhancements',
        'Routine checks of forms and links',
        'Up to two (2) hours of monthly technical support',
      ],
    },
  },

  // F. Producción audiovisual (Línea complementaria)
  {
    id: 'av-photography-basic',
    category: 'audiovisual',
    name: {
      es: 'Fotografía básica',
      en: 'Basic Photography Session',
    },
    priceCOP: 100000,
    formattedPrice: {
      es: '$100.000 COP',
      en: '$100,000 COP',
    },
    unit: {
      es: 'por sesión (hasta 2 horas)',
      en: 'per session (up to 2 hours)',
    },
    shortDescription: {
      es: 'Sesión presencial en Barranquilla con cámara. Entrega de todas las fotos capturadas sin retoque.',
      en: 'On-site session in Barranquilla with camera. All photos delivered without retouching.',
    },
    includes: {
      es: [
        'Hasta dos (2) horas de cobertura en locación',
        'Captura con cámara fotográfica',
        'Luz natural / ambiente (sin flash ni iluminación adicional)',
        'Entrega digital de todas las fotografías tomadas',
      ],
      en: [
        'Up to two (2) hours of on-location coverage',
        'Camera capture',
        'Natural / ambient light (no flash or external lighting)',
        'Full digital batch delivery of all captures',
      ],
    },
    notIncludes: {
      es: [
        'Edición ni retoque fotográfico digital (se cotiza por separado)',
        'Flash o equipos complejos de iluminación',
        'Desplazamiento fuera de Barranquilla (se cotiza aparte)',
      ],
      en: [
        'Photo retouching or advanced color grading (quoted separately)',
        'Flash or bulky lighting gear',
        'Travel outside Barranquilla (quoted separately)',
      ],
    },
  },
  {
    id: 'av-promo-video-short',
    category: 'audiovisual',
    name: {
      es: 'Vídeo promocional corto',
      en: 'Short Promotional Video',
    },
    priceCOP: 120000,
    formattedPrice: {
      es: '$120.000 COP',
      en: '$120,000 COP',
    },
    unit: {
      es: 'por vídeo',
      en: 'per video',
    },
    shortDescription: {
      es: 'Grabación con iPhone 14 y edición básica para redes en formato vertical.',
      en: 'Filmed on iPhone 14 with basic editing for vertical social media formats.',
    },
    includes: {
      es: [
        'Grabación con iPhone 14 (locación en Barranquilla)',
        'Duración máxima de 60 segundos',
        'Edición básica y montaje dinámico',
        'Música de fondo sincronizada',
        'Formato vertical (9:16) ideal para Reels / TikTok',
      ],
      en: [
        'Filmed with iPhone 14 (Barranquilla on-site location)',
        'Maximum duration of 60 seconds',
        'Basic editing and cut sequence',
        'Synchronized background music',
        'Vertical format (9:16) optimized for Reels / TikTok',
      ],
    },
  },
  {
    id: 'av-video-edit-only',
    category: 'audiovisual',
    name: {
      es: 'Edición de vídeo corto',
      en: 'Short Video Editing Only',
    },
    priceCOP: 80000,
    formattedPrice: {
      es: '$80.000 COP',
      en: '$80,000 COP',
    },
    unit: {
      es: 'por vídeo',
      en: 'per video',
    },
    shortDescription: {
      es: 'Edición a partir de material suministrado por el cliente. Máximo 60 segundos con música y textos.',
      en: 'Editing client-provided footage. Up to 60s runtime with music and simple text captions.',
    },
    includes: {
      es: [
        'Edición a partir de material grabado por el cliente',
        'Duración máxima de 60 segundos',
        'Cortes y ritmo dinámico',
        'Música de fondo libre de derechos',
        'Textos sencillos y llamadas a la acción',
        'Formato vertical (9:16)',
      ],
      en: [
        'Editing using raw footage provided by client',
        'Maximum duration up to 60 seconds',
        'Dynamic cuts and pacing',
        'Royalty-free background music',
        'Simple on-screen text overlays and CTA',
        'Vertical 9:16 format',
      ],
    },
  },
  {
    id: 'av-video-record-and-edit',
    category: 'audiovisual',
    name: {
      es: 'Grabación y edición de vídeo corto',
      en: 'Short Video Filming & Editing',
    },
    priceCOP: 150000,
    formattedPrice: {
      es: '$150.000 COP',
      en: '$150,000 COP',
    },
    unit: {
      es: 'por vídeo completo',
      en: 'per completed video',
    },
    shortDescription: {
      es: 'Servicio completo: grabación en Barranquilla por parte del estudio y edición final lista para publicar.',
      en: 'Full service: on-site filming in Barranquilla by the studio and final edit ready to post.',
    },
    includes: {
      es: [
        'Grabación presencial por parte del estudio en Barranquilla',
        'Duración máxima de 60 segundos',
        'Edición básica y selección de tomas',
        'Música de fondo',
        'Textos sencillos y títulos en pantalla',
        'Formato vertical (9:16)',
        'Dos rondas de ajustes',
      ],
      en: [
        'On-site filming by the studio in Barranquilla',
        'Maximum duration 60 seconds',
        'Basic cut and take selection',
        'Background music',
        'Simple on-screen titles and texts',
        'Vertical (9:16) format',
        'Two rounds of revisions included',
      ],
    },
    popular: true,
  },
  {
    id: 'av-production-360',
    category: 'audiovisual',
    name: {
      es: 'Producción 360°',
      en: '360° Immersive Production',
    },
    priceCOP: 'custom',
    formattedPrice: {
      es: 'Cotización personalizada',
      en: 'Custom Quote',
    },
    unit: {
      es: 'según proyecto',
      en: 'project-based',
    },
    shortDescription: {
      es: 'Captura inmersiva con cámara Insta360 X3 para espacios, experiencias y recorridos interactivos.',
      en: 'Immersive capture using Insta360 X3 camera for spaces, experiences, and interactive tours.',
    },
    includes: {
      es: [
        'Grabación con cámara Insta360 X3',
        'Cotización según duración, locación y entregables',
        'Opciones de video reframing o recorrido esférico',
      ],
      en: [
        'Capture with Insta360 X3 camera',
        'Quoted based on duration, location, and deliverables',
        'Reframed dynamic video or spherical walkthrough options',
      ],
    },
  },
  {
    id: 'av-special-projects',
    category: 'audiovisual',
    name: {
      es: 'Proyectos especiales y creativos',
      en: 'Special & Custom Creative Projects',
    },
    priceCOP: 'custom',
    formattedPrice: {
      es: 'Cotización personalizada',
      en: 'Custom Quote',
    },
    unit: {
      es: 'a medida',
      en: 'tailored',
    },
    shortDescription: {
      es: 'Ilustraciones digitales, fotomontajes, campañas y producciones visuales a la medida.',
      en: 'Digital illustrations, photo composites, campaigns, and tailored visual productions.',
    },
    includes: {
      es: [
        'Definición de alcance técnico específico',
        'Presupuesto personalizado detallado',
        'Cronograma y entregables acordados por escrito',
      ],
      en: [
        'Detailed technical scope definition',
        'Personalized itemized quote',
        'Agreed written timeline and deliverable specifications',
      ],
    },
  },
];
