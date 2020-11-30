const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback');

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())
app.use(history());

//app.get("/",(req,res)=>{
//    res.send("Hello World!")
//})

if(process.env.NODE_ENV === 'production'|| true){
    app.use(express.static(__dirname+'/public/')) // ./frontend/dist
    //spa routing
    //app.get(/.*/,(req,res)=> res.sendFile(__dirname +'/frontend/public/index.html')) // ./frontend/dist/index.html
    app.use(express.static("./frontend/dist"))
}

const port = process.env.PORT || 8004

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
