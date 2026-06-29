import { all, fork } from 'redux-saga/effects';
import portfolioSaga from './portfolioSaga';

// 여러 saga를 병렬로 실행하는 rootSaga입니다.
export default function* rootSaga() {
  yield all([fork(portfolioSaga)]);
}
