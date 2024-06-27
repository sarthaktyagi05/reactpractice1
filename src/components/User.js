import { useState } from "react";

const User=(props)=>{
    const {name,location}=props
    const [count,setCount]=useState(0);
    return(

        <div className="user">
            <h1>count: {count}</h1>
            <button onClick={()=>{
                return  setCount(count+1)
            }}>Count_increase</button>

            <button onClick={()=>{
               return count===0?setCount(0):setCount(count-1);
               
            }}> Count_decrease </button>

            <h3>name:{name}</h3>
            <h3>loaction : {location}</h3>
            <h3>contact:7845611464</h3>
        </div>
    );
}
export default User;