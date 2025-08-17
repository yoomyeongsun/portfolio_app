'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Familiar';
  delay?: number;
}

export function SkillBadge({ name, level, delay = 0 }: SkillBadgeProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800';
      case 'Proficient':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
      case 'Familiar':
        return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800';
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700';
    }
  };

  const getLevelDots = (level: string) => {
    const dots = [];
    const count = level === 'Advanced' ? 3 : level === 'Proficient' ? 2 : 1;
    
    for (let i = 0; i < 3; i++) {
      dots.push(
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i < count
              ? level === 'Advanced'
                ? 'bg-emerald-500'
                : level === 'Proficient'
                ? 'bg-blue-500'
                : 'bg-amber-500'
              : 'bg-neutral-300 dark:bg-neutral-600'
          }`}
        />
      );
    }
    return dots;
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${getLevelColor(level)}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <span>{name}</span>
      <div className="flex items-center gap-1">
        {getLevelDots(level)}
      </div>
    </motion.div>
  );
}

