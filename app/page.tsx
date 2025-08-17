'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { BlogPostsSection } from '@/components/blog-posts-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { portfolioData } from '@/data/portfolio';
import { NavSection } from '@/types';

const sections: NavSection[] = [
  { id: 'hero', label: '홈', href: '#hero' },
  { id: 'about', label: '소개', href: '#about' },
  { id: 'projects', label: '프로젝트', href: '#projects' },
  { id: 'experience', label: '경력', href: '#experience' },
  { id: 'blog', label: '블로그', href: '#blog' },
  { id: 'contact', label: '연락처', href: '#contact' },
];

function Page() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const sections = ['hero', 'about', 'projects', 'experience', 'blog', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleContact() {
    scrollToSection('contact');
  }

  function handleScrollToProjects() {
    scrollToSection('projects');
  }

  return (
    <main className="min-h-screen">
      <Header sections={sections} activeSection={activeSection} />
      
      <HeroSection
        profile={portfolioData.profile}
        onScrollToProjects={handleScrollToProjects}
        onContact={handleContact}
      />
      
      <AboutSection
        stats={portfolioData.stats}
        skills={portfolioData.skills}
      />
      
      <ProjectsSection projects={portfolioData.projects} />
      
      <ExperienceSection experiences={portfolioData.experience} />
      
      <div id="blog">
        <BlogPostsSection posts={portfolioData.posts} />
      </div>
      
      <ContactSection cta={portfolioData.cta} />
      
      <Footer />
    </main>
  );
}

export default Page;

