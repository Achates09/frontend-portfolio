'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

// App Router에서 styled-components의 SSR 스타일 수집과 전역 테마 적용을 담당합니다.
export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const app = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  if (typeof window !== 'undefined') return app;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {app}
    </StyleSheetManager>
  );
}
