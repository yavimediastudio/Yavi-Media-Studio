import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, PageId } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Brand & General
    'brand.name': 'YAVI MEDIA STUDIO',
    'brand.tagline': 'Ideas que toman forma. Marcas que dejan huella.',
    'brand.heroDescription': 'Transformamos ideas en soluciones visuales y digitales. Diseñamos experiencias, construimos identidades y desarrollamos contenido para marcas y profesionales que quieren comunicar mejor.',
    'brand.location': 'Barranquilla, Colombia',
    'brand.founder': 'Fundado por Javier Escobar',
    'brand.currencyNote': 'Precios en pesos colombianos (COP).',

    // SEO Translations
    'seo.home.title': 'YAVI MEDIA STUDIO – Ideas que toman forma. Marcas que dejan huella.',
    'seo.home.description': 'Estudio creativo independiente en Barranquilla, Colombia. Especializado en diseño gráfico, identidad visual, diseño web con Lovable y producción audiovisual.',
    'seo.services.title': 'Catálogo Oficial de Servicios & Precios en COP – YAVI MEDIA STUDIO',
    'seo.services.description': 'Tarifas oficiales de lanzamiento en pesos colombianos: diseño gráfico ($40k-$100k), planes de redes ($300k-$600k), identidad visual ($650k), diseño web Lovable y producción de video.',
    'seo.portfolio.title': 'Portafolio de Proyectos & Casos de Estudio – YAVI MEDIA STUDIO',
    'seo.portfolio.description': 'Casos reales de identidad de marca, plataformas web con Lovable, diseño editorial y producción audiovisual realizados por Yavi Media Studio en Barranquilla.',
    'seo.about.title': 'Nosotros – Estudio Creativo de Javier Escobar en Barranquilla | YAVI',
    'seo.about.description': 'Conoce a Yavi Media Studio, estudio creativo independiente fundado por Javier Escobar. Criterio visual, atención directa y red colaborativa ágil.',
    'seo.process.title': 'Cómo Trabajamos – Metodología en 7 Pasos y Condiciones | YAVI',
    'seo.process.description': 'Metodología clara y transparente: diagnóstico, propuesta formal (15 días de vigencia), anticipo del 50%, 2 rondas de ajustes incluidas y entrega garantizada.',
    'seo.contact.title': 'Contacto & Solicitud de Cotización Directa – YAVI MEDIA STUDIO',
    'seo.contact.description': 'Solicita tu cotización de diseño, branding o desarrollo web. Respuesta personalizada en menos de 24 horas hábiles. Escríbenos a yavimediastudio@gmail.com o WhatsApp.',
    'seo.faq.title': 'Preguntas Frecuentes – Pagos, Entregas y Ajustes | YAVI MEDIA STUDIO',
    'seo.faq.description': 'Respuestas a dudas sobre contratación, pagos por Llave, Bancolombia y Nequi, 2 rondas de ajustes, mantenimiento web y horarios de atención en Barranquilla.',
    'seo.terms.title': 'Términos y Condiciones Comerciales – YAVI MEDIA STUDIO',
    'seo.terms.description': 'Condiciones oficiales de contratación: política 50/50, dos rondas de ajustes, recargo por urgencias del 30%, garantía de 5 días hábiles y derechos de autor.',
    'seo.privacy.title': 'Política de Privacidad y Habeas Data – YAVI MEDIA STUDIO',
    'seo.privacy.description': 'Tratamiento responsable y seguro de datos personales según la Ley 1581 de 2012 de Colombia. Privacidad garantizada por Yavi Media Studio.',

    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.about': 'Nosotros',
    'nav.process': 'Cómo trabajamos',
    'nav.contact': 'Contacto',
    'nav.faq': 'Preguntas frecuentes',
    'nav.privacy': 'Privacidad',
    'nav.terms': 'Términos',
    'nav.startProject': 'Iniciar proyecto',
    'nav.exploreServices': 'Explorar servicios',
    'nav.quoteCalculator': 'Cotizador interactivo',

    // Hero Section
    'hero.badge': 'Estudio creativo independiente',
    'hero.ctaServices': 'Explorar servicios',
    'hero.ctaProject': 'Iniciar un proyecto',
    'hero.location': 'Barranquilla, Colombia · Proyectos locales e internacionales',

    // Home Sections
    'home.aboutSummary.tag': 'Filosofía del estudio',
    'home.aboutSummary.title': 'Creatividad, criterio visual y soluciones prácticas.',
    'home.aboutSummary.p1': 'Yavi Media Studio es un estudio creativo independiente dirigido por Javier Escobar. Trabajamos con una estructura ágil y personalizada, integrando colaboradores especializados cuando cada proyecto lo requiere.',
    'home.aboutSummary.p2': 'Sin burocracia ni falsas promesas de agencia tradicional: soluciones visuales concretas, precios transparentes en COP y atención directa orientada a resultados.',
    'home.aboutSummary.link': 'Conoce más sobre el estudio',

    'home.featuredServices.tag': 'Catálogo oficial',
    'home.featuredServices.title': 'Servicios comerciales destacados',
    'home.featuredServices.subtitle': 'Tarifas oficiales de lanzamiento en pesos colombianos (COP). Sin costos ocultos.',
    'home.featuredServices.viewAll': 'Ver catálogo completo de servicios',

    'home.selectedProjects.tag': 'Trabajo seleccionado',
    'home.selectedProjects.title': 'Casos de estudio e identidad',
    'home.selectedProjects.subtitle': 'Explora proyectos reales desarrollados con rigor técnico, visual y editorial.',
    'home.selectedProjects.viewAll': 'Ver portafolio completo',

    'home.differentials.tag': 'Nuestros diferenciales',
    'home.differentials.title': 'Por qué trabajar con Yavi Media Studio',
    'home.diff1.title': 'Atención directa y personalizada',
    'home.diff1.desc': 'Trabajas directamente con el fundador del estudio. Sin intermediarios, con comunicación ágil y criterio profesional en cada decisión.',
    'home.diff2.title': 'Precios claros en pesos colombianos',
    'home.diff2.desc': 'Tarifas oficiales sin cargos sorpresivos. Sabes exactamente qué incluye y qué no incluye cada servicio desde el primer contacto.',
    'home.diff3.title': 'Criterio visual contemporáneo',
    'home.diff3.desc': 'Diseño editorial, tipografía cuidada y estética depurada que otorgan distinción y credibilidad real a tu marca.',
    'home.diff4.title': 'Red flexible de colaboradores',
    'home.diff4.desc': 'Incorporamos talento especializado según los requerimientos técnicos de tu proyecto, garantizando agilidad y calidad.',

    'home.processSummary.tag': 'Flujo de trabajo',
    'home.processSummary.title': 'Un proceso simple, claro y transparente',
    'home.processSummary.step1': '01. Nos cuentas tu idea',
    'home.processSummary.step2': '02. Analizamos tu necesidad',
    'home.processSummary.step3': '03. Definimos alcance y propuesta',
    'home.processSummary.step4': '04. Comenzamos con el anticipo (50%)',
    'home.processSummary.step5': '05. Desarrollamos el proyecto',
    'home.processSummary.step6': '06. Revisamos y ajustamos (2 rondas)',
    'home.processSummary.step7': '07. Entregamos el resultado',
    'home.processSummary.link': 'Ver metodología en detalle',

    'home.cta.title': '¿Tienes una idea o proyecto en mente?',
    'home.cta.desc': 'Hablemos de tus objetivos y transformemos tu comunicación visual con profesionalismo y criterio.',
    'home.cta.btnWhatsApp': 'Escríbenos por WhatsApp',
    'home.cta.btnForm': 'Completar formulario de cotización',

    // Services Catalog
    'services.header.title': 'Catálogo comercial de servicios',
    'services.header.subtitle': 'Precios oficiales de lanzamiento en pesos colombianos (COP). Transparencia total en alcances, entregables y condiciones.',
    'services.filter.all': 'Todos los servicios',
    'services.filter.graphic': 'Diseño gráfico',
    'services.filter.social': 'Redes sociales',
    'services.filter.branding': 'Identidad visual',
    'services.filter.web': 'Diseño web Lovable',
    'services.filter.maintenance': 'Mantenimiento web',
    'services.filter.audiovisual': 'Producción audiovisual',
    'services.card.includes': 'Incluye:',
    'services.card.notIncludes': 'No incluye:',
    'services.card.conditions': 'Condiciones clave:',
    'services.card.popular': 'Destacado',
    'services.card.quote': 'Cotizar este servicio',
    'services.note.currency': '* Todos los valores están expresados en pesos colombianos (COP). No contemplan impuestos adicionales no aplicables según régimen.',

    // Portfolio
    'portfolio.header.title': 'Portafolio de proyectos',
    'portfolio.header.subtitle': 'Selección de trabajos de identidad visual, desarrollo digital, piezas gráficas y producción de contenido.',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.graphic': 'Diseño gráfico',
    'portfolio.filter.branding': 'Branding',
    'portfolio.filter.social': 'Redes sociales',
    'portfolio.filter.web': 'Diseño Web',
    'portfolio.filter.illustration': 'Ilustración',
    'portfolio.filter.audiovisual': 'Video',
    'portfolio.sort.label': 'Ordenar:',
    'portfolio.sort.featured': 'Destacados',
    'portfolio.sort.newest': 'Más recientes',
    'portfolio.sort.title': 'Alfabético (A-Z)',
    'portfolio.search.placeholder': 'Buscar proyectos o servicios...',
    'portfolio.results.showing': 'Mostrando',
    'portfolio.results.projects': 'proyectos',
    'portfolio.results.in': 'en',
    'portfolio.filter.clear': 'Restablecer filtros',
    'portfolio.empty.title': 'No se encontraron proyectos',
    'portfolio.empty.desc': 'No hay proyectos que coincidan con la categoría o término de búsqueda seleccionado.',
    'portfolio.empty.btn': 'Ver todos los proyectos',
    'portfolio.view.mode': 'Visualización:',
    'portfolio.view.mosaic': 'Mosaico asimétrico',
    'portfolio.view.list': 'Lista editorial',
    'portfolio.index.index': 'Índice',
    'portfolio.index.project': 'Proyecto & Alcance',
    'portfolio.index.discipline': 'Disciplina',
    'portfolio.index.year': 'Año',
    'portfolio.index.action': 'Ver proyecto',
    'portfolio.modal.role': 'Participación del estudio',
    'portfolio.modal.services': 'Servicios realizados',
    'portfolio.modal.deliverables': 'Entregables acordados',
    'portfolio.modal.close': 'Cerrar detalle',
    'portfolio.modal.cta': 'Cotizar un proyecto similar',

    // About Us
    'about.header.title': 'Sobre Yavi Media Studio',
    'about.header.subtitle': 'Un estudio creativo independiente con base en Barranquilla para Colombia y el mundo.',
    'about.story.title': 'Quiénes somos y qué nos mueve',
    'about.story.p1': 'Yavi Media Studio es un estudio creativo independiente fundado y dirigido por Javier Escobar. Nace de la convicción de que las ideas comerciales y los proyectos personales merecen una representación visual profesional, memorable y libre de ornamentos vacíos.',
    'about.story.p2': 'Combinamos diseño gráfico, comunicación visual, tecnología digital y producción audiovisual para resolver problemas concretos de comunicación para marcas, profesionales y empresas.',
    'about.model.title': 'Nuestro modelo de trabajo',
    'about.model.p1': 'Operamos como un estudio ágil e independiente. No somos una agencia masiva con capas burocráticas ni inventamos cargos innecesarios. Cuando un proyecto demanda capacidades especializadas adicionales (como producción técnica complementaria o desarrollo a medida), activamos una red colaborativa de profesionales de confianza.',
    'about.model.p2': 'Esto nos permite ofrecer a nuestros clientes una atención cercana, ágil y de alto rigor técnico sin los sobrecostos de una agencia tradicional.',
    'about.values.v1.title': 'Claridad y honestidad',
    'about.values.v1.desc': 'Sin ambigüedades en cotizaciones, tiempos ni entregables.',
    'about.values.v2.title': 'Rigor tipográfico y estético',
    'about.values.v2.desc': 'Composiciones limpias, jerarquía visual y equilibrio funcional.',
    'about.values.v3.title': 'Soluciones prácticas',
    'about.values.v3.desc': 'Diseño orientado a que comuniques mejor y captes clientes.',

    // How We Work (Process)
    'process.header.title': 'Cómo trabajamos',
    'process.header.subtitle': 'Una metodología estructurada en 7 pasos para garantizar claridad, calidad y cumplimiento.',
    'process.step1.num': '01',
    'process.step1.title': 'Nos cuentas tu idea',
    'process.step1.desc': 'Completas nuestro formulario o nos contactas por WhatsApp detallando tu negocio, necesidades y objetivos visuales.',
    'process.step2.num': '02',
    'process.step2.title': 'Analizamos tu necesidad',
    'process.step2.desc': 'Evaluamos el alcance técnico, la viabilidad, el formato ideal y los requerimientos concretos de comunicación.',
    'process.step3.num': '03',
    'process.step3.title': 'Definimos alcance y propuesta',
    'process.step3.desc': 'Recibes una propuesta comercial formal con alcances exactos, cronograma estimado y tarifas oficiales en COP. Vigencia de 15 días.',
    'process.step4.num': '04',
    'process.step4.title': 'Comenzamos con el anticipo (50%)',
    'process.step4.desc': 'Formalizamos el inicio del trabajo tras recibir el 50% de anticipo y recopilar los materiales o información base requerida.',
    'process.step5.num': '05',
    'process.step5.title': 'Desarrollamos el proyecto',
    'process.step5.desc': 'Iniciamos la fase de conceptualización, diseño, maquetación o producción audiovisual según el cronograma fijado.',
    'process.step6.num': '06',
    'process.step6.title': 'Revisamos y ajustamos',
    'process.step6.desc': 'Presentamos la propuesta. Dispones de dos (2) rondas de ajustes incluidas para afinar detalles dentro del alcance contratado.',
    'process.step7.num': '07',
    'process.step7.title': 'Entregamos el resultado',
    'process.step7.desc': 'Tras la aprobación final y el pago del 50% restante, realizamos la entrega definitiva de todos los archivos pactados.',

    // Contact & Quotation Form
    'contact.header.title': 'Contacto y cotización',
    'contact.header.subtitle': 'Cuéntanos sobre tu proyecto. Recibirás una respuesta personalizada y transparente en menos de 24 horas hábiles.',
    'contact.info.title': 'Canales directos',
    'contact.info.email': 'Correo oficial:',
    'contact.info.location': 'Ubicación:',
    'contact.info.hoursTitle': 'Horarios de atención:',
    'contact.info.paymentsTitle': 'Métodos de pago aceptados:',
    'contact.form.title': 'Solicitud formal de cotización',
    'contact.form.name': 'Nombre completo *',
    'contact.form.email': 'Correo electrónico *',
    'contact.form.brand': 'Empresa o marca *',
    'contact.form.service': 'Servicio de interés *',
    'contact.form.servicePlaceholder': 'Selecciona un servicio...',
    'contact.form.budget': 'Presupuesto estimado en COP (Opcional)',
    'contact.form.budgetPlaceholder': 'Ej: $500.000 COP',
    'contact.form.date': 'Fecha deseada de entrega (Opcional)',
    'contact.form.description': 'Descripción del proyecto *',
    'contact.form.descriptionPlaceholder': 'Cuéntanos sobre los objetivos, público al que te diriges y los entregables que necesitas...',
    'contact.form.submit': 'Enviar solicitud de cotización',
    'contact.form.whatsappOption': 'O abrir cotización directamente en WhatsApp',
    'contact.form.success': '¡Solicitud preparada con éxito! Puedes enviarla por correo o abrir WhatsApp con tu brief listo.',
    'contact.form.validationError': 'Por favor completa todos los campos requeridos marcados con (*).',
    'contact.whatsapp.edit': 'Configurar número de WhatsApp',
    'contact.whatsapp.numberLabel': 'Número de WhatsApp destino:',
    'contact.whatsapp.save': 'Guardar número',

    // Interactive Calculator
    'calc.title': 'Calculadora de presupuesto en vivo',
    'calc.subtitle': 'Selecciona los servicios que necesitas y obtén un estimado transparente en tiempo real.',
    'calc.total': 'Total estimado:',
    'calc.currency': 'pesos colombianos (COP)',
    'calc.sendBrief': 'Llevar selección al formulario',

    // FAQ
    'faq.header.title': 'Preguntas frecuentes',
    'faq.header.subtitle': 'Todo lo que necesitas saber sobre contratación, entregas, métodos de pago y condiciones.',
    'faq.needMore': '¿Tienes una pregunta específica que no aparece aquí?',
    'faq.cta': 'Escríbenos a yavimediastudio@gmail.com',

    // Legal & Terms
    'terms.header.title': 'Términos y condiciones comerciales',
    'terms.header.subtitle': 'Condiciones de contratación oficiales de Yavi Media Studio. Transparencia, rigor y respaldo mutuo.',
    'privacy.header.title': 'Política de privacidad y protección de datos',
    'privacy.header.subtitle': 'Tratamiento responsable de datos personales según la Ley 1581 de 2012 de Colombia y estándares internacionales.',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.independent': 'Estudio creativo independiente dirigido por Javier Escobar.',
    'footer.madeIn': 'Barranquilla, Colombia · Proyectos locales y remotos.',
  },
  en: {
    // Brand & General
    'brand.name': 'YAVI MEDIA STUDIO',
    'brand.tagline': 'Ideas that take shape. Brands that leave a mark.',
    'brand.heroDescription': 'We transform ideas into visual and digital solutions. We design experiences, build visual identities, and develop content for brands and professionals who aim to communicate better.',
    'brand.location': 'Barranquilla, Colombia',
    'brand.founder': 'Founded by Javier Escobar',
    'brand.currencyNote': 'Prices in Colombian Pesos (COP).',

    // SEO Translations
    'seo.home.title': 'YAVI MEDIA STUDIO – Ideas That Take Shape. Brands That Leave a Mark.',
    'seo.home.description': 'Independent creative studio in Barranquilla, Colombia. Specialized in graphic design, visual identity, web design with Lovable, and audiovisual production.',
    'seo.services.title': 'Official Services Catalog & Rates in COP – YAVI MEDIA STUDIO',
    'seo.services.description': 'Official launch rates in Colombian Pesos (COP): graphic pieces, monthly social media plans, essential branding, Lovable web pages, and video production.',
    'seo.portfolio.title': 'Project Portfolio & Case Studies – YAVI MEDIA STUDIO',
    'seo.portfolio.description': 'Curated projects in brand identity, Lovable web platforms, editorial layout, and audiovisual production crafted by Yavi Media Studio in Barranquilla.',
    'seo.about.title': 'About Us – Independent Creative Practice by Javier Escobar | YAVI',
    'seo.about.description': 'Discover Yavi Media Studio, an independent creative practice founded by Javier Escobar. Visual discernment, bespoke attention, and agile network.',
    'seo.process.title': 'How We Work – 7-Step Creative Methodology & Terms | YAVI',
    'seo.process.description': 'A clear, transparent workflow: diagnosis, formal proposal, 50% deposit, two included revision rounds, and guaranteed final handoff.',
    'seo.contact.title': 'Contact & Direct Project Inquiry – YAVI MEDIA STUDIO',
    'seo.contact.description': 'Request a customized quote for design, branding, or web development. Response within 24 business hours. Email yavimediastudio@gmail.com or WhatsApp.',
    'seo.faq.title': 'Frequently Asked Questions – Payments, Revisions & Terms | YAVI',
    'seo.faq.description': 'Answers regarding contracting, payment channels (Llave, Bancolombia, Nequi), 2 revision rounds, web maintenance, and studio operating hours.',
    'seo.terms.title': 'Commercial Terms & Conditions – YAVI MEDIA STUDIO',
    'seo.terms.description': 'Official contracting terms: 50/50 payment policy, two revision rounds, 30% rush fee, 5-day technical warranty, and intellectual property licensing.',
    'seo.privacy.title': 'Privacy Policy & Data Protection – YAVI MEDIA STUDIO',
    'seo.privacy.description': 'Responsible and secure processing of personal data in compliance with Colombian Law 1581 of 2012 and international standards.',

    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About Us',
    'nav.process': 'How We Work',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'nav.startProject': 'Start a Project',
    'nav.exploreServices': 'Explore Services',
    'nav.quoteCalculator': 'Quote Calculator',

    // Hero Section
    'hero.badge': 'Independent Creative Studio',
    'hero.ctaServices': 'Explore Services',
    'hero.ctaProject': 'Start a Project',
    'hero.location': 'Barranquilla, Colombia · Local and International Projects',

    // Home Sections
    'home.aboutSummary.tag': 'Studio Philosophy',
    'home.aboutSummary.title': 'Creativity, visual discernment, and practical solutions.',
    'home.aboutSummary.p1': 'Yavi Media Studio is an independent creative practice led by Javier Escobar. We operate with an agile, bespoke structure, bringing in specialized collaborators when projects require it.',
    'home.aboutSummary.p2': 'No corporate bureaucracy or fabricated agency promises: tangible visual solutions, transparent pricing in COP, and direct results-driven attention.',
    'home.aboutSummary.link': 'Learn more about the studio',

    'home.featuredServices.tag': 'Official Catalog',
    'home.featuredServices.title': 'Featured Commercial Services',
    'home.featuredServices.subtitle': 'Official launch rates in Colombian Pesos (COP). No hidden fees.',
    'home.featuredServices.viewAll': 'View full services catalog',

    'home.selectedProjects.tag': 'Selected Work',
    'home.selectedProjects.title': 'Case Studies & Visual Identity',
    'home.selectedProjects.subtitle': 'Explore real projects crafted with technical, visual, and editorial discipline.',
    'home.selectedProjects.viewAll': 'View full portfolio',

    'home.differentials.tag': 'Our Differentials',
    'home.differentials.title': 'Why work with Yavi Media Studio',
    'home.diff1.title': 'Direct, Personalized Attention',
    'home.diff1.desc': 'You work directly with the founder. No account managers or layers, ensuring swift communication and professional discernment.',
    'home.diff2.title': 'Clear Pricing in Colombian Pesos',
    'home.diff2.desc': 'Official rates without surprise fees. You know exactly what is included and excluded from your first contact.',
    'home.diff3.title': 'Contemporary Visual Discernment',
    'home.diff3.desc': 'Editorial layouts, thoughtful typography, and clean aesthetics that grant real credibility and distinction to your brand.',
    'home.diff4.title': 'Flexible Network of Collaborators',
    'home.diff4.desc': 'We bring in specialized talent depending on your project specific technical needs, ensuring agility and uncompromising craft.',

    'home.processSummary.tag': 'Workflow',
    'home.processSummary.title': 'A simple, clear, and transparent process',
    'home.processSummary.step1': '01. You share your idea',
    'home.processSummary.step2': '02. We diagnose your needs',
    'home.processSummary.step3': '03. We define scope & proposal',
    'home.processSummary.step4': '04. We begin with 50% deposit',
    'home.processSummary.step5': '05. We produce the project',
    'home.processSummary.step6': '06. We review & adjust (2 rounds)',
    'home.processSummary.step7': '07. We deliver final results',
    'home.processSummary.link': 'View full methodology',

    'home.cta.title': 'Have an idea or upcoming project?',
    'home.cta.desc': 'Let us discuss your goals and transform your visual communication with craft and discernment.',
    'home.cta.btnWhatsApp': 'Message us on WhatsApp',
    'home.cta.btnForm': 'Fill out quotation form',

    // Services Catalog
    'services.header.title': 'Commercial Services Catalog',
    'services.header.subtitle': 'Official launch rates in Colombian Pesos (COP). Full transparency in scopes, deliverables, and conditions.',
    'services.filter.all': 'All Services',
    'services.filter.graphic': 'Graphic Design',
    'services.filter.social': 'Social Media',
    'services.filter.branding': 'Visual Identity',
    'services.filter.web': 'Web Design (Lovable)',
    'services.filter.maintenance': 'Web Maintenance',
    'services.filter.audiovisual': 'Audiovisual Production',
    'services.card.includes': 'Includes:',
    'services.card.notIncludes': 'Does not include:',
    'services.card.conditions': 'Key Conditions:',
    'services.card.popular': 'Featured',
    'services.card.quote': 'Quote this service',
    'services.note.currency': '* All prices are expressed in Colombian Pesos (COP). Excludes non-applicable taxes under our current regime.',

    // Portfolio
    'portfolio.header.title': 'Project Portfolio',
    'portfolio.header.subtitle': 'Curated selection of visual identity, digital platforms, graphic pieces, and content production.',
    'portfolio.filter.all': 'All',
    'portfolio.filter.graphic': 'Graphic Design',
    'portfolio.filter.branding': 'Branding',
    'portfolio.filter.social': 'Social Media',
    'portfolio.filter.web': 'Web Design',
    'portfolio.filter.illustration': 'Illustration',
    'portfolio.filter.audiovisual': 'Video',
    'portfolio.sort.label': 'Sort by:',
    'portfolio.sort.featured': 'Featured',
    'portfolio.sort.newest': 'Newest first',
    'portfolio.sort.title': 'Alphabetical (A-Z)',
    'portfolio.search.placeholder': 'Search projects or deliverables...',
    'portfolio.results.showing': 'Showing',
    'portfolio.results.projects': 'projects',
    'portfolio.results.in': 'in',
    'portfolio.filter.clear': 'Reset filters',
    'portfolio.empty.title': 'No projects found',
    'portfolio.empty.desc': 'No projects match your active category filter or search keywords.',
    'portfolio.empty.btn': 'Show all projects',
    'portfolio.view.mode': 'View:',
    'portfolio.view.mosaic': 'Asymmetric Mosaic',
    'portfolio.view.list': 'Editorial List',
    'portfolio.index.index': 'Index',
    'portfolio.index.project': 'Project & Scope',
    'portfolio.index.discipline': 'Discipline',
    'portfolio.index.year': 'Year',
    'portfolio.index.action': 'View project',
    'portfolio.modal.role': 'Studio Participation',
    'portfolio.modal.services': 'Services Delivered',
    'portfolio.modal.deliverables': 'Agreed Deliverables',
    'portfolio.modal.close': 'Close Details',
    'portfolio.modal.cta': 'Quote a similar project',

    // About Us
    'about.header.title': 'About Yavi Media Studio',
    'about.header.subtitle': 'An independent creative practice based in Barranquilla for Colombia and international clients.',
    'about.story.title': 'Who we are and what drives us',
    'about.story.p1': 'Yavi Media Studio is an independent creative studio founded and directed by Javier Escobar. It stems from the conviction that commercial ideas and individual projects deserve professional, memorable visual craft free of empty visual decoration.',
    'about.story.p2': 'We combine graphic design, visual communication, digital design, and audiovisual production to solve tangible communication challenges for brands, professionals, and businesses.',
    'about.model.title': 'Our Collaborative Model',
    'about.model.p1': 'We operate as an agile, independent studio. We are not a bloated agency with corporate bureaucracy, nor do we fabricate redundant roles. When a project demands additional capabilities (such as specialized film setups or complex custom code), we activate a trusted collaborative network.',
    'about.model.p2': 'This allows our clients to receive close, agile, and technically rigorous craftsmanship without the overhead costs of traditional agencies.',
    'about.values.v1.title': 'Clarity & Honesty',
    'about.values.v1.desc': 'Zero ambiguity in quotes, deadlines, and deliverable files.',
    'about.values.v2.title': 'Typographic & Visual Rigor',
    'about.values.v2.desc': 'Clean compositions, hierarchical poise, and functional aesthetic balance.',
    'about.values.v3.title': 'Practical Solutions',
    'about.values.v3.desc': 'Design purposefully structured to communicate clearly and acquire clients.',

    // How We Work (Process)
    'process.header.title': 'How We Work',
    'process.header.subtitle': 'A structured 7-step methodology guaranteeing clarity, quality, and commitment.',
    'process.step1.num': '01',
    'process.step1.title': 'You tell us your idea',
    'process.step1.desc': 'Fill out our brief form or contact us via WhatsApp detailing your business, requirements, and visual objectives.',
    'process.step2.num': '02',
    'process.step2.title': 'We analyze your needs',
    'process.step2.desc': 'We assess technical feasibility, ideal formats, and specific commercial communication requirements.',
    'process.step3.num': '03',
    'process.step3.title': 'We define scope & proposal',
    'process.step3.desc': 'You receive an itemized proposal with exact scopes, timeline estimates, and official COP rates. Valid for 15 days.',
    'process.step4.num': '04',
    'process.step4.title': 'We begin with deposit (50%)',
    'process.step4.desc': 'We formalize project kickoff upon receiving the 50% advance payment and initial client assets/brief.',
    'process.step5.num': '05',
    'process.step5.title': 'We develop the project',
    'process.step5.desc': 'We execute the conceptualization, graphic design, web layout, or audiovisual filming phase on schedule.',
    'process.step6.num': '06',
    'process.step6.title': 'We review and adjust',
    'process.step6.desc': 'We present the deliverables. You have two (2) revision rounds included to calibrate nuances within scope.',
    'process.step7.num': '07',
    'process.step7.title': 'We deliver final results',
    'process.step7.desc': 'Following final sign-off and the remaining 50% settlement, we hand over all production files and assets.',

    // Contact & Quotation Form
    'contact.header.title': 'Contact & Quotation',
    'contact.header.subtitle': 'Tell us about your project. You will receive a bespoke, honest response within 24 business hours.',
    'contact.info.title': 'Direct Channels',
    'contact.info.email': 'Official email:',
    'contact.info.location': 'Location:',
    'contact.info.hoursTitle': 'Operating Hours:',
    'contact.info.paymentsTitle': 'Accepted Payment Methods:',
    'contact.form.title': 'Formal Project Inquiry',
    'contact.form.name': 'Full name *',
    'contact.form.email': 'Email address *',
    'contact.form.brand': 'Brand or company *',
    'contact.form.service': 'Service of interest *',
    'contact.form.servicePlaceholder': 'Select a service...',
    'contact.form.budget': 'Estimated budget in COP (Optional)',
    'contact.form.budgetPlaceholder': 'E.g., $500,000 COP',
    'contact.form.date': 'Desired completion date (Optional)',
    'contact.form.description': 'Project description *',
    'contact.form.descriptionPlaceholder': 'Describe your goals, intended audience, and required deliverables...',
    'contact.form.submit': 'Submit Quote Request',
    'contact.form.whatsappOption': 'Or send brief directly to WhatsApp',
    'contact.form.success': 'Inquiry successfully formatted! You can send it via email or launch WhatsApp with your prefilled brief.',
    'contact.form.validationError': 'Please fill in all required fields marked with (*).',
    'contact.whatsapp.edit': 'Configure WhatsApp phone number',
    'contact.whatsapp.numberLabel': 'Destination WhatsApp number:',
    'contact.whatsapp.save': 'Save number',

    // Interactive Calculator
    'calc.title': 'Live Budget Estimator',
    'calc.subtitle': 'Select your required services and calculate a transparent real-time estimate in COP.',
    'calc.total': 'Estimated Total:',
    'calc.currency': 'Colombian Pesos (COP)',
    'calc.sendBrief': 'Transfer selection to quote form',

    // FAQ
    'faq.header.title': 'Frequently Asked Questions',
    'faq.header.subtitle': 'Everything you need to know regarding hiring, milestones, payments, and legal terms.',
    'faq.needMore': 'Have a specific question not addressed here?',
    'faq.cta': 'Write to us at yavimediastudio@gmail.com',

    // Legal & Terms
    'terms.header.title': 'Commercial Terms & Conditions',
    'terms.header.subtitle': 'Official contracting terms of Yavi Media Studio. Transparency, rigor, and mutual protection.',
    'privacy.header.title': 'Privacy & Data Protection Policy',
    'privacy.header.subtitle': 'Responsible personal data management in compliance with Colombian Law 1581 of 2012 and international standards.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.independent': 'Independent creative practice directed by Javier Escobar.',
    'footer.madeIn': 'Barranquilla, Colombia · Local and remote projects.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('yavi_lang');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });

  const [currentPage, setCurrentPageState] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = [
      'home', 'services', 'portfolio', 'about', 'process', 'contact', 'faq', 'privacy', 'terms'
    ];
    return validPages.includes(hash) ? hash : 'home';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('yavi_lang', lang);
    document.documentElement.lang = lang;
  };

  const setCurrentPage = (page: PageId) => {
    setCurrentPageState(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 'services', 'portfolio', 'about', 'process', 'contact', 'faq', 'privacy', 'terms'
      ];
      if (validPages.includes(hash)) {
        setCurrentPageState(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || translations['es'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentPage, setCurrentPage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
