import app from "express";
import fs from "fs";
const data = fs.readFileSync("./swiggycards.json","utf8");
const JsonContent = JSON.parse(data);
const server = app();
//console.log(typeof JsonContent);
server.get("/",(req,res)=>{
    res.json(JsonContent);
})
server.listen("5500",()=> console.log(`listening to http://localhost:5500`));