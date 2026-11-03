import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { STUDIO_CONTACT_INFO } from '../../data/faqData';
import { SERVICES_DATA } from '../../data/servicesData';
import { QuoteFormData } from '../../types';
import {
  Mail,
  MapPin,
  Clock,
  CreditCard,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.contact.title'), t('seo.contact.description'));
  }, [language, t]);

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    brand: '',
    serviceCategory: '',
    projectDescription: '',
    estimatedBudget: '',
    desiredDeliveryDate: '',
    selectedServices: [],
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'ready'>('idle');
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Retrieve any service chosen from catalog or calculator
  useEffect(() => {
    const quoteRef = sessionStorage.getItem('yavi_quote_ref');
    const selectedServicesJson = sessionStorage.getItem('yavi_selected_services');

    if (quoteRef) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: quoteRef,
        projectDescription: prev.projectDescription || `Interés en cotizar: ${quoteRef}.`,
      }));
      sessionStorage.removeItem('yavi_quote_ref');
    }

    if (selectedServicesJson) {
      try {
        const ids: string[] = JSON.parse(selectedServicesJson);
        const names = ids
          .map((id) => SERVICES_DATA.find((s) => s.id === id)?.name[language])
          .filter(Boolean)
          .join(', ');
        if (names) {
          setFormData((prev) => ({
            ...prev,
            serviceCategory: names,
            projectDescription: prev.projectDescription || `Servicios seleccionados en cotizador: ${names}.`,
            selectedServices: ids,
          }));
        }
      } catch (err) {
        // ignore JSON parse error
      }
      sessionStorage.removeItem('yavi_selected_services');
    }
  }, [language]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'es' ? 'El nombre es obligatorio' : 'Full name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = language === 'es' ? 'Correo electrónico no válido' : 'Valid email is required';
    }
    if (!formData.brand.trim()) {
      newErrors.brand = language === 'es' ? 'Empresa o marca requerida' : 'Brand name is required';
    }
    if (!formData.serviceCategory.trim()) {
      newErrors.serviceCategory = language === 'es' ? 'Selecciona un servicio' : 'Select a service';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
      newErrors.projectDescription =
        language === 'es'
          ? 'Describe brevemente tu proyecto (mínimo 10 caracteres)'
          : 'Please provide at least 10 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateBriefText = () => {
    return [
      `*SOLICITUD DE COTIZACIÓN — YAVI MEDIA STUDIO*`,
      `Cliente: ${formData.name}`,
      `Email: ${formData.email}`,
      `Marca / Empresa: ${formData.brand}`,
      `Servicio de interés: ${formData.serviceCategory}`,
      `Presupuesto estimado: ${formData.estimatedBudget || 'Por definir según propuesta'}`,
      `Fecha deseada de entrega: ${formData.desiredDeliveryDate || 'A coordinar'}`,
      `\n*Descripción del proyecto:*`,
      formData.projectDescription,
      `\nEnviado desde: Plataforma Digital Yavi Media Studio (Barranquilla, Colombia)`,
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmissionState('ready');
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(`Solicitud de Cotización — ${formData.brand} (${formData.name})`);
    const body = encodeURIComponent(generateBriefText());
    window.location.href = `mailto:${STUDIO_CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSendViaWhatsApp = () => {
    const stored = localStorage.getItem('yavi_whatsapp');
    const phone = (stored && stored !== '573000000000') ? stored : STUDIO_CONTACT_INFO.whatsappNumber;
    const text = encodeURIComponent(generateBriefText());
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generateBriefText());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  return (
    <div className="w-full py-12 lg:py-20 text-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
            <span>Yavi Media Studio</span>
            <span>·</span>
            <span>{language === 'es' ? 'Cotizaciones Directas' : 'Direct Quotations'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F3]">
            {t('contact.header.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            {t('contact.header.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels, Hours & Operations */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Channels Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7F77DD]">
                {t('contact.info.title')}
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-white/40 block mb-1">WhatsApp</span>
                  <a
                    href={`https://wa.me/${STUDIO_CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-[#25D366] hover:underline flex items-center gap-2"
                  >
                    <span>{STUDIO_CONTACT_INFO.whatsappDisplay}</span>
                  </a>
                </div>

                <div>
                  <span className="text-white/40 block mb-1">{t('contact.info.email')}</span>
                  <a
                    href={`mailto:${STUDIO_CONTACT_INFO.email}`}
                    className="text-base font-semibold text-[#F5F5F3] hover:text-[#7F77DD] transition-colors underline decoration-white/20 underline-offset-4"
                  >
                    {STUDIO_CONTACT_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="text-white/40 block mb-1">{t('contact.info.location')}</span>
                  <p className="text-sm text-white/80">
                    {STUDIO_CONTACT_INFO.city}, {STUDIO_CONTACT_INFO.country}
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    {language === 'es'
                      ? 'Atención remota a nivel nacional e internacional.'
                      : 'Remote services available nationwide and internationally.'}
                  </p>
                </div>
              </div>

              {/* WhatsApp direct trigger */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba5a] transition-all cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>{language === 'es' ? 'Chat directo por WhatsApp' : 'Direct WhatsApp Chat'}</span>
                </button>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                <Clock className="w-4 h-4 text-[#7F77DD]" />
                <span>{t('contact.info.hoursTitle')}</span>
              </div>
              <div className="space-y-2 text-xs text-white/70">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>{STUDIO_CONTACT_INFO.hours[language].weekdays}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>{STUDIO_CONTACT_INFO.hours[language].saturday}</span>
                </div>
                <p className="text-white/40 text-[11px]">
                  {STUDIO_CONTACT_INFO.hours[language].sunday}
                </p>
                <p className="text-[#7F77DD] text-[11px] pt-1">
                  {STUDIO_CONTACT_INFO.hours[language].note}
                </p>
              </div>
            </div>

            {/* Payment Methods Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                <CreditCard className="w-4 h-4 text-[#7F77DD]" />
                <span>{t('contact.info.paymentsTitle')}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-white/70">
                {STUDIO_CONTACT_INFO.paymentMethods[language].map((method, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7F77DD]" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-white/40 pt-2 border-t border-white/5">
                {language === 'es'
                  ? 'Se requiere anticipo del 50% para iniciar. El 50% restante contra aprobación final y antes de entrega.'
                  : '50% advance deposit required to start. Remaining 50% upon final sign-off prior to delivery.'}
              </p>
            </div>

          </div>

          {/* Right Column: Formal Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0F0F0F] border border-white/10 shadow-xl">
              
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F3] mb-2">
                {t('contact.form.title')}
              </h2>
              <p className="text-xs text-white/60 mb-8">
                {language === 'es'
                  ? 'Completa este formulario para estructurar tu brief oficial. Podrás enviarlo directamente por correo o transferirlo a WhatsApp.'
                  : 'Fill out this form to prepare your official brief. You can submit it directly via email or transfer it to WhatsApp.'}
              </p>

              {/* Ready / Submitted Modal State */}
              {submissionState === 'ready' ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="p-5 rounded-xl bg-[#7F77DD]/10 border border-[#7F77DD]/30 text-xs text-white/90 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[#7F77DD] text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t('contact.form.success')}</span>
                    </div>
                    <p className="leading-relaxed">
                      {language === 'es'
                        ? 'Tu solicitud de cotización está lista con los alcances seleccionados. Elige cómo deseas enviárnosla para iniciar el proceso:'
                        : 'Your quotation brief has been structured. Choose your preferred delivery channel below to kick off the project:'}
                    </p>
                  </div>

                  {/* Structured Brief Preview */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white/70 whitespace-pre-line max-h-56 overflow-y-auto">
                    {generateBriefText()}
                  </div>

                  {/* Dispatch buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaEmail}
                      className="flex-1 py-3 px-4 rounded-lg bg-[#F5F5F3] text-[#0F0F0F] hover:bg-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{language === 'es' ? 'Enviar por Correo' : 'Send via Email'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="flex-1 py-3 px-4 rounded-lg bg-[#25D366] text-black hover:bg-[#20ba5a] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>{language === 'es' ? 'Enviar por WhatsApp' : 'Send via WhatsApp'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="py-3 px-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 text-xs font-semibold text-white/80 flex items-center justify-center gap-2 cursor-pointer"
                      title="Copiar texto"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copiedBrief ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? 'Copiar' : 'Copy')}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmissionState('idle')}
                    className="text-xs text-white/50 hover:text-white transition-colors underline block text-center w-full pt-2 cursor-pointer"
                  >
                    {language === 'es' ? 'Editar datos del formulario' : 'Edit form data'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Laura Ramírez"
                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-white/15 focus:border-[#7F77DD]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="laura@empresa.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-white/15 focus:border-[#7F77DD]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Brand & Service Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('contact.form.brand')}
                      </label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="Nombre de tu marca o empresa"
                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.brand ? 'border-rose-500' : 'border-white/15 focus:border-[#7F77DD]'
                        }`}
                      />
                      {errors.brand && <p className="text-[11px] text-rose-400 mt-1">{errors.brand}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('contact.form.service')}
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border text-xs text-white focus:outline-none transition-colors ${
                          errors.serviceCategory ? 'border-rose-500' : 'border-white/15 focus:border-[#7F77DD]'
                        }`}
                      >
                        <option value="">{t('contact.form.servicePlaceholder')}</option>
                        <optgroup label="Diseño Gráfico">
                          <option value="Pieza sencilla ($40.000 COP)">Pieza sencilla ($40.000 COP)</option>
                          <option value="Pieza comercial ($70.000 COP)">Pieza comercial ($70.000 COP)</option>
                          <option value="Pieza especializada ($100.000 COP)">Pieza especializada ($100.000 COP)</option>
                        </optgroup>
                        <optgroup label="Redes Sociales">
                          <option value="Plan Básico Redes ($300.000 COP)">Plan Básico (5 diseños — $300.000 COP)</option>
                          <option value="Plan Intermedio Redes ($440.000 COP)">Plan Intermedio (8 diseños — $440.000 COP)</option>
                          <option value="Plan Avanzado Redes ($600.000 COP)">Plan Avanzado (12 diseños — $600.000 COP)</option>
                        </optgroup>
                        <optgroup label="Identidad Visual">
                          <option value="Identidad Visual Esencial ($650.000 COP)">Identidad Visual Esencial ($650.000 COP)</option>
                        </optgroup>
                        <optgroup label="Diseño Web Lovable">
                          <option value="Landing Page Básica ($600.000 COP)">Landing Page Básica ($600.000 COP)</option>
                          <option value="Landing Page Comercial ($850.000 COP)">Landing Page Comercial ($850.000 COP)</option>
                          <option value="Página Web Empresarial ($1.500.000 COP)">Página Web Empresarial ($1.500.000 COP)</option>
                        </optgroup>
                        <optgroup label="Mantenimiento Web">
                          <option value="Mantenimiento Básico ($50.000 COP/mes)">Mantenimiento Básico ($50.000 COP/mes)</option>
                          <option value="Mantenimiento Integral ($120.000 COP/mes)">Mantenimiento Integral ($120.000 COP/mes)</option>
                        </optgroup>
                        <optgroup label="Producción Audiovisual">
                          <option value="Fotografía básica ($100.000 COP)">Fotografía básica ($100.000 COP)</option>
                          <option value="Vídeo promocional corto ($120.000 COP)">Vídeo promocional corto ($120.000 COP)</option>
                          <option value="Edición de vídeo corto ($80.000 COP)">Edición de vídeo corto ($80.000 COP)</option>
                          <option value="Grabación y edición de vídeo corto ($150.000 COP)">Grabación y edición de vídeo ($150.000 COP)</option>
                          <option value="Producción 360° Insta360 (A cotizar)">Producción 360° Insta360 (A cotizar)</option>
                          <option value="Proyecto especial / Personalizado">Proyecto especial / Personalizado</option>
                        </optgroup>
                      </select>
                      {errors.serviceCategory && <p className="text-[11px] text-rose-400 mt-1">{errors.serviceCategory}</p>}
                    </div>
                  </div>

                  {/* Budget & Desired Delivery Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('contact.form.budget')}
                      </label>
                      <input
                        type="text"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        placeholder={t('contact.form.budgetPlaceholder')}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7F77DD]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        {t('contact.form.date')}
                      </label>
                      <input
                        type="date"
                        value={formData.desiredDeliveryDate}
                        onChange={(e) => setFormData({ ...formData, desiredDeliveryDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/15 text-xs text-white focus:outline-none focus:border-[#7F77DD]"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">
                      {t('contact.form.description')}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder={t('contact.form.descriptionPlaceholder')}
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.projectDescription ? 'border-rose-500' : 'border-white/15 focus:border-[#7F77DD]'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.projectDescription}</p>
                    )}
                  </div>

                  {/* Submission Notice & Buttons */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#F5F5F3] text-[#0F0F0F] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t('contact.form.submit')}</span>
                    </button>
                    
                    <p className="text-[11px] text-white/40 text-center mt-3">
                      {language === 'es'
                        ? 'Al hacer clic, se estructurará tu brief para envío directo a yavimediastudio@gmail.com o WhatsApp. Sin simulaciones ficticias.'
                        : 'Your brief will be formatted for direct transmission to yavimediastudio@gmail.com or WhatsApp. No mock submissions.'}
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
