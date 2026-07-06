import { portfolioData } from '@/data/portfolio';

// Redux를 거치지 않고 데이터만 직접 확인해야 할 때 사용할 수 있는 순수 데이터 로더입니다.
export async function getPortfolioData() {
  return portfolioData;
}
