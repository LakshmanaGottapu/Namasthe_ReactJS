import {useState, useEffect} from 'react';
const useAllRestroCards = ()=>{
    const [restaurantsList, setrestaurantsList] = useState([]);
    useEffect(()=>{
        console.log(restaurantsList);
        setTimeout(fetchData,150);
    },[]);
    const fetchData = async () => {
        const data = await fetch("http://localhost:4500/");
        const json = await data.json();
        const restaurants = json.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setrestaurantsList(restaurants);//setFilteredRestaurants(restaurants);
    };
    return restaurantsList;
}


export default useAllRestroCards;