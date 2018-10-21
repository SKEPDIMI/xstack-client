import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultUser = {
  email: '',
  id: null,
  uid: null,
  authorized: false,
  loading: true,
}

const currentUser = {
  state: {...defaultUser},
  mutations: {
    setDefault: state => ({
      ...defaultUser,
      loading: false
    }),
    setUser: (state, user) => ({
      ...defaultUser,
      ...user,
      loading: false,
      authorized: true
    })
  }
}

export default new Vuex.Store({
  modules: {
    currentUser
  }
});