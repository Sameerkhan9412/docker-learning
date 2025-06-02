import express from "express"
const app=express();
app.get('/sameer',(req,res)=>{
    console.log("kaise ho aap");
    res.send("<h1>hellow orld</h2>")
})
app.listen(3000,()=>{
    console.log("server is listen at port 3000");
})