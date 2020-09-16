import { get } from './service';

export default {
  namespace: 'form',
  state: {
    title: '表单标题',
  },
  effects: {
    *getValue({ payload }, { put, call }) {
      console.log('四四');
      console.log('getValue', payload);
      let x = yield call(get, {
        a: 2,
      });
      debugger;
      //   yield put({
      //     type: 'setState',
      //     payload: {
      //       title: '更新标题',
      //     },
      //   });
    },
  },
  reducers: {
    setState(state, { payload }) {
      //   debugger;
      return {
        ...state,
        ...payload,
      };
    },
  },
};
