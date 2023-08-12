import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import React from "react";
import {useState, useEffect} from "react";
import {CDN_URL} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCard from "./MenuItemCards.js";
const Restaurant = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showItems,setShowItems] = useState();
    
    if(resInfo) {
        console.log("got resInfo from api call");
        const {name,city,areaName,cuisines,cloudinaryImageId} = resInfo.data.cards[0].card.card.info;
        const items = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
        let allCategories = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        const categories = allCategories.filter(category=>category.card.card["@type"].endsWith("ItemCategory"));
        // console.log(categories);
        let i = 0;
        return (
            <div className="p-2 text-xl">
                <div className="flex flex-col justify-center items-center p-4 border-2 rounded-2xl w-6/12 m-auto border-black">
                    <h1 className="p-1 my-1 font-bold text-3xl">{name}</h1>
                    <span className="text-sm">{city} {areaName}</span>
                    <img src={CDN_URL+cloudinaryImageId} className="h-48 w-72 rounded-2xl shadow-xl my-2"></img>
                    <h3 className="text-xl text-bold">{cuisines.join(",")}</h3>
                </div>
                <div className=" bg-black h-1 w-6/12 mt-8 mx-auto rounded-lg "></div>
                <div className="flex flex-col justify-center items-center p-4 m-4">
                {   
                    categories.map((category,index)=>(<ItemCard key={i++} category={category.card.card} showIndex={index==showItems?true:false} setIndex={(flag)=>{if(!flag)setShowItems(index);
                    else setShowItems(-1);
                    }}></ItemCard>))
                }
                </div>
            </div>
        );
    }
    else {console.log("resInfo is undefined");return <Shimmer/>;}
}

export default Restaurant;