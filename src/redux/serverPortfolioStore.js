import { END } from 'redux-saga';
import { loadPortfolioRequest } from './actions/portfolioActions';
import { configureStore } from './store';

// 서버 컴포넌트에서 Redux dispatch로 포트폴리오 데이터를 준비합니다.
// 요청마다 새 store를 만들고, 완료된 state snapshot을 클라이언트 Provider에 전달합니다.
export async function loadPortfolioStateOnServer() {
  const store = configureStore();

  store.dispatch(loadPortfolioRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();

  return store.getState();
}
