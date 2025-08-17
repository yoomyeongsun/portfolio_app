'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Globe, FileText, Lock } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const isNDA = project.caseStudy.confidentiality === 'NDA';

  const getLinkIcon = (label: string) => {
    switch (label) {
      case 'Demo':
        return <Globe className="w-4 h-4" />;
      case 'Repo':
        return <Github className="w-4 h-4" />;
      case 'Live':
        return <ExternalLink className="w-4 h-4" />;
      case 'Case Study':
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-background border border-neutral-200 dark:border-neutral-800 rounded-3xl z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <span>{project.role}</span>
                    <span>•</span>
                    <span>{project.period}</span>
                    {isNDA && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-amber-600">
                          <Lock className="w-3 h-3" />
                          비공개
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-8">
                  {/* Project Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl overflow-hidden">
                    {isNDA && (
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 flex items-center justify-center">
                        <div className="text-center">
                          <Lock className="w-12 h-12 mx-auto mb-3 text-white/80" />
                          <p className="text-white/80 font-medium">비공개 프로젝트</p>
                          <p className="text-white/60 text-sm mt-1">상세 내용은 요청 시 공유 가능합니다</p>
                        </div>
                      </div>
                    )}
                    <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-primary-600/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">프로젝트 상세</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary-600">문제 정의</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {project.caseStudy.problem}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-accent-600">접근 방법</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {project.caseStudy.approach}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-emerald-600">성과 및 임팩트</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {project.caseStudy.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">기술 스택</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 font-medium rounded-full border border-primary-200 dark:border-primary-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {!isNDA && project.caseStudy.links.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">관련 링크</h3>
                      <div className="flex flex-wrap gap-3">
                        {project.caseStudy.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors"
                          >
                            {getLinkIcon(link.label)}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {isNDA && (
                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                            비공개 프로젝트
                          </h4>
                          <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                            이 프로젝트는 기밀 유지 협약(NDA)에 따라 상세 내용을 공개할 수 없습니다. 
                            더 자세한 정보가 필요하시면 별도로 문의해 주세요.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

