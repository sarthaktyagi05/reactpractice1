import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{

     constructor(){
        super();
        console.log("Parent constructor called");
     }
     componentDidMount(){
        console.log("parent component Did Mount called");
     };
     render(){
      console.log("parent render method called")
      return (
        <div>
            <h1>This is about page</h1>
            {/* <User name="sarthak" location="ghaziabad"/> */}
            <UserClass name="first " location="GhaziabadClass"/>
            <UserClass name="Second " location="GhaziabadClass"/>
        </div>
    )
     }
}

export default About;