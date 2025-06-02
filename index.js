import express from "express"
const app=express();
app.listen('/',()=>{
    res.send("hello kaise ho")
})
app.get('/sameer',(req,res)=>{
    console.log("kaise ho aap");
    res.send("<h1>hellow orld</h2>")
})
const port=8080;
app.listen(8080,()=>{
    console.log("server is listen at port",port);
})