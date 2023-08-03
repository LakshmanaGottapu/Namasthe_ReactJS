import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import React from "react";
import {useState, useEffect} from "react";
import {CDN_URL} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItemCard from "./MenuItemCard.jsx";
const Restaurant = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [recomendedItems, setRecomendedItems] = useState([]);
    console.log(resInfo);
    useEffect(()=>{
        if(resInfo)
            setRecomendedItems(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    },[resInfo]);
    function recomendToggle(){
        if(recomendedItems.length===0){
            setRecomendedItems(resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards); 
        } 
        else{
            setRecomendedItems([]);
        } 
    }
    if(resInfo) {
        console.log("got resInfo from api call");
        const {name,city,areaName,cuisines,cloudinaryImageId} = resInfo.data.cards[0].card.card.info;
        const items = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
        return (
            <div className="p-2 text-xl">
                <div className="flex flex-col justify-center items-center p-4 m-4">
                    <h1 className="p-1 my-1">{name}</h1>
                    <p className="">{city}</p><br></br>
                    <span className="my-1">{`${areaName}`}</span>
                    <img src={CDN_URL+cloudinaryImageId} className="h-48 w-72"></img>
                    <h3>{cuisines.join(",")}</h3>
                </div>
                <div className=" bg-black h-1"></div>
                <div className="p-4 m-4"> 
                    <button className="ml-80 pl-8" onClick={recomendToggle}>{`${items?.title}(${recomendedItems?.length})`}</button>
                    {recomendedItems.map(itemCard=>(<MenuItemCard props={itemCard.card.info} key={itemCard.card.info.id}/>))}
                </div>    
                <div>
                </div>
            </div>
        );
    }
    else {console.log("resInfo is undefined");return <Shimmer/>;}
}

export default Restaurant;