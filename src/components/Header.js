import {LOGO_URL} from '../utils/constants';  
import ShimmerHeader from './ShimmerHeader.js';
import { useState,useEffect } from 'react';
export const HeaderComp = () => {
    let [sessionState,setSessionState] = useState("Login");
    function changeState(){
        setTimeout(()=>{
            sessionState==="Login"?setSessionState("Logout"):setSessionState("Login");
        },100);
    }
    let [i,setI] = useState(0);
    if(i===0) {
        setTimeout(()=>{
            setI(i+1);
        },1000);
        return <ShimmerHeader></ShimmerHeader>;
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
                <button onClick={changeState}>{sessionState}</button>
            </div>
        </div>
    );
}  
export default HeaderComp;