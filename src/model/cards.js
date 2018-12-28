import request from '../util/request';
import service from '../service/cards';
import { message } from 'antd';

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace : 'cards',
  state     : {
    cardsList: [ ]
  },
  effects: {
    * queryList(_, { call, put }) {
      const endPointURI = '/dev/list';

      try { // 加入 try catch 捕获抛错
        const listData = yield call(request, endPointURI);
        yield put({ type: 'initList', payload: listData });
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      }
    },
    * addOne({ payload }, { call, put }) {

      try { // 加入 try catch 捕获抛错
        const result = yield call(service.addOne, payload);
        yield put({ type: 'addOneCard', payload: result });
      } catch (e) {
        console.log(e)
        message.error('保存数据失败'); // 打印错误信息
      }
    }
  },
  reducers: {
    initList(state, {payload}) {
      const cardsList = [...payload];
      return {
        cardsList
      };
    },
    addOneCard(state, {payload}) {
      console.log(payload);
      const cardsList = [payload, ...state.cardsList];
      return {
        cardsList
      };
    }
  }
};