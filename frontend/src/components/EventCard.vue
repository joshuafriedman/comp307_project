<template>
    <div id="main">
        <a class ="event" :id=color :href=link>
            <div id="calendar"> {{ date }} </div>
            <div id="eventTitle"> {{ message }} </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "EventCard",
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
    height: 70px; 
    display:flex;
    border-bottom: 1px solid var(--navy);
}
#dark{
    background-color: var(--dutch-white);
}


#calendar{
    font-size: 20px;    
    display: grid;
    place-items: center; 
    width: 60px;
    height: 80%;
    background-color: #FFFFFA;
    border-radius: 10px;
    border: solid black 1px;
    color: var(--mred);
    margin-right: 10px;
}

#eventTitle{
  text-align: left;
  font-size: 15px;
  font-weight:bold;
  height: 30px;
}

.event:hover {
    cursor:pointer; 
    color: var(--mred);
}

a{
  text-decoration: none; 
  color:black;
}

.event{
    width:100%;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    overflow: hidden;
    display:flex;
}

</style>