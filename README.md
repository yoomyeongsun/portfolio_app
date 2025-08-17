1p 개인 포트폴리오 웹사이트 기능 명세서 (핵심)

1) 목표/범위

목표: 모던하고 전문적인 인상, 신뢰 기반의 컨버전(문의/다운로드/연락) 유도.

범위: 싱글 페이지(스크롤형). 다국어 ko / en(선택). CMS 연동(선택).

2) 전역 요구사항

디자인 톤: 미니멀, 높은 대비, 여백 중심. 다크/라이트 테마 토글.

반응형: Mobile-first. 브레이크포인트: 360 / 768 / 1024 / 1440.

접근성: WCAG 2.1 AA, 키보드 내비, 명확한 포커스, ARIA 라벨.

성능: LCP < 2.5s, CLS < 0.1, TBT < 200ms. 이미지 webp/avif, 폰트 서브셋/프리로드.

SEO/공유: 정적 메타/og:/twitter: 태그, robots.txt, sitemap.xml, Schema.org Person/Portfolio.

국제화(i18n): URL 쿼리/로컬스토리지로 언어 기억. 텍스트 리소스 분리.

분석/마케팅: GA4, 이벤트 트래킹(CTA/문의 제출/프로젝트 썸네일 클릭).

보안/개인정보: HTTPS, 폼 스팸 방지(honeypot/타임스탬프/reCAPTCHA v3(선택)), 개인정보 고지.

3) 정보 구조(섹션 순서 및 필수 요소)

헤더/내비

로고(텍스트/심볼), 언어 토글, 테마 토글, 섹션 앵커 링크.

스크롤 시 축소(fixed) & 섹션 활성 상태 표시.

히어로(퍼스트뷰)

한 줄 가치제안(Headline) + 보조 카피.

주요 CTA: 이메일, 이력서 다운로드, 프로젝트 보기.

프로필 이미지(마스크 처리), 배경 모션(미세 Parallax, 성능 우선).

소개(About)

3-4문장 전문 요약 + 핵심 역량 태그(칩).

핵심 지표(경력 년수/완료 프로젝트/수상 등) 카운터 애니메이션.

스킬/툴

카테고리(기획/UX/프론트/백/DevOps/툴). 숙련도 3단계(Advanced/Proficient/Familiar).

배지 아이콘 + 툴팁.

대표 프로젝트(Works)

카드 그리드(썸네일, 역할, 성과 지표, 사용기술).

상세 모달(문제–접근–성과, 지표/전후 비교, 링크/비공개 표기).

경력/학력

타임라인. 회사/직함/기간/핵심 성과(정량 지표 최소 1개).

추천사/클라이언트(선택)

캐러셀. 이름/직함/회사 로고, 검증용 링크(선택).

블로그/글 모음(선택)

최근 3개 카드 + 더보기 외부 링크.

CTA/연락

폼(이름/이메일/메시지/목적 드롭다운). 제출 성공/실패 피드백.

소셜 링크(아이콘), 이메일 복사 버튼.

푸터

저작권, 빠른 링크, 법적 고지, 빌드 버전.

4) 상호작용/동작 규칙

스크롤 스파이: 현재 섹션 헤더 링크 활성화.

부드러운 스크롤(감속), prefers-reduced-motion 준수.

이미지 지연 로딩, 모달 ESC/외부클릭 닫힘.

폼 유효성: 실시간(blur), 제출 전 최종 검증. 서버 실패 시 재시도/대체 연락 안내.

5) 컴포넌트 목록(핵심 props 요약)

Header({sections, locale, theme, onLocaleChange, onThemeToggle})

Hero({headline, subcopy, ctas, avatarSrc})

StatCounter({label, value, suffix})

SkillBadge({name, level, icon})

ProjectCard({title, role, metrics, tech, thumb, onOpen})

ProjectModal({id, caseStudy, links, confidentiality})

TimelineItem({title, org, period, bullets})

Testimonial({quote, author, role, org, avatar})

PostCard({title, summary, date, href})

ContactForm({onSubmit}) (스팸 방지 내부 처리)

Footer({links, legal, buildInfo})

