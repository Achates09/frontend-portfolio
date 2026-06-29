import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';

// 앱에서 사용하는 reducer를 하나의 rootReducer로 합칩니다.
const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

export default rootReducer;
