<template>
    <div id='main'>
        <!-- write you html inside the main div -->
        <div id="sidebar">
            <button id="login">Pages</button>
            <hr>
            <button id="login">News</button>
            <hr>
            <button id="login">Login Info</button>
        </div>

        <div id="content">
            <input v-model="query" placeholder="Put your request">
            <button id="submit" @click="submit">submit</button>
            <hr>
            <h2>News</h2>
            <hr>
            <div id="news">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "NewPage",
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
