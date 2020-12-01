<template>
    <div id='main'>
        <div id = 'content'>
        <h3 @click = "showInfo()"> {{ name }} </h3>
            <div class = "dropdown" :id =name> 
            <p> {{ description }}</p>
            <b>Credits: </b> {{ credits }} <br>
            <b>Terms Offered: </b> {{ terms }} <br>
            <b>Instructor: </b> {{ instructor }}<br>
            <b>Prerequisites: </b> {{ prereq }} <br>
            <b>Notes:</b>{{other}}<br>
            <a :href=syllabus> Syllabus (PDF) </a> <br>
            <a :href=link> McGill eCalendar </a>
            </div> 
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'ClassCard',
    props:{
        name: String,
        description: String, 
        credits: String, 
        terms: String, 
        instructor: String, 
        prereq:String, 
        other: String, 
        syllabus: String, 
        link: String
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

    #content {
        padding-left: 10px; 
        padding-right: 10px;
    }

    .dropdown{
        display: none;
    }

    #main {
        padding-left: 10px;
        padding-right: 10px;
    }

    h3:hover {
        background-color: var(--dutch-white);
        cursor: pointer;
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