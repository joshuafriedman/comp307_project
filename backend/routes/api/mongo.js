const express = require('express');
const mongo = require('mongodb');

//var app = express();
const router = express.Router();
const client = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/cs307-group04-DB/";
/*
//Login
async function loadPostsCollection()
{
    const client = await mongo.MongoClient.connect('', {useNewUrlParser: true})
}
return client.db('content').collection('users');
router.get('/', async(req,res) => {
    const posts = await loadPostsCollection();
    res.send(await post.find({}));
})
*/

//Begin page
router.get('/',(req,res)=>{
    /////////  write code here
    // code written here will be called whenever you go to /api/test, for example localhost:8004/api/test

    console.log("hello hello")
    res.send("start from here")
    ///////////////////////
});

//Add post
router.post('/post', (req,res) => {
    client.connect(url, function(err, result) {
        if (err) throw err;
        db.db("content").collection("test").insertOne({
            text: req.body.text,
            createdAt: new Date()
        });
        res.send(result);
    });

});

router.get('/getUsers',(req,res)=>{
    client.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("admin");
        dbo.collection("system.users").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });
})

router.get('/getClasses',(req,res)=>{
    client.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("content");
        dbo.collection("classes").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });
})
//news
router.get('/getNews',(req,res)=>{
    client.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("content");
        dbo.collection("news").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });
})

router.get('/getPeople',(req,res)=>{
    client.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("content");
        dbo.collection("people").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });
})

/*router.post('/updateUsers',(req,res)=>{
    client.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("content");
        dbo.collection("users")
    })
})*/


module.exports = router