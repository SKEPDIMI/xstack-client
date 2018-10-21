<template>
  <!-- OWNER OF ACCOUNT -->
  <div v-if="ownAccount">
    <div class="account" v-if="currentUser.authenticated">
      <div class="header">
        <h1>My Account</h1>
        <img :src="currentUser.img.url || '@/assets/icon/profile_image.png'" alt="profile picture">
      </div>
      <hr>
      <p class="mute">Joined on {{currentUser.created_at}}</p>
      <div class="body">
        <h1>Email:</h1>
        <p>{{currentUser.email}}</p>
        <h1>Bio:</h1>
        <p>{{currentUser.bio.length}}</p>
        <h1>Description:</h1>
        <p>{{currentUser.description}}</p>
      </div>
    </div>
    <div v-else class="account">
      <h1>Not logged in</h1>
      <hr>
      <p class="mute">Please <router-link to="/login">log in</router-link> to view your account</p>
    </div>
  </div>
  <!-- VIEWING OTHER ACCOUNT -->
  <div v-else class="account">
    <h1>wat</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    // fetch user if not self
  },
  computed: {
    ownAccount() {
      return this.$route.path == '/me'
    },
    currentUser() {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style>
.account {
  background-color: white;
  min-height: 90vh;
  text-align: left;
  padding: 10px 20px;
}
.account .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.account .header img {
  height: 4em;
  width: 4em;
  border-radius: 2em;
}
</style>
