import { Link } from 'react-router-dom';
import {CDN_URL} from '../utils/constants';    
const Card = ({restaurant}) =>  {
    let id;
    switch(restaurant.name){
        case "Hotel N" : id = 0; break;
        case "Devi Homely Kitchen" : id = 1; break;
        case "Gummadi Grand" : id = 2; break;
    }
    return  <div className="card">
                <Link to={`/restaurant/${restaurant.id}`} key={id}>
                    <img src={CDN_URL+restaurant.cloudinaryImageId}></img>
                    <div className="restaurantTitle">{restaurant.name}</div>
                    <div>{restaurant.cuisines.join(", ")}</div>
                    <div>Rating: {restaurant.avgRating}<span>&#9733;</span></div>
                    <div>Cost: {restaurant.costForTwo}</div>
                </Link>
            </div>;
}
export default Card;