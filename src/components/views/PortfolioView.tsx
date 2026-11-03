import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { updateDocumentHead } from '../../utils/seo';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { PortfolioItem, PortfolioCategory } from '../../types';
import { ProjectModal } from '../common/ProjectModal';
import { ArrowRight, Search, SlidersHorizontal, X, RotateCcw } from 'lucide-react';

type SortOption = 'featured' | 'newest' | 'alpha';

export const PortfolioView: React.FC = () => {
  const { language, setCurrentPage, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const title = selectedProject
      ? `${selectedProject.title} – ${t('seo.portfolio.title')}`
      : t('seo.portfolio.title');
    const description = selectedProject
      ? selectedProject.description[language]
      : t('seo.portfolio.description');
    updateDocumentHead(title, description);
  }, [language, selectedProject, t]);

  // Categories matching yavi-creative-studio.lovable.app
  const categoryFilters: { id: PortfolioCategory; labelKey: string }[] = [
    { id: 'all', labelKey: 'portfolio.filter.all' },
    { id: 'visual_identity', labelKey: 'portfolio.filter.branding' },
    { id: 'graphic_design', labelKey: 'portfolio.filter.graphic' },
    { id: 'social_media', labelKey: 'portfolio.filter.social' },
    { id: 'web_design', labelKey: 'portfolio.filter.web' },
    { id: 'illustration', labelKey: 'portfolio.filter.illustration' },
    { id: 'audiovisual', labelKey: 'portfolio.filter.audiovisual' },
  ];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      const titleMatch = project.title.toLowerCase().includes(query);
      const descMatch = project.description[language].toLowerCase().includes(query);
      const roleMatch = project.studioRole[language].toLowerCase().includes(query);
      const catMatch = project.categoryLabel[language].toLowerCase().includes(query);
      return titleMatch || descMatch || roleMatch || catMatch;
    });
  }, [activeCategory, searchQuery, language]);

  const sortedProjects = useMemo(() => {
    const list = [...filteredProjects];
    if (sortBy === 'newest') {
      return list.sort((a, b) => Number(b.year) - Number(a.year));
    }
    if (sortBy === 'alpha') {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [filteredProjects, sortBy]);

  const isFiltered = activeCategory !== 'all' || searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="w-full text-foreground">
      
      {/* 1. Header (PageHeader from yavi-creative-studio.lovable.app) */}
      <section className="grid-lines border-b border-border">
        <div className="container-site animate-rise py-20 md:py-28">
          <p className="eyebrow mb-6">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />
            {language === 'es' ? 'Portafolio' : 'Portfolio'}
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl font-display">
            {language === 'es' ? 'Trabajo con criterio.' : 'Work with judgment.'}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {language === 'es'
              ? 'Una selección de proyectos desarrollados por el estudio.'
              : 'A selection of projects developed by the studio.'}
          </p>
        </div>
      </section>

      {/* 2. Main Portfolio Section */}
      <section className="container-site py-16 md:py-24">
        
        {/* Category Pill Filters (Lovable pill styling) */}
        <div className="mb-10 flex flex-wrap items-center gap-2" role="tablist">
          {categoryFilters.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-foreground bg-foreground text-background font-semibold shadow-sm'
                    : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/40'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Search, Sort and Results feedback bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>
              {language === 'es' ? 'Mostrando' : 'Showing'}{' '}
              <strong className="text-foreground font-mono">{sortedProjects.length}</strong>{' '}
              {language === 'es' ? 'proyectos' : 'projects'}
            </span>
            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="ml-2 inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                {language === 'es' ? 'Restablecer filtros' : 'Reset filters'}
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Live Search */}
            <div className="relative min-w-[200px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'es' ? 'Buscar proyectos...' : 'Search projects...'}
                className="w-full pl-8.5 pr-8 py-1.5 rounded-full bg-card border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-3.5 py-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <label htmlFor="portfolio-sort" className="text-xs text-muted-foreground shrink-0">
                {language === 'es' ? 'Ordenar:' : 'Sort:'}
              </label>
              <select
                id="portfolio-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent text-xs text-foreground font-medium focus:outline-none cursor-pointer pr-1"
              >
                <option value="featured" className="bg-[#181818] text-foreground">
                  {language === 'es' ? 'Destacados' : 'Featured'}
                </option>
                <option value="newest" className="bg-[#181818] text-foreground">
                  {language === 'es' ? 'Más recientes' : 'Newest'}
                </option>
                <option value="alpha" className="bg-[#181818] text-foreground">
                  {language === 'es' ? 'Alfabético' : 'Alphabetical'}
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Gallery Grid (ProjectCard from yavi-creative-studio.lovable.app) */}
        {sortedProjects.length === 0 ? (
          <p className="max-w-xl rounded-lg border border-dashed border-border p-8 text-muted-foreground">
            {language === 'es'
              ? 'Aún no hay proyectos publicados en esta categoría. Estamos curando la selección del estudio.'
              : "No projects published in this category yet. We're curating the studio's selection."}
          </p>
        ) : (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group block cursor-pointer"
              >
                {/* 4:3 Aspect Ratio Card as in Lovable */}
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-mono text-muted-foreground border border-border">
                    {project.year}
                  </div>
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
        )}

      </section>

      {/* 3. Final Call to Action Banner (Exact replica of Ed from yavi-creative-studio.lovable.app) */}
      <section className="container-site py-20 border-t border-border">
        <div className="relative overflow-hidden rounded-2xl bg-paper px-8 py-16 text-paper-foreground md:px-16">
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-primary/80 pointer-events-none"
            aria-hidden="true"
          />
          <h2 className="relative max-w-2xl text-3xl font-extrabold md:text-5xl font-display tracking-tight leading-tight">
            {language === 'es' ? '¿Quieres un proyecto como este?' : 'Want a project like this?'}
          </h2>
          <p className="relative mt-4 text-sm md:text-base text-paper-foreground/75 max-w-xl leading-relaxed">
            {language === 'es'
              ? 'Hablemos de tus objetivos y transformemos la comunicación visual de tu marca con criterio y profesionalismo.'
              : 'Let’s talk about your goals and elevate your visual communication with purpose and craftsmanship.'}
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-paper-foreground px-6 py-3 font-semibold text-paper transition-transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
          >
            <span>{language === 'es' ? 'Solicitar cotización' : 'Request a custom quote'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onQuoteSimilar={(title) => {
          sessionStorage.setItem('yavi_quote_ref', title);
          setCurrentPage('contact');
        }}
      />
    </div>
  );
};
