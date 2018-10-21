import Vue from 'vue';
import Vuex from 'vuex';
import store from 'store';

Vue.use(Vuex);

const defaultUser = {
  email: null,
  id: null,
  uid: null,
  image: {},
  role: 0,
  bio: '',
  description: '',

  authenticated: false,
  loading: true,
  token: null
}

const currentUser = {
  namespaced: true,
  state: {...defaultUser},
  mutations: {
    setDefault: state => {
      state = {
        ...defaultUser,
        loading: false
      }
    },
    setUser: (state, user) => {
      console.log('beofre', state)
      state = {
        ...defaultUser,
        ...user,
        loading: false,
        authenticated: true
      }
      console.log('after', state)
    },
    setTokenFromHeaders: (state, headers) => {
      state.token = {
        'access-token': headers['access-token'],
        'client': headers['client'],
        'uid': headers['uid'],
        'expiry': headers['expiry'],
        'token-type': headers['token-type'],
      }

      store.set('DVSE_XSTK_AUTH', state.token)
    }
  }
}

export default new Vuex.Store({
  modules: {
    currentUser
  }
});