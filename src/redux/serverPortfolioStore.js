import { END } from 'redux-saga';
import { headers } from 'next/headers';
import { loadPortfolioRequest } from './actions/portfolioActions';
import { configureStore } from './store';

// 서버에서 axios로 같은 Next 앱의 API Route를 호출하려면 상대 경로만으로는 부족합니다.
// 현재 요청 헤더에서 origin을 복원해 http://localhost:3000 같은 절대 baseURL을 만듭니다.
function getRequestBaseURL(headersList) {
  const host = headersList.get('x-forwarded-host') || headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || (host?.startsWith('localhost') ? 'http' : 'https');

  return host ? `${protocol}://${host}` : undefined;
}

// 서버 컴포넌트에서 Redux dispatch로 포트폴리오 데이터를 준비합니다.
// 요청마다 새 store를 만들고, 완료된 state snapshot을 클라이언트 Provider에 전달합니다.
export async function loadPortfolioStateOnServer() {
  // SSR 요청끼리 상태가 섞이지 않도록 매 요청마다 독립적인 Redux store를 생성합니다.
  const store = configureStore();
  const requestBaseURL = getRequestBaseURL(await headers());

  // saga가 getPortfolioData -> axios -> /api/portfolio 순서로 데이터를 가져오도록 액션을 보냅니다.
  store.dispatch(loadPortfolioRequest(requestBaseURL ? { baseURL: requestBaseURL } : undefined));
  // 서버에서는 추가 액션을 기다리지 않도록 saga 채널을 닫고, 현재 요청 saga가 끝날 때까지 대기합니다.
  store.dispatch(END);
  await store.sagaTask.toPromise();

  return store.getState();
}
