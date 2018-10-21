<template>
  <div class="app">
    <Sidemenu />
    <div class="view">
      <Header/>
      <router-view/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidemenu from '@/components/Sidemenu';
import Footer from '@/components/Footer';
import api from './api';
import store from 'store';

export default {
  name: 'App',
  mounted() {
    let tokenHeaders = store.get('DVSE_XSTK_AUTH');

    if(tokenHeaders) {
      api.get('/auth/validate_token', tokenHeaders)
      .then(res => {
        if (res.ok) {
          this.$store.commit('currentUser/setUser', res.body.data);
          this.$store.commit('currentUser/setTokenFromHeaders', res.headers);
        } else {
          store.remove('DVSE_XSTK_AUTH')
        }
      });
    }
  },
  components: {
    Header,
    Sidemenu,
    Footer,
  },
};
</script>

<style>
* {
  -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}
</style>
