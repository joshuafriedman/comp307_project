<template>
    <div id="main">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div id=sideBar>
                <button @click="showInfo('faculty')"><b>Faculty</b><i id="icon2" class="material-icons">expand_more</i></button> <br/>
                <div id="faculty" class="container">
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

                <button @click="showInfo('staff')"><b>Staff</b><i id="icon3" class="material-icons">expand_more</i></button> <br/>
                <div id="staff" class="container">
                    <a href="#">Administrative Staff</a>
                    <a href="#">System Staff</a>
                </div>
                <hr>

                <button @click="showInfo('community')"><b>Community</b><i id="icon4" class="material-icons">expand_more</i></button> <br/>
                <div id="community" class="container">
                    <a href="#">Women@CS</a>
                    <a href="#">Supper Camp</a>
                    <a href="#">CSUS</a>
                    <a href="#">CSGS</a>
                </div>
        </div>
        <div id="content">  
            <h1 id = "heading">Faculty</h1>
            <p id = "heading">Click on a Faculty Member's name to find out more about them.</p>
            <hr>
           
            <table >
                <tr>
                    <td colspan = "2">
                        <h2>Director of the School</h2> 
                    <td colspan = "2">
                        <h2>Associate Director of Research </h2> 
                    </td>      
                </tr>

                <tr>
                    <td id = "picture">
                         <img id = "profile" src = "../assets/staff/Kemme.jpg" alt = "Bettina Kemme">
                    </td>
                    <td id = "info" @click = "showInfo('kemme')">
                        <b>Bettina Kemme</b> <br>
                        <div id = "subinfo">
                            <a href = "https://www.cs.mcgill.ca/~kemme/">Website</a> <br>
                            Office: McConnell 109N/318 (Director) <br>
                            Phone: +1-514-398-8930 <br>
                            Email: <a href = "kemme@cs.mcgill.ca"> kemme@cs.mcgill.ca </a><br> 
                        </div>
                    </td>
                    <td id = "picture">
                        <img id = "profile" src = "../assets/staff/Blanchette.jpg" alt = "Mathieu Blanchette"> 
                    </td>
                    <td id = "info">
                        <b>Mathieu Blanchette </b> <br>
                        <div id = "subinfo" @click = "showInfo('blanchette')">
                            <a href = "https://www.cs.mcgill.ca/~blanchem/">Website</a> <br>
                            Office: Trottier 3107  <br>
                            Phone:  +1-514-398-5209 <br>
                            Email: <a href = "blanchem@cs.mcgill.ca">blanchem@cs.mcgill.ca </a><br> 
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                    <td class = "dropdown" id = "kemme">
                        <dl>
                            <dt>Databases </dt>
                            <dt>Networks </dt>
                            <dt>Parallel and Distributed Systems </dt>
                            <dt>Computer Games </dt>
                        </dl>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td class = "dropdown" id = "blanchette">
                        <dl>
                            <dt>Bioinformatics </dt>
                            <dt>Computational Biology </dt>
                            <dt></dt>
                            <dt></dt>
                        </dl>
                    </td>
                </tr>
            </table> 
            <hr>

            <table>
                <tr>
                    <td colspan = "4">
                        <h2>Professors</h2> 
                    </td>     
                </tr>
                <tr>
                    <td id = "picture">
                         <img id = "profile" src = "../assets/staff/Devroye.jpg" alt = "Luc Devroye">
                    </td>
                    <td id = "info" @click = "showInfo('devroye')">
                        <b>Luc Devroye</b> <br>
                        <div id = "subinfo">
                            <a href = "http://luc.devroye.org">Website</a> <br>
                            Office: McConnell 300N <br>
                            Phone: +1-514-398-3738 <br>
                            Email: <a href = "lucdevroye@gmail.com"> lucdevroye@gmail.com </a><br> 
                        </div>
                    </td>
                    <td id = "picture">
                        <img id = "profile" src = "../assets/staff/Guo.jpg" alt = "Jin Guo"> 
                    </td>
                    <td id = "info">
                        <b>Jin Guo </b> <br>
                        <div id = "subinfo" @click = "showInfo('guo')">
                            <a href = "https://www.cs.mcgill.ca/~jguo/">Website</a> <br>
                            Office: McConnell 328  <br>
                            Phone:  +1-514-398-4446 <br>
                            Email: <a href = "jin.guo@mcgill.ca">jin.guo@mcgill.ca </a><br> 
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                    <td class = "dropdown" id = "devroye">
                        <dl>
                            <dt>Probilistic Analysis of Algorithms </dt>
                        </dl>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td class = "dropdown" id = "guo">
                        <dl>
                            <dt>Software Engineering </dt>
                        </dl>
                    </td>
                </tr>

                <tr>
                    <td id = "picture">
                         <img id = "profile" src = "../assets/staff/Meger.jpg" alt = "Dave Meger">
                    </td>
                    <td id = "info" @click = "showInfo('meger')">
                        <b>Dave Meger</b> <br>
                        <div id = "subinfo">
                            <a href = "http://www.cim.mcgill.ca/~dmeger/">Website</a> <br>
                            Office: McConnell 112N <br>
                            Phone: +1-514-398-3743 <br>
                            Email: <a href = "dmeger@cim.mcgill.ca"> dmeger@cim.mcgill.ca </a><br> 
                        </div>
                    </td>
                    <td id = "picture">
                        <img id = "profile" src = "../assets/staff/Pientka.jpg" alt = "Brigitte Pientka"> 
                    </td>
                    <td id = "info">
                        <b>Brigitte Pientka </b> <br>
                        <div id = "subinfo" @click = "showInfo('pientka')">
                            <a href = "https://www.cs.mcgill.ca/~bpientka/">Website</a> <br>
                            Office: McConnell 107N   <br>
                            Phone:  +1-514-398-2583 <br>
                            Email: <a href = "bp@cs.mcgill.ca">bp@cs.mcgill.ca </a><br> 
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                    <td class = "dropdown" id = "meger">
                        <dl>
                            <dt>Computer Vision</dt>
                            <dt>Machine Learning</dt>
                            <dt>Robotics</dt>
                        </dl>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td class = "dropdown" id = "pientka">
                        <dl>
                            <dt>Logic and Computation</dt>
                            <dt>Programming Language Theory</dt>
                        </dl>
                    </td>
                </tr>

                <tr>
                    <td id = "picture">
                         <img id = "profile" src = "../assets/staff/Robillard.png" alt = "Martin Robillard">
                    </td>
                    <td id = "info" @click = "showInfo('robillard')">
                        <b>Martin Robillard</b> <br>
                        <div id = "subinfo">
                            <a href = "https://www.cs.mcgill.ca/~martin/">Website</a> <br>
                            Office: McConnell 114N <br>
                            Phone: +1-514-398-4258 <br>
                            Email: <a href = "martin@cs.mcgill.ca">martin@cs.mcgill.ca</a><br> 
                        </div>
                    </td>
                    <td id = "picture">
                        <img id = "profile" src = "../assets/staff/Siddiqi.jpg" alt = "Kaleem Siddiqi"> 
                    </td>
                    <td id = "info">
                        <b>Kaleem Siddiqi </b> <br>
                        <div id = "subinfo" @click = "showInfo('siddiqi')">
                            <a href = "http://www.cim.mcgill.ca/~siddiqi/">Website</a> <br>
                            Office: McConnell 420   <br>
                            Phone:  +1-514-398-3371 <br>
                            Email: <a href = "siddiqi@cim.mcgill.ca">siddiqi@cim.mcgill.ca</a><br> 
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                    <td class = "dropdown" id = "robillard">
                        <dl>
                            <dt>Software Engineering</dt>
                        </dl>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td class = "dropdown" id = "siddiqi">
                        <dl>
                            <dt>Computer Vision</dt>
                            <dt>Medical Image Analysis</dt>
                            <dt>Pattern Recognition</dt>
                        </dl>
                    </td>
                </tr>

                 <tr>
                    <td id = "picture">
                         <img id = "profile" src = "../assets/staff/Verbrugge.jpg" alt = "Clark Verbrugge">
                    </td>
                    <td id = "info" @click = "showInfo('verbrugge')">
                        <b>Clark Verbrugge</b> <br>
                        <div id = "subinfo">
                            <a href = "http://www.sable.mcgill.ca/~clump/">Website</a> <br>
                            Office: McConnell 230 <br>
                            Phone: +1-514-398-2411 <br>
                            Email: <a href = "clump@cs.mcgill.ca">clump@cs.mcgill.ca</a><br> 
                        </div>
                    </td>
                    <td id = "picture">
                        <img id = "profile" src = "../assets/staff/Waldispuhl.jpg" alt = "Jerome Waldispuhl"> 
                    </td>
                    <td id = "info">
                        <b>Jérôme Waldispühl </b> <br>
                        <div id = "subinfo" @click = "showInfo('waldispuhl')">
                            <a href = "https://www.cs.mcgill.ca/~jeromew/">Website</a> <br>
                            Office: Trottier 3106   <br>
                            Phone:  +1-514-398-5018 <br>
                            Email: <a href = "jeromew@cs.mcgill.ca">jeromew@cs.mcgill.ca</a><br> 
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                    <td class = "dropdown" id = "verbrugge">
                        <dl>
                            <dt>Compilers and Currency</dt>
                            <dt>Computer Games</dt>
                            <dt>Parallel and Distrubted Systems</dt>
                        </dl>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td class = "dropdown" id = "siddiqi">
                        <dl>
                            <dt>Computer Vision</dt>
                            <dt>Medical Image Analysis</dt>
                            <dt>Pattern Recognition</dt>
                        </dl>
                    </td>
                </tr>
                
            </table> 

            <hr>

            <table>
                <tr>
                    <td colspan = "4">
                        <h2>Faculty Lecturers</h2> 
                    </td>     
                </tr>

                <tr>
                    <td id = "picture">
                         <img id = "profile" src = "../assets/staff/Alberini.jpg" alt = "Giulia Alberini">
                    </td>
                    <td id = "info" @click = "showInfo('alberini')">
                        <b>Giulia Alberini</b> <br>
                        <div id = "subinfo">
                            <a href = "https://www.cs.mcgill.ca">Website</a> <br>
                            Office: McConnell 233 <br>
                            Email: <a href = "giulia.alberini@mail.mcgill.ca"> giulia.alberini@mail.mcgill.ca </a><br> 
                        </div>
                    </td>
                    <td id = "picture">
                        <img id = "profile" src = "../assets/staff/becerra.png" alt = "David Becerra"> 
                    </td>
                    <td id = "info">
                        <b>David Becerra </b> <br>
                        <div id = "subinfo" @click = "showInfo('becerra')">
                            <a href = "https://scholar.google.ca/citations?user=NsiNFpQAAAAJ&hl=en">Website</a> <br>
                            Office: TBD  <br>
                            Phone:  TBD <br>
                            Email: <a href = "david.becerra@mcgill.ca">david.becerra@mcgill.ca</a><br> 
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                    <td class = "dropdown" id = "alberini">
                        <dl>
                        </dl>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td class = "dropdown" id = "becerra">
                        <dl>
                            <dt>Bioinformatics</dt>
                            <dt>Artifical Intelligence</dt>
                        </dl>
                    </td>
                </tr>

                <tr>
                    <td id = "picture">
                         <img id = "profile" src = "../assets/staff/Vybihal.jpg" alt = "Joseph Vybihal">
                    </td>
                    <td id = "info" @click = "showInfo('vybihal')">
                        <b>Joseph Vybihal</b> <br>
                        <div id = "subinfo">
                            <a href = "https://www.cs.mcgill.ca/~jvybihal/">Website</a> <br>
                            Office: McConnell 323 <br>
                            Phone: +1-514-398-7071 (EXT. 00092) <br>
                            Email: <a href = "jvybihal@cs.mcgill.ca"> jvybihal@cs.mcgill.ca </a><br> 
                        </div>
                    </td>
                    <td id = "picture">
                    </td>
                    <td id = "info">
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                    <td class = "dropdown" id = "vybihal">
                        <dl>
                            <dt>Brain Inspired Artificial Intelligence </dt>
                            <dt>Swarm Robotics</dt>
                            <dt>Internet Technologies</dt>
                            <dt>Computer Games</dt>
                        </dl>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>

            <h2 id = "heading"> Adjunct Professors</h2> <hr>
            <h2 id = "heading"> Associate Members</h2> <hr>
            <h2 id = "heading"> Emeritus Professors</h2> <hr>
            <h2 id = "heading"> Former Professors</h2> <hr>
            <h2 id = "heading"> In Memoriam </h2>
        </div>
    </div>
</template>

<script>
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
        },
    }
}
</script>

<style scoped>
#sideBar
{
    margin-left: 2.5%;
    width: 15%;
    padding-left: 10px;
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
    border: none;
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
.container
{
    display: none;
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

hr {
    margin-left: 10px; 
    margin-right: 10px;
}

#info:hover {
    background-color: var(--dutch-white);
    cursor: pointer;
}

img {
    height: 100px;
}

table {
  width:100%;
  padding-left: 10px;
  padding-right: 10px;
}

#picture{
    width: 10%;  
    margin-left: 10px;
    margin-right:10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
}

img {
    border-radius: 50%
}

#info{
    width: 35%;  
    margin-left: 10px;
    margin-right:10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
}

#subinfo {
    font-size: 12px;
}

td.dropdown{
    display:none;
    margin-left: 10px;
}
dl{
    font-size:12px;
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