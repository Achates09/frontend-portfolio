import { portfolioData } from '@/data/portfolio';

// 이 API는 더미 포트폴리오 데이터를 반환하므로 빌드 시 정적 응답으로 만들어둘 수 있습니다.
export const dynamic = 'force-static';

// Next.js App Router가 /api/portfolio로 들어오는 GET 요청을 이 함수에 자동 연결합니다.
// getPortfolioData()의 axios.get('/api/portfolio') 호출이 결국 이 응답을 받아갑니다.
export async function GET() {
  return Response.json({
    result: true,
    data: portfolioData,
  });
}
