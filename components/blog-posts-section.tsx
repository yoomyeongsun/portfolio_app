'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { Post } from '@/types';

interface BlogPostsSectionProps {
  posts: Post[];
}

export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
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
      transition: { duration: 0.6,  }
    }
  };

  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-100 dark:bg-accent-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-100 dark:bg-primary-900 rounded-full opacity-20 blur-3xl" />
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
            <span className="inline-block px-4 py-2 bg-accent-50 dark:bg-accent-950 text-accent-600 dark:text-accent-400 rounded-full text-sm font-semibold">
              Insights
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              마케팅
              <br />
              <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                인사이트
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              마케팅 트렌드와 실무 노하우를 공유합니다. 데이터와 경험을 바탕으로 한 
              깊이 있는 마케팅 인사이트를 만나보세요.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.href}
                className="group bg-background border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="p-6 space-y-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Read More Link */}
                  <motion.a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    읽어보기
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Blog Link */}
          <motion.div 
            variants={itemVariants}
            className="text-center pt-8"
          >
            <motion.a
              href="https://blog.mataxo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-950/30 dark:to-primary-950/30 border border-accent-200 dark:border-accent-800 hover:border-accent-300 dark:hover:border-accent-700 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              블로그 더 보기
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

