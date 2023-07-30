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
        <div className="filterbar" >
            <button onClick={()=>{setFilteredRestaurants(restaurantsList.filter(restaurant=>restaurant.info.avgRating>4));}}>Top Rated</button>
            <div className="searchbar" >
                <input type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={search}>search</button>
            </div>
            <div style={{width:"250px"}}></div>
        </div>
        
        <div className="cards grid">
            {filteredRestaurants.map(restaurant=> <RestroCard key={restaurant.info.id} restaurant={restaurant.info}></RestroCard>)
            } 
        </div>
    </div>)
    ):(<h1>you are offline, check your network connection!!</h1>)
}
export default Body;