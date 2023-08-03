import {CDN_URL} from "../utils/constants";
const MenuItemCard = ({props})=>{
    return <><div className="flex flex-row justify-evenly m-4 p-4 w-[1400px]">
        <div className="flex flex-col justify-normal">
            <span>{props.name}</span>
            <span>{'Rs'+props.price/100}</span>
        </div>
        <img src={CDN_URL+props.imageId} className="rounded-lg h-28"/>
    </div>
    <div className="ml-80 w-[800px] bg-neutral-300 h-0.5"></div>
    </>
}

export default MenuItemCard;