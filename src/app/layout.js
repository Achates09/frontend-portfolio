import StyledComponentsRegistry from '@/lib/registry';

// favicon은 Next.js의 파일 기반 Metadata API가 src/app/favicon.ico를 자동으로 사용합니다.
// 다른 후보로 바꾸려면 코드 대신 favicon2.ico 또는 favicon3.ico를 favicon.ico에 덮어쓰세요.
// 예: cp src/app/favicon2.ico src/app/favicon.ico
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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
