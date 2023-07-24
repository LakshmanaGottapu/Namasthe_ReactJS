import ReactDOM from "react-dom/client";
import React from 'react';
import Header from "./components/Header.js"
import Body from "./components/Body.js"  

const AppLayoutComp = () =>
        <div className="app">
            {<Header></Header>}
            {<Body></Body>}
        </div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComp></AppLayoutComp>);

