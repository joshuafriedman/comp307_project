<template>
    <div id="main">
        <br/>
        <div id="login-box">
            <p>Only Permitted for Web Page Technition</p>
            <b>Username:</b> <input v-model="username" placeholder="Username">
            <b>Password:</b> <input v-model="password" placeholder="Password"> <br/>
            <button id="submit" @click="submit"> Login </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: function(){
        return{
            Username: "",
            Password: "",
        }
    },
    methods:{
        submit: function()
        {
            alert(" Username: " + this.username + "\n Password: "+this.password);
            //@Todo: Conditional implementation for back-end
            //@Success: Let the user to get into the internal server
            //@Fail: Let the user to put the correct information & error message
        }
    }
}
</script>

<style scoped>
#main
{
    text-align: center;
}
#login-box
{
    padding: 10px 10px 10px 10px;
    width: 300px;
    height: 150px;
    margin: auto;
    text-align: center;
    background-color: var(--beige);
}

</style>