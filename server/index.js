const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname+'/public/')) // ./frontend/dist
    //spa routing
    app.get(/.*/,(req,res)=> res.sendFile(__dirname +'/public/index.html'))
}

const port = process.env.PORT || 8004

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})