<template v-if="this.$route.path == '/me'">
  <div class="account">
    <div>
      <h1>Welcome, user!</h1>
    </div>
  </div>
</template>
<template v-else="">
  
</template>


<script>
export default {
  mounted() {
    // fetch user if not self
  }
}
</script>

<style>
.account {
  
}
</style>
