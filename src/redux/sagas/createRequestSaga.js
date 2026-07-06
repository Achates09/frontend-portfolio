import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../actions/loading';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

/**
 * 공통 사가 함수
 * @param {String} type (필수) 액션 타입
 * @param {Function} requestApi (필수) 요청할 axios api 함수
 * @param {String | Array} listType (선택) 요청 성공후 이어서 호출할 액션 타입 (여러개일 경우 배열로)
 * @param {Function} successCallback (선택) 요청 성공후 호출할 콜백 함수 (payload에 successCallback 이라는 키로 포함시켜야 함)
 * @param {Function} failureCallback (선택) 요청 실패시 호출할 콜백 함수 (payload에 failureCallback 이라는 키로 포함시켜야 함)
 * @returns
 */
export default function createRequestSaga(type, requestApi, listType = null) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    const { successCallback, failureCallback, ...body } = action.payload || {};

    try {
      const response = yield call(requestApi, body);
      const { result, data, message } = response.data;

      if (result) {
        yield put({ type: SUCCESS, payload: data, meta: response });

        if (successCallback) yield successCallback(data);

        if (listType) {
          const { codeId, patIdx } = action.payload;

          if (Array.isArray(listType)) {
            for (let type of listType) {
              yield put({ type: type, payload: codeId ? { codeId } : patIdx ? { patIdx } : '' });
            }
          } else {
            yield put({
              type: listType,
              payload: codeId ? { codeId } : patIdx ? { patIdx } : '',
            });
          }
        }
      } else {
        throw new Error(message);
      }
    } catch (e) {
      console.log(`${type} 공통 사가 함수 에러:`, e?.response || e);
      yield put({ type: FAILURE, payload: e, error: true });

      const { status, data } = e.response || {};
      const errMsg = data?.message || e?.message;

      if (failureCallback) yield failureCallback(e);
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
