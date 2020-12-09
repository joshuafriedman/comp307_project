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

    <div id="news" v-if="'news' == picked" class="center">
      <h4>Add some news!</h4>
      <form v-on:submit.prevent="submit_news">
      <table>
        <td> 
          <tr>Post: </tr>
          <tr>Link: </tr>
          <tr>Date: </tr>
        </td>
        <td>
          <tr><input type="text" name="" id="" v-model="datum.post" /> </tr>
          <tr><input type="text" name="" id="" v-model="datum.link" /> </tr>
          <tr><input type="text" name="" id="" v-model="datum.date" /> </tr>
        </td>
      </table>
        <input type="submit" name="" id="" />
      </form>

    </div>
    <div id="events" v-if="'events' == picked" class="center">
      <h4>Add an event!</h4>
      <form v-on:submit.prevent="submit_event">
      <table> 
        <td> 
          <tr> Message: </tr>
          <tr> Link: </tr>
          <tr> Date: </tr>
        <td>
        <td>
          <tr><input type="text" name="" id="" v-model="datum.message" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.link" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.date" /> </tr>
        </td>
        </table>
        <input type="submit" name="" id="" />
      </form>
    </div>

    <div id="people" v-if="'people' == picked" class="center">
      <h4>Add a person!</h4>
      <form v-on:submit.prevent="submit_people">
      <table> 
        <td>
          <tr>Position: </tr>
          <tr>Name: </tr>
          <tr>Link to Website: </tr>
          <tr>Office:</tr>
          <tr>Phone: </tr>
          <tr>Email: </tr>
          <tr>Fields: </tr>
        </td> 

        <td> 
          <tr><input type="text" name="" id="" v-model="datum.position" /></tr> 
          <tr><input type="text" name="" id="" v-model="datum.name" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.website" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.office" /></tr>
          <tr> <input type="text" name="" id="" v-model="datum.phone" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.email" /></tr>
          <tr> <input type="text" name="" id="" v-model="datum.fields" /></tr>
        </td>
        </table>
        <input type="submit" name="" id="" />
      </form>
    </div>
    <div id="classes" v-if="'classes' == picked" class="center">
      <h4>Add a class!</h4>
      <form v-on:submit.prevent="submit_news">
      <table> 
        <td>
          <tr>Name: </tr>
          <tr>Class Description: </tr>
          <tr>Number of Credits: </tr>
          <tr>Terms Available:</tr>
          <tr>Instructor: </tr>
          <tr>Prerequisites: </tr>
          <tr>Notes: </tr>
          <tr>Link to Syllabus: </tr>
          <tr>Link to Course: </tr>
        </td> 

        <td> 
          <tr><input type="text" name="" id="" v-model="datum.name" /></tr> 
          <tr><input type="text" name="" id="" v-model="datum.description" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.credits" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.terms" /></tr>
          <tr> <input type="text" name="" id="" v-model="datum.instructor" /></tr>
          <tr><input type="text" name="" id="" v-model="datum.prereq" /></tr>
          <tr> <input type="text" name="" id="" v-model="datum.other" /></tr>
          <tr> <input type="text" name="" id="" v-model="datum.syllabus" /></tr>
          <tr> <input type="text" name="" id="" v-model="datum.link" /></tr>
        </td>
        </table>
      </form>
    </div>
    <br> <br> <br> <br>
  </div>
</template>

<script>
import PostService from "../postService.js";

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
    },
    submit_news: function(){

        var a = PostService.insertNews(this.datum,this.$info.username,this.$info.password)
        window.console.log(a);
    },
    submit_events: function(){

        PostService.insertEvents(this.datum,this.$info.username,this.$info.password)
    },
    submit_classes: function(){

        PostService.insertClasses(this.datum,this.$info.username,this.$info.password)
    },
    submit_people: function(){
        PostService.insertPeople(this.datum,this.$info.username,this.$info.password)
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

.center{
   display: grid;
  place-items: center;
}

</style>
