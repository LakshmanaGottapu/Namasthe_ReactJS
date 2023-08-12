import { useSelector } from "react-redux";

const Cart = ()=>{
    const cartItems = useSelector(store=>store.cart.items);
    return(
        <div className="cartStore ">
           { cartItems.map((item)=>{

           })}
        </div>
    )
}