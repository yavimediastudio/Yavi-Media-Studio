import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { FAQ_DATA, STUDIO_CONTACT_INFO } from '../../data/faqData';
import { ChevronDown, HelpCircle, Mail, Clock, CreditCard, ArrowRight } from 'lucide-react';

export const FaqView: React.FC = () => {
  const { language, setCurrentPage, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.faq.title'), t('seo.faq.description'));
  }, [language, t]);

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-contracting': true,
    'faq-payments': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full py-12 lg:py-20 text-[#F5F5F3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{language === 'es' ? 'Resolución de Dudas' : 'Inquiries & FAQ'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F3]">
            {t('faq.header.title')}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            {t('faq.header.subtitle')}
          </p>
        </div>

        {/* Operating Hours & Payment Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7F77DD] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                {language === 'es' ? 'Horario de atención oficial' : 'Official Operating Hours'}
              </h3>
              <p className="text-white/80">{STUDIO_CONTACT_INFO.hours[language].weekdays}</p>
              <p className="text-white/80">{STUDIO_CONTACT_INFO.hours[language].saturday}</p>
              <p className="text-white/50 text-[11px]">{STUDIO_CONTACT_INFO.hours[language].sunday}</p>
              <p className="text-[#7F77DD] text-[11px] pt-1">{STUDIO_CONTACT_INFO.hours[language].note}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7F77DD] shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                {language === 'es' ? 'Canales de pago autorizados' : 'Authorized Payment Channels'}
              </h3>
              <p className="text-white/80">{STUDIO_CONTACT_INFO.paymentMethods[language].join(' · ')}</p>
              <p className="text-white/50 text-[11px] pt-1">
                {language === 'es'
                  ? 'Anticipo del 50% para iniciar; 50% restante antes de la entrega final de entregables.'
                  : '50% deposit to commence; 50% balance before final master deliverables.'}
              </p>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-16">
          {FAQ_DATA.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-[#0F0F0F] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#F5F5F3]">
                    {item.question[language]}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#7F77DD]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    {item.answer[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F3]">
            {t('faq.needMore')}
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto">
            {language === 'es'
              ? 'Escríbenos directamente y te responderemos con claridad en menos de 24 horas hábiles.'
              : 'Write to us directly and we will respond with clarity within 24 business hours.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${STUDIO_CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs font-semibold text-white hover:bg-white/15 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#7F77DD]" />
              <span>{STUDIO_CONTACT_INFO.email}</span>
            </a>
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#7F77DD] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#6f66cb] transition-colors cursor-pointer"
            >
              <span>{t('nav.contact')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
