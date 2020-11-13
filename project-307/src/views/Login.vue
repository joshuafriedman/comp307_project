<template>
    <div id="main">
        <h1>Login</h1>
        Username: <input v-model="username" placeholder="username">
        Password: <input v-model="password" placeholder="password">
        <button id="submit" @click="submit"> Login </button>

    </div>
</template>

<script>
export default {
    name: "Login",
    data: function(){
        return{
            username: "",
            password: "",
        }
    },
    methods:{
        submit: function(){
            alert("username: " + this.username + "\n password: "+this.password);
        }
    }
}
</script>

<style scoped>

</style>