<template>
  <div id="main">
    <div id = "flex"> 
        <div id = "updates">
          <div id = "title"> Important Updates </div> 

          <div id="slides">
            <splide :options="options">
              <splide-slide>
                <img src="../assets/homepage/homepage1.png" />
              </splide-slide>
              <splide-slide>
                <img src="../assets/homepage/homepage2.png" />
              </splide-slide>
            </splide>
          </div>
        </div> 

        <div id= "news"> 
          <div id = "title"> News  </div>
          <div id = "newsEventA">  
            <p id= "newsTitle"> Virtual Open House 2020 </p> 
            <p id= "date"> Oct. 25, 2020 </p>
          </div> 
          <div id = "newsEventB"> 
            <p id= "newsTitle"> Concerns related to COVID-19 </p> 
            <p id= "date"> Oct. 5, 2020 </p>
          </div>
          <div id = "newsEventA">  
            <p id= "newsTitle"> Three SOCS professors are awarded large grants to use AI to understand cancer </p> 
            <p id= "date"> Nov. 5, 2020 </p>
          </div> 
          <div id = "newsEventB">  
            <p id= "newsTitle"> Assistant Professor Oana Balmau wins CORE John Makepeace Bennett Award </p> 
            <p id= "date"> Oct. 27,2020 </p>
          </div>
          <div id = "newsEventA">  
            <p id= "newsTitle"> Three Faculty Members Join the School of Computer Science </p> 
            <p id= "date"> Sept. 1, 2020 </p>
          </div>
          <div id = "newsEventB"> 
            <p id= "newsTitle"> Prof. Siva Reddy won the VentureBeat AI Innovation Award 2020</p> 
            <p id= "date"> Aug. 3, 2020 </p>
          </div>
          <div id = "more"> Click for More News </div>
        </div> 
    </div> 

    <div id = "flex"> 
      <div id= "events"> 
        <div id = "title"> Upcoming Events</div>
      </div> 

      <div id= "hilight"> 
        <div id = "title"> December Hilights </div>
      </div> 
    </div>
  </div>
</template>


<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: "Home",
  props: {
    query: String
  },
   components: {
    Splide,
    SplideSlide
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
    width: 100%;
    margin: auto;
}

img{
  height: 400px;
  width: 100%;
}

#main {
  background-color: var(--light-yellow);
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
}

#flex{
  display: flex; 
}

#updates {
  margin: 20px;
  width: 60%;
  height: 500px;
  position: relative;
  float: left; 
  box-shadow: 5px 5px  5px var(--navy);
  border-radius: 10px 10px 10px 10px;
}

#news {
  margin:20px;
  height: 500px;
  width: 30%;
  position: relative;
  float: left;
  box-shadow: 5px 5px  5px var(--navy);
  border-radius: 10px 10px 10px 10px;
  
}

#events {
  margin: 20px;
  height: 300px;
  position: relative;
  width: 50%;
  box-shadow: 5px 5px  5px var(--navy);
  border-radius: 10px 10px 10px 10px;
}

#hilight {
  margin: 20px;
  position: relative;
  width: 50%;
  box-shadow: 5px 5px  5px var(--navy);
  border-radius: 10px 10px 10px 10px;
}

#title{
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding:10px;
  color: black;
  background-color: var(--mred);
  border-radius: 10px 10px 0px 0px;
}

#newsTitle{
  padding-top: 5px;
  margin-top: 0px;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  font-weight:bold;
  height: 30px;
  
}

#date {
  position: relative;
  text-align: right; 
  bottom: 0px; 
  right: 3px;
  font-size: 10px;
}

#newsEventA{
  background-color: var(--dutch-white);
  width: 94.5%;
  height: 13%;
  border-bottom: 1px solid var(--navy);
  padding-left: 10px;
  padding-right: 10px;
}

#newsEventB{
  width: 94.5%;
  height: 13%;
  border-bottom: 1px solid var(--navy);
  padding-left: 10px;
  padding-right: 10px;
}

#newsEventA:hover, #newsEventB:hover, #more:hover {
  cursor:pointer; 
  color: var(--mred);
}

#more {
  background-color: var(--dutch-white);
  width: 100%;
  height: 10%;
  display: grid;
  place-items: center;
  border-bottom: 1px solid var(--navy);
  border-radius: 0px 0px 10px 10px;
  font-weight: bold;
}

</style>
