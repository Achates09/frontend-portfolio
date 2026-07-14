# 위석량 | Frontend Portfolio

React와 Next.js를 중심으로 관리자 CMS, 사용자 웹 페이지, 모바일 앱을 개발해 온 프론트엔드 개발자 위석량의 포트폴리오입니다.

요구사항을 화면과 기능으로 구체화하고, 여러 서비스에 적용할 수 있는 구조와 사용하기 편한 인터페이스를 만드는 데 관심이 있습니다. 포트폴리오에서는 약 4년간 참여한 실무 프로젝트와 기술 스택, 교육 이력을 확인할 수 있습니다.

- GitHub: [Achates09](https://github.com/Achates09/)
- Email: [srw0901@gmail.com](mailto:srw0901@gmail.com)

## 주요 경력 및 프로젝트

### (주)이누씨 · Frontend Developer

`2021.11 - 2025.10`

#### SK Broadband 테스트 자동화 시스템

- SK Planet과 협업해 인터넷 모뎀 원격 테스트 및 펌웨어 업데이트 관리자 화면 개발
- 설정, 펌웨어 업데이트, 단계별 원격 테스트 UI 및 API 연동 구현
- 기술: React, styled-components

#### SEDN V2 사내 방송 미디어 시스템

- CMS 관리자 페이지와 사용자 페이지 개발 및 장기 유지보수
- 납품처별 커스텀 화면을 템플릿 구조로 구성해 확장 가능한 서비스 형태로 개발
- 공공기관 및 협회 등 여러 납품 환경에 맞춘 화면과 기능 구현
- 기술: React, Next.js, Redux, Redux-Saga, styled-components
- 링크: [서비스 소개](https://sedn.software/) · [데모](https://sedn.software/demo)

#### 법원TV STT 기능 연동

- 법원TV 생방송 페이지 UI 및 기능 커스텀 개발
- 방송 페이지 내 STT 기능 연동
- 기술: JSP, HTML, CSS, JavaScript
- 링크: [법원TV](https://tv.scourt.go.kr/)

#### Remind 소아·청소년 디지털 멘탈케어 앱

- 아이, 부모, 상담사를 위한 React Native Expo 앱 3종의 기능 개발 및 배포
- 헬스 데이터 접근, 푸시 알림, 영상 콘텐츠, 카카오 로그인 API 연동
- 서울대학교병원 소아청소년정신과와 협업
- 기술: React Native, Expo
- 링크: [Remind 소개](https://remind.care/)

## 포트폴리오 구성

- `Hero` — 개발자 소개와 핵심 기술 요약
- `About` — 경력 방향과 협업 경험
- `Experience` — 회사 및 프로젝트별 역할, 기술, 관련 링크
- `Skills` — 프론트엔드, 상태 관리, 스타일링 도구
- `Education` — 교육 및 전공 이력
- `Contact` — 이메일과 GitHub 연락처

## 구현 특징

- Next.js App Router에서 포트폴리오 전체를 빌드 시 정적 HTML로 생성
- `output: 'export'`로 별도 Node.js 서버가 필요 없는 `out/` 배포 파일 생성
- 로컬 데이터 원본을 서버 컴포넌트에서 직접 사용해 별도 API와 서버 실행 제거
- styled-components의 SSR 스타일 수집과 공통 테마 시스템 적용
- 모바일·태블릿을 고려한 반응형 레이아웃
- Intersection Observer 기반 스크롤 등장 효과와 `prefers-reduced-motion` 접근성 대응
- 섹션 내비게이션과 맨 위로 이동 기능 제공

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Rendering | Static Generation, React Server Components |
| Data Source | 정적 JavaScript 데이터 |
| Styling | styled-components |
| Code Quality | ESLint, Prettier |

## 데이터 흐름

```text
portfolio.js
  → page.js에서 직접 import
  → 빌드 시 정적 HTML 생성
  → 브라우저에서 인터랙션 컴포넌트 hydration
```

포트폴리오의 실제 콘텐츠는 `src/data/portfolio.js`에서 관리합니다. `page.js`가 데이터를 빌드 시 직접 읽고 각 섹션 컴포넌트에 전달합니다.

## 프로젝트 구조

```text
src/
├── app/                  # App Router 페이지와 레이아웃
├── components/
│   ├── common/           # 내비게이션, 푸터, 스크롤 공통 UI
│   └── sections/         # 포트폴리오 섹션 컴포넌트
├── data/                 # 포트폴리오 콘텐츠 원본
├── lib/                  # styled-components SSR registry
└── styles/               # 전역 스타일과 테마
```

## 실행 방법

### 요구 사항

- Node.js 20.9 이상
- npm

### 로컬 실행

```bash
git clone https://github.com/Achates09/frontend-portfolio.git
cd frontend-portfolio
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 명령어

```bash
npm run dev    # 개발 서버 실행
npm run build  # 프로덕션 빌드
npm run lint   # ESLint 검사
```

`npm run build`가 생성하는 `out/` 디렉터리를 정적 호스팅 서비스에 배포합니다.
