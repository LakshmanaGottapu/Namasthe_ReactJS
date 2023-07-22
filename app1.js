import ReactDOM from "react-dom/client";
import React from 'react';
import MyComponent from "./component.js";
const headerComp = () => 
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://e7.pngegg.com/pngimages/315/870/png-clipart-swiggy-office-swiggy-corporate-online-food-ordering-discounts-and-allowances-coupon-others-company-text.png"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    
    const Body = ()=>
                <div className="body">
                    <div className="searchbar">
                        <input type="text"></input>
                        <button>search</button>
                    </div>
                    <div className="cards grid">
                         {MyComponent()} 
                    </div>
                </div>
    
const AppLayoutComp = () =>
        <div className="app">
            {headerComp()}
            {Body()}
        </div>;
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayoutComp());

