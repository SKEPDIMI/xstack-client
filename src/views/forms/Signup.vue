<template>
  <div class="signup">
    <div class="form-container">
      <h1>Sign Up</h1>
      <hr>
      <form v-on:submit.prevent="handleSubmit">
        <label>Full name</label>
        <input name="name" type="text" placeholder="Your full name" required>
        <label>Email</label>
        <input name="email" type="email" placeholder="Your public email" required>
        <label>Description</label>
        <input name="description" placeholder="A short paragraph about what you're all about" maxlength="90">
        <label>Bio</label>
        <textarea name="bio" cols="30" rows="10" placeholder="Tell us about yourself">

        </textarea>
        <label>Password</label>
        <input type="password" placeholder="*******" name="password" required>
        <label>Confirm Password</label>
        <input type="password" placeholder="*******" name="confirm_password" required>
        <label>Website</label>
        <input name="url" placeholder="https://github.com/johndoe">
        <label>Profile Picture</label>
        <input type="file" accept="image/*" name="image">
        <span class="mute" ref="message">{{message}}</span>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handleSubmit(event) {
      const formData = new FormData(event.target);

      this.setMessage('logging in...');

      api.post('/auth', formData)
      .then(res => {
        if (res.ok) {
          this.$store.commit('setUser', res.body.data);
          this.$store.commit('setTokenFromHeaders', res.headers);

          this.$router.push('me');
        } else {
          this.setErrorMessage('Failed to sign up. Please try again later!')
        }
      })
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
.signup {
  background-color: white;
  padding: 10px 20px;
  text-align: left;
  min-height: 90vh;
}
.signup form {
  font-size: large;
}
.signup input {
  width: 100%;
  min-height: 3em;
  border-radius: 5px;
  background-color: rgb(241, 241, 241);
  margin-bottom: 5px;
  border: none;
  padding: 3px;
}
.signup textarea {
  width: 100% !important;
  display: block;
  border-radius: 5px;
  background-color: rgb(241, 241, 241);
  margin-bottom: 5px;
  border: none;
  padding: 3px;
}
.signup button {
  background-color: #1E2330;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: large;
  padding: 10px 15px;
  margin-top: 5px;
  transition: .2s all ease-in-out;
}
.signup button:hover {
  background-color: rgba(30, 35, 48, 0.384);
}
</style>
