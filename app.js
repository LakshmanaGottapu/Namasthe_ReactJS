import React from "react";
import ReactDOM from "react-dom/client";
/*
Header
 - Logo
 - Navigation Bar
  - Home
  - About 
  - Cart
Body
 - Search Bar
 - Restaurant Card Container
 - Restaurant Card
Footer
 - CopyRight
 - Links
 - Address
 - Contact
*/
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
    const imgSrc1 = "https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg?impolicy=website&width=510&height=356";
    const itemName1 = "Pizza";
    const imgSrc2 = "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg";
    const itemName2 = "Hamburger";
    const imgSrc3 = "https://img.freepik.com/premium-photo/bowl-delicious-spicily-spiced-chicken-biryani-sits-against-gloomy-background_410516-2218.jpg?size=626&ext=jpg&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName3 = "Chicken Biryani";
    const imgSrc4 = "https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?size=626&ext=jpg&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName4 = "Indian Cuisine";
    const imgSrc5 = "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName5 = "Italian Pasta";
    const imgSrc6 = "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName6 = "Sandwitch";
    const imgSrc7 = "https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName7 = "Butter Chicken";
    const imgSrc8 = "https://img.freepik.com/free-photo/indian-delicious-roti-arrangement_23-2149073326.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName8 = "Roti Curry";
    const imgSrc9 = "https://img.freepik.com/free-photo/delicious-asian-noodles-concept_23-2148773773.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName9 = "Noodles";
    const imgSrc10 = "https://img.freepik.com/premium-photo/pot-chicken-curry-with-yellow-plate-food-black-background_854441-41.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName10 = "Mutton Curry";
    const imgSrc11 = "https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName11 = "Spicy Chicken";
    const imgSrc12 = "https://img.freepik.com/premium-photo/close-up-food-photography-fried-chicken-stick-with-black-background-generative-ai_35887-9467.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName12 = "Grilled chicken";
    const imgSrc13 = "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.1.2005646457.1689414915&semt=sph";
    const itemName13 = "Lebanese Food";
    const imgSrc14 = "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.2.2005646457.1689414915&semt=sph";
    const itemName14 = "Shawarma";
    const imgSrc15 = "https://img.freepik.com/premium-photo/indian-street-food-masala-dosa-dhosa-masala-plain-maisuri-butter-roast-with-chutney-sambar-banana-leaf-isolated-south-indian-breakfast-food_57665-8330.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.2.2005646457.1689414915&semt=sph";
    const itemName15 = "Masala Dosa";
    const imgSrc16 = "https://img.freepik.com/free-photo/side-view-rice-pouring-delicious-salad-meal-plate-with-chopsticks-wooden-black-background-space-text_176474-3898.jpg?size=626&ext=jpg&uid=R109859260&ga=GA1.2.2005646457.1689414915&semt=sph";
    const itemName16 = "Vegetable Salad";
    
    const card = (imgSrc,itemName) =>  <div className="card">
                            <img src={imgSrc}>  
                            </img>
                            <span>{itemName}</span>
                        </div> 
    const Body = ()=>
                <div className="body">
                    <div className="searchbar">
                        <input type="text"></input>
                        <button>search</button>
                    </div>
                    <div className="cards grid">
                         {}
                         {card(imgSrc1,itemName1)} 
                         {card(imgSrc2,itemName2)}
                         {card(imgSrc3,itemName3)}
                         {card(imgSrc4,itemName4)}
                         {card(imgSrc5,itemName5)}
                         {card(imgSrc6,itemName6)}
                         {card(imgSrc7,itemName7)}
                         {card(imgSrc8,itemName8)}
                         {card(imgSrc9,itemName9)}
                         {card(imgSrc10,itemName10)}
                         {card(imgSrc11,itemName11)}
                         {card(imgSrc12,itemName12)}
                         {card(imgSrc13,itemName13)}
                         {card(imgSrc14,itemName14)}
                         {card(imgSrc15,itemName15)}
                         {card(imgSrc16,itemName16)}
                    </div>
                </div>
    
const AppLayoutComp = () =>
        <div className="app">
            {headerComp()}
            {Body()}
        </div>;
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayoutComp());

