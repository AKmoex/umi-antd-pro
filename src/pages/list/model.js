import { getInitValues } from './service';

export default {
  namespace: 'list',
  state: {},
  effects: {
    *getInitValues({ payload }, { put, call }) {
      let res = yield call(getInitValues, {});
      yield put({
        type: 'initState',
        payload: {
          data: res.data,
        },
      });
    },
  },
  reducers: {
    initState(state, { payload }) {
      return {
        ...payload,
      };
    },
  },
};
