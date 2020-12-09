<template>
  <div id="app">
    <Header :show_new_page=show_new />
    <router-view v-on:updatee="updater" />
    <Footer />
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: function(){
    return{
      show_new: false
    }
  },
  methods:{
    updater: function(val){
      this.show_new = val
    }
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
