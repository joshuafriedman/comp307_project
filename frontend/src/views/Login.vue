<template>
  <div id="main">
    <br /><br /><br />
    <form v-on:submit.prevent="submit" v-if="!$info.auth || show_loggin">
      <div id="login-box">
        <p>Only Permitted for Web Page Technition</p>
        <b>Username:</b> <input v-model="username" placeholder="Username" />
        <b>Password:</b> <input v-model="password" placeholder="Password" />
        <br />
        <div id="error-msg" v-if="show_error_msg">{{ error_msg }}</div>
        <div id="success-msg" v-if="success">success loging in...</div>
        <input type="submit" value="Login" />
      </div>
    </form>

    <br /><br /><br /><br /><br /><br />
    <button v-if="$info.auth" @click="logout">logout</button>
    <br /><br /><br /><br />
  </div>
</template>

<script>
import PostService from "../postService.js";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
      error_msg: "Incorrect username or password",
      show_error_msg: false,
      success: false,
      show_loggin: false
    };
  },
  methods: {
    submit: async function() {
      this.$info.auth = await PostService.authenticate(this.username, this.password);
      this.show_error_msg = false;
      if (!this.$info.auth) this.show_error_msg = true;
      this.success = !this.show_error_msg;
      const that = this;
      if (this.success) {
        this.$emit("updatee",true);
        this.$info.username = this.username
        this.$info.password = this.password
      }
      if (this.$auth)
        setTimeout(() => {
          that.$router.push("/new-page");
        });
    },
    logout: function(){
        this.$info.auth = false
        this.$info.username = null
        this.$info.password = null
        this.$emit("updatee",false)
        this.show_loggin = true
        this.success = false
        this.show_error_msg = false
    }
  }
};
</script>

<style scoped>
#main {
  text-align: center;
}

#login-box {
  padding: 10px 10px 10px 10px;
  width: 300px;
  height: 150px;
  margin: auto;
  text-align: center;
  color: var(--navy);
  background-color: var(--light-yellow);
}
#error-msg {
  color: red;
}
#success-msg {
  color: green;
}
</style>
