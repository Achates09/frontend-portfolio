// GITHUB_ACTIONS는 사용자가 .env에 등록하는 값이 아니라 GitHub Actions가 workflow 실행 시 자동으로 true로 설정합니다.
// GitHub Actions에서 빌드할 때만 저장소 이름을 URL 앞에 붙입니다.
// 로컬 개발에서는 빈 문자열을 사용하므로 기존처럼 http://localhost:3000/에서 확인할 수 있습니다.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/frontend-portfolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 빌드 결과를 out 디렉터리의 HTML/CSS/JS로 내보내 별도 Node.js 서버 없이 배포합니다.
  output: 'export',
  // 프로젝트 Pages 주소(achates09.github.io/frontend-portfolio)의 하위 경로를 정적 자산에 반영합니다.
  basePath,
  // NEXT_PUBLIC_BASE_PATH 역시 별도 .env 설정이 필요하지 않습니다.
  // 이 env 설정이 basePath를 클라이언트 번들에 빌드 시 직접 주입합니다.
  // next/image의 public 이미지 src에는 basePath가 자동으로 붙지 않으므로 클라이언트에도 같은 값을 전달합니다.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // styled-components가 서버 렌더링 중에도 안정적으로 className을 생성하도록 설정합니다.
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
