import ReactDOM from "react-dom/client";
import React from 'react';
import Header from "./components/Header.js";
import Body from "./components/Body.js"; 
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Restaurant from "./components/Restaurant.js";
//import Grocery from "./components/Grocery.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
const Grocery = lazy(()=>import("./components/Grocery.js"));
const AppLayoutComp = () =>
        <div className="app">
            <Header></Header>
            <Outlet></Outlet>
        </div>;
const appRouter =   createBrowserRouter(
                        [
                            {
                                path: "/",
                                element: <AppLayoutComp/>,
                                children:[
                                    {
                                        path: "/",
                                        element: <Body/>,
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

