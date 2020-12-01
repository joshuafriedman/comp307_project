<template>
    <div id="main">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div id=sideBar>
            <button><b>All</b></button> <hr>
            <button><b>Annoucements</b></button> <hr>
            <button><b>Awards</b></button>
        </div>
        <div id = "content">
        <h1> News </h1>
        <p> Click on an article to read more </p>
        <hr>
            <div id="flex-container">
                <div class="card-container" v-for="news in newses" :key="news.id">
                    <NewsCard :picture=news.picture :message=news.post :link = news.link :date=news.date />
                </div>
            </div>
        </div>


        <PersonCard name="bob" />
        
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
#sideBar
{
    margin-left: 2.5%;
    width: 15%;
    padding-left: 10px;
    background-color: var(--light-yellow);
    position: fixed;
    height: auto;
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
#card-container{

}

#content{ 
    background-color: var(--light-yellow); 
    margin-left: 22.5%; 
    margin-right: 5%;
    text-align: left; 
}

h1 {
    padding-left: 10px;
}

</style>