const express = require('express');
const bodyParcer = require('body-parser');
var mongoose = require('mongoose');

const app = express();

app.use(bodyParcer.json())
app.use(express.static('public'))
app.use(bodyParcer.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://JKSHAH:jksc2022@jk-shah.dzfsr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

var db = mongoose.connection;

db.on('error',()=>console.log('err'));
db.once('open',()=>{console.log("connected")});

app.post("/submit",(req,res)=>{
    var name = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    var location = req.body.location;

    var data = {
        "name":name,
        "phone":phone,
        "email":email,
        "location":location,
        "created": new Date()
    }

    db.collection('student').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("succsess");
    })

    return res.redirect('thankyou.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })

    return res.redirect('index.html');
}).listen(3000);

console.log("l");