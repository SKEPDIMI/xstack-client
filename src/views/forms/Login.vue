<template>
  <div class="login">
    <div class="form-container">
      <div class="f-header">
        <h2>LOG IN</h2>
        <img src="../../assets/logo/1.png" alt="">
      </div>
      <hr>
      <form v-on:submit.prevent="handleSubmit">
        <label>email</label>
        <input type="email" name="email" required>
        <label>password</label>
        <input type="password" name="password" required>
        <span class="mute" ref="message">{{message}}</span>
        <button>Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../../api';

export default {
  name: 'Login',
  data: () => ({
    message: '',
  }),
  methods: {
    handleSubmit(event) {
      const f = new FormData(event.target);

      this.setMessage('logging in...');

      api.post('/auth/sign_in', f)
      .then(res => {
        if (res.ok) {
          this.$store.commit('setUser', res.body.data);
          this.$store.commit('setTokenFromHeaders', res.headers);

          this.$router.push('me');
        } else {
          const errors = res.data.errors;

          if(!errors.length) {
            this.setErrorMessage('Could not log in. Please try again later');
          } else {
            this.setErrorMessage(errors[0]);
          }
        }
      });
    },
    setMessage(m) {
      let {
        message
      } = this.$refs;

      message.classList.remove('error');
      message.classList.add('mute');
      this.message = m
    },
    setErrorMessage(error) {
      let {
        message
      } = this.$refs;

      message.classList.remove('mute');
      message.classList.add('error');
      this.message = error
    }
  }
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
