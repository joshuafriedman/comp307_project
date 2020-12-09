<template>
  <div id="main">
    <h2>Welcome {{ $info.username }}</h2>
    <br />
    <h3>What would you like to modify</h3>
    <br />
    <div id="flex-container">
      <div class="rad">
        <label for="two">News</label>
        <input type="radio" id="two" value="news" v-model="picked" />
      </div>

      <div class="rad">
        <label for="two">Events</label>
        <input type="radio" id="two" value="events" v-model="picked" />
      </div>

      <div class="rad">
        <label for="two">People</label>
        <input type="radio" id="two" value="people" v-model="picked" />
      </div>

      <div class="rad">
        <label for="two">Classes</label>
        <input type="radio" id="two" value="classes" v-model="picked" />
      </div>
    </div>

    <div id="news" v-if="'news' == picked">
      <h4>Add some news!</h4>
      <form v-on:submit.prevent="submit_news">
        post: <input type="text" name="" id="" v-model="datum.post" /> link:
        <input type="text" name="" id="" v-model="datum.link" /> date:
        <input type="text" name="" id="" v-model="datum.date" />
        <input type="submit" name="" id="" />
      </form>
    </div>
    <div id="events" v-if="'events' == picked">
      <form v-on:submit.prevent="submit_event">
        message:
        <input type="text" name="" id="" v-model="datum.message" /> link:
        <input type="text" name="" id="" v-model="datum.link" /> date:
        <input type="text" name="" id="" v-model="datum.date" />
        <input type="submit" name="" id="" />
      </form>
    </div>
    <div id="people" v-if="'people' == picked">
      <form v-on:submit.prevent="submit_people">
        position: <input type="text" name="" id="" v-model="datum.position" />
        name: <input type="text" name="" id="" v-model="datum.name" />
        website: <input type="text" name="" id="" v-model="datum.website" />
        office: <input type="text" name="" id="" v-model="datum.office" />
        phone: <input type="text" name="" id="" v-model="datum.phone" />
        email: <input type="text" name="" id="" v-model="datum.email" />
        picture: <input type="text" name="" id="" v-model="datum.picture" /><br/>
        fields: <input type="text" name="" id="" v-model="datum.fields" />
        <input type="submit" name="" id="" />
      </form>
    </div>
    <div id="classes" v-if="'classes' == picked">
      <form v-on:submit.prevent="submit_news">
        post: <input type="text" name="" id="" v-model="datum.post" /> link:
        <input type="text" name="" id="" v-model="datum.link" />
        <input type="submit" name="" id="" />
      </form>
    </div>
    <br> <br> <br> <br>
  </div>
</template>

<script>
export default {
  name: "NewPage",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
      picked: "",
      datum:{}
    };
  },
  methods: {
    test: async function() {
      window.console.log("here si the data");
    }
  }
};
</script>

<style scoped>
.rad {
  margin: 30px;
}
#flex-container {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

#sidebar {
  margin-left: 2.5%;
  width: 15%;
  padding-left: 10px;
  background-color: var(--light-yellow);
  height: auto;
  position: fixed;
}

#sidebar button {
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  background-color: var(--light-yellow);
  color: black;
  border: none;
  outline: none;
  text-align: left;
}

#content {
  background-color: var(--light-yellow);
  margin-left: 22.5%;
  margin-right: 5%;
  text-align: left;
  height: auto;
}
</style>
