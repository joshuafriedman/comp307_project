<template>
  <div id="main">
    <div id="flex">
      <div id="updates">
        <div id="title">Important Updates</div>
        <div id="slides">
          <splide :options="options">
            <splide-slide>
              <a href="https://www.cs.mcgill.ca">
                <img id="slideImg" src="../assets/homepage/homepage1.png" />
              </a>
              <p>Welcome to Computer Science at McGill</p>
            </splide-slide>
            <splide-slide>
              <a href="https://www.cs.mcgill.ca/donate/">
                <img id="slideImg" src="../assets/homepage/homepage2.png"
              /></a>
              <p>Donate to Women In Tech</p>
            </splide-slide>
          </splide>
        </div>
      </div>

      <div id="news">
        <div id="title">News</div>
        <div class="card-container" v-for="news in newsC" :key="news.id">
          <NewsHomeCard
            :date="news.date"
            :message="news.message"
            :color="news.color"
            :link="news.link"
          />
        </div>
        <a id="more" href="https://www.cs.mcgill.ca/news/">
          Click for More News
        </a>
      </div>
    </div>

    <div id="flex">
      <div id="events">
        <div id="title">Upcoming Events</div>
        <div class="card-container" v-for="event in events" :key="event.id">
          <EventCard
            :date="event.date"
            :message="event.message"
            :color="event.color"
            :link="event.link"
          />
        </div>
        <a id="moreEvent" href="https://www.cs.mcgill.ca/events/">
          Click for More Events
        </a>
      </div>

      <div id="hilight">
        <div id="title">December Highlights</div>
        <div id="flex">
          <div id="section">
            Resources for Remote Learning
            <a href="https://www.cs.mcgill.ca/news/119/">
              <img id="imgA" src="../assets/homepage/remote.png"
            /></a>
          </div>

          <div id="section">
            Featured Staff of the Month
            <a href="https://www.cs.mcgill.ca/~jvybihal/">
              <img id="imgA" src="../assets/homepage/Staff.jpeg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import EventCard from "../components/EventCard.vue";
import NewsHomeCard from "../components/NewsHomeCard.vue";

export default {
  name: "Home",
  props: {
    query: String,
    data_ready: Boolean
  },
  components: {
    Splide,
    SplideSlide,
    EventCard,
    NewsHomeCard
  },
  mounted() {
    this.events = JSON.parse(localStorage.data).events;
    this.newsC = JSON.parse(localStorage.data).news;
    for (var i = 0; i < this.newsC.length; i += 1) {
      this.newsC[i].color = i % 2 == 0 ? 'light' : 'dark';
    }
    for (i = 0; i < this.events.length; i += 1) {
      this.events[i].color = i % 2 == 0 ? 'light' : 'dark';
    }

  },
  watch: {
    data_ready: function() {

      this.events = JSON.parse(localStorage.data).events;
      this.newsC = JSON.parse(localStorage.data).news;
      for (var i = 0; i < this.newsC.length; i += 1) {
        this.newsC[i].color = i % 2 == 0 ? 'light' : 'dark;'
      }
      for (i = 0; i < this.events.length; i += 1) {
        this.events[i].color = i % 2 == 0 ? 'light' : 'dark';
      }
    }
  },
  data: function() {
    return {
      options: {
        type: "loop",
        autoplay: true
      },
      events: [
        
      ],
      newsC: [
        
      ]
    };
  }
};
</script>

<style scoped>
#main {
  background-color: var(--light-yellow);
  margin: 40px;
}

#slides {
  width: 800px;
  margin: auto;
}

#slideImg {
  height: 400px;
  width: 100%;
}

#flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

#updates {
  margin: 20px;
  height: 500px;
  box-shadow: 5px 5px 5px var(--navy);
  flex: 0 1 800px;
}

#news {
  margin: 20px;
  height: 500px;
  float: left;
  box-shadow: 5px 5px 5px var(--navy);
  flex: 0 1 400px;
}

#events {
  margin: 20px;
  height: 300px;
  box-shadow: 5px 5px 5px var(--navy);
  flex: 0 1 560px;
}

.card-container {
  margin: -40px;
}

#hilight {
  margin: 20px;
  flex: 0 1 645px;
  box-shadow: 5px 5px 5px var(--navy);
}

@media screen and (max-width: 1400px) {
  #updates {
    flex: 0 1 800px;
  }
  #slides {
    width: 800px;
  }
  #news {
    flex: 0 1 800px;
  }
  #events {
    flex: 0 1 800px;
  }
  #hilight {
    flex: 0 1 800px;
  }
  .newsEvent {
    width: 100%;
  }
}

@media screen and (max-width: 900px) {
  #updates {
    flex: 1 1 400px;
  }
  #slides {
    width: 400px;
  }
  #section {
    flex: 1 1 100%;
  }
  #imgA {
    width: 100px;
    height: 100px;
  }
}

#title {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
  color: black;
  background-color: var(--mred);
}

#more:hover,
#moreEvent:hover,
section:hover {
  cursor: pointer;
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

#eventTitle {
  padding-top: 5px;
  margin-top: 0px;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
  height: 30px;
}

#section {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  height: 250px;
  background-color: var(--dutch-white);
  flex: 1 1 50%;
}

#section:hover {
  color: var (--mred);
}

#imgA {
  height: 200px;
  margin-top: 5px;
  width: 250px;
}

#imgA:hover {
  border: 1px solid var(--mred);
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
}
</style>
