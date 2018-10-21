<template>
  <div class="login">
    <div class="form-container">
      <div class="f-header">
        <h2>Log in</h2>
        <img src="../../assets/logo/1.png" alt="">
      </div>
      <hr>
      <form action="">
        <label>email</label>
        <input type="text" name="email">
        <label>password</label>
        <input type="text" name="password">

        <button>Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>
.login {
  background-image: url('../../assets/contact.jpg');
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.login .form-container {
  background-color: white;
  padding: 1em 1.5em;
  min-width: 300px;
  box-shadow: 1px 1px 1px grey;
  border-radius: 2px;
}
.login .form-container .f-header {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
.login .f-header img {
  height: 1.6em;
}
.login .form-container form {
  text-align: left;
}
.login .form-container form input {
  width: 100%;
  min-height: 3em;
  border-radius: 2px;
  border: 1px solid rgb(216, 216, 216);
}
.login .form-container form button {
  width: 100%;
  background: #1e2331;
  color: white;
  border: none;
  padding: 15px;
  margin-top: 10px;
  font-size: large;
  border-radius: 5px;
}
</style>
