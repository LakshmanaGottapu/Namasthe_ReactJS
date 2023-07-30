import { useEffect, useState } from "react";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState();
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch(`http://localhost:4500/restaurant/${resId}`);
        const restaurants = await data.json();
        //console.log(restaurants);
        setResInfo(restaurants);
    };
    return resInfo;
}
export default useRestaurantMenu;