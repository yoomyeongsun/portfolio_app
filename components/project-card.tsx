'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Eye, Lock } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpen, index }: ProjectCardProps) {
  const isNDA = project.caseStudy.confidentiality === 'NDA';

  return (
    <motion.div
      className="group relative bg-background border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      {/* Project Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 overflow-hidden">
        {isNDA && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-white/80 text-center">
              <Lock className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm font-medium">비공개 프로젝트</span>
            </div>
          </div>
        )}
        
        {/* Placeholder for project image */}
        <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary-600/20">
          {project.title.charAt(0)}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            onClick={() => onOpen(project)}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-5 h-5" />
            자세히 보기
          </motion.button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold leading-tight group-hover:text-primary-600 transition-colors">
              {project.title}
            </h3>
            {!isNDA && project.caseStudy.links.length > 0 && (
              <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors flex-shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-2">
          {project.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-neutral-600 dark:text-neutral-400">{metric.label}</span>
              <span className="font-semibold text-primary-600">{metric.value}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

