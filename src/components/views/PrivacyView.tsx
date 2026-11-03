import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { STUDIO_CONTACT_INFO } from '../../data/faqData';
import { Shield, Lock, FileCheck } from 'lucide-react';

export const PrivacyView: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.privacy.title'), t('seo.privacy.description'));
  }, [language, t]);

  return (
    <div className="w-full py-12 lg:py-20 text-[#F5F5F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
            <Shield className="w-4 h-4" />
            <span>Habeas Data · Protección de Datos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F3]">
            {t('privacy.header.title')}
          </h1>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {t('privacy.header.subtitle')}
          </p>
          <div className="mt-4 text-xs text-white/40">
            {language === 'es'
              ? 'Responsable: Yavi Media Studio · Javier Escobar · Barranquilla, Colombia'
              : 'Responsible Party: Yavi Media Studio · Javier Escobar · Barranquilla, Colombia'}
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-xs sm:text-sm text-white/70 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#F5F5F3]">
              {language === 'es' ? '1. Marco normativo y responsable del tratamiento' : '1. Legal Framework & Data Controller'}
            </h2>
            <p>
              {language === 'es'
                ? 'Yavi Media Studio, con sede en la ciudad de Barranquilla, Colombia, y canal de contacto en yavimediastudio@gmail.com, actúa como Responsable del Tratamiento de datos personales en estricto cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas que regulan el derecho fundamental de Habeas Data en la República de Colombia.'
                : 'Yavi Media Studio, located in Barranquilla, Colombia, reachable at yavimediastudio@gmail.com, acts as Data Controller in strict accordance with Colombian Law 1581 of 2012, Decree 1377 of 2013, and related statutory personal data regulations.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#F5F5F3]">
              {language === 'es' ? '2. Datos recopilados y finalidad' : '2. Collected Data & Purpose'}
            </h2>
            <p>
              {language === 'es'
                ? 'A través de nuestros formularios y canales de atención directa, recopilamos únicamente información pertinente: nombre, correo electrónico, marca u organización comercial, especificaciones del encargo y presupuesto estimado. Estos datos se utilizan con la exclusiva finalidad de formular cotizaciones, dar trámite a la relación contractual, emitir comunicaciones directas y gestionar la entrega de servicios creativos.'
                : 'Through our quote forms and direct channels, we only gather pertinent information: contact name, email address, brand or commercial entity, project scope details, and budget indications. This information is utilized solely to prepare quotations, fulfill contractual engagements, communicate updates, and deliver creative services.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#F5F5F3]">
              {language === 'es' ? '3. No venta ni transferencia a terceros' : '3. Non-Disclosure & Third Parties'}
            </h2>
            <p>
              {language === 'es'
                ? 'Yavi Media Studio no comercializa, no alquila ni transfiere datos personales a empresas de publicidad ni a intermediarios ajenos al desarrollo de los proyectos contratados. En caso de requerirse servicios de terceros (como plataformas de hosting, registros de dominio o pasarelas), la contratación se efectúa directamente a nombre del cliente o previa autorización expresa.'
                : 'Yavi Media Studio never sells, rents, or transfers personal data to marketing aggregators or unrelated third parties. Whenever third-party platforms are required (such as domain registrars or cloud hosting), accounts are provisioned directly in the client name or upon express agreement.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#F5F5F3]">
              {language === 'es' ? '4. Derechos del titular (Habeas Data)' : '4. Client Rights (Habeas Data)'}
            </h2>
            <p>
              {language === 'es'
                ? 'El titular de la información tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento. Para ejercer estos derechos, basta con enviar una solicitud formal por escrito a nuestro correo oficial:'
                : 'Data subjects hold the right to access, rectify, update, and request deletion of their personal records at any time. To exercise these rights, simply email our official contact address:'}
            </p>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-xs w-fit">
              {STUDIO_CONTACT_INFO.email}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#F5F5F3]">
              {language === 'es' ? '5. Seguridad y almacenamiento' : '5. Security & Storage'}
            </h2>
            <p>
              {language === 'es'
                ? 'Implementamos medidas administrativas, técnicas y organizativas para salvaguardar la confidencialidad de la información del cliente, evitando adulteración, pérdida, consulta o acceso no autorizado.'
                : 'We implement technical and organizational controls to protect the integrity and confidentiality of client assets and information, preventing unauthorized inspection, loss, or alteration.'}
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
