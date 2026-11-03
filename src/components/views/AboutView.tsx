import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { StudioLogo } from '../common/StudioLogo';
import { STUDIO_CONTACT_INFO } from '../../data/faqData';
import { MapPin, User, Users, ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { language, setCurrentPage, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.about.title'), t('seo.about.description'));
  }, [language, t]);

  return (
    <div className="w-full py-12 lg:py-20 text-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
            <span>Yavi Media Studio</span>
            <span>·</span>
            <span>{language === 'es' ? 'Identidad & Enfoque' : 'Identity & Approach'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F3]">
            {t('about.header.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            {t('about.header.subtitle')}
          </p>
        </div>

        {/* Founder & Core Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F3]">
              {t('about.story.title')}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/80">
                <User className="w-4 h-4 text-[#7F77DD] shrink-0" />
                <span>
                  <strong>{language === 'es' ? 'Fundador y Dirección Creativa:' : 'Founder & Creative Direction:'}</strong>{' '}
                  Javier Escobar
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <MapPin className="w-4 h-4 text-[#7F77DD] shrink-0" />
                <span>
                  <strong>{language === 'es' ? 'Sede:' : 'Headquarters:'}</strong> Barranquilla, Atlántico, Colombia
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <Compass className="w-4 h-4 text-[#7F77DD] shrink-0" />
                <span>
                  <strong>{language === 'es' ? 'Mercado de atención:' : 'Market reach:'}</strong>{' '}
                  {language === 'es'
                    ? 'Colombia e internacional (servicios digitales remotos; producción presencial en Barranquilla)'
                    : 'Colombia and international (remote digital services; on-location production in Barranquilla)'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 p-8 rounded-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-[#7F77DD]/10 border border-[#7F77DD]/30 flex items-center justify-center text-[#7F77DD] mb-6">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-[#F5F5F3] mb-3">
              {t('about.model.title')}
            </h3>

            <div className="space-y-3 text-xs text-white/70 leading-relaxed">
              <p>{t('about.model.p1')}</p>
              <p>{t('about.model.p2')}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-[11px] text-[#7F77DD] font-semibold">
              {language === 'es'
                ? 'Estructura ligera · Trato directo con el fundador · Criterio visual'
                : 'Lightweight structure · Direct founder access · Visual discernment'}
            </div>
          </div>

        </div>

        {/* Studio Values */}
        <div className="py-20 border-b border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD]">
              {language === 'es' ? 'Principios rectores' : 'Guiding Principles'}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F3]">
              {language === 'es' ? 'Cómo entendemos el diseño' : 'How We Understand Design'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-[#7F77DD]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F3] mb-2">
                {t('about.values.v1.title')}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t('about.values.v1.desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-[#7F77DD]">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F3] mb-2">
                {t('about.values.v2.title')}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t('about.values.v2.desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-[#7F77DD]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F3] mb-2">
                {t('about.values.v3.title')}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t('about.values.v3.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Direct CTA */}
        <div className="pt-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#F5F5F3]">
              {language === 'es' ? '¿Quieres trabajar directamente con nosotros?' : 'Ready to work directly with us?'}
            </h3>
            <p className="text-xs text-white/60 mt-1">
              {language === 'es'
                ? 'Cotizaciones claras en COP y respuesta en menos de 24 horas hábiles.'
                : 'Transparent quotes in COP and turnaround within 24 business hours.'}
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-3 rounded-lg bg-[#F5F5F3] text-[#0F0F0F] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>{t('nav.startProject')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
