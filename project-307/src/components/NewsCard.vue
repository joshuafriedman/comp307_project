<template>
    <div id="main">
        <p id="post"> {{ message }} </p>
        <p id="date"> {{ date }} </p>
    </div>
</template>

<script>
export default {
    name: "NewsCard",
    props:{
        message: String,
        date: String,
    },

}
</script>

<style scoped>
    #main{
        width: 300px;
        height: 200px;
        border: black 1px solid;
        margin: auto;
        font-size: 14px;
        margin: 20px;
    }
    #post{
        height: 160px;
        overflow: hidden;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: bold;
        font-size: 15px;
        text-decoration: underline;
    }
    #date{
        height: 40px;
        position: relative;
        bottom: 10px;
        padding-left: 10px;
    }
</style>