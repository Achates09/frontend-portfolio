import {
  LOAD_PORTFOLIO_FAILURE,
  LOAD_PORTFOLIO_REQUEST,
  LOAD_PORTFOLIO_SUCCESS,
} from '../actions/portfolioActions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

// 포트폴리오 데이터의 로딩/성공/실패 상태를 관리하는 reducer입니다.
export default function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOAD_PORTFOLIO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case LOAD_PORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
