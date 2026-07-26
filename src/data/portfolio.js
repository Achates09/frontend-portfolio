/*
 * public 이미지를 문자열 경로로 전달하지 않고 정적으로 import합니다.
 * Next.js가 빌드 시 각 파일의 실제 width, height, 이미지 비율을 자동으로 읽어
 * portfolioData에 크기를 수동으로 기록하거나 이미지가 바뀔 때 수정할 필요가 없습니다.
 */
import adminTemplateSetting1 from '../../public/admin-templateSetting1.png';
import adminTemplateSetting2 from '../../public/admin-templateSetting2.png';
import userTemplate1 from '../../public/user-template1.png';

// 포트폴리오 화면에 표시할 실제 데이터 원본입니다.
// API나 CMS를 붙이기 전까지는 이 파일의 내용을 수정하면 됩니다.
export const email = 'srw0901@gmail.com';
export const githubUrl = 'https://github.com/Achates09/';

export const portfolioData = {
  hero: {
    eyebrow: `Frontend Developer Portfolio / ${new Date().getFullYear()}`,
    titlePrefix: '함께 방향을 맞추고',
    titleAccent: '더 나은 사용자 경험',
    titleSuffix: '을 구현합니다.',
    // description: 'React와 Next.js를 중심으로 제품의 첫 화면부터 상태 관리, 비동기 플로우, 배포까지 연결하는 프론트엔드 개발자 위석량입니다.',
    description:
      '기획자, 디자이너, 백엔드 개발자와 요구사항을 구체화하고, 사용자와 팀 모두가 이해하기 쉬운 화면과 구조를 만드는 프론트엔드 개발자 위석량입니다.',
    email,
    stack: ['React', 'Next.js', 'Redux', 'JavaScript'],
    asyncFlow: 'Redux-Saga',
    styling: 'styled-components',
    focus: ['UX', 'Communication', 'Maintainability'],
  },
  about: {
    location: 'Seoul',
    availability: 'Frontend Developer',
    paragraphs: [
      'React와 Next.js를 중심으로 관리자 CMS와 사용자 페이지를 개발해 왔습니다. 특히 장기간 운영한 미디어 시스템에서는 납품처마다 달라지는 요구사항을 템플릿 구조로 정리하며 유지보수성과 확장성을 함께 고민했습니다.',
      'SK Planet과의 API 연동부터 공공기관 방송 서비스, 법원TV STT 기능, 소아·청소년 멘탈케어 앱까지 다양한 프로젝트에 참여했습니다. 백엔드 개발자와 프로젝트 관계자들의 요구사항을 화면과 기능으로 구체화하며 웹과 모바일의 사용자 경험을 완성해 왔습니다.',
    ],
    stats: [
      { value: '4년', label: 'Frontend Experience' },
      { value: '4개', label: 'Production Projects' },
      { value: '3개', label: 'Released Mobile Apps' },
    ],
  },
  experiences: [
    {
      company: '(주)이누씨',
      period: '2021.11 - 2025.10',
      department: '개발팀',
      position: '대리',
      role: 'Frontend Developer',
      description: '',
      projects: [
        {
          title: 'SKB(SK Broadband) 테스트 자동화 시스템 추가개발건 프론트엔드 개발',
          role: 'Frontend Developer',
          period: '2021.12 ~ 2022.02',
          associatedCompany: 'SK Planet',
          introUrl: '',
          demoUrl: '',
          stack: ['React', 'styled-components', 'JavaScript'],
          clients: [{ name: 'SK Broadband', url: '' }],
          storeLinks: {
            ios: [],
            android: [],
          },
          summary: '인터넷 모뎀의 원격 테스트와 펌웨어 업데이트 과정을 운영자가 단계별로 관리하는 자동화 시스템 화면 API 연동 작업',
          items: [
            'SK Planet 백엔드 개발자와 API 명세 및 예외 흐름을 조율하고 관리자 UI에 연동',
            '설정, 펌웨어 업데이트, 단계별 원격 테스트 화면을 공통 컴포넌트 구조로 구현',
          ],
        },
        {
          title: '사내 방송 미디어 시스템 솔루션(SEDN V2) 개발 및 유지보수',
          role: 'Frontend Developer',
          period: '2022.03 ~ 2024.10',
          associatedCompany: '',
          introUrl: 'https://sedn.software/',
          demoUrl: 'https://sedn.software/demo',
          stack: ['React', 'Next.js', 'Redux', 'Redux-Saga', 'styled-components', 'JavaScript'],
          clients: [
            { name: '국가과학기술연구회(NST) 출연(연) 법정교육TV(내부망)', url: '' },
            { name: '광주 광산구청', url: 'https://gwangsanlive.kr/' },
            { name: '완주군의회', url: 'https://live-council.wanju.go.kr/' },
            { name: '인천 미추홀구청', url: 'https://michutv.michuhol.go.kr/' },
            {
              name: '한국지능형교통체계협회(ITS) 영상분석센터',
              url: 'https://itsvideoanalysis.itskorea.kr/',
            },
          ],
          storeLinks: {
            ios: [],
            android: [],
          },
          summary: '이누씨의 솔루션, SEDN V2의 관리자 페이지 및 사용자 페이지 프론트엔드 개발',
          items: [
            'CMS와 사용자 페이지를 함께 개발하며 운영 설정이 실제 서비스 화면으로 이어지는 흐름을 구현',
            '납품처별 화면 차이를 템플릿 설정으로 구조화해 공통 코드와 커스텀 요구사항을 분리',
            'CMS에서 템플릿을 변경하면 사용자 페이지가 해당 구성으로 렌더링되도록 상태와 UI를 연결',
            '데모 환경에서는 환경변수와 DB 설정이 필요한 일부 기능이 제한될 수 있음',
          ],
        },
        {
          title: '법원도서관 법원TV 방송 페이지내 STT(Speech To Text) 기능 연동',
          role: 'Frontend Developer',
          period: '2024.11 ~ 2025.02',
          associatedCompany: '법원도서관',
          introUrl: '',
          demoUrl: '',
          stack: ['JSP', 'HTML', 'CSS', 'JavaScript'],
          clients: [{ name: '법원도서관', url: 'https://tv.scourt.go.kr' }],
          storeLinks: {
            ios: [],
            android: [],
          },
          summary: '법원TV 생방송 페이지 기능 커스텀 프론트엔드 개발',
          items: ['화면 UI 개발 및 기능 개발', '법원TV 방송 페이지내 STT 기능 연동'],
        },
        {
          title: 'Remind (소아, 청소년 디지털 멘탈케어 앱)',
          role: 'Frontend Developer',
          period: '2025.03 ~ 2025.10',
          associatedCompany: '서울대학교병원 소아청소년정신과(홍순범 교수)',
          introUrl: 'https://remind.care/',
          demoUrl: '',
          stack: ['React-Native Expo', 'Redux', 'Redux-Saga', 'styled-components', 'JavaScript'],
          clients: [],
          storeLinks: {
            ios: [
              { name: '리마인드 미(아이앱)', url: 'https://apps.apple.com/kr/app/%EB%A6%AC%EB%A7%88%EC%9D%B8%EB%93%9C-%EB%AF%B8-remind-me/id6743294770' },
              {
                name: '리마인드 패밀리(부모앱)',
                url: 'https://apps.apple.com/kr/app/%EB%A6%AC%EB%A7%88%EC%9D%B8%EB%93%9C-%ED%8C%A8%EB%B0%80%EB%A6%AC-remind-family/id6744020387',
              },
              {
                name: '리마인드 프로(상담사앱)',
                url: 'https://apps.apple.com/kr/app/%EB%A6%AC%EB%A7%88%EC%9D%B8%EB%93%9C-%ED%94%84%EB%A1%9C-remind-pro/id6743313175',
              },
            ],
            android: [
              { name: '리마인드 미(아이앱)', url: 'https://play.google.com/store/apps/details?id=com.inuc.remind.child' },
              { name: '리마인드 미(부모앱)', url: 'https://play.google.com/store/apps/details?id=com.inuc.remind.parent' },
            ],
          },
          summary: '아이·부모·상담사 앱 3종의 주요 기능을 개발하고 앱스토어 배포 과정까지 담당했습니다.',
          items: [
            'React Native Expo 기반으로 앱 3종의 프론트엔드 기능 개발',
            '걸음수 데이터 등 헬스 데이터 접근 기능 개발',
            '푸시 알림 API 연동과 플랫폼별 권한 흐름 처리',
            '아이 앱의 지식 쇼츠 영상 기능과 카카오 로그인 API 연동',
          ],
        },
      ],
    },
    // {
    //   company: 'Pixel Commerce',
    //   period: '2022.09 - 2024.02',
    //   department: 'Commerce Platform Team',
    //   position: 'Frontend Engineer',
    //   role: 'Frontend',
    //   description: '커머스 프로모션, 상품 상세, 주문/결제 화면을 React 기반으로 구현했습니다.',
    //   projects: [
    //     {
    //       title: 'Market Flow Commerce',
    //       role: 'Frontend Engineer',
    //       period: '2023.06 - 2024.02',
    //       associatedCompany: 'Pixel Commerce',
    //       introUrl: 'https://example.com/market-flow',
    //       demoUrl: 'https://example.com/market-flow/demo',
    //       stack: ['React', 'Redux Toolkit', 'Axios', 'styled-components'],
    //       clients: [
    //         { name: 'Retail Brand A', url: '' },
    //         { name: 'Retail Brand B', url: '' },
    //       ],
    //       storeLinks: {
    //         ios: [{ name: 'iOS', url: 'https://apps.apple.com/' }],
    //         android: [{ name: 'Android', url: 'https://play.google.com/store' }],
    //       },
    //       summary: '프로모션 랜딩부터 장바구니, 결제 완료까지 이어지는 커머스 핵심 플로우를 개발했습니다.',
    //       items: [
    //         '상품 옵션, 쿠폰, 결제 상태를 Redux store로 관리하고 예외 케이스를 문서화',
    //         'styled-components 테마 토큰을 도입해 브랜드별 UI 변형을 빠르게 대응',
    //         '디자이너, 백엔드와 API 계약을 정리하며 릴리즈 체크리스트 운영',
    //       ],
    //     },
    //     {
    //       title: 'Promotion Page System',
    //       role: 'Frontend Engineer',
    //       period: '2022.09 - 2023.05',
    //       associatedCompany: '',
    //       introUrl: '',
    //       demoUrl: '',
    //       stack: ['React', 'JavaScript', 'CSS3'],
    //       clients: [],
    //       storeLinks: {
    //         ios: [],
    //         android: [],
    //       },
    //       summary: '반복 제작되는 시즌 프로모션 페이지를 빠르게 조립할 수 있는 화면 템플릿을 만들었습니다.',
    //       items: [
    //         '배너, 상품 카드, 쿠폰 섹션을 조합형 컴포넌트로 분리',
    //         '모바일 우선 반응형 레이아웃을 적용해 주요 캠페인 페이지 품질을 표준화',
    //         'QA 체크리스트와 배포 전 확인 항목을 정리해 릴리즈 누락을 줄임',
    //       ],
    //     },
    //   ],
    // },
  ],
  featuredCaseStudy: {
    eyebrow: 'Project Improvement',
    title: '반복되는 납품처별 요구사항을 하나의 템플릿 시스템으로',
    project: 'SEDN V2 미디어 시스템',
    description:
      '기관마다 달랐던 화면 구성과 운영 요구사항을 CMS 설정 기반 템플릿으로 구조화했습니다. 관리자는 템플릿을 선택하고, 사용자 페이지는 해당 설정에 맞춰 변경됩니다.',
    stages: [
      {
        label: 'Problem',
        title: '납품마다 반복되는 커스텀 개발',
        copy: '기관별 메뉴, 콘텐츠 구성, 노출 정책이 달라 공통 코드와 개별 요구사항을 함께 관리해야 했습니다.',
      },
      {
        label: 'Approach',
        title: '설정과 화면 렌더링의 분리',
        copy: 'CMS의 템플릿 설정을 데이터로 관리하고 사용자 페이지가 설정값에 따라 조합되도록 구조화했습니다.',
      },
      {
        label: 'Outcome',
        title: '하나의 솔루션을 여러 환경으로 확장',
        copy: '공공기관과 협회 등 서로 다른 운영 환경에 같은 제품 기반을 적용했습니다.',
      },
    ],
    metrics: [
      { value: '10+', label: '적용 기관', isExample: false },
      { value: '11종', label: '템플릿 유형', isExample: false },
      { value: '30%', label: '반복 작업 감소', isExample: false },
    ],
    note: 'CMS 템플릿 설정은 관리자 페이지에서만 적용되며, 데모 환경에서는 일부 기능이 제한될 수 있습니다.',
    images: [
      {
        // 정적 import 결과에는 Next.js가 확인한 실제 src, width, height 정보가 모두 포함됩니다.
        src: adminTemplateSetting1,
        alt: 'SEDN V2 관리자 페이지의 템플릿 설정 첫 번째 화면',
        caption: 'SEDN V2 관리자 페이지 템플릿 설정 화면 1',
      },
      {
        src: adminTemplateSetting2,
        alt: 'SEDN 관리자 페이지의 템플릿 설정 두 번째 화면',
        caption: 'SEDN V2 관리자 페이지 템플릿 설정 화면 2',
      },
      {
        src: userTemplate1,
        alt: 'SEDN 사용자 페이지의 메인 화면',
        caption: 'SEDN V2 사용자 페이지 메인 화면',
      },
    ],
  },
  skills: [
    {
      title: 'Core',
      skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'State & Async',
      skills: ['Redux', 'Redux-Saga'],
    },
    {
      title: 'Styling & Tooling',
      skills: ['styled-components', 'Git', 'ESLint', 'Prettier'],
    },
  ],
  education: [
    {
      category: 'Education',
      title: 'Full Immersive 30기 프론트엔드 개발 학습 과정',
      organization: '코드스테이츠 부트캠프',
      period: '2021.05 - 2021.10',
      status: '수료',
      description: 'HTML, CSS, JavaScript 기초부터 React 기반 화면 구현까지 실습 중심으로 프론트엔드 개발에 필요한 기본기를 학습했습니다.',
      details: [
        'JavaScript DOM 조작 및 이벤트 처리 학습',
        'React 컴포넌트 구조와 상태 관리 기초 학습',
        '웹 페이지 제작 실습',
        '팀 프로젝트를 통한 웹 서비스 개발 경험',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'node.js', 'Git', 'REST API'],
    },
    {
      category: 'Education',
      title: '경제학 전공',
      organization: '명지대학교',
      period: '2009.03 - 2015.08',
      status: '졸업',
      description: '',
      details: [],
      tags: [],
    },
    // {
    //   category: 'Certificate',
    //   title: '정보처리기사',
    //   organization: '한국산업인력공단',
    //   period: '2021.08',
    //   status: '취득',
    //   description: '소프트웨어 설계, 개발, 데이터베이스 구축, 프로그래밍 언어 활용 등 개발 실무 기반 지식을 검증하는 국가기술자격입니다.',
    //   details: ['소프트웨어 생명주기와 요구사항 분석 학습', '관계형 데이터베이스와 SQL 활용 역량 검증', '프로그래밍 언어와 정보 시스템 구축 지식 확인'],
    //   tags: ['Certificate', 'Software Engineering', 'SQL'],
    // },
  ],
  contact: {
    title: '좋은 제품을 함께 만들 준비가 되어 있습니다.',
    copy: '채용, 협업, 프로젝트 피드백 모두 환영합니다.',
    email,
    githubUrl,
  },
};
