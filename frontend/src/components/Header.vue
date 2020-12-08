<template>
  <div id="main">
    <img src="../assets/logo-header.png" alt="CS Logo">
    <div id='searchbar'> 
      <form id="search-form" v-on:submit.prevent="search">
      <input id='search-bar' type="text"  placeholder="Search"/> 
      <button id="search-submit" type="submit" >
        <img id='search-icon' src="../assets/search-icon.png" alt="">
    </button>
</form>
    </div>
    <div id="menu">
      <router-link to="/"> Home </router-link>
      <router-link to="/classes"> Classes </router-link>
      <router-link to="/people"> People </router-link>
      <router-link to="/news"> News </router-link>
      <router-link to="/general-info"> General Info </router-link>
      <router-link to="/login"> Login </router-link>
      <router-link to="/new-page"> New Page </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function(){
    return{
      
    }
  },
  methods: {
    search: function(){
      const query = document.getElementById('search-bar').value
      window.location.href = "http://www.google.com/search?q=McGill: "+query
    }
  }
};
</script>

<style scoped>
#main {
  height: 150px;
  background-color: var(--navy);
  /* position:relative; */
}
#menu {
  position: relative;
  top: 40px;
  color: white;
}
#menu a {
  margin: 5px;
  padding:10px;
  border: white 1px solid;
  text-decoration: none;
  width: 100px;
  max-width: 100px;
  color: inherit;
}
#menu a:hover {
  text-shadow: 0px 0px 1px black;
  text-decoration: none;
}
#searchbar{
   /* position: absolute;
  right: 20px; */
  border-radius: 10px;
  position: absolute;
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
@media screen and (max-width: 700px) {
  #menu a{
    font-size: 8px;
  }
}
</style>