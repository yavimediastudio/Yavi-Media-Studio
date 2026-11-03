import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { SERVICES_DATA } from '../../data/servicesData';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { STUDIO_CONTACT_INFO } from '../../data/faqData';
import { ProjectModal } from '../common/ProjectModal';
import { PortfolioItem } from '../../types';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Check,
  Layers,
  Palette,
  Layout,
  Video,
  Share2,
} from 'lucide-react';

import heroWorkspaceImg from '../../assets/images/hero_creative_workspace_1793512043090.jpg';

export const HomeView: React.FC = () => {
  const { language, setCurrentPage, t } = useLanguage();

  useEffect(() => {
    updateDocumentHead(t('seo.home.title'), t('seo.home.description'));
  }, [language, t]);

  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  // Featured services subset
  const featuredServices = SERVICES_DATA.filter(
    (s) =>
      s.id === 'graphic-commercial' ||
      s.id === 'brand-essential' ||
      s.id === 'social-intermediate' ||
      s.id === 'web-landing-commercial'
  );

  // Selected works subset
  const featuredProjects = PORTFOLIO_DATA.slice(0, 3);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'visual_identity':
        return <Palette className="w-5 h-5 text-[#7F77DD]" />;
      case 'web_design':
        return <Layout className="w-5 h-5 text-[#7F77DD]" />;
      case 'audiovisual':
        return <Video className="w-5 h-5 text-[#7F77DD]" />;
      case 'social_media':
        return <Share2 className="w-5 h-5 text-[#7F77DD]" />;
      default:
        return <Layers className="w-5 h-5 text-[#7F77DD]" />;
    }
  };

  return (
    <div className="w-full text-[#F5F5F3]">
      
      {/* 1. HERO SECTION (WITH HIGH-END STUDIO AGENCY SHOWCASE) */}
      <section className="relative overflow-hidden border-b border-border bg-[#0F0F0F]">
        {/* Full architectural grid background at exact 20% visibility */}
        <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
        
        <div className="container-site relative py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[72vh]">
            
            {/* Left Column: Eyebrow + Huge Stacked Title + Description + Buttons */}
            <div className="lg:col-span-7 animate-rise z-10">
              {/* Eyebrow badge */}
              <p className="eyebrow mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 shadow-[0_0_8px_#7F77DD]" />
                <span className="text-muted-foreground font-semibold">
                  {language === 'es' ? 'ESTUDIO CREATIVO INDEPENDIENTE' : 'INDEPENDENT CREATIVE STUDIO'}
                </span>
              </p>

              {/* Stacked Headline */}
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl xl:text-9xl leading-[0.9] tracking-tight">
                <span className="text-foreground block">
                  Ideas<br />
                  que<br />
                  toman<br />
                  forma.
                </span>
                <span className="text-muted-foreground/50 block mt-2 sm:mt-3">
                  Marcas<br />
                  que<br />
                  dejan<br />
                  huella.
                </span>
              </h1>

              {/* Description text */}
              <p className="mt-8 max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                {language === 'es'
                  ? 'Somos un estudio creativo independiente que transforma ideas en soluciones visuales y digitales. Diseñamos marcas, desarrollamos experiencias web y creamos comunicación visual para negocios que quieren avanzar.'
                  : 'We are an independent creative studio that turns ideas into visual and digital solutions. We design brands, build web experiences and create visual communication for businesses ready to move forward.'}
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setCurrentPage('services')}
                  className="btn-ghost"
                >
                  {language === 'es' ? 'Explorar servicios' : 'Explore services'}
                </button>

                <button
                  onClick={() => setCurrentPage('contact')}
                  className="btn-primary"
                >
                  <span>{language === 'es' ? 'Iniciar un proyecto' : 'Start a project'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Yavi Media Studio Agency Visual Showcase */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-rise" style={{ animationDelay: '150ms' }}>
              {/* Ambient studio glow background */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-purple-600/10 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Architectural Card Container */}
              <div className="relative rounded-2xl border border-white/15 bg-[#141414]/90 p-3 sm:p-4 shadow-2xl backdrop-blur-md">
                {/* Header sub-bar with studio indicator */}
                <div className="flex items-center justify-between pb-3 px-1 text-xs text-muted-foreground border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="font-mono text-[11px] tracking-wider uppercase text-[#F5F5F3]">
                      YAVI MEDIA STUDIO
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground/80">
                    BARRANQUILLA · COL
                  </span>
                </div>

                {/* Main Photograph Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] group">
                  {!heroImgFailed ? (
                    <img
                      src={heroWorkspaceImg}
                      alt={language === 'es' ? 'Yavi Media Studio — Agencia creativa y espacio de trabajo' : 'Yavi Media Studio — Creative agency and workspace'}
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImgFailed(true)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#18181B] to-[#09090B] text-center">
                      <Palette className="w-10 h-10 text-primary mb-3" />
                      <p className="font-display font-bold text-foreground text-sm uppercase tracking-wider">Yavi Media Studio</p>
                      <p className="text-xs text-muted-foreground mt-1">Creative Agency & Visual Production</p>
                    </div>
                  )}

                  {/* Gradient Scrim for readable overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Right Badge: Studio Status */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-sm">
                      <Sparkles className="w-3 h-3 text-[#7F77DD]" />
                      <span>{language === 'es' ? 'Estudio Creativo' : 'Creative Studio'}</span>
                    </span>
                  </div>

                  {/* Bottom Text inside the image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between gap-3 text-white">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-white drop-shadow-md">
                        {language === 'es' ? 'Diseño de Marca & Estrategia Visual' : 'Brand Identity & Visual Strategy'}
                      </p>
                      <p className="text-[11px] text-white/70 drop-shadow-sm mt-0.5">
                        {language === 'es' ? 'Dirección de arte · Producción digital · Web' : 'Art direction · Digital production · Web'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer caption line */}
                <div className="mt-3 pt-2.5 px-1 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                  <span className="tracking-widest uppercase">
                    {language === 'es' ? 'LA RESOLUCIÓN DE LO APRENDIDO' : 'TURNING IDEAS INTO SOLUTIONS'}
                  </span>
                  <span className="text-[#7F77DD] font-semibold">
                    EST. 2024
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRESENTACIÓN BREVE DEL ESTUDIO */}
      <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD]">
              {t('home.aboutSummary.tag')}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F5F3] leading-snug">
              {t('home.aboutSummary.title')}
            </h2>
            <div className="mt-6 space-y-4 text-base text-white/70 leading-relaxed">
              <p>{t('home.aboutSummary.p1')}</p>
              <p>{t('home.aboutSummary.p2')}</p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => setCurrentPage('about')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F5F3] hover:text-[#7F77DD] transition-colors cursor-pointer"
              >
                <span>{t('home.aboutSummary.link')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS DESTACADOS CON PRECIOS OFICIALES EN COP */}
      <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD]">
                {t('home.featuredServices.tag')}
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F5F3]">
                {t('home.featuredServices.title')}
              </h2>
              <p className="mt-2 text-sm text-white/60">
                {t('home.featuredServices.subtitle')}
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F5F3] hover:text-[#7F77DD] transition-colors cursor-pointer self-start md:self-auto shrink-0"
            >
              <span>{t('home.featuredServices.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="studio-card flex flex-col justify-between p-7 rounded-2xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7F77DD]">
                      {service.category === 'visual_identity'
                        ? 'Branding'
                        : service.category === 'web_design'
                        ? 'Lovable Web'
                        : service.category === 'social_media'
                        ? 'Redes Sociales'
                        : 'Diseño Gráfico'}
                    </span>
                    {service.popular && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-white/80 bg-white/10 px-2 py-0.5 rounded border border-white/15">
                        {t('services.card.popular')}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F3] mb-2 group-hover:text-[#7F77DD] transition-colors">
                    {service.name[language]}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">
                    {service.shortDescription[language]}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block">
                      {t('services.card.includes')}
                    </span>
                    <ul className="space-y-2 text-xs text-white/70">
                      {service.includes[language].slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#7F77DD] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.08] mt-auto">
                  <div className="mb-4">
                    <span className="text-2xl font-extrabold text-[#F5F5F3] tabular-nums tracking-tight block">
                      {service.formattedPrice[language]}
                    </span>
                    {service.unit && (
                      <span className="text-[11px] text-white/45 font-medium">
                        {service.unit[language]}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white hover:text-black border border-white/10 text-xs font-semibold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group/btn"
                  >
                    <span>{t('services.card.quote')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROYECTOS SELECCIONADOS (Lovable Studio Style) */}
      <section className="py-20 lg:py-28 border-b border-border bg-background">
        <div className="container-site">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />
                {t('home.selectedProjects.tag')}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-display">
                {t('home.selectedProjects.title')}
              </h2>
              <p className="mt-3 text-base text-muted-foreground max-w-xl font-normal leading-relaxed">
                {t('home.selectedProjects.subtitle')}
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('portfolio')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer self-start md:self-auto shrink-0"
            >
              <span>{t('home.selectedProjects.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Selected Projects Grid (Exact Lovable ProjectCard style) */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_DATA.slice(0, 6).map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group block cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-mono text-muted-foreground border border-border">
                    {project.year}
                  </div>
                  {project.client && (
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-foreground border border-border/80">
                      {project.client}
                    </div>
                  )}
                </div>

                <p className="eyebrow mt-4">
                  {project.categoryLabel[language]}
                </p>

                <h3 className="mt-1 text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description[language]}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DIFERENCIALES DEL ESTUDIO */}
      <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD]">
              {t('home.differentials.tag')}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F5F3]">
              {t('home.differentials.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="studio-card p-7 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-3">01.</span>
              <h3 className="text-base font-bold text-[#F5F5F3] mb-2">
                {t('home.diff1.title')}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t('home.diff1.desc')}
              </p>
            </div>

            <div className="studio-card p-7 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-3">02.</span>
              <h3 className="text-base font-bold text-[#F5F5F3] mb-2">
                {t('home.diff2.title')}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t('home.diff2.desc')}
              </p>
            </div>

            <div className="studio-card p-7 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-3">03.</span>
              <h3 className="text-base font-bold text-[#F5F5F3] mb-2">
                {t('home.diff3.title')}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t('home.diff3.desc')}
              </p>
            </div>

            <div className="studio-card p-7 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-3">04.</span>
              <h3 className="text-base font-bold text-[#F5F5F3] mb-2">
                {t('home.diff4.title')}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {t('home.diff4.desc')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROCESO DE TRABAJO */}
      <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD]">
                {t('home.processSummary.tag')}
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F5F3]">
                {t('home.processSummary.title')}
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('process')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F5F3] hover:text-[#7F77DD] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>{t('home.processSummary.link')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="studio-card p-6 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-2">Fase 01</span>
              <h4 className="text-sm font-bold text-white mb-1.5">{t('home.processSummary.step1')}</h4>
              <p className="text-xs text-white/55 leading-relaxed">{t('process.step1.desc')}</p>
            </div>

            <div className="studio-card p-6 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-2">Fase 02</span>
              <h4 className="text-sm font-bold text-white mb-1.5">{t('home.processSummary.step2')}</h4>
              <p className="text-xs text-white/55 leading-relaxed">{t('process.step2.desc')}</p>
            </div>

            <div className="studio-card p-6 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-2">Fase 03 & 04</span>
              <h4 className="text-sm font-bold text-white mb-1.5">{t('home.processSummary.step4')}</h4>
              <p className="text-xs text-white/55 leading-relaxed">{t('process.step4.desc')}</p>
            </div>

            <div className="studio-card p-6 rounded-2xl">
              <span className="text-xs font-bold text-[#7F77DD] block mb-2">Fase 05 – 07</span>
              <h4 className="text-sm font-bold text-white mb-1.5">{t('home.processSummary.step7')}</h4>
              <p className="text-xs text-white/55 leading-relaxed">{t('process.step7.desc')}</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. LLAMADO A LA ACCIÓN (CTA) */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/15 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7F77DD]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F3] [text-wrap:balance]">
              {t('home.cta.title')}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              {t('home.cta.desc')}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#F5F5F3] text-[#0A0A0A] hover:bg-white transition-all shadow-xl hover:shadow-[#7F77DD]/25 cursor-pointer"
              >
                {t('home.cta.btnForm')}
              </button>
              
              <button
                onClick={() => setCurrentPage('services')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/[0.04] text-[#F5F5F3] border border-white/15 hover:border-white/40 hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                {t('nav.exploreServices')}
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs text-white/50 flex flex-wrap items-center justify-center gap-2">
              <span>{t('brand.location')}</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <a
                href={`https://wa.me/${STUDIO_CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline"
              >
                WhatsApp: {STUDIO_CONTACT_INFO.whatsappDisplay}
              </a>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="text-[#7F77DD]">yavimediastudio@gmail.com</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span>Garantía oficial de 5 días hábiles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal viewer for projects */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onQuoteSimilar={(title) => {
          sessionStorage.setItem('yavi_quote_ref', title);
          setCurrentPage('contact');
        }}
      />
    </div>
  );
};
