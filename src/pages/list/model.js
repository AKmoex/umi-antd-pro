import { getInitValues, getTableValues } from './service';

export default {
  namespace: 'list',
  state: {},
  effects: {
    *getInitValues({ payload }, { put, call }) {
      console.log('是的');
      let res = yield call(getInitValues, {});
      yield put({
        type: 'initState',
        payload: {
          data: res.data,
        },
      });
    },
    *getTableValues({ payload }, { put, call }) {
      console.log('我我我我嚄');
      let res = yield call(getTableValues, {});
      yield put({
        type: 'initTableState',
        payload: {
          tableValues: res.data.data.map(item => {
            return {
              key: item.key,
              ruleName: item.name,
              desc: item.desc,
              callNo: item.callNo,
              status: item.status,
              callTime: item.updatedAt,
            };
          }),
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
    initTableState(state, { payload }) {
      return {
        ...payload,
      };
    },
  },
};
