<template>
    <div id="main">
        <h1>home page</h1>
        <button @click="example1"> button 1 </button>
        <button @click="example2"> button 2 </button>

    </div>
</template>

<script>
export default {
    name: "Home",
    props:{
        query: String,
    },
    methods:{
        example1: function(){
            alert("example 1 called")
        },
        example2: function(){
            alert("example 2 called")
        },
    }
}
</script>

<style scoped> 

</style>