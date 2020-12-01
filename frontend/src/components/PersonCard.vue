<template>
    <div id='main'>
        <table>
            <tr>
                <td id = "image">
                    <img :src="require(`@/assets/staff/${picture}`)">
                </td>
                <td id="info" @click = showInfo()> 
                    <b> {{ name }}</b> <br>
                    <div id = "subinfo">
                        <a :href=website> Website </a> <br>
                        Office: {{ office }} <br>
                        Phone: {{ phone }} <br>
                        Email: <a :href = email> {{ email }} </a><br>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td class = "display" :id = name>
                    <div v-for= "field in fields" :key="field.id">
                        {{ field }}
                    </div>
                </td> 
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PersonCard',
    props:{
        name: String,
        website: String, 
        office: String, 
        phone: String, 
        email: String, 
        picture: String, 
        fields: Array
    },
    methods: {
        showInfo:function(){
            var x = document.getElementById(this.name);
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        },
    }
}
</script>

<style scoped>
    #subinfo {
        font-size: 12px;
    }

    table{
        padding-left: 10px;
        padding-right:10px;
    }

    td {
        background-color: var(--light-yellow);
        text-align: left;
    }

    #info:hover {
        background-color: var(--dutch-white);
        cursor: pointer;
    }

    #info{  
        width: 350px;
        margin-left: 10px;
        margin-right:10px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
    }
    td.display{
        display:none;
        font-size: 12px;
    }

    img {
        border-radius: 50%; 
        height: 100px;
    }

    #image { 
        width: 100px;  
        margin-left: 10px;
        margin-right:10px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
    }

    a {
    color: var(--mred); 
        text-decoration: none;
    }

    a:visited, a:active{
        color: var( --navy);
    
    }
    a:hover{
    text-decoration: underline; 
    }
</style>