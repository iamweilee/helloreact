import { save } from '../util/request';

export default {
  async addOne(payload) {
    let result = await save('/dev/card', payload);
    return result;
  }
}