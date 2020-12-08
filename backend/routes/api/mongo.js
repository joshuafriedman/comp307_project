const express = require('express');
const mongo = require('mongodb');

//var app = express();
const router = express.Router();
const client = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/cs307-group04-DB/";

//Login

/*
router.get('/', async(req,res) => {
    const posts = await loadPostsCollection();
    res.send(await post.find({}));
})


async function load()
{
  return client.connect("mongodb://cs307-group04:N5t49f63QbURydG2@http://fall2020-comp307.cs.mcgill.ca:8004/cs307-group04-DB", {useNewUrlParser: true});
}
*/
//Begin page
router.get('/',(req,res)=>{
    /////////  write code here
    // code written here will be called whenever you go to /api/test, for example localhost:8004/api/test

    console.log("Logged in")
    res.send("start from here")
    ///////////////////////
});

//Add post
/*
curl "http://localhost:8004/api/mongo/post" \
  -X POST \
  -d "{  \n  \"text\": \"Test 2\"\n}" \
  -H "Content-Type: application/json" 
*/
router.post('/post', (req,res) => {
    client.connect(url, function(err, db) {
        if (err) throw err;
        var obj = db.db("");
        var query = { text: req.body.text, createdAt: new Date() };
        obj.collection("test").insertOne(query);
        res.status(201).send();
    });
});

router.postNews('/:title', (req,res) => {
  client.connect(url, function(err, db) {
      if (err) throw err;
      var query = { text: req.body.text, createdAt: new Date() };
      db.db("cs307-group04-DB").collection("news").insertOne(query);
      res.status(200).send();
  });
});

/*
curl "http://fall2020-comp307.cs.mcgill.ca:8004/api/mongo/hello" \
  -X DELETE \
  -H "Content-Type: application/json" 
*/
router.delete('/:title', (req,res) => {
  client.connect(url, function(err, db) {
      if (err) throw err;
      db.db("cs307-group04-DB").collection("news").deleteOne({_title: new mongodb.title(req.params.title)});
      res.send("delete complete");
      //res.status(200).send();
  });
});

//Login
/*
curl "http://localhost:8004/api/mongo/login" \
  -X POST \
  -d "{\n  \"name\":\"UsernameInputValue\",\n  \"pwd\":\"PasswordInputValue\"\n}" \
  -H "Content-Type: application/json" 
*/
router.post("/login", function(req, res) {
  var name = req.body.name;
  var pwd = req.body.pwd;
  client.connect(url, function(err, db) {
    if (err) throw err;
    var obj = db.db("admin");
    var query = {name: name, pwd: pwd};
    obj.collection("system.users").findOne(query).then(user => {
      //If info isn't exits , stay in the login page
      if (!user) {
        return res.status(404).send();
      }
      else {
        //Else , move to the NewPage
        return res.status(200).send();
      }
    })
    if (err) throw err;
    //Else , move to the NewPage
    return res.status(200).send();
  })
});

router.post("/")

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


module.exports = router;