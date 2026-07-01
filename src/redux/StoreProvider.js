'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

// App Router에서 Redux store가 클라이언트에서 한 번만 생성되도록 감싸는 Provider입니다.
// 서버에서 만든 preloadedState를 넘기면 클라이언트 store도 같은 상태에서 시작합니다.
export default function StoreProvider({ children, preloadedState }) {
  const [store] = useState(() => configureStore(preloadedState));

  return <Provider store={store}>{children}</Provider>;
}
