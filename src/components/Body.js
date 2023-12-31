import RestroCard from "./RestroCard.js"
import {debounceFunction} from "../utils/utilities.js"
import { useState, useEffect, useContext } from 'react';
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import {withLabelPromoted} from "./RestroCard";
import {CARDS_API} from '../utils/constants';
import flat from '../utils/flat';
import UserContext from "./UserContext";
const Body = ()=>{
    let [restaurantsList, setrestaurantsList] = useState([]);
    let [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filterFlag, setFilterFlag] = useState(false);
    const {loggedInUser,setUserName} = useContext(UserContext);
    const debouncedSearch = debounceFunction(search,200);
    useEffect(()=>{
        setTimeout(fetchData,150);
    },[])
    useEffect(debouncedSearch,[searchText]);
    const fetchData = async () => {
        const data = await fetch(CARDS_API);
        const json = await data.json();
        const categories = json.data.cards;
        if(categories[0].card.card?.id==="swiggy_not_present"){
            return;
        }
        const restaurantCategories = categories.filter(category=>category?.card?.card?.id==="restaurant_grid_listing");
        let restaurants=[];
        restaurantCategories.forEach(category=>restaurants.push(category.card.card.gridElements.infoWithStyle.restaurants));
        setrestaurantsList(flat(restaurants));
        setFilteredRestaurants(flat(restaurants));
    };
    function search(){
        if(searchText){
            if(filterFlag)
            setFilteredRestaurants(filteredRestaurants.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
            else {
                console.log("Hi");
                setFilteredRestaurants(restaurantsList.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
            }
        }
        else{
            setFilteredRestaurants(restaurantsList);
        }
    }
    const RestroCardPromoted = withLabelPromoted();

    return useOnlineStatus()?(
    restaurantsList.length === 0?(<Shimmer/>) :
    (<div className="body">
        <div className="filterbar flex bg-slate-100 my-8 h-16" >
            <button className=" px-2 ml-24 border h-8 mt-4 border-black shadow-md bg-gray-300 rounded-lg" onClick={()=>{
                if(!filterFlag){
                    setFilteredRestaurants(restaurantsList.filter(restaurant=>restaurant.info.avgRating>4));
                    setFilterFlag(true);
                }
                else {
                        setFilteredRestaurants(restaurantsList);
                        setFilterFlag(false);
                    }
                }}>Top Rated</button>
            <div className="searchbar ml-96 p-4" >
                <input className="border border-black rounded-lg" type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    //debouncedSearch();
                }}></input>
                <button className="border border-black ml-1 shadow-md rounded-lg bg-gray-400  px-1" onClick={search}>search</button>
            </div>
            <div className="user-name m-auto"><span className="font-bold text-xl">UserName:</span>
                <input type="text" className="ml-2 border rounded-sm text-lg pl-1 border-black" onChange={(e)=>setUserName(e.target.value)}></input>
            </div>
        </div>
        <div className="p-4 pl-16 flex flex-wrap">
            {
                filteredRestaurants.map(restaurant=> {
                    if(restaurant.info.promoted===true){
                        return (<RestroCardPromoted key={restaurant.info.id} props={restaurant}></RestroCardPromoted>);
                    }
                    else {
                        return (<RestroCard key={restaurant.info.id} restaurant={restaurant.info}></RestroCard>);
                    }   
                })
            } 
        </div>
    </div>)
    ):(<h1>you are offline, check your network connection!!</h1>)
}
export default Body;