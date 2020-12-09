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
    mounted(){
        
    },

    data: function(){
        return {
            classes: [
                {name:"COMP 102: Computers and Computing", 
                description:"A course for students with no previous knowledge of computer science. The impact of computers on society. Web design and dynamic content. The inner workings of computers (hardware). Networking principles. Algorithm design and programming. A look at how computers store data (image, sound, and video). Software distribution policies and mechanisms.", 
                credits:"2",
                terms: "This course is not scheduled for the 2019-2020 academic year.",
                instructor: "There are no professors associated with this course for the 2019-2020 academic year.",
                prereq:"High school level mathematics course on functions.",
                other:"Credit will not be given for COMP 102 if it is taken concurrently with, or after, any of: COMP 202, COMP 203, COMP 208 , COMP 250. Management students cannot receive credit for COMP 102 .", 
                syllabus:"www.mcgill.ca",
                link:"https://www.mcgill.ca/study/2019-2020/courses/comp-102",
                },
                {name:"COMP 202: Foundations of Programming", 
                description:"Introduction to computer programming in a high level language: variables, expressions, primitive types, methods, conditionals, loops. Introduction to algorithms, data structures (arrays, strings), modular software design, libraries, file input/output, debugging, exception handling. Selected topics.", 
                credits:"3",
                terms: "Fall 2019, Winter 2020, Summer 2019 ",
                instructor: "Giulia Alberini, Elizabeth Patitsas (Fall) Giulia Alberini (Winter), Ben Yu (Summer)",
                prereq:"A CEGEP level mathematics course.",
                other: "COMP 202 and COMP 208 cannot both be taken for credit. COMP 202 is intended as a general introductory course, while COMP 208 is intended for students interested in scientific computation. COMP 202 cannot be taken for credit with or after COMP 250.", 
                syllabus:"https://www.cs.mcgill.ca/media/academic/courses/3_COMP_202_A1i3t4M.pdf",
                link:"https://www.mcgill.ca/study/2019-2020/courses/comp-202",
                },

                {name:"COMP 206: Introduction to Software Systems",
                description:"Comprehensive overview of programming in C, use of system calls and libraries, debugging and testing of code; use of developmental tools like make, version control systems.",
                credits:" 3",
                terms: " Fall 2019, Winter 2020 ",
                instructor: " Joseph DSilva (Fall) Joseph P Vybihal (Winter)",
                prereq: " COMP 202 or COMP 250", 
                other: "", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/5_COMP_206_enH8696.pdf",
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-206",
                },

                {name:"COMP 250: Introduction to Computer Science", 
                description: "Mathematical tools (binary numbers, induction, recurrence relations, asymptotic complexity, establishing correctness of programs), Data structures (arrays, stacks, queues, linked lists, trees, binary trees, binary search trees, heaps, hash tables), Recursive and non-recursive algorithms (searching and sorting, tree and graph traversal). Abstract data types, inheritance. Selected topics.", 
                credits: "3", 
                terms: "Fall 2019, Winter 2020",
                instructor: "Michael Langer, Giulia Alberini (Fall) Reihaneh Rabbany, Giulia Alberini (Winter)", 
                prereq: "Familiarity with a high level programming language and CEGEP level Math.", 
                other: "Students with limited programming experience should take COMP 202 or equivalent before COMP 250. See COMP 202 Course Description for a list of topics.", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/8_COMP_250_JCxX2Fx.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-250", 
                },  

                {name:"COMP 251: Algorithms and Data Structures", 
                description: "Introduction to algorithm design and analysis. Graph algorithms, greedy algorithms, data structures, dynamic programming, maximum flows.", 
                credits: "3", 
                terms: "Fall 2019, Winter 2020",
                instructor: "Luc Devroye", 
                prereq: "COMP 250", 
                other: "Not open to students who have taken or are taking COMP 252.COMP 251 uses basic counting techniques (permutations and combinations) that are covered in MATH 240 and 363, but not in MATH 235. These techniques will be reviewed for the benefit of MATH 235 students.", 
                syllabus: "http://luc.devroye.org/251.html", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-251", },  

                 {name:"COMP 273: Introduction to Computer Systems", 
                description: "Number representations, combinational and sequential digital circuits, MIPS instructions and architecture datapath and control, caches, virtual memory, interrupts and exceptions, pipelining.", 
                credits: "3", 
                terms: "Fall 2019, Winter 2020",
                instructor: "Kaleem Siddiqi", 
                prereq: "", 
                other: "COMP 206 (Corequisite)", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/11_COMP_273_qtDlIoA.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-273", 
                },  

                {name:"COMP 302: Programming Languages and Paradigms", 
                description: "Programming language design issues and programming paradigms. Binding and scoping, parameter passing, lambda abstraction, data abstraction, type checking. Functional and logic programming.", 
                credits: "3", 
                terms: "Fall 2019, Winter 2020",
                instructor: " Brigitte Pientka (Fall) Prakash Panangaden (Winter)", 
                prereq: " COMP 250", 
                other: "3 Hours", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/13_COMP_302_ndstwmd.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-302", 
                },  

                 {name:"COMP 303: Software Design", 
                description: "Principles, mechanisms, techniques, and tools for object-oriented software design and its implementation, including encapsulation, design patterns, and unit testing.", 
                credits: "3", 
                terms: "Fall 2019, Winter 2020",
                instructor: "Martin Robillard (Fall) Jin Guo (Winter)", 
                prereq: " COMP 206, COMP 250.", 
                other: "", 
                syllabus: "https://github.com/prmr/COMP303/blob/master/README.md", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-303", 
                },  

                 {name:"COMP 307: Principles of Web Development", 
                description: "The course discusses the major principles, algorithms, languages and technologies that underlie web development. Students receive practical hands-on experience through a project.", 
                credits: "2", 
                terms: "Winter 2020",
                instructor: "Joseph P Vybihal (Winter)", 
                prereq: "COMP 206", 
                other: "COMP 303 (Corequisite)", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/15_COMP_307_fM33LLO.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-307", 
                },  

                 {name:"COMP 321: Programming Challenges", 
                description: "Development of programming skills on tricky challenges, games and puzzles by means of programming competitions.", 
                credits: "1", 
                terms: "Fall 2019, Winter 2020",
                instructor: "David Becerra (Fall) David Meger (Winter)", 
                prereq: "COMP 250 or COMP 206, MATH 223 and MATH 240.", 
                other: "At the end of the class, interested students are encouraged to join the McGill team to participate in the annual ACM International Collegiate Programming Competition.", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/18_COMP_321_EhWKr7m.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-321", 
                },

                {name:"COMP 322: Introduction to C++", 
                description: "Basics and advanced features of the C++ language. Syntax, memory management, class structure, method and operator overloading, multiple inheritance, access control, stream I/O, templates, exception handling.", 
                credits: "1", 
                terms: "Winter 2020",
                instructor: "There are no professors associated with this course for the 2019-2020 academic year.", 
                prereq: " COMP 250 and (COMP 206 or COMP 208)", 
                other: "", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/19_COMP_322_VL3T4aJ.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-322", 
                },

                {name:"COMP 421: Database Systems", 
                description: "Database Design: conceptual design of databases (e.g., entity-relationship model), relational data model, functional dependencies. Database Manipulation: relational algebra, SQL, database application programming, triggers, access control. Database Implementation: transactions, concurrency control, recovery, query execution and query optimization.", 
                credits: "3", 
                terms: "Winter 2020",
                instructor: "There are no professors associated with this course for the 2019-2020 academic year.", 
                prereq: "COMP 206, COMP 251, COMP 302", 
                other: "", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/35_COMP_421_2b2VVIB.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-421", 
                },

                {name:"COMP 521: Modern Computer Games", 
                description: "Genre and history of games, basic game design, storytelling and narrative analysis, game engines, design of virtual worlds, real-time 2D graphics, game physics and physical simulation, pathfinding and game AI, content generation, 3D game concerns, multiplayer and distributed games, social issues.", 
                credits: "4", 
                terms: " Fall 2020",
                instructor: "Clark Verbrugge(Fall)", 
                prereq: "COMP 251, MATH 223 and (COMP 303 or COMP 361).", 
                other: "", 
                syllabus: "https://www.cs.mcgill.ca/media/academic/courses/41_COMP_521_mrkKEsg.pdf", 
                link: "https://www.mcgill.ca/study/2019-2020/courses/comp-521", 
                },
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
