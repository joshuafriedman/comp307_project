<template>
    <div id='main'>
        <!-- write you html inside the main div -->
        <div class="content">
            <input type="text" id="creator" v-model="text" placeholder="Put your request">
            <button v-on:click="createPost">Create</button>
            <hr>
            <h2>Posts</h2>
            <hr>
            <p class="error" v-if="error">{{error}}</p>
            <div class="posts-container">
                <div class="post" v-for="(post, index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post.title">
                    {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
                    <p class="text">{{post.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
//import postService from "../../../backend/routes/api/postService";

export default {
    name: "NewPage",
    data() {
        return {
            posts: [],
            error: '',
            text: '',
            }
        },
    async created() {
        try
        {
            //this.posts = await postService.getPosts();
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
