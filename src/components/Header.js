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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{useOnlineStatus()?"🟢":"🔴"}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>ContactUs</Link></li>
                    <li>Cart</li>
                    <li></li>
                </ul>
                <button onClick={changeState}>{sessionState}</button>
            </div>
        </div>
    );
}  
export default Header;