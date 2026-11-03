import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MessageSquare, Settings, Check, X } from 'lucide-react';
import { STUDIO_CONTACT_INFO } from '../../data/faqData';

export const WhatsAppButton: React.FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>(() => {
    const stored = localStorage.getItem('yavi_whatsapp');
    if (stored && stored !== '573000000000') {
      return stored;
    }
    return STUDIO_CONTACT_INFO.whatsappNumber;
  });
  const [tempNumber, setTempNumber] = useState(phoneNumber);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = tempNumber.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanNumber);
    localStorage.setItem('yavi_whatsapp', cleanNumber);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsOpen(false);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const defaultText = language === 'es'
      ? 'Hola Javier, vengo desde la plataforma de Yavi Media Studio y deseo cotizar un proyecto.'
      : 'Hello Javier, I reached out via Yavi Media Studio digital platform and would like to quote a project.';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Settings popup to configure WhatsApp number */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#0F0F0F] border border-white/20 rounded-xl p-4 shadow-2xl text-[#F5F5F3] animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7F77DD]">
              {language === 'es' ? 'Configuración de WhatsApp' : 'WhatsApp Settings'}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded text-white/50 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-3">
            <div>
              <label className="block text-[11px] text-white/70 mb-1">
                {language === 'es'
                  ? 'Número con código de país (ej: 573013721613):'
                  : 'Number with country code (e.g., 573013721613):'}
              </label>
              <input
                type="text"
                value={tempNumber}
                onChange={(e) => setTempNumber(e.target.value)}
                placeholder="573013721613"
                className="w-full px-3 py-1.5 text-xs bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#7F77DD]"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-white/40">
                {language === 'es' ? 'Guardado en tu navegador' : 'Stored locally'}
              </span>
              <button
                type="submit"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#7F77DD] text-white text-xs font-semibold hover:bg-[#6f66cb] transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{language === 'es' ? 'Guardado' : 'Saved'}</span>
                  </>
                ) : (
                  <span>{t('contact.whatsapp.save')}</span>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main floating pill */}
      <div className="flex items-center gap-2">
        {/* Gear icon for quick number configuration */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          title={language === 'es' ? 'Editar número de WhatsApp' : 'Configure WhatsApp number'}
          className="w-8 h-8 rounded-full bg-[#0F0F0F] border border-white/20 text-white/60 hover:text-white hover:border-[#7F77DD] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
          aria-label="Configure WhatsApp number"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>

        {/* WhatsApp Direct Action Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-black font-semibold text-xs tracking-wide shadow-lg hover:bg-[#20ba5a] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          title="WhatsApp direct chat"
        >
          <MessageSquare className="w-4 h-4 fill-black" />
          <span className="hidden sm:inline">
            {language === 'es' ? 'WhatsApp directo' : 'Direct WhatsApp'}
          </span>
        </a>
      </div>
    </div>
  );
};
