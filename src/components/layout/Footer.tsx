import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StudioLogo } from '../common/StudioLogo';
import { PageId } from '../../types';
import { STUDIO_CONTACT_INFO } from '../../data/faqData';
import { Mail, MapPin, Clock, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setCurrentPage, t } = useLanguage();

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/[0.08] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Column 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <StudioLogo onClick={() => handleNav('home')} />
            <p className="text-sm text-white/60 max-w-sm leading-relaxed pt-2">
              {t('brand.tagline')}
            </p>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed">
              {language === 'es'
                ? 'Estudio creativo independiente fundado y dirigido por Javier Escobar. Transformamos ideas comerciales en identidades memorables, desarrollo web con Lovable y producción audiovisual con rigor visual.'
                : 'Independent creative practice directed by Javier Escobar. Transforming commercial concepts into memorable visual identities, web development with Lovable, and audiovisual production with visual craft.'}
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#7F77DD] shrink-0" />
                <span>{STUDIO_CONTACT_INFO.city}, {STUDIO_CONTACT_INFO.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#7F77DD] shrink-0" />
                <a
                  href={`mailto:${STUDIO_CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
                >
                  {STUDIO_CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${STUDIO_CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#25D366] transition-colors underline decoration-white/20 underline-offset-4"
                >
                  WhatsApp: {STUDIO_CONTACT_INFO.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F3]">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.portfolio')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.process')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F3]">
              {language === 'es' ? 'Condiciones & Legal' : 'Terms & Legal'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.faq')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.terms')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-white transition-colors cursor-pointer">
                  {t('nav.privacy')}
                </button>
              </li>
              <li className="pt-2 text-[11px] text-white/40">
                {language === 'es'
                  ? 'Garantía oficial de 5 días hábiles sobre el alcance acordado.'
                  : 'Official 5-day warranty upon agreed project scope.'}
              </li>
            </ul>
          </div>

          {/* Column 5: Hours & Attention */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F3] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#7F77DD]" />
              <span>{language === 'es' ? 'Atención' : 'Hours'}</span>
            </h4>
            <div className="space-y-1.5 text-xs text-white/60">
              <p>{STUDIO_CONTACT_INFO.hours[language].weekdays}</p>
              <p>{STUDIO_CONTACT_INFO.hours[language].saturday}</p>
              <p className="text-white/40 text-[11px]">{STUDIO_CONTACT_INFO.hours[language].sunday}</p>
              <p className="text-white/40 text-[11px] pt-1">
                {STUDIO_CONTACT_INFO.hours[language].note}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold mb-1">
                {language === 'es' ? 'Métodos de pago:' : 'Payment methods:'}
              </p>
              <p className="text-xs text-white/60">
                {STUDIO_CONTACT_INFO.paymentMethods[language].join(' · ')}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} YAVI MEDIA STUDIO · {t('footer.rights')}</p>
          <p className="text-center sm:text-right">
            {t('footer.madeIn')} · <span className="text-[#7F77DD]">{t('brand.founder')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
