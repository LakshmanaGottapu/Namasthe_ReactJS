import { useDispatch } from "react-redux";
import {addItem, removeItem, clearCart} from "../utils/cartSlice";
import MenuItemCard from "./MenuItemCard";
const ItemCard = function({category,showIndex,setIndex}){
    let itemCards;
    if(category["@type"].endsWith("NestedItemCategory"))
        itemCards = category.categories.itemCards;
    else
        itemCards = category.itemCards;
    return (
            <div className="w-6/12 my-4">
                <div className="font-bold bg-[#eee] p-2 rounded-lg cursor-pointer flex justify-between shadow-md" onClick={()=>{
                        setIndex(showIndex);
                }}>
                <span className="text-2xl text-[#444]">{category.title}</span>
                <span className="mr-2">♦</span>
                </div>
                {itemCards.map((itemCard,index)=>{
                    return(showIndex && ( <MenuItemCard itemCard={itemCard} key={index}></MenuItemCard>)
                    )
                })}
            </div>
    )
}

export default ItemCard;