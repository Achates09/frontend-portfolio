import { call, put, takeLatest } from 'redux-saga/effects';
import { getPortfolioData } from '@/lib/portfolio-data';
import {
  LOAD_PORTFOLIO_REQUEST,
  loadPortfolioFailure,
  loadPortfolioSuccess,
} from '../actions/portfolioActions';

// LOAD_PORTFOLIO_REQUEST 액션을 받아 비동기 작업을 처리하는 saga 함수입니다.
function* loadPortfolioSaga() {
  try {
    const data = yield call(getPortfolioData);
    yield put(loadPortfolioSuccess(data));
  } catch (error) {
    yield put(loadPortfolioFailure(error.message || '포트폴리오 데이터를 불러오지 못했습니다.'));
  }
}

export default function* portfolioSaga() {
  yield takeLatest(LOAD_PORTFOLIO_REQUEST, loadPortfolioSaga);
}
