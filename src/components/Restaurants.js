import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_ID } from "../utils/constants";

const Restaurants=()=>{
    const [items,setItems]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchdata();
    },[]);
    
    const fetchdata = async ()=>{
        const data= await fetch(REST_ID + resId );
        let json= await data.json();
        setItems(json?.data?.cards);
    }
    if(items===null){
        return <Shimmer/>
    }
    return(
        <div>
            <h1>{items[2]?.card?.card?.info?.name}</h1>
            <h2>{items[2]?.card?.card?.info?.cuisines.join(",")}</h2>
            <div>
                <ul>
                    {
                    items[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item) =>  {
                     return  <li key={item?.card?.info?.id}>{item?.card?.info?.name +" --------  Price for two " + item?.card?.info?.price/100 }</li>
                    })
                }
                </ul>
            </div>
        </div>
    )
}
export default Restaurants;