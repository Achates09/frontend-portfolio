// 포트폴리오 화면에 표시할 실제 데이터 원본입니다.
// API나 CMS를 붙이기 전까지는 이 파일의 내용을 수정하면 됩니다.
export const portfolioData = {
  hero: {
    eyebrow: 'Frontend Developer Portfolio / 2026',
    titlePrefix: '사용자 흐름을 설계하고',
    titleAccent: '견고한 UI',
    titleSuffix: '로 구현합니다.',
    description:
      'React와 Next.js를 중심으로 제품의 첫 화면부터 상태 관리, 비동기 플로우, 배포까지 연결하는 프론트엔드 개발자 위석량입니다.',
    email: 'hello@example.com',
    stack: ['React', 'Next.js', 'Redux'],
    asyncFlow: 'Redux-Saga',
    styling: 'styled-components',
    focus: ['UX', 'Performance', 'Scalability'],
  },
  about: {
    paragraphs: [
      '복잡한 요구사항을 작은 컴포넌트와 명확한 데이터 흐름으로 나누는 일을 좋아합니다. Next.js 기반 서비스에서 페이지 구조, 렌더링 전략, 상태 관리 패턴을 설계하며 사용자 경험과 개발자 경험 사이의 균형을 고민합니다.',
      '더미 경력 기준으로는 SaaS 대시보드, 커머스, 예약 플랫폼을 만들었고, Redux-Saga로 인증, 결제, 알림처럼 순서가 중요한 비동기 플로우를 다뤘습니다.',
    ],
    stats: [
      { value: '3+', label: 'Years Experience' },
      { value: '12', label: 'Shipped Features' },
      { value: '4', label: 'Main Projects' },
    ],
  },
  experiences: [
    {
      company: 'Aster Labs',
      role: 'Frontend Developer',
      period: '2024.03 - 현재',
      summary: 'B2B 운영 대시보드와 고객 관리 워크플로우를 Next.js 기반으로 개발했습니다.',
      items: [
        'Redux-Saga 기반 인증 갱신, 권한 분기, 알림 큐 처리 플로우 구축',
        '공통 테이블, 필터, 모달 시스템을 컴포넌트 단위로 정리해 반복 개발 시간을 단축',
        '라우트 단위 코드 분할과 이미지 최적화로 주요 페이지 초기 로딩 개선',
      ],
    },
    {
      company: 'Pixel Commerce',
      role: 'Frontend Engineer',
      period: '2022.09 - 2024.02',
      summary: '커머스 프로모션 페이지와 주문/결제 화면을 React로 구현했습니다.',
      items: [
        '상품 옵션, 쿠폰, 결제 상태를 Redux store로 관리하고 예외 케이스를 문서화',
        'styled-components 테마 토큰을 도입해 브랜드별 UI 변형을 빠르게 대응',
        '디자이너, 백엔드와 API 계약을 정리하며 릴리즈 체크리스트 운영',
      ],
    },
  ],
  skills: [
    {
      title: 'Core',
      skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'State & Async',
      skills: ['Redux', 'Redux-Saga', 'React Query', 'Axios', 'REST API'],
    },
    {
      title: 'Styling & Tooling',
      skills: ['styled-components', 'Git', 'ESLint', 'Prettier', 'Vercel'],
    },
  ],
  projects: [
    {
      title: 'Orbit CRM Dashboard',
      period: '2025.08 - 2025.11',
      description:
        '영업 파이프라인, 고객 활동 로그, 권한별 액션을 한 화면에서 관리하는 B2B CRM 대시보드입니다.',
      stack: ['Next.js', 'Redux', 'Redux-Saga', 'styled-components'],
      points: ['필터 상태 URL 동기화', '권한 기반 메뉴 렌더링', '대량 액션 진행률 표시'],
    },
    {
      title: 'Market Flow Commerce',
      period: '2024.12 - 2025.03',
      description:
        '프로모션, 장바구니, 결제 상태를 다루는 커머스 프론트엔드 목업 프로젝트입니다.',
      stack: ['React', 'Redux Toolkit', 'Axios', 'Vercel'],
      points: ['주문 단계 상태 모델링', '쿠폰/배송비 계산 UI', '반응형 상품 상세'],
    },
    {
      title: 'Team Pulse Workspace',
      period: '2024.05 - 2024.07',
      description:
        '팀 회고와 업무 컨디션을 시각화하는 협업 도구로, 차트와 폼 UX에 집중했습니다.',
      stack: ['Next.js', 'React Query', 'TypeScript', 'Chart UI'],
      points: ['폼 검증 패턴 정리', '데이터 로딩 스켈레톤', '접근성 라벨 개선'],
    },
  ],
  contact: {
    title: '좋은 제품을 함께 만들 준비가 되어 있습니다.',
    copy: '채용, 협업, 프로젝트 피드백 모두 환영합니다. 실제 연락처가 준비되면 아래 더미 이메일과 링크만 교체하면 됩니다.',
    email: 'hello@example.com',
    githubUrl: 'https://github.com/',
  },
};
