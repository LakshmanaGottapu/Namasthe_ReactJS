import RestroCard from "./RestroCard.js"
//import {debounce} from "../utils/utilities.js"
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = ()=>{
    console.log("Body rendered");
    let [restaurantsList, setrestaurantsList] = useState([]);
    let [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        setTimeout(fetchData,150);
    },[])
    const fetchData = async () => {
        const data = await fetch("http://localhost:4500/");
        const json = await data.json();
        const restaurants = json.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setrestaurantsList(restaurants);
        setFilteredRestaurants(restaurants);
    };
    function search(){
        if(searchText)
        setFilteredRestaurants(restaurantsList.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
    }
    return useOnlineStatus()?(
    restaurantsList.length === 0?(<Shimmer/>) :
    (<div className="body">
        <div className="filterbar flex bg-slate-100 my-8 h-16" >
            <button className=" px-2 ml-24 border h-8 mt-4 border-black shadow-md bg-gray-300 rounded-lg" onClick={()=>{setFilteredRestaurants(restaurantsList.filter(restaurant=>restaurant.info.avgRating>4));}}>Top Rated</button>
            <div className="searchbar ml-96 p-4" >
                <input className="border border-black rounded-lg" type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button className="border border-black ml-1 shadow-md rounded-lg bg-gray-400  px-1" onClick={search}>search</button>
            </div>
        </div>
        
        <div className="grid grid-cols-4 gap-y-12 p-4 pl-16">
            {filteredRestaurants.map(restaurant=> <RestroCard key={restaurant.info.id} restaurant={restaurant.info}></RestroCard>)
            } 
        </div>
    </div>)
    ):(<h1>you are offline, check your network connection!!</h1>)
}
export default Body;