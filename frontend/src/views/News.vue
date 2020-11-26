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
            <div id="flex-container">
                <div class="card-container" v-for="news in newses" :key="news.id">
                    <NewsCard :message=news.post :date=news.date />
                </div>
            </div>
        </div>


        <PersonCard name="bob" />
        
    </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue"
import PersonCard from "../components/PersonCard.vue"
export default {
    name: "News",
    components: {
        NewsCard,
        PersonCard
    
    
    
    },
        data: function(){
        return {
            newses: [
                {post: "Virtual Open House",date: "01-02-2020"},
                {post: "Concerns Related to COVID-19",date: "08-12-2020"},
                {post:"Three SOCS professors are awarded large grants to use AI to understand cancer",date: "01-02-2020"},
                {post:"Assistant Professor Oana Balmau wins CORE John Makepeace Bennett Award",date: "11-12-2020"},
                {post:"Three Faculty Members Join the School of Computer Science",date: "11-12-2020"},
                {post:"Prof. Siva Reddy won the VentureBeat AI Innovation Award 2020",date: "11-12-2020"},
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