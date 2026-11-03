import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICES_DATA } from '../../data/servicesData';
import { Calculator, Check, ArrowRight, RefreshCw, Send } from 'lucide-react';

interface QuoteCalculatorProps {
  onApplySelectionToForm?: (selectedIds: string[], total: number) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  onApplySelectionToForm,
}) => {
  const { language, setCurrentPage, t } = useLanguage();
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [includeCopyAddon, setIncludeCopyAddon] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearSelection = () => {
    setSelectedServiceIds([]);
    setIncludeCopyAddon(false);
  };

  // Calculate total in COP
  const calculateTotal = (): number => {
    let sum = 0;
    selectedServiceIds.forEach((id) => {
      const s = SERVICES_DATA.find((item) => item.id === id);
      if (s && typeof s.priceCOP === 'number') {
        sum += s.priceCOP;
      }
    });
    if (includeCopyAddon) {
      sum += 10000;
    }
    return sum;
  };

  const total = calculateTotal();

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSendToForm = () => {
    if (onApplySelectionToForm) {
      onApplySelectionToForm(selectedServiceIds, total);
    }
    setCurrentPage('contact');
  };

  return (
    <div className="w-full bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 sm:p-8 text-[#F5F5F3]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#7F77DD]/10 border border-[#7F77DD]/30 flex items-center justify-center text-[#7F77DD]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-[#F5F5F3]">
              {t('calc.title')}
            </h3>
            <p className="text-xs text-white/60">
              {t('calc.subtitle')}
            </p>
          </div>
        </div>

        {selectedServiceIds.length > 0 && (
          <button
            onClick={clearSelection}
            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Limpiar selección' : 'Reset selection'}</span>
          </button>
        )}
      </div>

      {/* Services Selection Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {SERVICES_DATA.filter((s) => typeof s.priceCOP === 'number').map((service) => {
          const isSelected = selectedServiceIds.includes(service.id);
          return (
            <div
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between select-none ${
                isSelected
                  ? 'bg-[#7F77DD]/15 border-[#7F77DD] text-white shadow-sm'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-white/80'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-semibold leading-snug">
                  {service.name[language]}
                </span>
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors ${
                    isSelected
                      ? 'bg-[#7F77DD] border-[#7F77DD] text-white'
                      : 'border-white/30 bg-transparent'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3" />}
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between pt-2 border-t border-white/5">
                <span className="text-sm font-bold text-[#F5F5F3] tabular-nums">
                  {service.formattedPrice[language]}
                </span>
                {service.unit && (
                  <span className="text-[10px] text-white/50">
                    {service.unit[language]}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Graphic design add-on toggle */}
      <div className="mt-4 p-3 bg-white/[0.02] border border-white/10 rounded-xl flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeCopyAddon}
            onChange={(e) => setIncludeCopyAddon(e.target.checked)}
            className="rounded border-white/20 text-[#7F77DD] focus:ring-[#7F77DD]"
          />
          <span className="text-white/80">
            {language === 'es'
              ? 'Adicional: Copy y hashtags para pieza gráfica (+$10.000 COP)'
              : 'Add-on: Strategic copywriting & hashtags (+$10,000 COP)'}
          </span>
        </label>
        <span className="font-semibold text-white/90 tabular-nums">+$10.000 COP</span>
      </div>

      {/* Total & Action Bar */}
      <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-white/50 block">
            {t('calc.total')}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-[#F5F5F3] tabular-nums">
              {formatCOP(total)}
            </span>
            <span className="text-xs text-white/50 font-normal">
              {t('calc.currency')}
            </span>
          </div>
        </div>

        <button
          onClick={handleSendToForm}
          disabled={selectedServiceIds.length === 0}
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            selectedServiceIds.length > 0
              ? 'bg-[#7F77DD] text-white hover:bg-[#6f66cb]'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          <span>{t('calc.sendBrief')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
