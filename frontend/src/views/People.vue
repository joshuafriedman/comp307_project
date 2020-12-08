<template>
    <div id="main">
        <div id = "parent"> 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <div id="sideBar" class = "child1">
                    <button @click="showInfo('faculty')"><b>Faculty</b> <i class="material-icons">expand_more</i> </button> <br>
                    <div id="faculty" class = "container">
                        <a href="#">Director</a>
                        <a href="#">Professors</a>
                        <a href="#">Faculty Lecturer</a>
                        <a href="#">Adjunct Professors</a>
                        <a href="#">Associate Members</a>
                        <a href="#">Emeritus Professors</a>
                        <a href="#">Former Professors</a>
                        <a href="#">In Memoriam</a>
                    </div>
                    <hr>

                    <button @click="showInfo('staff')"><b>Staff</b><i class="material-icons">expand_more</i></button> <br>
                    <div id="staff" class = "container">
                        <a href="#">Administrative Staff</a>
                        <a href="#">System Staff</a>
                    </div>
                    <hr>

                    <button @click="showInfo('community')"><b>Community</b><i class="material-icons">expand_more</i></button> <br>
                    <div id="community" class = "container">
                        <a href="#">Women@CS</a>
                        <a href="#">Supper Camp</a>
                        <a href="#">CSUS</a>
                        <a href="#">CSGS</a>
                    </div>
            </div>

            <div id = "content" class = "child2">
                <h1 id = "heading"> Faculty </h1>
                <p id= "heading" >Click on a Faculty Member's name to find out more about them. <p> <hr>

                <div id = "flex-container">
                    <div id = "titleChild">
                        <h2> Director of the School </h2>
                    </div>
                    <div id = "titleChild">
                        <h2> Associate Director of Research </h2>
                    </div>
                </div>

                <div id="flex-container">
                    <div class="card-container" v-for="person in directors" :key="person.id">
                        <PersonCard :name=person.name :website=person.website :office = person.office
                        :phone = person.phone :email = person.email :picture = person.picture :fields = person.fields />
                    </div>
                </div>
                <hr>

                <h2 id= "heading">Professors</h2>
                <div id="flex-container">
                    <div class="card-container" v-for="person in professors" :key="person.id">
                        <PersonCard :name=person.name :website=person.website :office = person.office
                        :phone = person.phone :email = person.email :picture = person.picture :fields = person.fields />
                    </div>
                </div>
                <hr>

                <h2 id= "heading">Faculty Lecturers</h2>
                <div id="flex-container">
                    <div class="card-container" v-for="person in facultylecturers" :key="person.id">
                        <PersonCard :name=person.name :website=person.website :office = person.office
                        :phone = person.phone :email = person.email :picture = person.picture :fields = person.fields />
                    </div>
                </div>
            </div>
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
    #main{ 
        margin: 20px;
    }
    #parent {
    display: flex;
	flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    }

    .child1{
        float: left;     
        height: 140px;   
        flex: 0 1 250px;

    }

    .child2{
        flex: 0 1 1050px;
    }

    @media screen and (max-width: 1400px) {
        .child1{
            flex: 0 1 1050px;
            height: auto;
        }
    }

    #sideBar
    {
        padding-left: 10px;
        background-color: var(--light-yellow);
        margin-top: 10px;
    }

    #sideBar button
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

    .material-icons{
        float: right;
    }

    .container{
        display:none;
    }

    #flex-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    #content{ 
        background-color: var(--light-yellow); 
        padding-left:10px;
        padding-right: 10px;
        padding-bottom: 10px;
        margin-top: 10px;
        text-align: left;
    }

    #heading {
        padding-left: 10px;
    }

    hr{
        margin-left: 10px;
        margin-right: 10px;
    }

    #titleChild{
        flex: 1 1 200px;
    }

    a {
    color: var(--mred); 
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline; 
        cursor:pointer; 
    }


</style>