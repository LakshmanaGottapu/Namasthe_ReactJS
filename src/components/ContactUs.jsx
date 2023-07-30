import { useState,useEffect } from "react";

const ContactUs = ()=>{
    const [image,setImage] = useState("");
    const mail = "sailakshman@gmail.com";
    const contactno = 8374442584;
    useEffect(()=>{
        async function fetchData(){
            const imageData = await fetch("http://localhost:4500/image");
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
        <div className="contactus">
           <img src={image} style={{height:"400px"}}></img>  
            <h2>mail: {mail}</h2>
            <h2>contactno: {contactno}</h2>
        </div>
    )
}

export default ContactUs;