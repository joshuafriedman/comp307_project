<template>
    <div id="main">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div id=sideBar>
            <button @click="pHideShow"><b>People</b><i id="icon1" class="material-icons">expand_more</i></button> <br/>
            <div id="pHidable" class="container">

                <button @click="fHideShow"><b>Faculty</b><i id="icon2" class="material-icons">expand_more</i></button> <br/>
                <div id="fHidable" class="container">
                    <a href="#">Director</a>
                    <a href="#">Professors</a>
                    <a href="#">Faculty Lecturer</a>
                    <a href="#">Adjunct Professors</a>
                    <a href="#">Associate Members</a>
                    <a href="#">Emeritus Professors</a>
                    <a href="#">Former Professors</a>
                    <a href="#">In Memoriam</a>
                </div>

                <button @click="sHideShow"><b>Staff</b><i id="icon3" class="material-icons">expand_more</i></button> <br/>
                <div id="sHidable" class="container">
                    <a href="#">Administrative Staff</a>
                    <a href="#">System Staff</a>
                </div>

                <button @click="cHideShow"><b>Community</b><i id="icon4" class="material-icons">expand_more</i></button> <br/>
                <div id="cHidable" class="container">
                    <a href="#">Women@CS</a>
                    <a href="#">Supper Camp</a>
                    <a href="#">CSUS</a>
                    <a href="#">CSGS</a>
                </div>
                
            </div>
        </div>
        <div id="content">
            <p>Hello</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "People", 
    methods:
    {
        pHideShow: function()
        {
            
            var x = document.getElementById("pHidable");
            var y = document.getElementById("icon1");
            if (x.style.display === "block")
            {
                x.style.display = "none";
                y.innerHTML="expand_more";
            } 
            else
            {
                x.style.display = "block";
                y.innerHTML="expand_less";
            }
        },
        fHideShow: function()
        {
            var x = document.getElementById("fHidable");
            var y = document.getElementById("icon2");
            if (x.style.display === "block")
            {
                x.style.display = "none";
                y.innerHTML="expand_more";
            } 
            else
            {
                x.style.display = "block";
                y.innerHTML="expand_less";
            }
        },
        sHideShow: function()
        {
            var x = document.getElementById("sHidable");
            var y = document.getElementById("icon3");
            if (x.style.display === "block")
            {
                x.style.display = "none";
                y.innerHTML="expand_more";
            } 
            else
            {
                x.style.display = "block";
                y.innerHTML="expand_less";
            }
        },
        cHideShow: function()
        {
            var x = document.getElementById("cHidable");
            var y = document.getElementById("icon4");
            if (x.style.display === "block")
            {
                x.style.display = "none";
                y.innerHTML="expand_more";
            } 
            else
            {
                x.style.display = "block";
                y.innerHTML="expand_less";
            }
        }
    }
}
</script>

<style scoped>
#content
{
    width: 100%;
    height: 100%;
    background-color: aqua;
}
#sideBar
{
    width: 20%;
    background-color: var(--beige);
    position: fixed;
    height: auto;
}
#sideBar button
{
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    background-color: var(--beige);
    color: white;
    padding: 5px 5px;
    border: none;
    outline: none;
}
#sideBar button:hover
{
    background-color: var(--light-pink);
}
.container
{
    display: none;
}
#sideBar a:hover
{
    background-color: var(--off-white);
}
#sideBar a
{
    text-align: left;
    height: auto;
    font-size: 14px;
    padding: 10px;
    display:block;
    text-decoration: none;
}
a:visited
{
    color: var(--light-brown);
}
</style>