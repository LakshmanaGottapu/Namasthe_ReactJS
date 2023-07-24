import {CDN_URL} from '../utils/constants';    
const Card = ({restaurant}) =>  <div className="card">
                            <img src={CDN_URL+restaurant.cloudinaryImageId}></img>
                            <div className="restaurantTitle">{restaurant.name}</div>
                            <div>{restaurant.cuisines.join(", ")}</div>
                            <div>Rating: {restaurant.avgRating}<span>&#9733;</span></div>
                            <div>Cost: {restaurant.costForTwo}</div>
                        </div>;

export default Card;