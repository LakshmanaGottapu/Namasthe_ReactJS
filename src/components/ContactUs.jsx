import { useState,useEffect } from "react";
import {CONTACT_IMAGE} from "../utils/constants";
const ContactUs = ()=>{
    const [image,setImage] = useState("");
    const mail = "sailakshman@gmail.com";
    const contactno = 8374442584;
    useEffect(()=>{
        async function fetchData(){
            const imageData = await fetch(CONTACT_IMAGE);
            const imageBlob = await imageData.blob();
            const imgUrl = URL.createObjectURL(imageBlob);
            setImage(imgUrl);
        }
        fetchData();
        const timer =setInterval(()=>console.log("Hello"),2000);
        return ()=>{
            clearInterval(timer);
        }
    },[]);
    return(
        <div className="flex flex-col h-screen items-center justify-evenly p-4">
           <img src={image} style={{height:"400px"}}></img>  
            <h2>mail: {mail}</h2>
            <h2>contactno: {contactno}</h2>
        </div>
    )
}

export default ContactUs;