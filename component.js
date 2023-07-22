
import fs from 'fs';
const Card = (imgSrc,restaurantName,itemName) =>  <div className="card">
                            <img src={imgSrc}></img>
                            <span>{restaurantName}<br></br>
                            <span>{itemName}</span>
                            </span>
                        </div>;
                   
function getComponent(component,...args){
    return component(...args);
}
    
const MyComponent = () =>{
  let jsonContent;
    const fetchData =  () => {
      return JSON.parse(fs.readFileSync("./swiggycards.json","utf-8"));
    };
    jsonContent = fetchData().data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants;
    const imageUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return jsonContent.map(record=> {return getComponent(Card,imageUrl+record.info.cloudinaryImageId,record.info.name,record.info.cuisines[0])
    })
}
      
      

      
    
  


export default MyComponent;
