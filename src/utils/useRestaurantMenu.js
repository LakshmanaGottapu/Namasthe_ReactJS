import { useEffect, useState } from "react";
import {RESTAURANT_MENU_API} from "./constants";
const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState();
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch(`${RESTAURANT_MENU_API}${resId}`);
        const restaurants = await data.json();
        //console.log(restaurants);
        setResInfo(restaurants);
    };
    return resInfo;
}
export default useRestaurantMenu;