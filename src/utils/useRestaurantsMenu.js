import { REST_ID } from "./constants";
import { useEffect,useState } from "react";

const useRestaurantsMenu=(resId)=>{
    const [items,setItems]=useState(null);
   
    useEffect(()=>{
        fetchdata();
    },[]);
    
    const fetchdata = async ()=>{
        const data= await fetch(REST_ID + resId );
        let json= await data.json();
        setItems(json?.data?.cards);
    }
    
return items;

}
export default useRestaurantsMenu;