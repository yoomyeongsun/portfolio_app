'use client';

import { motion } from 'framer-motion';
import { Building, Calendar } from 'lucide-react';

interface TimelineItemProps {
  org: string;
  title: string;
  period: string;
  bullets: string[];
  index: number;
  isLast: boolean;
}

export function TimelineItem({ org, title, period, bullets, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2
      }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-12 w-0.5 h-full bg-neutral-200 dark:bg-neutral-700" />
      )}
      
      {/* Timeline dot */}
      <motion.div
        className="absolute left-2 top-6 w-4 h-4 bg-primary-600 border-4 border-background rounded-full shadow-md"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 500 }}
      />

      {/* Content */}
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Calendar className="w-4 h-4" />
              {period}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
            <Building className="w-4 h-4" />
            <span className="font-semibold">{org}</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          {bullets.map((bullet, bulletIndex) => (
            <motion.div
              key={bulletIndex}
              className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2 + bulletIndex * 0.1 + 0.5,
                duration: 0.4
              }}
            >
              <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2.5 flex-shrink-0" />
              <p className="leading-relaxed">{bullet}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

