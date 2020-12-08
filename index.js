const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback');
require('dotenv').config()

const app = express()



//middleware
app.use(bodyParser.json())
app.use(cors())
// app.use(history());

const test = require('./backend/routes/api/mongo')
app.use('/api/mongo',test)

// if(process.env.NODE_ENV === 'production')
    //spa routing
app.use(express.static("./frontend/dist"))

app.get('/*',(req,res)=>{ //in case user enters a bad url
    res.redirect('/')
})

const port = 8004 // process.env.PORT
 
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
