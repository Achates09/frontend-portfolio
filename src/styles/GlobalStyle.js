import { createGlobalStyle } from 'styled-components';

// 앱 전체에 적용되는 reset, 배경, 기본 폰트, 선택 색상 등 전역 스타일입니다.
const GlobalStyle = createGlobalStyle`
  :root {
    /*
      앱 전역에서 재사용하는 색상과 폰트 토큰입니다.
      색상은 ThemeProvider의 theme과 연결되고, 폰트 변수는 본문과 코드 스타일에서 공유합니다.
    */
    --background: ${({ theme }) => theme.colors.background};
    --foreground: ${({ theme }) => theme.colors.text};
    --font-geist-sans: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-geist-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  }

  html {
    /* 브라우저 기본 폼 컨트롤과 스크롤바도 사이트의 어두운 테마에 맞춥니다. */
    color-scheme: dark;
    /* body의 min-height: 100%가 화면 전체 높이를 기준으로 동작하게 합니다. */
    height: 100%;
    scroll-behavior: smooth;
    /*
      앵커 링크(#about 등)로 이동할 때 sticky 헤더에 섹션 제목이 가리지 않도록 확보한 여백입니다.
      헤더 높이가 바뀌면 이 값을 함께 조정하면 됩니다.
    */
    scroll-padding-top: 96px;
  }

  html,
  body {
    /* 가로로 진입하는 애니메이션이나 큰 요소 때문에 수평 스크롤이 생기는 것을 방지합니다. */
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    /* 콘텐츠가 짧아도 페이지 배경이 뷰포트 아래까지 채워지게 합니다. */
    min-height: 100%;
    color: ${({ theme }) => theme.colors.text};
    /*
      body의 radial-gradient는 전체 페이지의 분위기용 배경입니다.
      Experience/Education처럼 균일한 섹션 배경이 필요한 곳은 ScrollReveal의 불투명한 sectionAlt 색을 사용해
      이 그라데이션이 리스트 뒤로 비치지 않게 합니다.
    */
    background:
      radial-gradient(circle at 12% 0%, rgba(102, 217, 198, 0.14), transparent 32rem),
      linear-gradient(180deg, #0b0f14 0%, #101722 48%, #0b0f14 100%);
    font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
    /* 운영체제별 글꼴 렌더링 차이를 줄여 얇은 글자도 매끄럽게 표시합니다. */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    /* padding과 border를 요소의 지정 너비에 포함하고 브라우저 기본 여백을 제거합니다. */
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    /* 링크가 각 컴포넌트의 글자색을 따르도록 기본 파란색과 밑줄을 제거합니다. */
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    /* 폼 요소가 브라우저 기본 폰트 대신 주변 텍스트 스타일을 상속하게 합니다. */
    font: inherit;
  }

  ::selection {
    /* 드래그해 선택한 텍스트에도 포트폴리오의 포인트 색상을 적용합니다. */
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyle;
