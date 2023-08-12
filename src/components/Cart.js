import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice";
import {CDN_URL} from "../utils/constants";
const Cart = ()=>{
    const cartItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        reducer :{
            dispatch(clearCart());
        }
    }
    return (
        <div className="w-6/12 my-4 m-auto">
            <div className="flex flex-col items-center my-2 w-full  ">
                <h1 className="text-2xl font-bold">Cart</h1>
                <button className="my-2 w-[80px] bg-black text-white rounded-md" onClick={handleClearCart}>Clear-Cart</button>
            </div>
            {cartItems.length===0?<p className="text-center text-xl">Cart is Empty, Add Items to the cart.</p>:
                cartItems.map((itemCard)=>{
                    const {id,name,description,imageId,price} = itemCard.card.info;
                    return (
                    <div key={id}>
                        <div  className="flex flex-row justify-between py-4 my-4 mx-4 "> 
                            <div>
                                <h3 className="font-semibold mb-2">{`♦${name}`}</h3>
                                <p className="mx-0.5 mb-2">${price/100}/-</p>
                                {description&&(<p className="w-10/12 font-thin text-sm">{`${description}`}</p>)}
                            </div>
                            <img src={CDN_URL+imageId} className="h-48 w-48 rounded-lg"></img>  
                        </div>
                        <div className="h-1 rounded-lg bg-gray-400"></div>
                    </div>)
                    })
            }
        </div>
    );
}

export default Cart;