'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from './timeline-item';
import { Experience } from '@/types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="experience" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-100 dark:bg-accent-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-100 dark:bg-primary-900 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <span className="inline-block px-4 py-2 bg-accent-50 dark:bg-accent-950 text-accent-600 dark:text-accent-400 rounded-full text-sm font-semibold">
              Experience
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              경력과
              <br />
              <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                성장 스토리
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              다양한 환경에서의 경험을 통해 마케팅 역량과 문제 해결 능력을 키워왔습니다. 
              각 단계에서 이룬 성과와 배운 점들을 소개합니다.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.org}-${index}`}
                org={experience.org}
                title={experience.title}
                period={experience.period}
                bullets={experience.bullets}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center pt-8"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950/30 dark:to-accent-950/30 rounded-2xl border border-primary-100 dark:border-primary-800">
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg mb-1">더 자세한 경력 정보</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  상세한 이력서와 추천서를 다운로드하실 수 있습니다.
                </p>
              </div>
              <motion.button
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                이력서 다운로드
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
