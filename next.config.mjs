/** @type {import('next').NextConfig} */
const nextConfig = {
  // 빌드 결과를 out 디렉터리의 HTML/CSS/JS로 내보내 별도 Node.js 서버 없이 배포합니다.
  output: 'export',
  // styled-components가 서버 렌더링 중에도 안정적으로 className을 생성하도록 설정합니다.
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
