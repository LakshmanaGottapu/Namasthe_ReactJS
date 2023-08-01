import { Link } from 'react-router-dom';
import {LOGO_URL} from '../utils/constants';  
import ShimmerHeader from './ShimmerHeader.js';
import { useState,useEffect } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
export const Header = () => {
    let [sessionState,setSessionState] = useState("Login");
    function changeState(){
        setTimeout(()=>{
            sessionState==="Login"?setSessionState("Logout"):setSessionState("Login");
        },100);
    }
    return (
        <div className="flex justify-between shadow-sm bg-slate-200" >
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL}></img>
            </div>
            <div className = "border-slate-500">
                <ul className="flex p-4 m-4 border-slate-500">
                    <li className="mx-4"><Link to='/grocery'>Grocery</Link></li>
                    <li className="mx-4">Online Status: {useOnlineStatus()?"🟢":"🔴"}</li>
                    <li className="mx-4"><Link to='/'>Home</Link></li>
                    <li className="mx-4"><Link to='/about'>About</Link></li>
                    <li className="mx-4"><Link to='/contact'>ContactUs</Link></li>
                    <li className="mx-4">Cart</li>
                    <button className="mx-4" onClick={changeState}>{sessionState}</button>
                </ul>
            </div>
        </div>
    );
}  
export default Header;