/** @type {import('next').NextConfig} */
const nextConfig = {
  // styled-components가 서버 렌더링 중에도 안정적으로 className을 생성하도록 설정합니다.
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
