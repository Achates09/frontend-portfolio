import { LOAD_PORTFOLIO_FAILURE, LOAD_PORTFOLIO, LOAD_PORTFOLIO_SUCCESS } from '../actions/portfolioActions';

const initialState = {
  data: null,
  error: null,
};

// 포트폴리오 데이터의 로딩/성공/실패 상태를 관리하는 reducer입니다.
export default function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PORTFOLIO:
      return {
        ...state,
        error: null,
      };

    case LOAD_PORTFOLIO_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case LOAD_PORTFOLIO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
