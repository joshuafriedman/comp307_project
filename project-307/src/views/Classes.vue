<template>
    <div id="main">
        <h1>Classes</h1>
        <br>
        <Foo message="comp 307" />
    </div>
</template>

<script>
import Foo from "../components/Foo.vue"
export default {
    name: "Classes",
    components:{
        Foo,
    }
}
</script>

<style scoped>

</style>