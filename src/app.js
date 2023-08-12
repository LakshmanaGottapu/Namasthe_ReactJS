import ReactDOM from "react-dom/client";
import React from 'react';
import Header from "./components/Header.js";
import Body from "./components/Body.js"; 
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Restaurant from "./components/Restaurant.js";
import {useState, useEffect} from "react";
//import Grocery from "./components/Grocery.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
import UserContext from "./components/UserContext.js";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
const Grocery = lazy(()=>import("./components/Grocery.js"));
const AppLayoutComp = () =>{
    const [userName,setUserName] = useState();
    useEffect(()=>{
        setTimeout(()=>{
            const data = {
                userName : "Lakshmana Gottapu"
            } 
            setUserName(data.userName);
        },2000);
    },[]);
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName:setUserName}}>
                <div className="app">
                    <Header></Header>
                    <Outlet></Outlet>   
                </div>
            </UserContext.Provider>
        </Provider>
    );
};
        
const appRouter =   createBrowserRouter(
                        [
                            {
                                path: "/",
                                element: <AppLayoutComp/>,
                                children:[
                                    {
                                        path: "/",
                                        element: <Body></Body>,
                                    },
                                    {
                                        path: "/about",
                                        element: <About moto="To Provide quality food for affordable prices for everyone"></About>,
                                    },
                                    {
                                        path: "/contact",
                                        element: <ContactUs/>,
                                    },
                                    {
                                        path: "/restaurant/:resId",
                                        element: <Restaurant/>,
                                    },
                                    {
                                        path: "/grocery",
                                        element: <Suspense fallback={<h1>Loading Grocery store...</h1>}><Grocery/></Suspense>
                                    }
                                ],
                                errorElement: <Error/>,
                            },
                        ]
                    )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);

