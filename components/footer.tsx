'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: '홈', href: '#hero' },
    { label: '소개', href: '#about' },
    { label: '프로젝트', href: '#projects' },
    { label: '경력', href: '#experience' },
    { label: '연락처', href: '#contact' },
  ];

  const legalLinks = [
    { label: '개인정보처리방침', href: '/privacy-policy' },
    { label: '이용약관', href: '/terms-of-service' },
    { label: '쿠키 정책', href: '/cookie-policy' },
  ];

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <footer className="bg-neutral-900 text-neutral-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative">
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors z-10"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold">MATAXO</h3>
              <p className="text-neutral-400 max-w-md leading-relaxed">
                <span className="text-deep-green font-semibold">AI데이터</span> 기반의 성장을 이끄는 디지털 마케팅 전문가입니다. 
                창의적 아이디어와 분석력으로 브랜드의 성공을 만들어갑니다.
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>using Next.js & TypeScript</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg">빠른 이동</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg">법적 고지</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-neutral-500">
              © {currentYear} MATAXO. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <span>v1.0.0</span>
              <span>•</span>
              <span>Build #{Math.random().toString(36).substr(2, 7)}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
