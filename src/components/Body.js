import RestroCard from "./RestroCard.js"
//import {debounce} from "../utils/utilities.js"
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import {withLabelPromoted} from "./RestroCard";
const Body = ()=>{
    console.log("Body rendered");
    let [restaurantsList, setrestaurantsList] = useState([]);
    let [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        setTimeout(fetchData,150);
    },[])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7280962&lng=81.0780596&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        const restaurants = json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const moreRestaurants = json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        restaurants.push(...moreRestaurants);
        console.log(restaurants);
        setrestaurantsList(restaurants);
        setFilteredRestaurants(restaurants);
    };
    function search(){
        if(searchText)
        setFilteredRestaurants(restaurantsList.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
    }
    const RestroCardPromoted = withLabelPromoted();
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
        <div className="p-4 pl-16 flex flex-wrap">
            {filteredRestaurants.map(restaurant=> {
                if(restaurant.info.promoted===true){
                    console.log(restaurant.info.name);
                    return (<RestroCardPromoted key={restaurant.info.id} props={restaurant}></RestroCardPromoted>);
                }
                else 
                    return (<RestroCard key={restaurant.info.id} restaurant={restaurant.info}></RestroCard>);
            })
            } 
        </div>
    </div>)
    ):(<h1>you are offline, check your network connection!!</h1>)
}
export default Body;