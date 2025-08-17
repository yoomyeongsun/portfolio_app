export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  avatar?: string;
  headline: string;
  subcopy: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Familiar';
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: 'Demo' | 'Repo' | 'Live' | 'Case Study';
  href: string;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  impact: string;
  links: ProjectLink[];
  confidentiality: 'Public' | 'NDA';
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  tech: string[];
  thumb?: string;
  metrics: ProjectMetric[];
  caseStudy: CaseStudy;
}

export interface Experience {
  org: string;
  title: string;
  period: string;
  bullets: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  org: string;
  avatar?: string;
}

export interface Post {
  title: string;
  summary: string;
  date: string;
  href: string;
}

export interface Social {
  name: string;
  href: string;
}

export interface CTA {
  email: string;
  socials: Social[];
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  testimonials: Testimonial[];
  posts: Post[];
  cta: CTA;
}

export interface NavSection {
  id: string;
  label: string;
  href: string;
}

