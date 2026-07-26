import { githubUrl } from '@/data/portfolio';
import StyledComponentsRegistry from '@/lib/registry';

const siteUrl = 'https://achates09.github.io/frontend-portfolio/';
const title = '위석량 | Frontend Developer Portfolio';
const description = 'React와 Next.js를 중심으로 웹·모바일 제품을 개발해 온 프론트엔드 개발자 위석량의 포트폴리오';

// favicon은 Next.js의 파일 기반 Metadata API가 src/app/favicon.ico를 자동으로 사용합니다.
// 다른 후보로 바꾸려면 코드 대신 favicon2.ico 또는 favicon3.ico를 favicon.ico에 덮어쓰세요.
// 예: cp src/app/favicon2.ico src/app/favicon.ico
/*
 * metadata는 Next.js가 문서의 <head>에 SEO와 링크 공유용 태그를 자동으로 생성할 때 사용합니다.
 * 사이트 실행 자체에 반드시 필요한 값은 아니지만, 공개 포트폴리오라면 title과 description은
 * 브라우저 탭과 검색 결과에 사용되므로 유지하는 것이 좋습니다.
 *
 * Open Graph, Twitter Card, canonical도 필수는 아니지만 카카오톡·Slack·SNS 공유 화면과
 * 검색엔진의 대표 URL 판단에 도움이 되므로 공개 사이트에서는 함께 유지하는 것을 권장합니다.
 */
export const metadata = {
  // 상대 경로로 생성되는 OG 이미지 등의 URL을 절대 주소로 변환할 때 사용하는 기준 URL입니다.
  metadataBase: new URL(siteUrl),

  // 브라우저 탭, 검색 결과, 링크 공유 카드에 사용되는 기본 제목과 설명입니다.
  title,
  description,

  // 페이지 주제를 나타냅니다. 최신 검색엔진에서는 영향이 크지 않아 필요하면 제거해도 됩니다.
  keywords: ['프론트엔드 개발자', 'React', 'Next.js', 'React Native', '위석량'],

  // 검색엔진에 이 페이지의 작성자와 작성자의 대표 프로필 주소를 알려줍니다.
  authors: [{ name: '위석량', url: githubUrl }],

  // 같은 콘텐츠가 여러 주소로 열릴 때 검색엔진이 공식 주소로 판단할 canonical URL입니다.
  alternates: {
    canonical: siteUrl,
  },

  // 카카오톡, Slack, Facebook 등에서 링크를 공유할 때 표시할 제목, 설명, 사이트 정보를 정의합니다.
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: '위석량 프론트엔드 포트폴리오',
    locale: 'ko_KR',
    type: 'website',
  },

  // X(Twitter)에서 링크를 공유할 때 큰 이미지 카드와 함께 표시할 정보를 정의합니다.
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },

  // 검색엔진이 페이지를 수집하고 검색 결과에 노출하며 링크를 따라가도록 허용합니다.
  robots: {
    index: true,
    follow: true,
  },
};

// 모든 페이지에 공통으로 적용되는 최상위 HTML 구조와 스타일 Provider를 연결합니다.
export default function RootLayout({ children }) {
  /*
   * JSON-LD는 화면에 표시되는 콘텐츠가 아니라 검색엔진이 이 사이트의 주체를
   * '프론트엔드 개발자 위석량'이라는 Person 데이터로 구조적으로 이해하도록 돕는 정보입니다.
   *
   * 사이트 실행이나 검색 노출에 반드시 필요하지 않고 검색 순위를 직접 높여주는 기능도 아닙니다.
   * 다만 이름, 직무, GitHub, 보유 기술의 관계를 검색엔진에 명확하게 전달하는 보조 SEO 정보이므로
   * 현재처럼 내용이 실제 정보와 일치한다면 유지하는 것을 권장합니다.
   */
  const jsonLd = {
    // schema.org에서 정의한 구조화 데이터 규칙을 사용한다는 의미입니다.
    '@context': 'https://schema.org',
    // 이 페이지에서 설명하는 대상이 조직이나 제품이 아닌 사람임을 나타냅니다.
    '@type': 'Person',
    name: '위석량',
    alternateName: 'Wi Seokryang',
    jobTitle: 'Frontend Developer',
    url: siteUrl,
    sameAs: [githubUrl],
    knowsAbout: ['React', 'Next.js', 'JavaScript', 'React Native', 'Redux'],
  };

  return (
    <html lang="ko">
      <body>
        {/* JSON-LD는 사용자 화면에는 나타나지 않고 HTML의 구조화 데이터 스크립트로만 포함됩니다. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
