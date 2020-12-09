<template>
  <div id="app">
    <Header :show_new_page=show_new />
    <router-view v-on:updatee="updater" :data_ready=ready />
    <Footer />
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import PostService from "./postService.js";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: function(){
    return{
      show_new: false,
      ready: false
    }
  },
  methods:{
    updater: function(val){
      this.show_new = val
    }
  },
  async mounted(){
    window.console.log('App mounted')
    const data = await PostService.getHome()
    localStorage.data = JSON.stringify(data)
    this.ready = true
    window.console.log('stored in local storage');
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
