import { createGlobalStyle } from 'styled-components';

// 앱 전체에 적용되는 reset, 배경, 기본 폰트, 선택 색상 등 전역 스타일입니다.
const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.colors.background};
    --foreground: ${({ theme }) => theme.colors.text};
  }

  html {
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
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyle;
