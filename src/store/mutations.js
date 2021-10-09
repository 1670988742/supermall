import {ADD_COUNT, ADD_TO_CART, SUB_COUNT, DELETE_GOOD, ADD_To_Collect} from "./mutations_types";
export default {
  //完成的事情尽可能单一，所以将方法重构
  [ADD_TO_CART](state, payload) {
    payload.count = 1
    payload.check = true
    state.cartList.push(payload)
  },

  [ADD_COUNT](state, payload) {
    payload.count += 1
  },

  [SUB_COUNT](state, payload) {
    payload.count -= 1
  },
  [DELETE_GOOD](state, payload) {

    // state.cartList.forEach((item, index) => {
    //   if(item === payload) {
    //     console.log(index);
    //     state.cartList.splice(index, 1)
    //   }
    // })
    let index = state.cartList.indexOf(payload)
    state.cartList.splice(index, 1)
  },

  [ADD_To_Collect](state, payload) {
    state.collectList.push(payload)
    console.log('收藏成功');
  }
}
