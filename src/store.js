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

export default new Vuex.Store({
  state: {
    currentUser: { ...defaultUser },
    token: {}
  },
  mutations: {
    setUser: (state, user) => {
      state.currentUser = {
        ...defaultUser,
        ...user,
        loading: false,
        authenticated: true
      }
    },
    setDefault: state => {
      state.currentUser = {
        ...defaultUser,
        loading: false
      }
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
});