import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { Shield, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const TermsView: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.terms.title'), t('seo.terms.description'));
  }, [language, t]);

  return (
    <div className="w-full py-12 lg:py-20 text-[#F5F5F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
            <FileText className="w-4 h-4" />
            <span>Yavi Media Studio · Marco Contractual</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F3]">
            {t('terms.header.title')}
          </h1>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {t('terms.header.subtitle')}
          </p>
          <div className="mt-4 text-xs text-white/40">
            {language === 'es'
              ? 'Última actualización: Noviembre 2026 · Válido para Colombia y contrataciones internacionales.'
              : 'Last updated: November 2026 · Valid for Colombia and international contracts.'}
          </div>
        </div>

        {/* Content Clauses */}
        <div className="space-y-10 text-xs sm:text-sm text-white/70 leading-relaxed">
          
          {/* 1. Proceso de contratación y pagos */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">1.</span>
              <span>{language === 'es' ? 'Proceso de contratación y política de pagos (50/50)' : 'Contracting Process & 50/50 Payment Policy'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'Todo proyecto contratado con Yavi Media Studio sigue una secuencia rigurosa: 1) Consulta inicial, 2) Diagnóstico de necesidades, 3) Envío de cotización con alcance, precio oficial en COP y tiempos, 4) Aceptación formal y pago del 50% de anticipo, 5) Recopilación de materiales y brief, 6) Producción y revisiones, 7) Pago del 50% restante contra aprobación, y 8) Entrega final de archivos en alta resolución o puesta en línea.'
                : 'Every project commissioned with Yavi Media Studio follows a disciplined workflow: 1) Initial consultation, 2) Requirements diagnosis, 3) Formal quotation with scope, official COP pricing, and schedule, 4) Acceptance and 50% upfront deposit, 5) Materials gathering, 6) Production and reviews, 7) Final 50% balance settlement upon approval, and 8) Final delivery of master production files or web deployment.'}
            </p>
            <p className="text-white/50 text-xs">
              {language === 'es'
                ? 'Ningún proyecto iniciará su fase de ejecución técnica o creativa sin haberse verificado el pago del anticipo correspondiente.'
                : 'No technical or creative execution will commence without verified confirmation of the upfront deposit.'}
            </p>
          </section>

          {/* 2. Rondas de ajustes */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">2.</span>
              <span>{language === 'es' ? 'Rondas de ajustes y revisiones' : 'Revision Rounds & Calibration'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'Cada servicio contratado en nuestro catálogo estándar incluye exactamente dos (2) rondas de ajustes sobre la propuesta creativa presentada, siempre que se mantengan dentro del alcance y la información previamente acordada. Los cambios estructurales posteriores o las rondas adicionales de revisión se cotizarán por separado según el tiempo de diseño y la complejidad requerida.'
                : 'Every contracted catalog service includes exactly two (2) revision rounds on the submitted deliverables, provided they adhere to the agreed brief and parameters. Structural deviations or additional revision rounds will be quoted separately based on required hours and complexity.'}
            </p>
          </section>

          {/* 3. Urgencias y plazos reducidos */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">3.</span>
              <span>{language === 'es' ? 'Proyectos urgentes y recargos' : 'Urgent Projects & Rush Surcharges'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'Los proyectos solicitados con carácter urgente o plazos de entrega inferiores a los habituales contemplan un recargo adicional del 30% sobre el valor total presupuestado. La aceptación de proyectos express está condicionada a la disponibilidad de agenda del estudio y requiere confirmación previa por escrito.'
                : 'Projects requested on an express turnaround or with deadlines substantially shorter than standard parameters incur a 30% rush surcharge on total fees. Acceptance is strictly subject to studio calendar availability and prior written confirmation.'}
            </p>
          </section>

          {/* 4. Validez de cotizaciones */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">4.</span>
              <span>{language === 'es' ? 'Validez de cotizaciones' : 'Quotation Validity'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'Todas las propuestas comerciales y cotizaciones emitidas por Yavi Media Studio tienen una vigencia estricta de quince (15) días calendario a partir de su fecha de emisión. Transcurrido dicho plazo sin formalización ni pago de anticipo, el estudio se reserva el derecho de actualizar tarifas o disponibilidad.'
                : 'All commercial proposals and quotes issued by Yavi Media Studio remain valid for fifteen (15) calendar days from issuance. Once expired without written approval and advance deposit, the studio reserves the right to review rates and scheduling.'}
            </p>
          </section>

          {/* 5. Retrasos por parte del cliente y pausas */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">5.</span>
              <span>{language === 'es' ? 'Retrasos del cliente y suspensión de proyectos' : 'Client Delays & Project Pause Policy'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'Para garantizar la calidad y el cumplimiento de los cronogramas, el cliente dispone de hasta cinco (5) días hábiles para suministrar materiales, responder consultas o aprobar entregables. Superado este lapso sin comunicación formal, el proyecto podrá ser pausado unilateralmente y su reactivación quedará sujeta a la disponibilidad del estudio, sin responsabilidad por demoras en la fecha de entrega original.'
                : 'To maintain schedule integrity and craft quality, the client has up to five (5) business days to provide required assets, feedback, or sign-offs. If this threshold is exceeded without written notice, the project may be paused and its resumption scheduled according to studio capacity without liability for original delivery dates.'}
            </p>
          </section>

          {/* 6. Garantía de servicio */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">6.</span>
              <span>{language === 'es' ? 'Garantía técnica y de cumplimiento' : 'Technical Warranty & Scope Conformance'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'Yavi Media Studio otorga una garantía de cinco (5) días hábiles posteriores a la entrega final para subsanar errores técnicos atribuibles al estudio respecto al alcance contratado (por ejemplo, errores tipográficos imputables al diseño o fallas de enlace verificadas). Esta garantía no cubre modificaciones de gusto subjetivo, solicitudes fuera del alcance ni variaciones sobre textos o insumos previamente aprobados por el cliente.'
                : 'Yavi Media Studio provides a five (5) business day warranty post-delivery to rectify technical defects attributable to the studio regarding the agreed scope (e.g., verified layout bugs, typographic errors made during composition, or broken links). This warranty excludes subjective taste shifts, out-of-scope additions, or alterations to previously signed-off materials.'}
            </p>
          </section>

          {/* 7. Derechos de autor y uso comercial */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">7.</span>
              <span>{language === 'es' ? 'Propiedad intelectual, derechos de autor y portafolio' : 'Intellectual Property, Licensing & Portfolio Rights'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'El cliente recibe una licencia de autorización de uso comercial sobre las piezas finales una vez cancelado el 100% del valor total acordado, limitada a los fines específicos del contrato. Yavi Media Studio y su fundador conservan en todo momento la autoría moral y el derecho legítimo a exhibir las piezas en su portafolio profesional y canales de difusión, salvo acuerdo previo de confidencialidad por escrito.'
                : 'The client obtains a commercial usage license for the final approved deliverables once 100% of the project fee has been settled, restricted to the contractual purpose. Yavi Media Studio and its founder retain moral authorship and the standard right to showcase the work in their professional portfolio and channels, unless otherwise agreed via prior written NDA.'}
            </p>
            <p className="text-white/50 text-xs">
              {language === 'es'
                ? 'Los archivos fuente editables (.AI, .PSD, proyectos de edición abiertos) no se transfieren automáticamente y se cotizan por separado mediante adenda formal.'
                : 'Open editable source files (.AI, .PSD, raw timelines) are not bundled and require a separate written license agreement.'}
            </p>
          </section>

          {/* 8. Cancelaciones y reembolsos */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">8.</span>
              <span>{language === 'es' ? 'Cancelaciones y marco legal' : 'Cancellations & Legal Framework'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'En caso de cancelación anticipada por parte del cliente, las condiciones de liquidación contemplarán el porcentaje de trabajo efectivamente ejecutado y los gastos directos incurridos, de estricta conformidad con el Código de Comercio de Colombia y las normas aplicables de protección al consumidor (Ley 1480 de 2011). El anticipo del 50% remunera la reserva de agenda y la etapa de investigación y conceptualización inicial.'
                : 'In the event of early termination initiated by the client, settlement calculations will account for work completed and non-recoverable expenses incurred, in strict adherence to Colombian Commercial Code and consumer protection legislation (Law 1480 of 2011). The initial 50% deposit compensates calendar allocation, creative research, and early concept development.'}
            </p>
          </section>

          {/* 9. Confidencialidad */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#F5F5F3] flex items-center gap-2">
              <span className="font-mono text-[#7F77DD]">9.</span>
              <span>{language === 'es' ? 'Confidencialidad y testimonios' : 'Confidentiality & Testimonials'}</span>
            </h2>
            <p>
              {language === 'es'
                ? 'La información estratégica, comercial y técnica facilitada por el cliente es tratada con estricta reserva profesional y utilizada exclusivamente para los propósitos del encargo. Los testimonios y materiales de marca de clientes solo se publicarán contando con la autorización respectiva.'
                : 'All commercial, strategic, and technical materials supplied by the client are handled with professional discretion and used solely for the agreed deliverables. Testimonials or brand marks are only published with explicit consent.'}
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
