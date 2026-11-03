import { PortfolioItem } from '../types';
import heroWorkspaceImg from '../assets/images/hero_creative_workspace_1793512043090.jpg';
import brandIdentityImg from '../assets/images/portfolio_brand_identity_1793512042721.jpg';
import digitalEditorialImg from '../assets/images/portfolio_digital_editorial_1793512043842.jpg';
import audiovisualImg from '../assets/images/portfolio_audiovisual_production_1793512045362.jpg';

export { heroWorkspaceImg, brandIdentityImg, digitalEditorialImg, audiovisualImg };

export const PORTFOLIO_DATA: PortfolioItem[] = [
  // 1. Grupo TRG — Logo e identidad de marca (from javierescobar.lovable.app)
  {
    id: 'grupo-trg-identidad',
    title: 'Grupo TRG — Logo e identidad de marca',
    category: 'visual_identity',
    categoryLabel: {
      es: 'Identidad visual',
      en: 'Visual Identity',
    },
    description: {
      es: 'Manual de marca oficial de Grupo TRG: documento original completo de identidad visual, construcción geométrica del símbolo, paleta de color y normativas de aplicación para papelería y medios digitales.',
      en: 'Grupo TRG official brand manual: the complete original visual identity document, geometric mark construction, color palette, and brand guidelines for corporate stationery and digital media.',
    },
    studioRole: {
      es: 'Diseño de identidad visual, construcción de símbolo, manual de marca y sistema gráfico corporativo.',
      en: 'Visual identity design, mark geometry, full brand guidelines, and corporate graphic system.',
    },
    servicesDone: {
      es: [
        'Diseño de logotipo corporativo y variantes secundarias',
        'Construcción geométrica y especificaciones de área de reserva',
        'Paleta cromática institucional y equivalencias PANTONE / CMYK / RGB',
        'Manual de marca completo de identidad visual',
        'Normativa para papelería corporativa y aplicaciones digitales',
      ],
      en: [
        'Corporate logotype design and secondary lockups',
        'Geometric mark drafting and clear space regulations',
        'Brand color palette with PANTONE, CMYK, and RGB specs',
        'Comprehensive brand manual documentation',
        'Stationery guidelines and digital media standards',
      ],
    },
    image: '/portfolio/grupo-trg-portada.jpg',
    year: '2025',
    deliverables: {
      es: [
        'Manual de marca completo en PDF',
        'Archivos vectoriales (.AI, .SVG, .EPS)',
        'Kit de exportación en alta resolución (.PNG, .JPG)',
        'Guía rápida de uso de logotipo',
      ],
      en: [
        'Full PDF Brand Manual',
        'Vector master files (.AI, .SVG, .EPS)',
        'High-resolution export bundle (.PNG, .JPG)',
        'Quick-reference brand sheet',
      ],
    },
    highlightMetric: {
      es: 'Manual de marca completo de identidad corporativa',
      en: 'Comprehensive corporate brand guidelines manual',
    },
  },

  // 2. Buffalo Grill Buckets — Diseño de empaque (from javierescobar.lovable.app)
  {
    id: 'buffalo-grill-buckets',
    title: 'Buffalo Grill Buckets — Diseño de empaque',
    category: 'graphic_design',
    categoryLabel: {
      es: 'Diseño Gráfico',
      en: 'Graphic Design',
    },
    description: {
      es: 'Diseño de empaque para los buckets de Buffalo Grill: etiquetas con la identidad de la marca, mensajes en superficie y gráficos de alto impacto visual para servicio en restaurantes y domicilios.',
      en: 'Packaging design for Buffalo Grill buckets: labels integrating the brand identity, on-pack messaging, and bold food graphics for restaurant service and delivery.',
    },
    studioRole: {
      es: 'Diseño de empaques, dirección de arte y preparación técnica de artes finales para impresión litográfica.',
      en: 'Packaging design, art direction, and prepress production for high-volume commercial printing.',
    },
    servicesDone: {
      es: [
        'Diseño estructural y gráfico de etiquetas para bucket',
        'Integración de branding oficial y jerarquía de mensajes en superficie',
        'Adaptación cromática para sustratos litográficos',
        'Mockups fotorrealistas y validación en punto de venta',
      ],
      en: [
        'Structural and visual bucket label design',
        'Official branding and typography integration',
        'Color grading for industrial offset substrates',
        'Photorealistic 3D mockups and prepress proofs',
      ],
    },
    image: '/portfolio/buffalo-grill-buckets.png',
    year: '2025',
    deliverables: {
      es: [
        'Artes finales listos para impresión con guías de troquel',
        'Archivos vectoriales editables',
        'Mockups en alta resolución para presentaciones comerciales',
      ],
      en: [
        'Production-ready print files with die-cut lines',
        'Editable vector packages',
        'High-resolution 3D presentation mockups',
      ],
    },
    highlightMetric: {
      es: 'Empaque oficial en rotación activa en restaurantes Buffalo Grill',
      en: 'Official packaging in active service across Buffalo Grill locations',
    },
  },

  // 3. Varadero — Cata de Ron: campaña para redes (from javierescobar.lovable.app)
  {
    id: 'varadero-cata-de-ron',
    title: 'Varadero — Cata de Ron: campaña para redes',
    category: 'social_media',
    categoryLabel: {
      es: 'Redes Sociales',
      en: 'Social Media',
    },
    description: {
      es: 'Campaña completa para la Cata de Ron de Varadero: creación de logos del evento, paleta de color temática, artes para redes sociales y fotografías conceptuales generadas con IA.',
      en: 'Comprehensive campaign for Varadero’s Rum Tasting event: event logo creation, thematic color palette, social media ad pieces, and AI-generated conceptual photography.',
    },
    studioRole: {
      es: 'Dirección creativa, diseño de campaña para redes sociales y producción de imágenes conceptuales con IA generativa.',
      en: 'Creative direction, social media campaign rollout, and AI conceptual photography production.',
    },
    servicesDone: {
      es: [
        'Creación del identificador gráfico para la Cata de Ron',
        'Definición de paleta cromática cálida y nocturna',
        'Pack de publicaciones y piezas dinámicas para feed y stories de Instagram',
        'Generación de visuales y fotografías de producto con inteligencia artificial',
      ],
      en: [
        'Event graphic badge and title lockup',
        'Warm, atmospheric event color system',
        'Feed and stories social media campaign suite for Instagram',
        'AI-driven concept photography and beverage visuals',
      ],
    },
    image: '/portfolio/varadero-cata-ron.png',
    year: '2025',
    deliverables: {
      es: [
        'Pack de piezas gráficas para feed y stories en alta resolución',
        'Fotografías conceptuales en 4K',
        'Plantillas de diseño para anuncios promocionales',
      ],
      en: [
        'Feed & stories social creative pack in high resolution',
        '4K concept imagery',
        'Design templates for promotional campaigns',
      ],
    },
    highlightMetric: {
      es: 'Campaña digital integral con dirección de arte y fotografía IA',
      en: 'Full digital campaign with art direction and AI photography',
    },
  },

  // 4. Buffalo Grill 25 años — Stand y piezas para Sabor Barranquilla 2026 (from javierescobar.lovable.app)
  {
    id: 'buffalo-sabor-barranquilla-2026',
    title: 'Buffalo Grill 25 años — Stand Sabor Barranquilla 2026',
    category: 'graphic_design',
    categoryLabel: {
      es: 'Diseño Gráfico',
      en: 'Graphic Design',
    },
    description: {
      es: 'Diseño del stand de Buffalo Grill para Sabor Barranquilla 2026 celebrando sus 25 años, y piezas impresas de gran formato: menú comercial, flyers, posters y señalética ferial.',
      en: 'Buffalo Grill booth design for Sabor Barranquilla 2026 celebrating 25 years of heritage, plus large-format printed collateral: commercial menu, flyers, posters, and fair signage.',
    },
    studioRole: {
      es: 'Diseño de stand ferial, señalética de gran formato, diseño editorial de menús y piezas promocionales impresas.',
      en: 'Exhibition booth spatial graphics, large-format signage, commercial menu layout, and event collateral.',
    },
    servicesDone: {
      es: [
        'Diseño gráfico y paneles de ambientación del stand ferial de gran formato',
        'Diseño editorial del menú conmemorativo 25 años',
        'Diseño de volantes promocionales y afiches para distribución ferial',
        'Preparación técnica para impresión en vinilos y sustratos rígidos',
      ],
      en: [
        'Large-format trade show booth wall graphics and spatial branding',
        '25th anniversary commemorative menu editorial design',
        'Promotional flyers and display posters for fair attendees',
        'Prepress files for rigid substrates and large vinyl banners',
      ],
    },
    image: '/portfolio/buffalo-sabor-barranquilla-2026.png',
    year: '2026',
    deliverables: {
      es: [
        'Artes finales de gran formato a escala 1:1',
        'Menú comercial impreso y versión digital',
        'Archivos para volantes y material publicitario POP',
      ],
      en: [
        '1:1 scale large-format production graphics',
        'Printed commercial menu and digital touchpoint version',
        'Flyers and promotional POP print assets',
      ],
    },
    highlightMetric: {
      es: 'Stand oficial en la feria gastronómica más representativa del Caribe',
      en: 'Official trade booth at the flagship Caribbean gastronomy expo',
    },
  },

  // 5. Infinitek Paris — Ilustración de empaque Madres (from javierescobar.lovable.app)
  {
    id: 'infinitek-paris-madres',
    title: 'Infinitek Paris — Ilustración de empaque Madres',
    category: 'illustration',
    categoryLabel: {
      es: 'Ilustración',
      en: 'Illustration',
    },
    description: {
      es: 'Ilustración botánica original para la caja de la campaña de Madres de Infinitek Paris: pieza central ilustrada a mano, patrón floral del empaque y aplicaciones en productos cosméticos de lujo.',
      en: 'Original botanical illustration for the Infinitek Paris Mother’s Day campaign box: hero hand-drawn artwork, packaging floral pattern, and luxury cosmetic touchpoints.',
    },
    studioRole: {
      es: 'Ilustración artística, dirección de arte botánica y diseño de empaque cosmético de lujo.',
      en: 'Custom artistic illustration, botanical art direction, and luxury cosmetic packaging design.',
    },
    servicesDone: {
      es: [
        'Ilustración botánica personalizada y composición artística',
        'Diseño de patrón floral continuo (seamless pattern) para caja de regalo',
        'Paleta cromática suave orientada a dermocosmética premium',
        'Adaptación a troqueles para producción litográfica con acabados especiales',
      ],
      en: [
        'Custom botanical illustration and hero composition',
        'Seamless floral pattern design for luxury gift boxes',
        'Color palette tuned for premium dermocosmetics',
        'Die-cut adaptation with foil and spot varnish prepress',
      ],
    },
    image: '/portfolio/infinitek-madres-cover-hd.jpg',
    year: '2025',
    deliverables: {
      es: [
        'Ilustraciones en alta resolución (raster y vector)',
        'Artes finales de caja con guías de troquel y estampación',
        'Mockups fotorrealistas de presentación de producto',
      ],
      en: [
        'High-resolution master illustrations (raster and vector)',
        'Final packaging mechanicals with die-lines and foil specs',
        'Photorealistic 3D product rendering mockups',
      ],
    },
    highlightMetric: {
      es: 'Campaña nacional de día de madres para marca cosmética premium',
      en: 'National Mother’s Day campaign for premium cosmetic brand',
    },
  },

  // 6. Infinitek Paris — Campaña Madres: piezas y aplicaciones (from javierescobar.lovable.app)
  {
    id: 'infinitek-madres-campana',
    title: 'Infinitek Paris — Campaña Madres: piezas y aplicaciones',
    category: 'illustration',
    categoryLabel: {
      es: 'Ilustración',
      en: 'Illustration',
    },
    description: {
      es: 'Aplicaciones integrales de la campaña de Madres de Infinitek Paris: empaque floral, gift card, piezas para redes sociales y kit promocional Amor & Vida.',
      en: 'Full rollout of the Infinitek Paris Mother’s Day campaign: floral gift packaging, gift card, social media assets, and the Amor & Vida promotional kit.',
    },
    studioRole: {
      es: 'Diseño integral de campaña, piezas digitales para canales comerciales y aplicaciones impresas de edición especial.',
      en: 'Full campaign rollout, digital marketing creatives, and special-edition printed touchpoints.',
    },
    servicesDone: {
      es: [
        'Diseño de Gift Cards coleccionables de edición especial',
        'Pack de piezas publicitarias para redes sociales y pauta digital',
        'Diseño de etiquetas y fajas para kit Amor & Vida',
        'Supervisión y coherencia visual en todos los puntos de contacto',
      ],
      en: [
        'Collectible special-edition Gift Card design',
        'Digital advertising creative suite for social campaigns',
        'Label and band design for Amor & Vida product kits',
        'Visual consistency across retail and online touchpoints',
      ],
    },
    image: '/portfolio/infinitek-campana-cover.jpg',
    year: '2025',
    deliverables: {
      es: [
        'Kit completo de artes para imprenta (Gift Cards, stickers, empaques)',
        'Piezas digitales optimizadas para e-commerce y redes sociales',
        'Guía de especificaciones de campaña',
      ],
      en: [
        'Full print mechanical bundle (Gift Cards, stickers, packaging)',
        'Optimized digital creative assets for e-commerce and ads',
        'Campaign visual guidelines sheet',
      ],
    },
    highlightMetric: {
      es: 'Despliegue integral omnicanal en tiendas físicas y e-commerce',
      en: 'Omnichannel campaign across national retail stores and online store',
    },
  },

  // 7. Campaña Desgranado Buffalo — Piezas impresas (from javierescobar.lovable.app)
  {
    id: 'desgranado-buffalo-print',
    title: 'Campaña Desgranado Buffalo — Piezas impresas',
    category: 'graphic_design',
    categoryLabel: {
      es: 'Diseño Gráfico',
      en: 'Graphic Design',
    },
    description: {
      es: 'Campaña Desgranado Buffalo para Buffalo Grill: identificador de producto y aplicaciones impresas en punto de venta como tropezones de mesa (table tents), flyers, empaques y stickers.',
      en: 'Desgranado Buffalo campaign for Buffalo Grill: product identity badge and point-of-sale printed collateral including table tents, flyers, packaging, and stickers.',
    },
    studioRole: {
      es: 'Diseño gráfico publicitario, diseño de material POP para restaurantes y preparación técnica de impresión.',
      en: 'Commercial advertising design, restaurant POP marketing collateral, and prepress production.',
    },
    servicesDone: {
      es: [
        'Identificador tipográfico comercial para el producto "Desgranado Buffalo"',
        'Diseño de tropezones de mesa (table tents) troquelados',
        'Volantes promocionales para inserción en domicilios',
        'Stickers y sellos de seguridad para empaques de entrega',
      ],
      en: [
        'Commercial typographic badge for "Desgranado Buffalo"',
        'Die-cut table tent display design',
        'Delivery promotional bag flyers',
        'Branded packaging stickers and tamper-evident seals',
      ],
    },
    image: '/portfolio/desgranado-cover.jpg',
    year: '2025',
    deliverables: {
      es: [
        'Archivos para litografía con sangrado y marcas de corte',
        'Artes vectoriales editables',
        'Mockups fotográficos de producto en mesa',
      ],
      en: [
        'Prepress files with bleeds, crop marks, and color profiles',
        'Editable vector packages',
        'Photographic tabletop product mockups',
      ],
    },
    highlightMetric: {
      es: 'Material POP de alta visibilidad en mesas de toda la cadena',
      en: 'High-visibility POP displays across all dining tables',
    },
  },

  // 8. Campaña Desgranado Buffalo — Piezas digitales (from javierescobar.lovable.app)
  {
    id: 'desgranado-buffalo-digital',
    title: 'Campaña Desgranado Buffalo — Piezas digitales',
    category: 'social_media',
    categoryLabel: {
      es: 'Redes Sociales',
      en: 'Social Media',
    },
    description: {
      es: 'Aplicaciones digitales de la campaña Desgranado Buffalo para Buffalo Grill: contenidos dinámicos para redes sociales, pantallas digitales en restaurantes y pauta publicitaria en Meta Ads.',
      en: 'Digital rollout for Buffalo Grill’s Desgranado campaign: dynamic social media assets, digital menu board graphics, and paid media creatives for Meta Ads.',
    },
    studioRole: {
      es: 'Diseño gráfico digital, formateo para pantallas LED de menú y desarrollo de piezas publicitarias para redes.',
      en: 'Digital graphic design, LED menu board animation formatting, and paid social creative suite.',
    },
    servicesDone: {
      es: [
        'Creatividades en formatos verticales (9:16) para Instagram Stories y Reels',
        'Piezas de feed en proporciones 1:1 y 4:5 para pauta segmentada',
        'Diseño para pantallas digitales de menú en cajas de restaurante',
        'Plantillas dinámicas para promociones relámpago',
      ],
      en: [
        '9:16 vertical creatives for Instagram Stories and Reels',
        '1:1 and 4:5 feed ad units for targeted social advertising',
        'Digital menu board displays for in-store checkout counters',
        'Dynamic promotional promo templates for flash offers',
      ],
    },
    image: '/portfolio/desgranado-cover.jpg',
    year: '2025',
    deliverables: {
      es: [
        'Pack de artes estáticos y animados en alta resolución',
        'Archivos optimizados para pantallas LED de punto de venta',
        'Guía de implementación de pauta digital',
      ],
      en: [
        'Static and animated social creative asset pack',
        'Optimized displays for in-store point of sale digital screens',
        'Social ads deployment specifications sheet',
      ],
    },
    highlightMetric: {
      es: 'Campaña de lanzamiento digital con amplia cobertura local',
      en: 'Digital launch campaign driving local restaurant foot traffic',
    },
  },

  // 9. Yavi Media Studio — Identidad Visual Oficial
  {
    id: 'yavi-brand-system',
    title: 'Yavi Media Studio — Identidad Visual Oficial',
    category: 'visual_identity',
    categoryLabel: {
      es: 'Identidad visual',
      en: 'Visual Identity',
    },
    description: {
      es: 'Diseño integral del sistema de identidad visual del estudio. Símbolo angular dinámico con gradiente espectral, tipografía arquitectónica contemporánea y wordmark oficial "yavi media".',
      en: 'Comprehensive visual identity system for the studio itself. Dynamic angular symbol with spectral gradient, contemporary typography, and official "yavi media" wordmark.',
    },
    studioRole: {
      es: 'Dirección de arte, diseño de marca, manual de identidad y sistema tipográfico.',
      en: 'Art direction, brandmark design, brand guidelines, and typographic system.',
    },
    servicesDone: {
      es: [
        'Logotipo principal y versiones secundarias',
        'Paleta cromática oficial y gradiente espectral',
        'Selección tipográfica y jerarquías',
        'Manual breve de identidad',
        'Plantillas de papelería y aplicaciones digitales',
      ],
      en: [
        'Primary logotype and secondary lockups',
        'Official color palette and spectral gradient',
        'Typographic hierarchy selection',
        'Concise brand guidelines manual',
        'Stationery templates and digital collateral',
      ],
    },
    image: '/logo.png',
    year: '2026',
    deliverables: {
      es: ['Manual en PDF', 'Archivos vectoriales .SVG / .AI', 'Exportaciones PNG / JPG', 'Guía de estilo'],
      en: ['PDF Guidelines', 'Vector source assets', 'High-res PNG / JPG', 'Style guide sheet'],
    },
    highlightMetric: {
      es: 'Sistema de marca 100% vectorizado y escalable',
      en: '100% scalable vector brand architecture',
    },
  },

  // 10. Yavi Media Studio — Plataforma Web Lovable
  {
    id: 'lovable-digital-platform',
    title: 'Yavi Media Studio — Plataforma Web con Lovable',
    category: 'web_design',
    categoryLabel: {
      es: 'Diseño Web',
      en: 'Web Design',
    },
    description: {
      es: 'Arquitectura y desarrollo web responsive con enfoque bilingüe (Español / Inglés). Catálogo comercial de servicios en COP, optimización SEO para Barranquilla y cotizador interactivo directo.',
      en: 'Responsive web architecture and development with bilingual engine (Spanish / English). Commercial service catalog in COP, local SEO for Barranquilla, and direct interactive quote builder.',
    },
    studioRole: {
      es: 'Diseño UX/UI, maquetación responsive, copywriting bilingüe e integración técnica.',
      en: 'UX/UI design, responsive layout, bilingual copy, and technical integration.',
    },
    servicesDone: {
      es: [
        'Arquitectura de información completa de 9 secciones',
        'Diseño responsive adaptado a móviles y escritorio',
        'Cotizador interactivo de servicios en pesos colombianos',
        'Integración con WhatsApp y correo institucional',
        'SEO técnico y Schema.org estructurado',
      ],
      en: [
        'Full 9-section information architecture',
        'Responsive layout tuned for mobile & desktop',
        'Interactive real-time quote estimator in COP',
        'WhatsApp direct brief and institutional email integration',
        'Technical SEO & Schema.org structured data',
      ],
    },
    image: digitalEditorialImg,
    year: '2026',
    deliverables: {
      es: ['Sitio web funcional', 'Diseño responsive', 'Optimización SEO', 'Soporte bilingüe'],
      en: ['Functional web platform', 'Mobile-first layout', 'SEO optimization', 'Bilingual engine'],
    },
    highlightMetric: {
      es: 'Plataforma web de alta velocidad y optimización móvil',
      en: 'High-speed web platform with mobile-first optimization',
    },
  },

  // 11. Producción Audiovisual & Reels Comerciales
  {
    id: 'audiovisual-gear-editorial',
    title: 'Producción Audiovisual & Reels Comerciales',
    category: 'audiovisual',
    categoryLabel: {
      es: 'Video',
      en: 'Video',
    },
    description: {
      es: 'Producción de contenido en video vertical para redes sociales: reels dinámicos, cápsulas corporativas, edición de ritmo comercial y corrección de color en Barranquilla.',
      en: 'Vertical video production for social platforms: dynamic reels, corporate snippets, commercial-paced editing, and cinematic color grading in Barranquilla.',
    },
    studioRole: {
      es: 'Dirección audiovisual, grabación en locación, edición dinámica, titulación y etalonaje digital.',
      en: 'Audiovisual direction, on-location shooting, fast-paced editing, motion titles, and color grading.',
    },
    servicesDone: {
      es: [
        'Planeación de guion técnico y lista de tomas',
        'Grabación con óptica profesional y estabilización',
        'Edición vertical en 9:16 con transiciones de impacto',
        'Subtitulado cinemático sincronizado para reproducción sin audio',
        'Corrección de color y masterización de sonido',
      ],
      en: [
        'Technical storyboard and shot list planning',
        'Professional cinema glass shooting with active gimbal',
        'Vertical 9:16 video editing with high-retention transitions',
        'Synced animated subtitles for sound-off mobile scrolling',
        'Color grading and audio sweetening',
      ],
    },
    image: audiovisualImg,
    year: '2026',
    deliverables: {
      es: ['Masters en MP4 / 4K vertical', 'Versiones optimizadas para Reels y TikTok', 'Cápsulas breves para stories'],
      en: ['4K vertical MP4 masters', 'Reels & TikTok optimized cuts', 'Bite-sized story cuts'],
    },
    highlightMetric: {
      es: 'Edición con retención optimizada para algoritmos de video corto',
      en: 'Optimized watch-time retention for short-form video algorithms',
    },
  },
];
