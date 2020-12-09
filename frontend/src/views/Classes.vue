<template>
    <div id="main">
        <div id = "parent"> 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <div id="sideBar" class = "child1">
                    <button @click="showInfo('undergraduate')"><b>Undergraduate</b><i id="icon2" class="material-icons">expand_more</i></button> 
                    <br/>
                    <div id="undergraduate" class="container">
                        <a href="#">Overview</a>
                        <a href="#">Information for Incoming Students</a>
                        <a href="#">Remote Learning</a>
                        <a href="#">FAQ</a>
                        <a href="#">Advising</a>
                        <a href="#">COMP 202/204/208</a>
                        <a href="#">Streams</a>
                        <a href="#">Bachelor of Science</a>
                        <a href="#">Bachelor of Arts</a>
                        <a href="#">Minor Computer Science</a>
                        <a href="#">Games</a>
                        <a href="#">Research</a>
                        <a href="#">Internships and Careers</a>
                        <a href="#">Preparation for Graduate Studies</a>
                    </div>

                    <button @click="showInfo('graduate')"><b>Graduate</b><i id="icon3" class="material-icons">expand_more</i></button> <br/>
                    <div id="graduate" class="container">
                        <a href="#">Overview</a>
                        <a href="#">Masters</a>
                        <a href="#">Ph. D.</a>
                        <a href="#">Admission</a>
                        <a href="#">Applying</a>
                        <a href="#">FAQ</a>
                    </div>

                    <button @click="showInfo('courses')"><b>Courses</b><i id="icon4" class="material-icons">expand_more</i></button> <br/>
                    <div id="courses" class="container">
                        <a href="#">List of COMP Classes</a>
                    </div>

                    <button @click="showInfo('tas')"><b>Teaching Assitants</b><i id="icon5" class="material-icons">expand_more</i></button> <br/>
                    <div id="tas" class="container">
                        <a href="#">TA & Research Assitants</a>
                        <a href="#">TA Awards</a>
                    </div>

                    <button @click="showInfo('funding')"><b>Funding</b><i id="icon6" class="material-icons">expand_more</i></button> <br/>
                    <div id="funding" class="container">
                        <a href="#">Financial Information</a>
                        <a href="#">Graduate Scholarships</a>
                        <a href="#">Expense Reports</a>
                    </div>
            </div>
            <div id= "content" class = "child2"> 
                <h1 id = "heading">Computer Science Courses</h1>
                <p id = "heading">Click on a course to learn more about it.</p>
                <hr>
                <div class="card-container" v-for="item in classes" :key="item.id">
                    <ClassCard :name=item.name :description=item.description :credits = item.credits 
                    :terms=item.terms :instructor=item.instructor :prereq=item.prereq :other=item.other
                    :syllabus=item.syllabus :link=item.link />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClassCard from "../components/ClassCard.vue"
export default {
    
    name: "Classes",
     methods:{
        showInfo:function(name){
            var x = document.getElementById(name);
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        },
    },

    components: {
        ClassCard,
    },
    props:{
        data_ready:Boolean,
    },
    mounted(){
        this.classes = JSON.parse(localStorage.data).classes

    },
    watch:{
        data_ready: function(){

            this.classes = JSON.parse(localStorage.data).classes

        }
    },

    data: function(){
        return {
            classes: [
                
            ]
        }
    }
}
</script>


<style scoped>
#main {
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
    height: 240px;
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
    background-color: var(--light-yellow);
    margin-top: 10px;
    height: fit-content;
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

#sideBar button:hover
{
    background-color: var(--dutch-white);
    cursor:pointer; 
} 

#sideBar a:hover
{
    background-color: var(--dutch-white);
    cursor:pointer; 
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
    display: none;
}

#content {
    background-color: var(--light-yellow); 
    text-align: left; 
    padding-left:10px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
}


#heading {
    padding-left: 10px;
}

hr {
    margin-left: 10px; 
    margin-right: 10px;
}



</style>
