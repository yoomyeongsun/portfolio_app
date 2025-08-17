import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  profile: {
    name: "MATAXO",
    title: "디지털 마케팅 전문가",
    location: "서울, 대한민국",
    email: "contact@mataxo.com",
    headline: "데이터 기반의 성장을 이끄는 마케터",
    subcopy: "창의적 아이디어와 데이터 분석을 결합하여 브랜드의 성장을 만들어갑니다."
  },
  stats: [
    { label: "마케팅 경력", value: 6, suffix: "년+" },
    { label: "성공한 캠페인", value: 120, suffix: "개+" },
    { label: "파트너 브랜드", value: 35, suffix: "곳+" },
    { label: "총 매출 기여", value: 50, suffix: "억+" }
  ],
  skills: [
    {
      category: "디지털 마케팅",
      items: [
        { name: "Google Ads", level: "Advanced" },
        { name: "Facebook Ads", level: "Advanced" },
        { name: "SEO/SEM", level: "Advanced" },
        { name: "Content Marketing", level: "Proficient" },
        { name: "Email Marketing", level: "Proficient" },
        { name: "Influencer Marketing", level: "Familiar" }
      ]
    },
    {
      category: "데이터 분석",
      items: [
        { name: "Google Analytics", level: "Advanced" },
        { name: "Google Tag Manager", level: "Advanced" },
        { name: "Facebook Analytics", level: "Proficient" },
        { name: "Hotjar", level: "Proficient" },
        { name: "SQL", level: "Familiar" },
        { name: "Tableau", level: "Familiar" }
      ]
    },
    {
      category: "도구 & 플랫폼",
      items: [
        { name: "HubSpot", level: "Advanced" },
        { name: "Mailchimp", level: "Proficient" },
        { name: "Canva", level: "Proficient" },
        { name: "Figma", level: "Advanced" },
        { name: "Slack", level: "Familiar" },
        { name: "Notion", level: "Familiar" }
      ]
    }
  ],
  projects: [
    {
      id: "brand-rebranding-campaign",
      title: "글로벌 브랜드 리브랜딩 캠페인",
      role: "마케팅 디렉터",
      period: "2024.01–2024.06",
      tech: ["Google Ads", "Facebook Ads", "Instagram", "YouTube"],
      metrics: [
        { label: "브랜드 인지도 향상", value: "+85%" },
        { label: "소셜 참여율", value: "+127%" },
        { label: "매출 증가", value: "+45%" }
      ],
      caseStudy: {
        problem: "침체된 브랜드 이미지와 낮은 Z세대 인지도",
        approach: "데이터 기반 타겟팅과 크리에이티브 스토리텔링을 통한 통합 마케팅",
        impact: "브랜드 인지도 85% 상승, 소셜 참여율 127% 증가, 매출 45% 성장",
        links: [
          { label: "Case Study", href: "https://mataxo.notion.site/brand-rebranding-case-study" },
          { label: "Live", href: "https://example-brand.com" }
        ],
        confidentiality: "NDA"
      }
    },
    {
      id: "performance-marketing-optimization",
      title: "퍼포먼스 마케팅 최적화",
      role: "성과 마케팅 매니저",
      period: "2023.08–2023.12",
      tech: ["Google Analytics", "Facebook Pixel", "Google Tag Manager", "HubSpot"],
      metrics: [
        { label: "ROAS 개선", value: "+240%" },
        { label: "CPA 절감", value: "-52%" },
        { label: "전환율 향상", value: "+89%" }
      ],
      caseStudy: {
        problem: "높은 광고비 대비 낮은 ROI와 비효율적인 예산 배분",
        approach: "AI 기반 자동화 입찰과 세밀한 오디언스 세그멘테이션 적용",
        impact: "ROAS 240% 개선, CPA 52% 절감, 전환율 89% 향상으로 연간 8억 비용 절약",
        links: [
          { label: "Demo", href: "https://analytics.mataxo.com" },
          { label: "Case Study", href: "https://mataxo.notion.site/performance-marketing-optimization" }
        ],
        confidentiality: "Public"
      }
    },
    {
      id: "content-marketing-strategy",
      title: "콘텐츠 마케팅 전략",
      role: "콘텐츠 마케팅 스페셜리스트",
      period: "2023.03–2023.07",
      tech: ["SEO Tools", "Canva", "YouTube Studio", "Instagram Creator Studio"],
      metrics: [
        { label: "오가닉 트래픽", value: "+320%" },
        { label: "브랜드 멘션", value: "+180%" },
        { label: "리드 생성", value: "+95%" }
      ],
      caseStudy: {
        problem: "낮은 오가닉 도달률과 브랜드 스토리텔링 부족",
        approach: "SEO 최적화된 교육 콘텐츠와 인터랙티브 소셜 캠페인 개발",
        impact: "오가닉 트래픽 320% 증가, 브랜드 멘션 180% 상승, 리드 생성 95% 향상",
        links: [
          { label: "Demo", href: "https://content.mataxo.com" },
          { label: "Case Study", href: "https://mataxo.notion.site/content-marketing-strategy" }
        ],
        confidentiality: "Public"
      }
    }
  ],
  experience: [
    {
      org: "글로벌 유니콘 기업",
      title: "시니어 마케팅 매니저",
      period: "2022.03–현재",
      bullets: [
        "연간 30억 광고 예산 관리 및 ROAS 250% 달성",
        "다채널 퍼포먼스 마케팅 전략 수립으로 신규 고객 200% 증가",
        "마케팅 자동화 시스템 도입으로 업무 효율성 60% 향상"
      ]
    },
    {
      org: "이커머스 스타트업",
      title: "퍼포먼스 마케팅 스페셜리스트",
      period: "2020.06–2022.02",
      bullets: [
        "Facebook/Google 광고 운영으로 월 매출 15억 달성",
        "데이터 기반 고객 세그멘테이션으로 전환율 85% 향상",
        "크리에이티브 A/B 테스트 프로세스 구축으로 광고 성과 최적화"
      ]
    },
    {
      org: "디지털 마케팅 에이전시",
      title: "주니어 마케터",
      period: "2019.09–2020.05",
      bullets: [
        "20개 이상 클라이언트 소셜미디어 마케팅 관리",
        "콘텐츠 기획 및 제작으로 평균 참여율 120% 향상",
        "SEO 최적화를 통한 오가닉 트래픽 300% 증가 달성"
      ]
    }
  ],
  testimonials: [
    {
      quote: "탁월한 마케팅 전략과 실행력을 보여준 최고의 마케터입니다. ROI 목표를 훨씬 초과 달성했습니다.",
      author: "김비즈니스",
      role: "비즈니스 디렉터",
      org: "글로벌 유니콘 기업"
    },
    {
      quote: "데이터 기반의 정확한 분석과 창의적인 아이디어로 브랜드 성장을 이끌어주었습니다.",
      author: "박브랜드",
      role: "브랜드 매니저",
      org: "럭셔리 패션 브랜드"
    }
  ],
  posts: [
    {
      title: "2025년 디지털 마케팅 트렌드 전망",
      summary: "AI와 개인화가 주도하는 내년 마케팅 환경 변화와 대응 전략을 제시합니다.",
      date: "2024-02-15",
      href: "https://blog.mataxo.com/2025-digital-marketing-trends"
    },
    {
      title: "ROAS 극대화를 위한 퍼포먼스 마케팅 가이드",
      summary: "실제 캠페인 사례를 통해 본 광고 성과 최적화 방법론",
      date: "2024-01-20",
      href: "https://blog.mataxo.com/roas-optimization-guide"
    },
    {
      title: "브랜드 스토리텔링의 힘: 감정 마케팅 전략",
      summary: "고객의 마음을 움직이는 브랜드 서사 구축과 콘텐츠 마케팅 실무",
      date: "2023-12-10",
      href: "https://blog.mataxo.com/brand-storytelling-strategy"
    }
  ],
  cta: {
    email: "contact@mataxo.com",
    socials: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/mataxo-marketing" },
      { name: "Twitter", href: "https://twitter.com/mataxo_mkting" },
      { name: "GitHub", href: "https://github.com/mataxo" }
    ]
  }
};
