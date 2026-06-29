import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Redux DevTools는 브라우저에서만 연결하고, saga middleware를 store에 등록합니다.
export function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const isClient = typeof window !== 'undefined';
  const composeEnhancers =
    isClient && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}
