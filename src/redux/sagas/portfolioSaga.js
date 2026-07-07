import { takeLatest } from 'redux-saga/effects';
import { getPortfolioData } from '@/api/portfolio-data';
import { LOAD_PORTFOLIO } from '../actions/portfolioActions';
import createRequestSaga from './createRequestSaga';

const loadPortfolioSaga = createRequestSaga(LOAD_PORTFOLIO, getPortfolioData);

export default function* portfolioSaga() {
  yield takeLatest(LOAD_PORTFOLIO, loadPortfolioSaga);
}
