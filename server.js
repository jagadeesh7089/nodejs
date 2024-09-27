var express=require('express');
var app=express()
var mongoose=require('mongoose')

var Product=require("./model/Product.model")
app.set('view engine','pug')
mongoose.connect("mongodb+srv://jagadeesh:Mongoo123@cluster0.pot3m.mongodb.net/")

app.get("/",(req,res)=>{
   
        Product.find({}).then((data)=>{
            console.log(data)
            res.send("hii")
        })
   
})




app.listen(4300,()=>{console.log("server running on 4300")})