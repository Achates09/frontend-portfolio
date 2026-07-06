import { takeLatest } from 'redux-saga/effects';
import { getPortfolioData } from '@/api/portfolio-data';
import { LOAD_PORTFOLIO } from '../actions/portfolioActions';
import createRequestSaga from './createRequestSaga';

const loadPortfolio = async () => {
  const data = await getPortfolioData();

  return {
    data: {
      result: true,
      data,
    },
  };
};

const loadPortfolioSaga = createRequestSaga(LOAD_PORTFOLIO, loadPortfolio);

export default function* portfolioSaga() {
  yield takeLatest(LOAD_PORTFOLIO, loadPortfolioSaga);
}
