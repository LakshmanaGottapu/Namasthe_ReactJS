import app from "express";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataHome = fs.readFileSync("./swiggycards.json","utf8");
const dataRestaurant = fs.readFileSync("./restaurantMenuData.json","utf8");
const restroObject = JSON.parse(dataRestaurant);

const server = app();
server.use(app.static(__dirname))
// console.log(restroObject.length);
server.get("/",(req,res)=>{
    res.send(dataHome);
})
server.get("/restaurant/:id",(req,res)=>{
    const id = req.params.id;
    const arr = restroObject.filter(restro=>restro.id==id);
    console.log(arr);
    res.send(arr);
})
server.get("/image",(req,res)=>{
    const imagePath = path.join(__dirname, 'p12402331_p_v10_ba.jpg');
    console.log(imagePath);
    res.sendFile(imagePath);
})
server.listen("4500",()=> console.log(`listening to http://localhost:4500`));