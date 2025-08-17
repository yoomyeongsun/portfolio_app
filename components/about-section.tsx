'use client';

import { motion } from 'framer-motion';
import { StatCounter } from './stat-counter';
import { SkillBadge } from './skill-badge';
import { Stat, SkillCategory } from '@/types';

interface AboutSectionProps {
  stats: Stat[];
  skills: SkillCategory[];
}

export function AboutSection({ stats, skills }: AboutSectionProps) {
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
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-100 dark:bg-accent-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-100 dark:bg-primary-900 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 lg:space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <span className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
              About Me
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              더 나은 디지털 경험을 위한
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                끊임없는 도전
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              고객 중심의 사고와 데이터 기반 분석을 결합하여 의미 있는 성장을 만들어갑니다. 
              복잡한 마케팅 문제를 창의적이고 효과적인 솔루션으로 해결하는 것을 추구합니다.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">주요 성과</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h3 className="text-2xl font-bold text-center">기술 스택</h3>
            <div className="space-y-12">
              {skills.map((category, index) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-center lg:text-left">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {category.items.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={skillIndex * 0.1}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Statement */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950/30 dark:to-accent-950/30 border border-primary-100 dark:border-primary-800"
          >
            <div className="absolute top-4 left-4 text-6xl text-primary-200 dark:text-primary-800 leading-none font-serif">
              &ldquo;
            </div>
            <blockquote className="text-lg lg:text-xl text-center italic text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto mt-8">
              마케팅은 단순한 광고가 아니라 브랜드와 고객 간의 진정한 연결고리라고 믿습니다. 
              데이터로 검증된 전략과 창의적인 스토리텔링을 통해 고객의 마음을 움직이고, 
              브랜드의 지속가능한 성장을 만들어가는 것이 저의 목표입니다.
            </blockquote>
            <div className="text-center mt-6">
              <cite className="text-sm font-semibold text-primary-600">
                - 마케터로서의 철학
              </cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
