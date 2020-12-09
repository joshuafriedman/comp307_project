<template>
    <div id="main">
        <div id = "parent"> 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <div id="sideBar" class = "child1">
                <button><b>All</b></button>
                <button><b>Annoucements</b></button>
                <button><b>Awards</b></button>
            </div>

            <div id = "content" class = "child2">
            <h1 id = "heading"> News </h1>
            <p id= "heading"> Click on an article to read more </p>
            <hr>
                <div id="flex-container">
                    <div class="card-container" v-for="news in newses" :key="news.id">
                        <NewsCard :picture=news.picture :message=news.post :link = news.link :date=news.date />
                    </div>
                </div>
            </div>   
        </div>     
    </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue"
export default {
    name: "News",
    components: {
        NewsCard,
    },
     props:{
        data_ready:Boolean,
    },
        mounted(){
        window.console.log('in mounted');
        this.newses = JSON.parse(localStorage.data)
        window.console.log(this.classes);
        window.console.log('end');
    },
        watch:{
        data_ready: function(){

            this.newses = JSON.parse(localStorage.data).news

        }
    },
        data: function(){
        return {
            newses: [

            ]
        }
    }
}

</script>

<style scoped>
#main{
    margin: 20px;
}

#parent {
    display: flex;
	flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
}

.child1{
    float: left;
    height: 140px;
    flex: 0 1 250px;

}

.child2{
    flex: 0 1 1050px;
}

@media screen and (max-width: 1400px) {
    .child1{
     flex: 0 1 1050px;
     height: auto;
  }
}

#sideBar
{
    background-color: var(--light-yellow);
    margin-top: 10px;
    height: fit-content;
}

#sideBar button
{
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    background-color: var(--light-yellow);
    color: black;
    border-color: var(--light-yellow);
    outline: none;
    text-align: left;
}
#sideBar button:hover
{
    background-color: var(--dutch-white);
    cursor:pointer; 
} 
.container
{
    display: none;
}

#flex-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#content{ 
    background-color: var(--light-yellow); 
    text-align: left;
    padding-left:10px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-top:10px; 
}

#heading {
    padding-left: 10px;
}

</style>