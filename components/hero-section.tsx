'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { Profile } from '@/types';

interface HeroSectionProps {
  profile: Profile;
  onScrollToProjects: () => void;
  onContact: () => void;
}

export function HeroSection({ profile, onScrollToProjects, onContact }: HeroSectionProps) {
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

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-primary-950 dark:via-background dark:to-accent-950" />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 blur-xl"
          variants={floatingVariants}
          animate="floating"
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-accent-200 dark:bg-accent-800 rounded-full opacity-20 blur-xl"
          variants={floatingVariants}
          animate="floating"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary-300 dark:bg-primary-700 rounded-full opacity-20 blur-xl"
          variants={floatingVariants}
          animate="floating"
          transition={{ delay: 2 }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.neutral.100)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.100)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.neutral.800)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.800)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <motion.div
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-4xl lg:text-5xl font-bold text-primary-600">
                  {profile.name.charAt(0)}
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 500 }}
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
                {profile.headline}
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              {profile.subcopy}
            </p>
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full" />
              {profile.title}
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-500 rounded-full" />
              {profile.location}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.button
              onClick={onContact}
              className="group flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              연락하기
            </motion.button>
            
            <motion.button
              onClick={onScrollToProjects}
              className="group flex items-center gap-3 bg-background border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              프로젝트 보기
            </motion.button>
            
            <motion.button
              className="group flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 px-4 py-2 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              이력서 다운로드
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-neutral-400 cursor-pointer group"
            onClick={onScrollToProjects}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-sm font-medium group-hover:text-primary-600 transition-colors">
              아래로 스크롤
            </span>
            <ArrowDown className="w-5 h-5 group-hover:text-primary-600 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

