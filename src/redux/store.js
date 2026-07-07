import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// 서버 SSR과 브라우저 hydration 양쪽에서 같은 방식으로 Redux store를 만듭니다.
// preloadedState가 있으면 서버에서 미리 채운 포트폴리오 상태를 초기값으로 사용합니다.
export function configureStore(preloadedState) {
  // saga middleware가 LOAD_PORTFOLIO 같은 비동기 액션을 감시하고 처리합니다.
  const sagaMiddleware = createSagaMiddleware();
  const isClient = typeof window !== 'undefined';
  // Redux DevTools는 window가 있는 브라우저에서만 연결합니다.
  const composeEnhancers =
    isClient && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  // 서버에서는 이 task를 await 해서 saga 기반 데이터 로딩이 끝난 뒤 state snapshot을 꺼냅니다.
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}
