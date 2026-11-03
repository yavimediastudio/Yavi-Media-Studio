import React, { useEffect } from 'react';
import { PortfolioItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onQuoteSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onQuoteSimilar,
}) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0F0F0F] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#F5F5F3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 transition-colors text-white/80 hover:text-white cursor-pointer"
          aria-label={t('portfolio.modal.close')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-2">
            <span className="font-semibold text-[#7F77DD]">{project.categoryLabel[language]}</span>
            <span>·</span>
            <span>{project.year}</span>
            {project.client && (
              <>
                <span>·</span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-medium">
                  {language === 'es' ? 'Cliente:' : 'Client:'} {project.client}
                </span>
              </>
            )}
            {project.highlightMetric && (
              <>
                <span>·</span>
                <span className="text-[#F5F5F3]">{project.highlightMetric[language]}</span>
              </>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F3]">
            {project.title}
          </h2>
        </div>

        {/* Project Image */}
        <div className="mt-6 rounded-xl overflow-hidden border border-white/10 bg-black aspect-[16/10] sm:aspect-[16/9] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Gallery if present */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD]">
              {language === 'es' ? 'Vistas y aplicaciones adicionales' : 'Additional views & mockups'}
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {project.gallery.map((g, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={g.src}
                    alt={language === 'es' ? g.alt_es || project.title : g.alt_en || project.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description & Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
                {language === 'es' ? 'Descripción del proyecto' : 'Project Overview'}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {project.description[language]}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
                {t('portfolio.modal.role')}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {project.studioRole[language]}
              </p>
            </div>

            {project.tools && project.tools.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F77DD] mb-2">
                  {language === 'es' ? 'Herramientas y tecnologías' : 'Tools & technologies'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/80">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6 bg-white/[0.03] p-5 rounded-xl border border-white/10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-3">
                {t('portfolio.modal.services')}
              </h3>
              <ul className="space-y-2 text-xs text-white/70">
                {project.servicesDone[language].map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7F77DD] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.deliverables && (
              <div className="pt-3 border-t border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-2">
                  {t('portfolio.modal.deliverables')}
                </h3>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-white/60">
                  {project.deliverables[language].map((d, idx) => (
                    <span key={idx} className="bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.pdfUrl && (
              <div className="pt-3 border-t border-white/10">
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-white/20 bg-white/5 text-white text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  <span>{language === 'es' ? 'Descargar Manual en PDF' : 'Download Brand Manual PDF'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <button
              onClick={() => {
                onQuoteSimilar(project.title);
                onClose();
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#7F77DD] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#6f66cb] transition-colors cursor-pointer"
            >
              <span>{t('portfolio.modal.cta')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
