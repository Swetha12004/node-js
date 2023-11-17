const express = require("express");
const app = express();
const path=require("path");


app.get("/html1",(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML.html"));
})
app.get("/html01",(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML2.html"));
})
app.get("/html2",(req,res)=>{
    res.sendFile(path.join(__dirname,"ca.html"));
})


app.listen(3978,()=>{
    
    console.log("server is running"); 
})