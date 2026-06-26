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
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    min-height: 100%;
    color: ${({ theme }) => theme.colors.text};
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
