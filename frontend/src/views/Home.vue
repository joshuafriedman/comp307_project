<template>
  <div id="main">
    <h1>home page</h1>
    <h4>news and more</h4>
    <div id="slides">
      <splide :options="options">
        <splide-slide>
          <img src="../assets/image1.jpeg" />
        </splide-slide>
        <splide-slide>
          <img src="../assets/image2.jpeg" />
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: "Home",
  components: {
    Splide,
    SplideSlide
  },
  props: {
    query: String
  },
  data: function(){
      return {
          options: {
              type: 'loop',
              autoplay: true,
          }
      }
  },
  methods: {
    example1: function() {
      alert("example 1 called");
    },
    example2: function() {
      alert("example 2 called");
    }
  }
};
</script>

<style scoped>
#slides{
    width: 600px;
    margin: auto;
}
</style>
