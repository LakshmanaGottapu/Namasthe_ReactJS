import { Component } from "react";
import { ABOUT_USER } from "../utils/constants";
import User from "./User";
import UserContext from "./UserContext.js";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");
        this.state = {
            name: "",
            avatar: ""
        }
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    componentDidUpdate(){
        console.log("api call made and filled the data into the component");
    }
    async componentDidMount(){
        console.log("Parent component did mount");
        const data = await fetch(ABOUT_USER);
        const json = await data.json();
        this.setState({
            name: json.login,
            avatar: json.avatar_url
        })
        // this.timer = setInterval(()=>{
        //     console.log("HI");
        // },1000)
    }
    render(){
        console.log("Parent components rendered");
        const {moto} = this.props;
        const {name,avatar} = this.state;
        return (
            <div className="flex flex-col h-screen items-center justify-evenly p-4">
                <h1>Name: {name}</h1>
                <div>Logged In User: <UserContext.Consumer>
                        {({loggedInUser})=><span>{loggedInUser}</span>}
                    </UserContext.Consumer>
                    
                </div>
                <img src={avatar} style={{height:"240px"}}></img>
                <h2>Our Moto: {moto}</h2>
                <User name="Lakshman" phno={8374842584} mail="sailakshman@gmail.com"></User>
            </div>
        )
    }
    
}
// const About = ()=>{
//     const moto = "To deliver quality food at affordable prices for all our customers through offline and online delivery system";
//     return (
//         <div className="about">
//             <h1>Name: {"This is Namathe React Web Series"}</h1>
//             <h2>Our Moto: {moto}</h2>
//             <User name="Lakshman" phno={8374} mail="sailakshman120@gmail.com"></User>
//         </div>
//     )
// }

export default About;