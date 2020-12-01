const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()
const mongo_url = ""

router.get('/',(req,res)=>{
    /////////  write code here
    // code written here will be called whenever you go to /api/test, for example localhost:8004/api/test
    console.log("hello hello")
    res.send("hello world")




    ///////////////////////
})




module.exports = router 