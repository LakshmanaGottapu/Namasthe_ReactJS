import { useDispatch } from "react-redux";
import {CDN_URL} from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const MenuItemCard = ({itemCard})=>{
    const {id,name,description,imageId,price} = itemCard.card.info;
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    return (
        <div key={id}>
            <div  className="flex flex-row justify-between py-4 my-4 mx-4 "> 
                <div>
                    <h3 className="font-semibold mb-2">{`♦${name}`}</h3>
                    <p className="mx-0.5 mb-2">${price/100}/-</p>
                    {description&&(<p className="w-10/12 font-thin text-sm">{`${description}`}</p>)}
                </div>
                <img src={CDN_URL+imageId} className="h-48 w-48 rounded-lg"></img>  
                <div className="absolute ml-[495px] bg-white mt-2 hover:bg-red-200 hover:text-blue-900">
                    <button className="p-2 m-auto" onClick={()=>handleAddItem(itemCard)}>Add+</button>
                </div>  
            </div>
            <div className="h-1 rounded-lg bg-gray-400"></div>
        </div>
    );
};

export default MenuItemCard;