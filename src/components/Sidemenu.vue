<template>
  <div class="side-menu" id="drawer">
    <ul>
      <router-link :to="'/'" exact-active-class="active">HOME</router-link>
      <router-link :to="'/services'" active-class="active">SERVICES</router-link>
      <router-link :to="'/about'" active-class="active">ABOUT</router-link>
      <router-link :to="'/contact'" active-class="active">CONTACT</router-link>
      <router-link :to="'/team'" active-class="active">TEAM</router-link>
      <router-link :to="'/team/join'" active-class="active" v-if="!currentUser.authenticated">JOIN TEAM</router-link>
      <router-link :to="'/blog'" active-class="active">BLOG</router-link>

      <router-link :to="'/me'" v-if="currentUser.authenticated">ACCOUNT</router-link>

      <router-link :to="'/login'" v-if="!currentUser.authenticated">LOGIN</router-link>
      <router-link :to="'/signup'" v-if="!currentUser.authenticated">SIGNUP</router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Sidemenu',
  computed: mapState([
    'currentUser'
  ])
}
</script>

<style>
.side-menu {
  position: fixed;
	text-align: center;
  top: 0;
  height: 100%;
	width: 300px;
  
  background: #1E2330;
  color: white;
  z-index: 100;
  box-shadow: inset 7px 0px 18px rgba(19, 22, 31, 0.3);

  /* Hide this! */
  right: -300px;
  transition: all 0.5s ease;
}
.side-menu h1 {
  font-weight: lighter;
}
.side-menu ul {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.side-menu a {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid rgb(19, 22, 31);
  width: 100%;
  padding: 10px;
  font-size: large;
}

.side-menu a:last-child {
  border-bottom: none;
}
/* We need to make changes to the width of the sidemenu on devices smaller or equal than 400px */
@media screen and (max-width: 410px) {
  
}
</style>
