import { Link } from 'react-router-dom';
import {CDN_URL} from '../utils/constants';    
const Card = ({restaurant}) =>  {
    let id;
    switch(restaurant.name){
        case "Hotel N" : id = 0; break;
        case "Devi Homely Kitchen" : id = 1; break;
        case "Gummadi Grand" : id = 2; break;
    }
    return  <div className="m-4 rounded-2xl p-4 w-86 bg-[#f0f0f0] hover:bg-gray-300  transition-colors duration-300">
                <Link to={`/restaurant/${restaurant.id}`} key={id}>
                    <img className="h-48 w-80 rounded-2xl"src={CDN_URL+restaurant.cloudinaryImageId}></img>
                    <div className="py-2 text-2xl font-bold">{restaurant.name}</div>
                    <div className="font-semibold">{restaurant.cuisines.join(", ")}</div>
                    <div>Rating: {restaurant.avgRating}<span>&#9733;</span></div>
                    <div>Cost: {restaurant.costForTwo}</div>
                </Link>
            </div>;
}
export default Card;