import { createStore } from 'vuex'

export default createStore({
  state: {
   userInfo:{}//用户信息
  },
  mutations: {
    updateUserInfo(state,data){
      state.userInfo=data
    },
    updateUserName(state,userName){
      state.userInfo.user=userName
    }
  },
  actions: {
  },
  modules: {
  }
})
