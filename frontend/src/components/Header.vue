<template>
  <div id="main">
    <router-link to="/">
      <img src="../assets/logo-header.png" alt="CS Logo">
    </router-link>
    <div id='searchbar'> 
      <form id="search-form" v-on:submit.prevent="search">
      <input id='search-bar' type="text" v-model="query" placeholder="Search"/> 
      <button id="search-submit" type="submit" >
        <img id='search-icon' src="../assets/search-icon.png" alt="">
     </button>
    </form>
    </div>
    <nav role="navigation" class="child1">
      <ul>
        <li id = "top"><a href="/">Home</a></li>
        <li id = "top"><a href="#">Prospective</a>
          <ul id="dropdown">
            <li id= "item"><router-link to="/general-info">General Info</router-link></li>
            <li id= "item"><a href="#">Why Computer Science?</a></li>
            <li id= "item"><a href="#">CEGEP</a></li>
            <li id= "item"><a href="#">Freshmen</a></li>
            <li id= "item"><a href="#">Choosing a Major</a></li>
            <li id= "item"><a href="#">Combining Studies</a></li>
            <li id= "item"><a href="#">Internships</a></li>
            <li id= "item"><a href="#">Undergrads</a></li>
            <li id= "item"><a href="#">Transfer Students</a></li>
          </ul>
        </li>
        <li id = "top"><a href="#">Academic</a>
           <ul id="dropdown">
            <li id= "item"><a href="#">Undergraduate</a></li>
            <li id= "item"><a href="#">Graduate</a></li>
            <li id= "item"><router-link to="/classes">Classes</router-link></li>
            <li id= "item"><a href="#">Teaching Assistants</a></li>
            <li id= "item"><a href="#">Funding</a></li>
          </ul>
        </li>
        <li id = "top"><a href="#">Research</a>
          <ul id="dropdown">
              <li id= "item"><a href="#">Areas</a></li>
              <li id= "item"><a href="#">Tech Reports</a></li>
            </ul>
        </li>
        <li id = "top"><a href="#">People</a>
          <ul id="dropdown">
              <li id= "item"><router-link to="/people">Faculty</router-link></li>
              <li id= "item"><a href="#">Staff</a></li>
              <li id= "item"><a href="#">Community</a></li>
            </ul>
        </li>
        <li id = "top"><a href="#">News</a>
        <ul id="dropdown">
              <li id= "item"><router-link to="/news">All</router-link></li>
              <li id= "item"><a href="#">Announcements</a></li>
              <li id= "item"><a href="#">Awards</a></li>
            </ul>
        </li>
        <li id = "top"><a href="#">Employment</a>
          <ul id="dropdown">
              <li id= "item"><a href="#">Faculty</a></li>
              <li id= "item"><a href="#">Course Lecturer</a></li>
              <li id= "item"><a href="#">Priority Points</a></li> <hr>
              <li id= "item"><a href="#">Research</a></li>
              <li id= "item"><a href="#">Student</a></li>
            </ul>
        </li>
        <li id = "top"><a href="#">Donate</a></li>
        <li id = "top"><a href="#">About</a>
           <ul id="dropdown">
              <li id= "item"><a href="#">Contacts</a></li>
              <li id= "item"><a href="#">Facilities</a></li> <hr>
              <li id= "item"><a href="#">Visitor Form </a></li>
              <li id= "item"><a href="#">Room Reservations</a></li>
              <li id= "item"><a href="#">Webmail</a></li> <hr>
              <li id= "item"><a href="#">Internal</a></li> <hr>
              <li id= "item"><a href="#">Tech Support</a></li>
              <li id= "item"><a href="#">Admin Info</a></li>
            </ul>
        </li>
        <li id = "top"> <router-link to="/login"> {{ log_in_out }} </router-link> </li>
        <li id = "top"> <router-link to="/new-page" v-if="show_new_page"> New Page </router-link> </li>
      </ul>
   </nav>

  </div>
</template>

<script>
export default {
  name: "Header",
  data: function(){
    return{
      log_in_out: "Login"
    }
  },
  methods: {
    search: function(){
      const query = document.getElementById('search-bar').value
      window.location.href = "http://www.google.com/search?q=McGill: "+query
    },
    
  },
  props:{
    show_new_page: Boolean,
  },
  watch:{
    show_new_page: function(val){
      this.log_in_out = !val? "Login": "Logout"
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
nav {
  left: 18%;
  padding-right: 18%;
  position: relative;
}
ul {
	list-style: none;
	margin: 0;
	padding-left: 0;
}
#top {
	color: #fff;
  border: 1px solid white;
	display: block;
	float: left;
  padding: 10px;
  margin: 25px 10px;
	position: relative;
	text-decoration: none;
  transition-duration: 0.5s;
  font-size: 15px;
  margin-bottom: 20px;
}
  
#top a {
  color: white;
}
li:hover {
	background: var(--mred);
}
#dropdown {
  color: black;
	visibility: hidden;
  opacity: 0;
	position: absolute;
  transition: all 0.5s ease;
	left: 0;
  display: none;
  text-align: left;
  z-index:1;
}
#dropdown a{
  color: black;
}
#top:hover > ul,
ul li ul:hover {
  background-color: var(--dutch-white);
  visibility: visible;
  opacity:1; 
  display: block;
  margin-top: 11px;;
  
}
#item {
	clear: both;
  width: 200px;
  color: black;
  height: 30px;
  padding-left: 10px;
  position: relative; 
  z-index:1;
}
#main {
  height: 150px;
  background-color: var(--navy);
}
#searchbar{
  position: absolute;
  right: 20px;
  border-radius: 10px;
  right: 5%;
  top: 50px;
}
#search-submit{
  height:31px;
  width:40px;
  position: relative;
  left:-2px;
  border-left: none;
  border-top: 2px black solid;
}
#search-submit:hover{
  cursor:pointer;
  background-color: white;
}
#search-bar{
  height:25px;
  border-right:none;
  /* border-radius: 5px; */
}
#search-form{
  display: flex;
  flex-direction: row;
}
input#search-bar:focus {
    outline-width: 0;
}
@media screen and (max-width: 1400px) {
  #top a{
    font-size: 13px;
  }
}
@media screen and (max-width: 1200px) {
  #main{
    height: 230px;
  }
}

@media screen and (max-width: 800px) {
  #main{
    height: 310px;
  }
}
</style>