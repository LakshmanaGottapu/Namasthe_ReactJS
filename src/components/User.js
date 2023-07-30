import React from "react";
class User extends React.Component{
    constructor(props){
       super(props);
       console.log("child constructor called");
    }
    componentDidMount(){
        console.log("child component did mount");
    }
    render(){
        console.log("child body rendered")
        const {name,phno,mail} = this.props
        return (
            <div className="user">
                <h3>Name: {name}</h3>
                <h3>Mobile No: {phno}</h3>
                <h3>Mail: {mail}</h3>
            </div>
        )
    }
}

export default User;