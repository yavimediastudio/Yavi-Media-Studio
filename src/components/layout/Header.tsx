import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StudioLogo } from '../common/StudioLogo';
import { PageId } from '../../types';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, currentPage, setCurrentPage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems: { id: PageId; labelKey: string }[] = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'portfolio', labelKey: 'nav.portfolio' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'process', labelKey: 'nav.process' },
    { id: 'contact', labelKey: 'nav.contact' },
  ];

  const allNavItems: { id: PageId; labelKey: string }[] = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'portfolio', labelKey: 'nav.portfolio' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'process', labelKey: 'nav.process' },
    { id: 'contact', labelKey: 'nav.contact' },
    { id: 'faq', labelKey: 'nav.faq' },
    { id: 'terms', labelKey: 'nav.terms' },
    { id: 'privacy', labelKey: 'nav.privacy' },
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F0F0F]/90 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Left: Brand PNG Logo */}
        <div className="shrink-0">
          <StudioLogo onClick={() => handleNavClick('home')} />
        </div>

        {/* Center: Clean text navigation links with active indicator */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
          {mainNavItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap transition-colors pb-0.5 relative cursor-pointer ${
                  isActive
                    ? 'text-[#F5F5F3] font-semibold'
                    : 'text-white/70 hover:text-[#F5F5F3]'
                }`}
              >
                {t(item.labelKey)}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7F77DD] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Language Selector + Primary Action Button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          {/* Language Switcher with Globe */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">
            <Globe className="w-3.5 h-3.5 text-white/40 ml-1" />
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                language === 'es'
                  ? 'bg-white/15 text-[#F5F5F3] font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
              title="Español"
            >
              ES
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-white/15 text-[#F5F5F3] font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#F5F5F3] text-[#0F0F0F] hover:bg-white hover:text-black transition-all shadow-sm hover:shadow-[#7F77DD]/20 whitespace-nowrap cursor-pointer group"
          >
            <span>{t('nav.startProject')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0F0F0F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          {/* Compact language switcher for mobile */}
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="p-2 text-xs font-semibold text-white/80 border border-white/15 rounded-lg bg-white/5"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0F0F0F] px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {allNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 px-4 rounded-lg bg-[#7F77DD] text-white text-xs font-semibold uppercase tracking-wider text-center"
              >
                {t('nav.startProject')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
