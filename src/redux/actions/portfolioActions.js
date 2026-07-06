import { createRequestActionTypes } from '../sagas/createRequestSaga';

// 포트폴리오 데이터 요청 흐름에서 사용할 액션 타입과 액션 생성자입니다.
export const [LOAD_PORTFOLIO, LOAD_PORTFOLIO_SUCCESS, LOAD_PORTFOLIO_FAILURE] = createRequestActionTypes('portfolio/LOAD_PORTFOLIO');

export const loadPortfolioRequest = () => ({
  type: LOAD_PORTFOLIO,
});

export const loadPortfolioSuccess = data => ({
  type: LOAD_PORTFOLIO_SUCCESS,
  payload: data,
});

export const loadPortfolioFailure = error => ({
  type: LOAD_PORTFOLIO_FAILURE,
  payload: error,
});
