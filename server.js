const express=require('express');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const hbs=require('hbs');
const db=require('./db');

const app=express();
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    db.getAllpersons().then((persons)=>{
        res.render('persons', {persons}); 
        // console.log(persons[0].name);
    })
      .catch((err)=>{
          res.send(err);
      })
 })



app.get("/add",function(req,res){
   
    res.render('persons_add');
})


app.post("/add",function(req,res){
    var name = req.body.name;
    var age = req.body.age;
    var city = req.body.city;
    ;
    db.addPersons(name,age,city)
    .then(()=>{
        res.redirect('/');
    })
    .catch((err)=>{
        res.send(err);
    })
    
})


app.listen(3000, function () {
    console.log("server is runing on port 3000");
})
