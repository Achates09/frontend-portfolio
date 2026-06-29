import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_PORTFOLIO_REQUEST,
  loadPortfolioFailure,
  loadPortfolioSuccess,
} from '../actions/portfolioActions';

// 실제 API가 생기면 이 함수 안에서 axios/fetch 요청으로 교체하면 됩니다.
function fetchPortfolioFromClient() {
  return {
    loadedAt: new Date().toISOString(),
    source: 'redux-saga mock response',
  };
}

// LOAD_PORTFOLIO_REQUEST 액션을 받아 비동기 작업을 처리하는 saga 함수입니다.
function* loadPortfolioSaga() {
  try {
    yield delay(250);
    const data = yield call(fetchPortfolioFromClient);
    yield put(loadPortfolioSuccess(data));
  } catch (error) {
    yield put(loadPortfolioFailure(error.message || '포트폴리오 데이터를 불러오지 못했습니다.'));
  }
}

export default function* portfolioSaga() {
  yield takeLatest(LOAD_PORTFOLIO_REQUEST, loadPortfolioSaga);
}
