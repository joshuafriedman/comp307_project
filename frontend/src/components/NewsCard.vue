<template>
    <div id="main" :href=link>
        <a :href=link>
            <div id="photo">
                <img :src="require(`../assets/news/${picture}`)">
            </div> 
            <div id="text"> 
                <p id = "message"> {{ message }} </p>
                <p id = "date"> {{ date }} </p>
            </div>
        </a>

         
    </div>
</template>

<script>
export default {
    name: "NewsCard",
    props:{
        picture: String, 
        message: String,
        date: String,
        link: String, 
    },

}
</script>

<style scoped>

    #photo{
        position: relative; 
    }
    
    #main{
        width: 300px;
        height: 400px;
        margin: auto;
        font-size: 14px;
        margin: 20px;
        box-shadow: 10px 5px  5px var(--navy);
        border-radius: 20px 20px 20px 20px;
        background-color: var(--dutch-white);
    }

    #main:hover{
        box-shadow:10px  5px 5px var(--mred);
        cursor: pointer;
    }

    
    #message{
        overflow: hidden;
        font-weight: bold;
        font-size: 20px;
        position: relative; 
        text-align: center;
        width: 300px;
        height: 80px;

    }

    img{
        width: 300px; 
        height: 250px;
        border-radius: 20px 20px 0px 0px;
    }
    a{
        text-decoration: none; 
        color: black;
    }
    #date{
        position: relative;
        text-align: right; 
        bottom: 0; 
        right: 10px;
    }

</style>