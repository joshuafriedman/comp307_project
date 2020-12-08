<template>
    <div id="main">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div id=sideBar>
                <button @click="showInfo('faculty')"><b>Faculty</b> <i class="material-icons">expand_more</i> </button> <br>
                <div id="faculty" class = "dropdown">
                    <a href="#">Director</a>
                    <a href="#">Professors</a>
                    <a href="#">Faculty Lecturer</a>
                    <a href="#">Adjunct Professors</a>
                    <a href="#">Associate Members</a>
                    <a href="#">Emeritus Professors</a>
                    <a href="#">Former Professors</a>
                    <a href="#">In Memoriam</a>
                </div>

                <div class="post" v-for="(post, index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post.title">
                    {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
                    <p class="text">{{post.text}}</p>
                </div>
                

                <button @click="showInfo('staff')"><b>Staff</b><i class="material-icons">expand_more</i></button> <br>
                <div id="staff" class = "dropdown">
                    <a href="#">Administrative Staff</a>
                    <a href="#">System Staff</a>
                </div>
                

                <button @click="showInfo('community')"><b>Community</b><i class="material-icons">expand_more</i></button> <br>
                <div id="community" class = "dropdown">
                    <a href="#">Women@CS</a>
                    <a href="#">Supper Camp</a>
                    <a href="#">CSUS</a>
                    <a href="#">CSGS</a>
                </div>
        </div>

        <div id = "content">
            <h1 id = "header"> Faculty </h1>
            <p id= "header" >Click on a Faculty Member's name to find out more about them. <p> <hr>

            <table> 
                <tr> 
                    <td> 
                        <h2> Director of the School </h2>
                    </td> 
                    
                    <td> 
                        <h2> Associate Director of Research </h2>
                    </td>
                </tr> 
            </table>
            <div id="flex-container">
                <div class="card-container" v-for="person in directors" :key="person.id">
                    <PersonCard :name=person.name :website=person.website :office = person.office
                    :phone = person.phone :email = person.email :picture = person.picture :fields = person.fields />
                </div>
            </div>
            <hr>

            <h2 id= "header">Professors</h2>
             <div id="flex-container">
                <div class="card-container" v-for="person in professors" :key="person.id">
                    <PersonCard :name=person.name :website=person.website :office = person.office
                    :phone = person.phone :email = person.email :picture = person.picture :fields = person.fields />
                </div>
            </div>
            <hr>

            <h2 id= "header">Faculty Lecturers</h2>
             <div id="flex-container">
                <div class="card-container" v-for="person in facultylecturers" :key="person.id">
                    <PersonCard :name=person.name :website=person.website :office = person.office
                    :phone = person.phone :email = person.email :picture = person.picture :fields = person.fields />
                </div>
            </div>
            <hr>

        </div>
    </div>
</template>

<script>
import PersonCard from "../components/PersonCard.vue"
export default {
    name: "People", 
    methods:
    {
        showInfo:function(name){
            var x = document.getElementById(name);
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
    },

    components: {
        PersonCard,
    },

    data: function(){
        return {
            directors: [
                {name: "Bettina Kemme", website: "https://www.cs.mcgill.ca/~kemme/", office: "McConnell 109N/318 (Director)", 
                phone: "+1-514-398-8930", email: "kemme@cs.mcgill.ca", picture: "Kemme.jpg", 
                fields: ["Databases","Networks","Parallel and Distributed Systems", "Computer Games"]},
                {name: "Mathieu Blanchette", website: "https://www.cs.mcgill.ca/~blanchem/", office: "Trottier 3107", 
                phone: "+1-514-398-5209", email: "blanchem@cs.mcgill.ca", picture: "Blanchette.jpg",
                fields: ["Bioinformatics", "Computational Biology"]},
            ],
        
            professors: [
                {name: "Luc Devroye", website: "http://luc.devroye.org", office: "McConnell 300N", 
                phone: "+1-514-398-3738", email: "lucdevroye@gmail.com", picture: "Devroye.jpg", 
                fields: ["Probilistic Analysis of Algorithms"]},
                {name: "Jin Guo", website: "https://www.cs.mcgill.ca/~jguo/", office: "McConnell 328", 
                phone: "+1-514-398-4446", email: "jin.guo@mcgill.ca", picture: "Guo.jpg",
                fields: ["Software Engineering"]},
                {name: "Dave Meger", website: "http://www.cim.mcgill.ca/~dmeger/", office: "McConnell 112N", 
                phone: "+1-514-398-3742", email: "dmeger@cim@mcgill.ca", picture: "Meger.jpg", 
                fields: ["Computer Vision", "Machine Learning", "Robotics"]},
                {name: "Brigitte Pientka", website: "https://www.cs.mcgill.ca/~bpientka/", office: "McConnell 107N", 
                phone: "+1-514-398-2583", email: "bp@cs.mcgill.ca", picture: "Pientka.jpg",
                fields: ["Logic and Computation", "Programming Language Theory"]},
                 {name: "Martin Robillard", website: "https://www.cs.mcgill.ca/~martin/", office: "McConnell 114N", 
                phone: "+1-514-398-4258", email: "martin@cs.mcgill.ca", picture: "Robillard.png",
                fields: ["Software Engineering"]},
                 {name: "Kaleem Siddiqi", website: "http://www.cim.mcgill.ca/~siddiqi/", office: "McConnell 420", 
                phone: "+1-514-398-3371", email: "siddiqi@cim.mcgill.ca", picture: "Siddiqi.jpg",
                fields: ["Computer Vision", "Medical Image Analysis", "Pattern Recognition"]},
                 {name: "Clark Verbrugge", website: "http://www.sable.mcgill.ca/~clump/", office: "McConnell 230", 
                phone: "+1-514-398-2411", email: "clump@cs.mcgill.ca", picture: "Verbrugge.jpg",
                fields: ["Compilers and Currency", "Computer Games","Parallel and Distributed Systems"]},
                 {name: "Jérôme Waldispühl", website: "https://www.cs.mcgill.ca/~jeromew/", office: "Trottier 3106", 
                phone: "+1-514-398-5018", email: "jeromew@cs.mcgill.ca", picture: "Waldispuhl.jpg",
                fields: ["Bioinformatics", "Computational Biology"]},
            ],
        
            facultylecturers: [
                {name: "Giulia Alberini", website: "https://www.cs.mcgill.ca", office: "McConnell 233", 
                phone: "TBD", email: "guilia.alberini@mail.mcgill.ca", picture: "Alberini.jpg", 
                fields: [""]},
                {name: "David Becerra", website: "https://scholar.google.ca/citations?user=NsiNFpQAAAAJ&hl=en", office: "TBD", 
                phone: "TBD", email: "david.becerra@mail.mcgill.ca", picture: "becerra.png",
                fields: ["Bioinformatics", "Artificial Intelligence"]},
                {name: "Joseph Vybihal", website: "https://www.cs.mcgill.ca/~jvybihal/", office: "McConnell 323", 
                phone: "+1-514-398-7071 (EXXT. 000092)", email: "jvybihal@cs.mcgill.ca", picture: "Vybihal.jpg",
                fields: ["Brain Inspired Artificial Intelligence", "Swarm Robotics", "Internet Technologies", "Computer Games"]},
            ]
        }
    }
   
}
</script>

<style scoped>

    .dropdown{
        display:none;
    }
    #header{
        padding-left:10px;
    }
    #flex-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    #content{ 
        background-color: var(--light-yellow); 
        margin-left: 22.5%; 
        margin-right: 5%;
        text-align: left;
    }

    #sideBar
    {
        margin-left: 2.5%;
        width: 15%;
        background-color: var(--light-yellow);
        height: auto;
        position:fixed;
    }
    #sideBar button
    {
        width: 100%;
        font-size: 20px;
        cursor: pointer;
        background-color: var(--light-yellow);
        color: black;
        border-color: var(--light-yellow);
        outline: none;
        text-align: left;
    }
    .material-icons{
        float: right;
    }
    #sideBar button:hover
    {
        background-color: var(--dutch-white);
        cursor: pointer;
    } 


    #sideBar a:hover
    {
        background-color: var(--dutch-white);
        cursor: pointer;
    }
    #sideBar a
    {
        text-align: left;
        height: auto;
        font-size: 14px;
        padding: 10px;
        display:block;
        text-decoration: none;
        color: var(--dark-blue);
    }

    #heading {
        padding-left: 10px;
    }

    #content{ 
        background-color: var(--light-yellow); 
        margin-left: 22.5%; 
        margin-right: 5%;
        text-align: left;
    }

    hr{
        margin-left: 10px;
        margin-right: 10px;
    }

    table {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px
    }

    td {
        width: 50%;
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

@media screen and (max-width: 1000px) {
    #sideBar button{
        font-size: 15px;
    }
    #sideBar a{
        font-size: 7px;
    }
}
@media screen and (max-width: 800px) {
    #sideBar button{
        font-size: 13px;
    }
    #sideBar a{
        font-size: 5px;
    }
}

@media screen and (max-width: 700px) {
    #sideBar button{
        font-size: 9px;
    }
    #sideBar a{
        font-size: 5px;
    }
}


</style>