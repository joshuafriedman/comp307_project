<template>
  <div id="main">
    <div id = "flex"> 
        <div id = "updates">
          <div id = "title"> Important Updates </div> 
          <div id="slides">
            <splide :options="options">
              <splide-slide>
                <img id = "slideImg" src="../assets/homepage/homepage1.png" />
              </splide-slide>
              <splide-slide>
                <img id = "slideImg" src="../assets/homepage/homepage2.png" />
              </splide-slide>
            </splide>
          </div>
        </div> 

      <div id= "news"> 
          <div id = "title"> News  </div>
          <a id = "light" class = "newsEvent" href= "https://www.cs.mcgill.ca/academic/undergrad/openhouse/">  
            <p id= "newsTitle"> Virtual Open House 2020 </p> 
            <p id= "date"> Oct. 25, 2020 </p>
          </a> 
          <a id = "dark" class = "newsEvent" href= "https://www.cs.mcgill.ca/news/129/"> 
            <p id= "newsTitle"> Concerns related to COVID-19 </p> 
            <p id= "date"> Oct. 5, 2020 </p>
          </a>
          <a id = "light" class = "newsEvent" href= "https://www.cs.mcgill.ca/news/132/">  
            <p id= "newsTitle"> Three SOCS professors are awarded large grants to use AI to understand cancer </p> 
            <p id= "date"> Nov. 5, 2020 </p>
          </a> 
          <a id = "dark" class = "newsEvent" href= "https://www.cs.mcgill.ca/news/131/">  
            <p id= "newsTitle"> Assistant Professor Oana Balmau wins CORE John Makepeace Bennett Award </p> 
            <p id= "date"> Oct. 27,2020 </p>
          </a>
          <a id = "light" class = "newsEvent" href= "https://www.cs.mcgill.ca/news/128/">  
            <p id= "newsTitle"> Three Faculty Members Join the School of Computer Science </p> 
            <p id= "date"> Sept. 1, 2020 </p>
          </a>
          <a id = "dark" class = "newsEvent" href= "https://www.cs.mcgill.ca/news/127/"> 
            <p id= "newsTitle"> Prof. Siva Reddy won the VentureBeat AI Innovation Award 2020</p> 
            <p id= "date"> Aug. 3, 2020 </p>
          </a>
          <a id = "more" href= "https://www.cs.mcgill.ca/news/"> Click for More News </a>
        </div> 
    </div> 

 
    <div id = "flex"> 
      <div id= "events"> 
          <div id = "title"> Upcoming Events</div>
            <div class="card-container" v-for="event in events" :key="event.id">
              <EventCard :date=event.date :message=event.message :color=event.color :link=event.link />
            </div>
            <a id = "moreEvent" href = "https://www.cs.mcgill.ca/events/"> Click for More Events </a>
      </div> 


      <div id= "hilight"> 
        <div id = "title"> December Highlights </div>
        <div id = "flex"> 
          <div id = "section"> 
            Resources for Remote Learning
            <img id = "imgA" src="../assets/homepage/remote.png" />
          </div> 

          <div id = "section"> 
            Featured Staff of the Month
            <img id = "imgA" src="../assets/homepage/Staff.jpeg" />
          </div> 
        </div>
      </div> 
    </div>
  </div>
</template>


<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import EventCard from "../components/EventCard.vue";

export default {
  name: "Home",
  props: {
    query: String
  },
   components: {
    Splide,
    SplideSlide,
    EventCard
  },
  data: function(){
      return {
          options: {
              type: 'loop',
              autoplay: true,
          },
          events: [
                {date: "12/05", message: "Understanding the Nanoscopic Structural Framework of Brain Astrocytes", color: "light", link: "https://www.cs.mcgill.ca/events/284/"},
                {date: "11/13", message: "Virtual Collaboration Techniques to Catalyze Open Innovation", color: "dark", link: "https://www.cs.mcgill.ca/events/283/"},
                {date: "09/17", message: "McGill IT Services Virtual Fair", color: "light", link: "https://www.cs.mcgill.ca/events/280/"},
            ]
      }
  },

};
</script>

<style scoped>
#main {
  background-color: var(--light-yellow);
  margin: 40px;
}

#slides{
    width: 800px;
    margin: auto;
}

#slideImg{
  height: 400px;
  width: 100%;
}

#flex{
  display: flex;
	flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

#updates {
  margin: 20px;
  height: 500px;
  box-shadow: 5px 5px  5px var(--navy);
  flex: 0 1 800px;; 
}

#news {
  margin:20px;
  height: 500px;
  float: left;
  box-shadow: 5px 5px  5px var(--navy);
  flex: 0 1 400px;
}

#events {
  margin: 20px;
  height: 300px;
  box-shadow: 5px 5px  5px var(--navy);
  flex: 0 1 560px; 
}

.card-container{
  margin:-40px;
}

#hilight {
  margin:20px;
  flex: 0 1 645px; 
  box-shadow: 5px 5px  5px var(--navy);
}

@media screen and (max-width: 1400px){
  #updates{
    flex: 0 1 800px;
  }
  #slides{
    width: 800px;
  }
  #news{ 
    flex: 0 1 800px;
  }
  #events{
    flex: 0 1 800px;
  }
  #hilight{
    flex: 0 1 800px;
  }
  .newsEvent{
    width: 100%;
  }
}

@media screen and (max-width: 900px){
  #updates{
    flex: 1 1 400px;
  }
  #slides{
    width: 400px;
  }
  #section{
    flex:1 1 100%;
  }
}

#title{
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding:10px;
  color: black;
  background-color: var(--mred);
}

#newsTitle{
  padding-top: 5px;
  margin-top: 0px;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  font-weight:bold;
  height: 30px;
  float: left;
  width: 75%;
}

#date {
 align-self: flex-end;
 font-size: 10px;
 text-align: right;
}

#light {
  background-color: var(--light-yellow); 
}

#dark {
  background-color: var(--dutch-white); 
}

.newsEvent{
  width: 95%;
  height: 13%;
  border-bottom: 1px solid var(--navy);
  padding-left: 10px;
  padding-right: 10px;
  display:inline-flex;
}

.newsEvent:hover, #more:hover, #moreEvent:hover, section:hover{
  cursor:pointer; 
  color: var(--mred);
  
}

#more {
  width: 100%;
  height: 10%;
  display: grid;
  place-items: center;
  border-bottom: 1px solid var(--navy);
  font-weight: bold;
}

#moreEvent {
  background-color: var(--dutch-white);
  width: 100%;
  height: 12%;
  display: grid;
  place-items: center;
  font-weight: bold;
}

#eventTitle{
  padding-top: 5px;
  margin-top: 0px;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  font-weight:bold;
  height: 30px;
}

#section { 
  text-align: center;
  font-size: 20px;
  font-weight:bold;
  height: 250px;
  background-color: var(--dutch-white);
  flex: 1 1 50%;
}

#section:hover{
  color: var (--mred);
} 

#imgA {
  height: 80%;
  margin-top: 5px;
  width: 80%;
}

#imgA:hover {
  border: 1px solid var(--mred);
  cursor: pointer;
}

a{
  text-decoration: none; 
  color:black;
}

</style>
