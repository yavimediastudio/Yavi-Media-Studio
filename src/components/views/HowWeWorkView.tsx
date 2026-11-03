import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { ArrowRight, Clock, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HowWeWorkView: React.FC = () => {
  const { language, setCurrentPage, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.process.title'), t('seo.process.description'));
  }, [language, t]);

  const steps = [
    {
      num: '01',
      titleKey: 'process.step1.title',
      descKey: 'process.step1.desc',
      timeframe: language === 'es' ? 'Día 1' : 'Day 1',
    },
    {
      num: '02',
      titleKey: 'process.step2.title',
      descKey: 'process.step2.desc',
      timeframe: language === 'es' ? '12 - 24 horas' : '12 - 24 hours',
    },
    {
      num: '03',
      titleKey: 'process.step3.title',
      descKey: 'process.step3.desc',
      timeframe: language === 'es' ? 'Propuesta formal (15 días de vigencia)' : 'Formal proposal (15-day validity)',
    },
    {
      num: '04',
      titleKey: 'process.step4.title',
      descKey: 'process.step4.desc',
      timeframe: language === 'es' ? 'Anticipo 50%' : '50% Advance deposit',
    },
    {
      num: '05',
      titleKey: 'process.step5.title',
      descKey: 'process.step5.desc',
      timeframe: language === 'es' ? 'Producción y diseño' : 'Production & design',
    },
    {
      num: '06',
      titleKey: 'process.step6.title',
      descKey: 'process.step6.desc',
      timeframe: language === 'es' ? '2 rondas de ajustes incluidas' : '2 revision rounds included',
    },
    {
      num: '07',
      titleKey: 'process.step7.title',
      descKey: 'process.step7.desc',
      timeframe: language === 'es' ? 'Pago final 50% y entrega' : 'Final 50% & handoff',
    },
  ];

  return (
    <div className="w-full py-12 lg:py-20 text-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
            <span>Yavi Media Studio</span>
            <span>·</span>
            <span>{language === 'es' ? 'Metodología & Flujo' : 'Methodology & Workflow'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F3]">
            {t('process.header.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            {t('process.header.subtitle')}
          </p>
        </div>

        {/* 7-Step Vertical/Grid Progression */}
        <div className="space-y-4 mb-20">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-6 sm:p-7 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-5">
                <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-base text-[#7F77DD] shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F3]">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/60 leading-relaxed max-w-2xl">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>

              <div className="md:text-right shrink-0">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#7F77DD] border border-white/10">
                  {step.timeframe}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Conditions Highlights */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#F5F5F3]">
            {language === 'es' ? 'Puntos clave de nuestra relación comercial' : 'Key Pillars of Our Working Relationship'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7F77DD]">
                <Clock className="w-4 h-4" />
                <span>{language === 'es' ? 'Vigencia y Retrasos' : 'Validity & Pauses'}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {language === 'es'
                  ? 'Las cotizaciones son válidas por 15 días calendario. Si el cliente demora más de cinco (5) días hábiles en entregar información o aprobaciones, el proyecto podrá pausarse y reprogramarse según disponibilidad.'
                  : 'Quotations are valid for 15 calendar days. If client feedback or materials are delayed beyond 5 business days, the project may be paused and rescheduled according to studio availability.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7F77DD]">
                <AlertTriangle className="w-4 h-4" />
                <span>{language === 'es' ? 'Urgencias (+30%)' : 'Rush Projects (+30%)'}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {language === 'es'
                  ? 'Los requerimientos con plazos express o urgentes contemplan un recargo del 30% sobre la tarifa base, sujeto a disponibilidad de agenda del estudio y aprobación previa por escrito.'
                  : 'Projects requiring express or rush turnaround incur a 30% surcharge on base fees, strictly subject to agenda availability and written agreement.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7F77DD]">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'es' ? 'Garantía oficial' : 'Official Warranty'}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {language === 'es'
                  ? 'Dispones de cinco (5) días hábiles posteriores a la entrega final para subsanar errores técnicos atribuibles al estudio sobre el alcance acordado.'
                  : 'You have five (5) business days post-delivery to request corrections for technical errors attributable to the studio regarding the agreed scope.'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-[#F5F5F3]">
            {language === 'es' ? '¿Listo para dar el primer paso?' : 'Ready to take the first step?'}
          </h3>
          <p className="mt-2 text-xs text-white/60">
            {language === 'es'
              ? 'Hablemos de tus necesidades y diseñemos la propuesta ideal para tu marca.'
              : 'Let us talk about your requirements and tailor the ideal solution for your brand.'}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-3 rounded-lg bg-[#7F77DD] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#6f66cb] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>{t('nav.startProject')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
