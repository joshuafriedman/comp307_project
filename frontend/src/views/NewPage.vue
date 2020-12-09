<template>
    <div id='main'>
        <h2>Welcome {{ $info.username }}</h2>
        <br>
        <!-- write you html inside the main div -->
        <div class="content">
            <!-- <input type="text" id="creator" v-model="text" placeholder="Put your request">
            <button v-on:click="createPost">Create</button>
            
            <hr>
            <h2>Posts</h2>
            <hr>sd
            <p class="error" v-if="error">{{error}}</p> -->
            <button @click="test">test</button>
            <div class="posts-container">
                <div class="post" v-for="post in posts" v-bind:key="post._id">
                    <!-- {{`${pos.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
                    <p class="ttext">{{post.text}}</p> -->
                    {{ post }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import PostService from "../postService.js";

export default {
    name: "NewPage",
    data() {
        return {
            posts: [],
            error: '',
            text: '',
            }
        },
        methods:{
            test: async function(){
                // get news and events
                const data = await PostService.getHome()
                window.console.log('here si the data');
                window.console.log(data);
            }
        },
    async created() {
        try
        {
            window.console.log('hella;sdlkfja;lskdjf l;k');
            this.posts = await PostService.authenticate("admin","vibs");
            window.console.log('here is posts', this.posts);
        } catch(err){
            this.error = err.message;
        }
    }
}
</script>



<style scoped>

#sidebar
{
    margin-left: 2.5%;
    width: 15%;
    padding-left: 10px;
    background-color: var(--light-yellow);
    height: auto;
    position:fixed;
}

#sidebar button
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

#content{
    background-color: var(--light-yellow); 
    margin-left: 22.5%; 
    margin-right: 5%;
    text-align: left;
    height: auto;
}

</style>
