import { FaqItem } from '../types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-contracting',
    category: 'contracting',
    question: {
      es: '¿Cómo es el proceso para contratar un servicio?',
      en: 'What is the process to hire a service?',
    },
    answer: {
      es: 'El proceso inicia cuando nos contactas a través del formulario o WhatsApp detallando tu idea. Analizamos tus necesidades y enviamos una propuesta formal con alcance, precio oficial en COP y cronograma. Tras tu aprobación y el pago del anticipo del 50%, iniciamos la fase de diseño. Desarrollamos la propuesta, revisamos según las dos rondas de ajustes incluidas y, contra el pago del 50% final, entregamos todos los archivos terminados.',
      en: 'The process starts when you reach out via our quote form or WhatsApp detailing your idea. We evaluate your requirements and issue a clear proposal with scope, official pricing in COP, and timeline. Upon your approval and a 50% upfront payment, production begins. We develop the project, incorporate feedback through two included revision rounds, and upon final 50% payment, deliver all finished files.',
    },
  },
  {
    id: 'faq-payments',
    category: 'payments',
    question: {
      es: '¿Cuáles son los métodos de pago aceptados y cómo se manejan los anticipos?',
      en: 'What payment methods are accepted and how are advance payments handled?',
    },
    answer: {
      es: 'Aceptamos transferencias por Llave, transferencias directas por Bancolombia y Nequi. Para iniciar cualquier proyecto es indispensable un anticipo del 50% del valor total presupuestado. El 50% restante se cancela contra la aprobación final y antes de la entrega definitiva de los archivos de alta resolución o puesta en línea. Los datos bancarios específicos se suministran formalmente durante la contratación.',
      en: 'We accept Llave bank transfers, direct Bancolombia transfers, and Nequi. To commence any project, a 50% advance deposit is required. The remaining 50% is settled upon final approval prior to the handoff of high-resolution master files or website launch. Bank account coordinates are provided formally during the contracting step.',
    },
  },
  {
    id: 'faq-turnaround',
    category: 'deliveries',
    question: {
      es: '¿Cuáles son los tiempos de entrega habituales?',
      en: 'What are the typical delivery timelines?',
    },
    answer: {
      es: 'Los tiempos varían según el alcance: una pieza gráfica individual suele requerir entre 2 y 4 días hábiles; los paquetes de redes sociales se trabajan con 15 días calendario de anticipación respecto al mes de publicación; la Identidad Visual Esencial toma entre 10 y 15 días hábiles; y las páginas web entre 2 y 4 semanas según la información suministrada por el cliente.',
      en: 'Timelines vary by scope: individual graphic pieces typically take 2 to 4 business days; monthly social media packages are produced 15 calendar days in advance of the publication month; Essential Visual Identity takes 10 to 15 business days; and websites take 2 to 4 weeks depending on client content delivery.',
    },
  },
  {
    id: 'faq-revisions',
    category: 'contracting',
    question: {
      es: '¿Cuántas rondas de ajustes se incluyen?',
      en: 'How many revision rounds are included?',
    },
    answer: {
      es: 'Cada proyecto contratado incluye dos (2) rondas de ajustes sobre la propuesta presentada dentro del alcance original aprobado. Los ajustes adicionales o cambios estructurales que difieran de la información inicialmente aprobada se cotizan por separado según tiempo y complejidad.',
      en: 'Every contracted project includes two (2) revision rounds on the submitted concept within the original agreed scope. Additional revisions or structural deviations from initially approved materials are quoted separately based on time and complexity.',
    },
  },
  {
    id: 'faq-editables',
    category: 'technical',
    question: {
      es: '¿Se entregan los archivos editables (AI, PSD, Figma)?',
      en: 'Are open editable source files (AI, PSD, Figma) included?',
    },
    answer: {
      es: 'Los servicios estándar incluyen la entrega de los archivos finales en formatos listos para usar (JPG, PNG de alta resolución, PDF optimizado o código web). Los archivos editables y fuentes abiertas no están incluidos en los precios base y se cotizan por separado mediante acuerdo formal.',
      en: 'Standard services include delivery in ready-to-use production formats (high-resolution JPG, PNG, optimized PDF, or web code). Editable working source files and raw assets are not bundled into base pricing and are quoted separately upon request under a formal agreement.',
    },
  },
  {
    id: 'faq-location',
    category: 'contracting',
    question: {
      es: '¿Atienden clientes fuera de Barranquilla o en el extranjero?',
      en: 'Do you work with clients outside Barranquilla or internationally?',
    },
    answer: {
      es: 'Sí. Los servicios de diseño gráfico, identidad visual, diseño web, ilustración y edición de video se desarrollan 100% de manera remota para cualquier ciudad de Colombia y el extranjero. Los servicios que requieren presencia física (sesión fotográfica básica o grabación de video en locación) se prestan exclusivamente en la ciudad de Barranquilla.',
      en: 'Yes. Graphic design, visual identity, web design, digital illustration, and video editing are delivered 100% remotely for clients across Colombia and worldwide. Services requiring physical presence (photography sessions or on-site video filming) are conducted exclusively in Barranquilla.',
    },
  },
  {
    id: 'faq-external-costs',
    category: 'technical',
    question: {
      es: '¿Qué costos externos no están incluidos en el diseño web?',
      en: 'What external third-party costs are not included in web design?',
    },
    answer: {
      es: 'Los precios de diseño web contemplan la arquitectura, diseño visual y maquetación en Lovable. No incluyen costos de compra o renovación de dominio (.com, .co), suscripción a plataformas externas (Lovable, alojamiento web o correos corporativos), ni pasarelas de pago o ecommerce. Estos valores de terceros se informan con total transparencia y son asumidos por el cliente.',
      en: 'Web design pricing covers information architecture, visual layout, and responsive development in Lovable. It does not include domain purchase/renewal (.com, .co), external platform subscriptions (Lovable, web hosting, corporate email), or e-commerce payment gateways. These third-party fees are transparently disclosed and billed directly to the client.',
    },
  },
  {
    id: 'faq-maintenance',
    category: 'technical',
    question: {
      es: '¿Cómo funciona el mantenimiento web?',
      en: 'How does web maintenance work?',
    },
    answer: {
      es: 'Ofrecemos dos modalidades: Mantenimiento Básico ($50.000 COP/mes), obligatorio mientras el sitio web permanezca alojado o supervisado en la infraestructura del estudio, asegurando su estabilidad y monitoreo; y Mantenimiento Integral ($120.000 COP/mes), que añade hasta 2 horas mensuales de soporte activo para actualización de textos, fotos, precios y mejoras visuales.',
      en: 'We offer two tiers: Basic Maintenance ($50,000 COP/month), mandatory while the site is hosted or supervised within studio infrastructure to guarantee technical uptime; and Comprehensive Maintenance ($120,000 COP/month), which adds up to 2 hours of monthly active support for updating text, images, pricing, and visual refinements.',
    },
  },
  {
    id: 'faq-rights',
    category: 'rights',
    question: {
      es: '¿Cuáles son las condiciones de derechos de autor y uso comercial?',
      en: 'What are the copyright and commercial usage terms?',
    },
    answer: {
      es: 'Una vez cancelado el 100% del valor del proyecto, el cliente adquiere la autorización de uso comercial de los entregables finales para los fines contratados. El estudio conserva la autoría moral y el derecho a exhibir las piezas en su portafolio profesional, salvo acuerdo previo de confidencialidad por escrito.',
      en: 'Once 100% of the project fee is settled, the client receives commercial usage rights for the final deliverables for the agreed business purposes. The studio retains moral authorship and the standard right to showcase the work in its professional portfolio, unless an explicit non-disclosure agreement has been executed in writing.',
    },
  },
  {
    id: 'faq-urgency',
    category: 'deliveries',
    question: {
      es: '¿Manejan proyectos con carácter urgente?',
      en: 'Do you take on urgent or rush projects?',
    },
    answer: {
      es: 'Los proyectos urgentes pueden tener un recargo del 30% sobre el valor total, sujeto a disponibilidad de agenda del estudio y aprobación previa por escrito.',
      en: 'Urgent projects can incur a 30% surcharge on the total value, strictly subject to the studio availability schedule and prior written confirmation.',
    },
  },
];

export const STUDIO_CONTACT_INFO = {
  name: 'Yavi Media Studio',
  founder: 'Javier Escobar',
  email: 'yavimediastudio@gmail.com',
  city: 'Barranquilla, Atlántico',
  country: 'Colombia',
  whatsappNumber: '573013721613',
  whatsappDisplay: '+57 301 372 1613',
  hours: {
    es: {
      weekdays: 'Lunes a viernes: 8:00 a. m. a 6:00 p. m.',
      saturday: 'Sábados: 9:00 a. m. a 12:00 p. m.',
      sunday: 'Domingos y festivos: sin atención habitual.',
      note: 'Los mensajes recibidos fuera de horario se responden el siguiente día hábil.',
    },
    en: {
      weekdays: 'Monday to Friday: 8:00 AM to 6:00 PM',
      saturday: 'Saturday: 9:00 AM to 12:00 PM',
      sunday: 'Sundays & holidays: closed.',
      note: 'Messages received outside working hours are answered on the next business day.',
    },
  },
  paymentMethods: {
    es: [
      'Transferencias por Llave',
      'Nequi',
      'Bancolombia',
    ],
    en: [
      'Llave bank transfers',
      'Nequi',
      'Bancolombia direct transfer',
    ],
  },
};
