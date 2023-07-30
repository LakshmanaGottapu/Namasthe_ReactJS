import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import React from "react";
import {CDN_URL} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo) {
        console.log("got resInfo from api call");
        const {name,cuisines,cloudinaryImageId,itemCards,id} = resInfo[0];
        return (
            <div>
                <h1>{name}</h1>
                <h2>Menu</h2>
                <img src={CDN_URL+cloudinaryImageId} className="menu-card"></img>
                <h3>{cuisines.join(",")}</h3>
                <ul>
                    {itemCards.map(cardName=>(<li className="item">{cardName}</li>))}
                </ul>    
            </div>
        );
    }
    else {console.log("resInfo is undefined");return <Shimmer/>;}
}

export default Restaurant;