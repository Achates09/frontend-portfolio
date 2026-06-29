// 포트폴리오 데이터 요청 흐름에서 사용할 액션 타입과 액션 생성자입니다.
export const LOAD_PORTFOLIO_REQUEST = 'portfolio/LOAD_PORTFOLIO_REQUEST';
export const LOAD_PORTFOLIO_SUCCESS = 'portfolio/LOAD_PORTFOLIO_SUCCESS';
export const LOAD_PORTFOLIO_FAILURE = 'portfolio/LOAD_PORTFOLIO_FAILURE';

export const loadPortfolioRequest = () => ({
  type: LOAD_PORTFOLIO_REQUEST,
});

export const loadPortfolioSuccess = (data) => ({
  type: LOAD_PORTFOLIO_SUCCESS,
  payload: data,
});

export const loadPortfolioFailure = (error) => ({
  type: LOAD_PORTFOLIO_FAILURE,
  payload: error,
});
