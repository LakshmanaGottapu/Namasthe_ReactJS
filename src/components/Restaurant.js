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
        const {name,cuisines,cloudinaryImageId,id} = resInfo.data.cards[0].card.card.info;
        return (
            <div className="p-2 text-xl">
                <h1>{name}</h1>
                <h2>Menu</h2>
                <img src={CDN_URL+cloudinaryImageId} className="h-72"></img>
                <h3>{cuisines.join(",")}</h3>
                {/* <ul>
                    {itemCards.map(cardName=>(<li className="item">{cardName}</li>))}
                </ul>     */}
            </div>
        );
    }
    else {console.log("resInfo is undefined");return <Shimmer/>;}
}

export default Restaurant;