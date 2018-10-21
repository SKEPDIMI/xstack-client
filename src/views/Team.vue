<template>
  <div class="team">
    <div class="main">
      <div>
        <h1>We are still gathering our team.</h1>
        <p>Please come back later or shoot us a message! <router-link :to="'/team/join'">Interested in joining?</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style scoped>
.team .main {
  justify-content: center;
}
</style>