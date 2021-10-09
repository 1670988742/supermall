import Vue from "vue";
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
    collectList: [],
    user:{
      token: null,
      username: null,
      userLevel: null,
      headUrl: null,
      user_id: null,
      pendingPayment: [],
      toBeConfirmed: [],

    }
  },
  mutations,
  actions,
  getters

})

export default store
