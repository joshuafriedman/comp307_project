<template>
  <div id="main">
    <div id="left">
      <p>All contents related requests should be sent to <a href="#">webadmin@.cs.mcgill.ca</a></p>
      <p>© McGill University 2020 Credits</p>
    </div>
    <div id="right">
      <img src="https://www.cs.mcgill.ca/static/base/logo-footer.png" style="width:200px;height:100px;" alt="CS Image">
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
#main{
  height: 100px;
  width: 100%;
  background-color: var(--navy);
  position:relative;
  bottom: 0px;
  text-align:initial;
  color: white;
}
a{
  text-decoration: none;
  color: var(--light-yellow);
};
a:visited
{
  text-decoration: none;
}
#left
{
  float: left;
  width: 50%;
}
#right
{
  float: right;
}
</style>
