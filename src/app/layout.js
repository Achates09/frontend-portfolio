import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import StoreProvider from '@/redux/StoreProvider';

// 브라우저 탭과 검색 결과에 노출되는 기본 메타 정보를 정의합니다.
export const metadata = {
  title: '위석량 | Frontend Portfolio',
  description: 'React, Next.js, Redux, Redux-Saga 기반 프론트엔드 개발자 포트폴리오',
};

// 모든 페이지에 공통으로 적용되는 최상위 HTML 구조와 스타일 Provider를 연결합니다.
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <StoreProvider>{children}</StoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
