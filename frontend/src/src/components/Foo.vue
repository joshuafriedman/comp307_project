<template>
    <div id="main">
        <h2> {{ message }} </h2>
    </div>
</template>

<script>
export default {
    name: "Foo",
    props:{
        message: String
    }
}
</script>

<style scoped>
    #main{
        background-color: blue;
        width: 100px;
        height: 100px;
        border: black 1px solid;
        margin: auto;
    }
</style>