'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

// App Router에서 Redux store가 클라이언트에서 한 번만 생성되도록 감싸는 Provider입니다.
export default function StoreProvider({ children }) {
  const [store] = useState(() => configureStore());

  return <Provider store={store}>{children}</Provider>;
}
