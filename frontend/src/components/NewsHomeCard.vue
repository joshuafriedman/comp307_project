<template>
    <div id="main">
        <a class ="news" :id=color :href=link>
            <div id="newsTitle"> {{ message }} </div>
            <div id="date"> {{ date }} </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "NewsHomeCard",
    props:{
        date: String, 
        message: String,
        link: String,
        color: String,
    },

}
</script>

<style scoped>

#main{
    height: 65px; 
    display:flex;
    border-bottom: 1px solid var(--navy);
}
#dark{
    background-color: var(--dutch-white);
}

#newsTitle{
  padding-top: 5px;
  margin-top: 0px;
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  font-weight:bold;
  width: 75%;
}

#date {
 align-self: flex-end;
 font-size: 10px;
 text-align: right;
}

.news{
    display:flex;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden; 
}

.news:hover {
    cursor:pointer; 
    color: var(--mred); 
}

a{
  text-decoration: none; 
  color:black;
}
</style>