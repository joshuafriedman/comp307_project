<template>
  <div id="main">
    <img src="../assets/logo-header.png" alt="CS Logo">
    <div id="menu">
      <router-link to="/"> Home </router-link>
      <router-link to="/classes"> Classes </router-link>
      <router-link to="/people"> People </router-link>
      <router-link to="/news"> News </router-link>
      <router-link to="/general-info"> General Info </router-link>
      <router-link to="/login"> Login </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#main {
  height: 150px;
  background-color: var(--navy);
 
}
#menu {
  height: 100%;
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
</style>
