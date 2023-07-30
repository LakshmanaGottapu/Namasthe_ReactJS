import ReactDOM from "react-dom/client";
import React from 'react';
import Header from "./components/Header.js";
import Body from "./components/Body.js"; 
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
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
                                ],
                                errorElement: <Error/>,
                            },
                        ]
                    )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);

