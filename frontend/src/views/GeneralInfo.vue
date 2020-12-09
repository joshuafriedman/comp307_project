<template>
    <div id = "main"> 
        <div id = "parent"> 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <div id="sideBar" class = "child1">
                <button><b>General Info</b></button>
                <button><b>Why Computer Science?</b></button>
                <button><b>CEGEP</b></button>
                <button><b>Freshmen</b></button>
                <button><b>Choosing A Major</b></button>
                <button><b>Combining Studies</b></button>
                <button><b>Internships</b></button>
                <button><b>Undergrads</b></button>
                <button><b>Transfer Students</b></button> 
            </div>


            <div id = "content" class= "child2"> 
                <h1>McGill School of Computer Science</h1>
                <a href= "https://www.mcgill.ca">McGill University</a> is one of the top research universities in Canada and 
                is the only Canadian university to rank consistently among the top 25 universities in the world 
                <a href = "https://www.mcgill.ca/about/">(based on Times and QS rankings)</a>.
                The School of Computer Science currently stands second in Canada for its research funding. 
                Our professors have received most of the <a href = "#main"> top awards in Computer Science </a>, 
                while our students go on to become top-notch research and industry leaders. 
                A graduate degree from the McGill School of Computer Science is recognized in both the academic and 
                industrial worlds as a proof of excellence. <br>
                <br>

                Our department is currently 34 <a href = "#main"> faculty members </a> strong, 60 Ph.D. students, and 100 Masters students. 
                All of our Ph.D. students and most of our Masters students are funded through teaching assistantships or 
                research assistantships. Approximately half our graduate students are Canadian and the other half are from abroad. <br>
                <br>

                <p id = "title"> Location </p>
                McGill is an English language university located in the heart of Montreal, the second largest French-speaking 
                city in the world. Montreal has a reputation for its cosmopolitan atmosphere, history, cultural and sport activities, 
                and excellent restaurants. The cultural offerings of the city include a symphony orchestra, ballet, opera, several 
                theaters and museums. For outdoor recreation, Mount Royal, a wooded mountain with a lake and parks located very close 
                to the university, along with the St. Lawrence river, the many lakes and parks around the island of Montreal, 
                provide opportunity for a wide variety of activities. Montreal consistently ranks among the most livable cities 
                in the world, and the cost of living is among the lowest for cities of its size. The city is extremely safe and has 
                an excellent public transportation system. Note that although speaking French is useful to fully enjoy your experience 
                in Montreal, it is by no means necessary, as English is also spoken fluently by most of the population. 
                More information can be found on the <a href = "https://www.mcgill.ca/admissions/"> McGill Prospective Students </a>
                web page, while information on Montreal is available from 
                <a href = "http://www.montrealinternational.com/en/vivre/index.aspx"> Montreal International </a>. <br>


                <p id = "title">The Academic Year</p>
                The academic year at McGill, as at most Canadian universities, has two terms (or semesters). These are the Fall term - 
                early September to early December - and the Winter term - early January to mid-April.There is also a Summer term, 
                although no graduate courses are offered during this session. It is used by students as a time for research or completing 
                projects or theses.<br>
            

                <p id = "title">Important Information for Foreign Students</p>
                All students who are not citizens or permanent residents of Canada are required to obtain the necessary Visa and/or 
                Student Authorization documents prior to entering the country. Do NOT leave home without proper documentation! 
                You CANNOT change your status from Visitor to Student when in Canada. <br>
                <br>

                <b>Student Authorization:</b> Issued by Canada Immigration through a Canadian Embassy or Consulate. 
                There is a processing fee of $125 on all applications for Student Authorizations. <br>
                <br>

                <b>Certificate of Acceptance (CAQ):</b> Issued by Quebec Immigration for a fee of $100. If there is no Quebec Immigration 
                office in the country in which you are applying, you must fill out the application for a CAQ and send it to the Quebec 
                Immigration Office in Montreal along with the $100 processing fee. Once CAQ is approved, Quebec Immigration will telex 
                the Canadian Embassy you are dealing with. If there is a Quebec Immigration office in the country in which you are 
                applying, you apply for the CAQ through them.<br>
                <br>

                <b>Health Insurance (Compulsory):</b> Quebec requires all international students to participate in a recognized Health 
                Insurance Plan. Cost is approximately $500 per year for a single person. Most students use one of the insurance 
                plans offered by McGill.<br>
                <br>

                Once accepted, all international students receive detailed instructions on immigration procedures. 
                These instructions should be read very carefully to avoid unnecessary delays. 
                Applicants are advised to begin procedures necessary to ensure admission to Canada and complete required medical 
                papers for Canadian Immicolor"<br>

                <p id = "title">Student Accommodation</p> 
                Off-campus housing is the most popular among McGill graduate students, as it is usually affordable, convenient, 
                and easy to find. The Off-Campus Housing Service keeps a computerized list of available housing within walking 
                distance of McGill, or easily accessible by metro and bus lines. Most listings are checked to ensure minimum 
                standards of cleanliness and state of repair. Rental rates vary according to accommodation desired, but are 
                considered very reasonable in comparison with most North American cities. The University maintains a limited number 
                of apartment units in several nearby locations. Housing request forms can be obtained from the Graduate Housing office.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GeneralInfo",
     props:{
        data_ready:Boolean,
    },
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
    height: 440px;
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

#content {
    background-color: var(--light-yellow); 
    text-align: left; 
    padding-left:10px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
}

#title{
    font-size: 25px;
    font-weight: bold; 
}

a {
    color: var(--mred); 
    text-decoration: none;
}

a:hover {
    text-decoration: underline; 
    cursor: pointer; 
}



</style>
