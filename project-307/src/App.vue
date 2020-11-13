<template>
  <div id="app">
    <Header />
    <div id="main">
      <router-view />
    </div>
    <Footer />
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"


export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/colors.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}



</style>
