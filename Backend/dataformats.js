import fs from "fs";

const dataRestaurant = `{
    "id": "275394",
    "name": "Devi Homely Kitchen",
    "cloudinaryImageId": "l5ufrtb7ndy9r3e9yuu1",
    "locality": "Bendeapudi Vari Street",
    "areaName": "Powerpet",
    "costForTwo": "₹250 for two",
    "cuisines": [
        "Biryani",
        "South Indian"
    ],
    "avgRating": 3.8
}`;
const jsonObject = {
    "id" : 3131,
    "name": "lakshman"
}
const javascriptObject = {
    id : 3131,
    name: "lakshman"
}
console.log("data read using fs:",typeof dataRestaurant);
console.log(dataRestaurant);
console.log(dataRestaurant.name);
console.log("jsondata:",typeof jsonObject);
console.log(jsonObject);
console.log(jsonObject.name);
console.log("javascriptObject:",typeof javascriptObject);
console.log(javascriptObject);
const JsonContentRestaurant = JSON.parse(dataRestaurant);

// console.log(typeof JsonContentRestaurant);
// console.log(JsonContentRestaurant);