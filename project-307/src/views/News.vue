<template>
    <div id="main">
        <h1> News </h1>
        <div id="flex-container">
        <div class="card-container" v-for="news in newses" :key="news.id">
            <NewsCard :message=news.post :date=news.date />
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
                {post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ipsum sit amet tortor porta sodales non a dolor. Cras mauris odio, pellentesque vel bibendum ac, rutrum eget neque. Praesent vitae ligula vel quam dapibus faucibus. Donec ullamcorper lorem vitae luctus volutpat. ",date: "01-02-2020"},
               {post: "Duis lacinia odio at felis lobortis, id elementum leo dictum. Aenean consequat facilisis est, ac mollis mi lobortis facilisis. Maecenas nec tempus libero, ",date: "08-12-2020"},
                {post:"molestie hendrerit lorem. Sed ultricies dolor lorem, ac facilisis purus pulvinar quis. Nullam lobortis tortor fermentum",date: "01-02-2020"},
                {post:"orta scelerisque. Nunc pulvinar velit vel blandit luctus. Pellentesque feugiat, sem in tristique tempor, nulla est vestibulum leo, eget elementum velit nulla ac ante.",date: "11-12-2020"},
            ]
        }
    }
}

</script>

<style scoped>
#flex-container{
    display: flex;
    flex-direction: row;
}
#card-container{
    

}

</style>