<template>
    <div id="main">
        <div id = "parent"> 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <div id="sideBar" class = "child1">
                <button><b>All</b></button> <hr>
                <button><b>Annoucements</b></button> <hr>
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
        data: function(){
        return {
            newses: [
                {picture: "openhouse.jpg", post: "Virtual Open House",link : "https://www.cs.mcgill.ca/academic/undergrad/openhouse/", date: "October 25,2020"},
                {picture: "covid.png", post: "Concerns Related to COVID-19", link: "https://www.cs.mcgill.ca/news/129/", date: "October 5,2020"},
                {picture: "balmau.jpg", post:"Assistant Professor Oana Balmau wins CORE John Makepeace Bennett Award", link: "", date: "October 27,2020"},
                {picture: "default.png", post:"Three Faculty Members Join the School of Computer Science", link: "", date: "September 1,2020"},
                {picture: "reddy.jpg", post:"Prof. Siva Reddy won the VentureBeat AI Innovation Award 2020", link: "", date: "August 3,2020"},
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
    padding-left: 10px;
    background-color: var(--light-yellow);
    margin-top:10px; 
}
#sideBar button
{
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    background-color: var(--light-yellow);
    color: black;
    border: none;
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