'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ProjectCard } from './project-card';
import { ProjectModal } from './project-modal';
import { Project } from '@/types';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenProject(project: Project) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <section id="projects" className="py-20 lg:py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 dark:bg-primary-900 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-100 dark:bg-accent-900 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <span className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
                Portfolio
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
                주요 프로젝트
                <br />
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  성과와 함께
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                다양한 브랜드와 함께한 마케팅 캠페인들입니다. 각 프로젝트마다 직면한 도전과 전략적 접근, 
                그리고 달성한 비즈니스 성과를 확인하실 수 있습니다.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={handleOpenProject}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              variants={itemVariants}
              className="text-center pt-8"
            >
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                더 많은 프로젝트와 상세 정보는 포트폴리오 문서에서 확인하실 수 있습니다.
              </p>
              <motion.a
                href="https://portfolio.mataxo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                전체 포트폴리오 보기
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
