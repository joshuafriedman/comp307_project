<template>
    <div id="main">
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div id=sideBar>

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
                    <a href="#">Minor COmputer Science</a>
                    <a href="#">Games</a>
                    <a href="#">Research</a>
                    <a href="#">Internships and Careers</a>
                    <a href="#">Preparation for Graduate Studies</a>
                </div>
                <hr>

                <button @click="showInfo('graduate')"><b>Graduate</b><i id="icon3" class="material-icons">expand_more</i></button> <br/>
                <div id="graduate" class="container">
                    <a href="#">Overview</a>
                    <a href="#">Masters</a>
                    <a href="#">Ph. D.</a>
                    <a href="#">Admission</a>
                    <a href="#">Applying</a>
                    <a href="#">FAQ</a>
                </div>
                <hr>

                <button @click="showInfo('courses')"><b>Courses</b><i id="icon4" class="material-icons">expand_more</i></button> <br/>
                <div id="courses" class="container">
                    <a href="#">List of COMP Classes</a>
                </div>
                <hr>

                <button @click="showInfo('tas')"><b>Teaching Assitants</b><i id="icon5" class="material-icons">expand_more</i></button> <br/>
                <div id="tas" class="container">
                    <a href="#">TA & Research Assitants</a>
                    <a href="#">TA Awards</a>
                </div>
                <hr>

                <button @click="showInfo('funding')"><b>Funding</b><i id="icon6" class="material-icons">expand_more</i></button> <br/>
                <div id="funding" class="container">
                    <a href="#">Financial Information</a>
                    <a href="#">Graduate Scholarships</a>
                    <a href="#">Expense Reports</a>
                </div>
                
                
    
        </div>
    <div id= "box"> 
        <h1 id = "heading">Computer Science Courses</h1>
        <p id = "heading">Click on a course to learn more about it.</p>
        <hr>
        <div id = "course">
            <h3 id = "COMP102" @click = "showInfo('dropdown1')">COMP 102: Computers and Computing </h3>
             <div class = "dropdown" id = "dropdown1"> 
                <p> A course for students with no previous knowledge of computer science. 
                The impact of computers on society. Web design and dynamic content. 
                The inner workings of computers (hardware). Networking principles. 
                Algorithm design and programming. A look at how computers store data 
                (image, sound, and video). Software distribution policies and mechanisms.</p>
                <b>Credits: </b> 3 <br>
                <b>Terms Offered: </b> This course is not scheduled for the 2019-2020 academic year. <br>
                <b>Instructor: </b> There are no professors associated with this course for the 2019-2020 academic year. <br>
                <b>Prerequisites: </b> High school level mathematics course on functions. <br>
                <b>Restrictions: </b>Credit will not be given for COMP 102 if it is taken concurrently with, or after, any of: 
                <a href = "#COMP202">COMP 202</a>, <a href = "#COMP102">COMP 203</a>, <a href = "#COMP102">COMP 208 </a>, 
                <a href = "#COMP250">COMP 250</a>. Management students cannot receive credit for <a href = "#COMP102">COMP 102 </a>. <br>
                <a href = "https://www.mcgill.ca/study/2019-2020/courses/comp-102"> McGill eCalendar </a>
            </div> 
        </div> 

        <hr>

        <div id = "course">
            <h3 id = "COMP202" @click = "showInfo('dropdown2')">COMP 202: Foundations of Programming </h3>
             <div class = "dropdown" id = "dropdown2"> 
                <p> Introduction to computer programming in a high level language: 
                variables, expressions, primitive types, methods, conditionals, loops. 
                Introduction to algorithms, data structures (arrays, strings), modular software design, 
                libraries, file input/output, debugging, exception handling. Selected topics.</p>
                <b>Credits: </b> 3 <br>
                <b>Terms Offered: </b> Fall 2019, Winter 2020, Summer 2019 <br>
                <b>Instructor: </b> Giulia Alberini, Elizabeth Patitsas (Fall) Giulia Alberini (Winter), Ben Yu (Summer)<br>
                <b>Prerequisites: </b> A CEGEP level mathematics course. <br>
                <b>Restrictions: </b><a href = "#COMP202">COMP 202</a> and <a href = "#COMP202">COMP 208 </a>
                 cannot both be taken for credit. 
                <a href = "#COMP202">COMP 202</a> is intended as a general introductory course, 
                while <a href = "#COMP202">COMP 208 </a> is intended for students interested in scientific computation. 
                <a href = "#COMP202">COMP 202</a> cannot be taken for credit with or after <a href = "#COMP250">COMP 250</a> <br>
                <a href = "https://www.cs.mcgill.ca/media/academic/courses/3_COMP_202_A1i3t4M.pdf"> Syllabus (PDF) </a> <br>
                <a href = "https://www.mcgill.ca/study/2019-2020/courses/comp-102"> McGill eCalendar </a>
            </div> 
        </div> 

        <hr>

        <div id = "course">
            <h3 id = "COMP206" @click = "showInfo('dropdown3')">COMP 206: Introduction to Software Systems</h3>
             <div class = "dropdown" id = "dropdown3"> 
                <p> Comprehensive overview of programming in C, use of system calls and libraries, 
                debugging and testing of code; use of developmental tools like make, version control systems.</p>
                <b>Credits: </b> 3 <br>
                <b>Terms Offered: </b> Fall 2019, Winter 2020 <br>
                <b>Instructor: </b> Joseph DSilva (Fall) Joseph P Vybihal (Winter)<br>
                <b>Prerequisites: </b> <a href = "#COMP202">COMP 202</a> or <a href = "#COMP250">COMP 250</a> <br>
                <a href = "https://www.cs.mcgill.ca/media/academic/courses/5_COMP_206_enH8696.pdf"> Syllabus (PDF) </a> <br>
                <a href = "https://www.mcgill.ca/study/2019-2020/courses/comp-102"> McGill eCalendar </a>
            </div> 
        </div> 

        <hr>

        <div id = "course">
            <h3 id = "COMP250" @click = "showInfo('dropdown4')">COMP 250: Introduction to Computer Science</h3>
             <div class = "dropdown" id = "dropdown4"> 
                <p> Mathematical tools (binary numbers, induction, recurrence relations, asymptotic complexity, 
                establishing correctness of programs), Data structures (arrays, stacks, queues, linked lists, trees,
                 binary trees, binary search trees, heaps, hash tables), Recursive and non-recursive algorithms 
                 (searching and sorting, tree and graph traversal). Abstract data types, inheritance. Selected topics.</p>
                <b>Credits: </b> 3 <br>
                <b>Terms Offered: </b> Fall 2019, Winter 2020 <br>
                <b>Instructor: </b> Michael Langer, Giulia Alberini (Fall) Reihaneh Rabbany, Giulia Alberini (Winter)<br>
                <b>Prerequisites: </b> Familiarity with a high level programming language and CEGEP level Math. <br>
                <b>Notes: </b>Students with limited programming experience should take <a href = "#COMP202">COMP 202</a>
                or equivalent before <a href = "#COMP250">COMP 250</a>. 
                See <a href = "#COMP202">COMP 202</a> Course Description for a list of topics.<br>
                <a href = "https://www.cs.mcgill.ca/media/academic/courses/8_COMP_250_JCxX2Fx.pdf"> Syllabus (PDF) </a> <br>
                <a href = "https://www.mcgill.ca/study/2019-2020/courses/comp-102"> McGill eCalendar </a>
            </div> 
        </div> 

        <hr>

        <div id = "course">
            <h3 id = "COMP303" @click = "showInfo('dropdown5')">COMP 303: Software Design</h3>
             <div class = "dropdown" id = "dropdown5"> 
                <p> Principles, mechanisms, techniques, and tools for object-oriented software design and
                 its implementation, including encapsulation, design patterns, and unit testing.</p>
                <b>Credits: </b> 3 <br>
                <b>Terms Offered: </b> Fall 2019, Winter 2020<br>
                <b>Instructor: </b> Martin Robillard (Fall) Jin Guo (Winter)<br>
                <b>Prerequisites: </b> <a href = "#COMP206">COMP 206</a>, <a href = "#COMP250">COMP 250</a>. <br>
                <a href = "https://www.mcgill.ca/study/2019-2020/courses/comp-102"> McGill eCalendar </a>
                <a href = "https://github.com/prmr/COMP303/blob/master/README.md"> Course Website </a>
            </div> 
        </div> 

        <hr>

        <div id = "course">
            <h3 id = "COMP307" @click = "showInfo('dropdown6')">COMP 307: Principles of Web Development</h3>
             <div class = "dropdown" id = "dropdown6"> 
                <p> The course discusses the major principles, algorithms, languages and technologies that 
                underlie web development. Students receive practical hands-on experience through a project.</p>
                <b>Credits: </b> 2 <br>
                <b>Terms Offered: </b> Winter 2020 <br>
                <b>Instructor: </b> Joseph P Vybihal (Winter)<br>
                <b>Prerequisites: </b> <a href = "#COMP206">COMP 206</a> <br>
                <b>Corequisites:</b> <a href = "#COMP303">COMP 303</a><br>
                <a href = "https://www.cs.mcgill.ca/media/academic/courses/15_COMP_307_fM33LLO.pdf"> Syllabus (PDF) </a> <br>
                <a href = "https://www.mcgill.ca/study/2019-2020/courses/comp-102"> McGill eCalendar </a>
            </div> 
        </div> 
    </div>
    </div>
</template>

<script>
export default {
    name: "Classes",
     methods:{
        showInfo:function(name){
            var x = document.getElementById(name);
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        },
    } 
}
</script>


<style scoped>

#box {
    background-color: var(--light-yellow); 
    margin-left: 22.5%; 
    margin-right: 5%;
    text-align: left; 
}
#course{
    text-align: left;
    padding-left: 20px; 
    padding-right: 20px; 
}

h3:hover {
     background-color: var(--dutch-white);
     cursor: pointer;
}

div.dropdown {
    display: none; 
}

#sideBar
{
    margin-left: 2.5%;
    width: 15%;
    padding-left: 10px;
    background-color: var(--light-yellow);
    position: fixed;
    height: auto;
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
} 
.container
{
    display: none;
}
#sideBar a:hover
{
    background-color: var(--dutch-white);
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

#course a {
    color: var(--mred); 
}
#course a:visited, a:active{
    color: var(--navy);
}

#heading {
    padding-left: 10px;
}

hr {
    margin-left: 10px; 
    margin-right: 10px;
}

</style>