6) 데이터 모델(요약 스키마)
{
  "profile": {
    "name": "string",
    "title": "string",
    "location": "string",
    "email": "string",
    "avatar": "url"
  },
  "stats": [{"label": "string", "value": 42, "suffix": "+"}],
  "skills": [{
    "category": "string",
    "items": [{"name": "string", "level": "Advanced|Proficient|Familiar", "icon": "url"}]
  }],
  "projects": [{
    "id": "slug",
    "title": "string",
    "role": "string",
    "period": "YYYY.MM–YYYY.MM",
    "tech": ["string"],
    "thumb": "url",
    "metrics": [{"label": "string", "value": "e.g., +37% CTR"}],
    "caseStudy": {
      "problem": "string",
      "approach": "string",
      "impact": "string",
      "links": [{"label": "Demo|Repo|Live", "href": "url"}],
      "confidentiality": "Public|NDA"
    }
  }],
  "experience": [{
    "org": "string",
    "title": "string",
    "period": "YYYY.MM–YYYY.MM",
    "bullets": ["string", "string"]
  }],
  "testimonials": [{
    "quote": "string",
    "author": "string",
    "role": "string",
    "org": "string",
    "avatar": "url"
  }],
  "posts": [{"title": "string", "summary": "string", "date": "YYYY-MM-DD", "href":"url"}],
  "cta": {"email":"string", "socials":[{"name":"LinkedIn","href":"url"}]}
}

7) 기술 스택/아키텍처(제안)

프론트: Next.js(SSG/ISR), TypeScript, Tailwind, Framer Motion.

이미지: next/image + CDN.

아이콘: Lucide.

폼 처리: 서버리스 함수(API Route) → 이메일 전송(SendGrid 등) + 스토리지(선택).

CMS(선택): Contentlayer/Headless CMS(Sanity/Contentful)로 데이터 분리.

배포: Vercel(캐시/프리페치). 환경변수로 키 관리.

8) 폼/백엔드 요구사항(문의)

필드: name*, email*, purpose(선택), message*.

검증: RFC5322 이메일, 최소 글자수(메시지 20자).

스팸 방지: honeypot hidden, 제출까지 최소 경과시간 체크, reCAPTCHA v3(옵션).

전송: 성공 시 토스트 + 성공 섹션(감사 메시지/다음 단계).

로깅: 익명 메타(ip 해시, UA) 30일 보관(옵션).

9) 성능/품질 기준(수용 조건)

Lighthouse Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95(모바일 기준).

이미지 Largest Contentful Paint 요소 120KB 이하.

주요 인터랙션(INP) p75 < 200ms.

404/500 사용자 친화 페이지 제공.

10) 트래킹 이벤트 정의

click_hero_cta {cta_id}

open_project {project_id}

submit_contact {status: success|fail}

toggle_theme {mode}

change_language {locale}

11) 상태/예외 처리

네트워크 오류: 폼 재시도 버튼, 수동 메일 링크 제공.

비공개 프로젝트: 썸네일 블러 + “요청 시 상세 공유” 안내.

오프라인: PWA 설치(선택), 오프라인 배너.

12) 텍스트/콘텐츠 가이드(핵심)

헤드라인: 12~16자 이내 핵심 가치 제안.

프로젝트: 문제–행동–성과 구조, 수치(%)/시간/비용 절감 등 정량화.

추천사: 최대 140자, 실명/직함 명시.

13) 빌드/릴리스

브랜치 전략: main(배포) / dev(개발).

PR 체크: 타입체크/리ント/유닛테스트/프리뷰 배포.

버전 표기: 푸터에 vX.Y.Z + 커밋 해시 7자.

14) 테스트(요약)

단위: 컴포넌트 렌더/props 검증.

E2E: 주요 플로우(히어로→프로젝트→문의 제출) 크로스브라우저.

접근성: Axe 규칙, 키보드 탭 시나리오.

15) 파일/산출물

디자인 토큰(JSON): 색/폰트/쉐도우/라운드/스페이싱.

i18n 리소스(ko.json, en.json).

콘텐츠 데이터 샘플(JSON) + README 사용법.

메타/OG 이미지 템플릿(자동 생성 스크립트 옵션).

개발자 전달 체크리스트

 Lighthouse 기준 충족(모바일)

 ARIA/포커스/키보드 네비 완비

 Projects 모달 케이스스터디/지표 노출

 폼 검증/스팸 방지/서버리스 연동

 GA4 이벤트 동작 확인

 다크/라이트 + i18n 정상 전환