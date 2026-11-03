import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { SERVICES_DATA } from '../../data/servicesData';
import { QuoteCalculator } from '../tools/QuoteCalculator';
import { Check, X, ArrowUpRight, AlertCircle, Info } from 'lucide-react';

export const ServicesView: React.FC = () => {
  const { language, setCurrentPage, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.services.title'), t('seo.services.description'));
  }, [language, t]);

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelKey: 'services.filter.all' },
    { id: 'graphic_design', labelKey: 'services.filter.graphic' },
    { id: 'social_media', labelKey: 'services.filter.social' },
    { id: 'visual_identity', labelKey: 'services.filter.branding' },
    { id: 'web_design', labelKey: 'services.filter.web' },
    { id: 'web_maintenance', labelKey: 'services.filter.maintenance' },
    { id: 'audiovisual', labelKey: 'services.filter.audiovisual' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const handleSelectServiceForQuote = (serviceName: string) => {
    sessionStorage.setItem('yavi_quote_ref', serviceName);
    setCurrentPage('contact');
  };

  return (
    <div className="w-full py-12 lg:py-20 text-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
            <span>Yavi Media Studio</span>
            <span>·</span>
            <span>{language === 'es' ? 'Tarifas Oficiales' : 'Official Rates'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F3]">
            {t('services.header.title')}
          </h1>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            {t('services.header.subtitle')}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#7F77DD] bg-[#7F77DD]/10 border border-[#7F77DD]/20 px-3.5 py-2 rounded-lg w-fit">
            <Info className="w-4 h-4 shrink-0" />
            <span>{t('services.note.currency')}</span>
          </div>
        </div>

        {/* Interactive Live Budget Calculator */}
        <div className="mb-16">
          <QuoteCalculator
            onApplySelectionToForm={(ids) => {
              sessionStorage.setItem('yavi_selected_services', JSON.stringify(ids));
            }}
          />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#F5F5F3] text-[#0F0F0F]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`studio-card flex flex-col justify-between p-6 sm:p-7 rounded-2xl ${
                service.popular
                  ? 'border-[#7F77DD]/50 shadow-lg shadow-[#7F77DD]/10'
                  : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7F77DD]">
                    {service.category.replace('_', ' ')}
                  </span>
                  {service.popular && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-[#7F77DD] px-2 py-0.5 rounded">
                      {t('services.card.popular')}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F3] mb-2">
                  {service.name[language]}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  {service.shortDescription[language]}
                </p>

                {/* What is included */}
                <div className="space-y-2 mb-5 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block">
                    {t('services.card.includes')}
                  </span>
                  <ul className="space-y-2 text-xs text-white/80">
                    {service.includes[language].map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#7F77DD] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What is NOT included */}
                {service.notIncludes && (
                  <div className="space-y-2 mb-5 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block">
                      {t('services.card.notIncludes')}
                    </span>
                    <ul className="space-y-1.5 text-xs text-white/50">
                      {service.notIncludes[language].map((notInc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="w-3.5 h-3.5 text-white/30 shrink-0 mt-0.5" />
                          <span>{notInc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Conditions if any */}
                {service.conditions && (
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5 text-[11px] text-white/50 bg-white/[0.02] p-3 rounded-lg">
                    <span className="font-bold text-white/70 block">
                      {t('services.card.conditions')}
                    </span>
                    {service.conditions[language].map((cond, i) => (
                      <p key={i}>• {cond}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-[#F5F5F3] tabular-nums">
                      {service.formattedPrice[language]}
                    </span>
                    {service.unit && (
                      <span className="text-xs text-white/50">
                        {service.unit[language]}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-white/40 block mt-0.5">
                    {language === 'es' ? 'Pesos colombianos (COP)' : 'Colombian Pesos (COP)'}
                  </span>
                </div>

                <button
                  onClick={() => handleSelectServiceForQuote(service.name[language])}
                  className="w-full py-3 px-4 rounded-lg bg-[#F5F5F3] text-[#0F0F0F] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <span>{t('services.card.quote')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Web external costs & condition clarification box */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-white/60 space-y-3">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#F5F5F3] text-sm">
            <AlertCircle className="w-4 h-4 text-[#7F77DD]" />
            <span>{language === 'es' ? 'Transparencia de costos externos' : 'Third-Party Cost Transparency'}</span>
          </div>
          <p className="leading-relaxed">
            {language === 'es'
              ? 'En Yavi Media Studio valoramos la honestidad comercial absoluta: los costos de registro de dominio (.com, .co), suscripción a plataformas externas (Lovable, alojamiento web o correos corporativos) y herramientas de terceros no están incluidos automáticamente en las tarifas de diseño y son cubiertos directamente por el cliente.'
              : 'At Yavi Media Studio we uphold complete commercial honesty: domain registration fees (.com, .co), third-party platform subscriptions (Lovable, web hosting, or business email suites) are external fees not bundled into base design rates and are handled directly by the client.'}
          </p>
          <p className="leading-relaxed">
            {language === 'es'
              ? 'Todos los proyectos incluyen dos (2) rondas de ajustes sobre el alcance original aprobado. Los archivos editables y fuentes abiertas no se incluyen en los paquetes estándar y se cotizan por separado por escrito.'
              : 'All standard projects include two (2) revision rounds on the approved scope. Editable source files and raw fonts are not included in standard deliverables and are quoted separately upon written agreement.'}
          </p>
        </div>

      </div>
    </div>
  );
};
