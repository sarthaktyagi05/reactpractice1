import { useState } from "react";
import ItemList from "./ItemsList";

const RestaurantCategory=(props)=>{
    
    const [showItem,setShowItem]=useState(false);
    const handleclick=()=>{
        setShowItem(!showItem);
    }

    return(
        <div className="w-6/12 m-auto">
            {
            props.data.map((item)=>{
                return(
                    <div className="shadow-xl  bg-slate-50 p-3 rounded-lg my-5 cursor-pointer">
                        <div className="flex justify-between font-bold text-lg" onClick={handleclick}>
                            <span>{item?.card?.card?.title} ({item?.card?.card?.itemCards?.length})</span>
                            <span>🔽</span>
                        </div>
                        {showItem &&  <ItemList itemsData={item?.card?.card?.itemCards}/>} 
                        

                    </div>
                )
            })
        }
        </div>
        
    )

    

}
export default RestaurantCategory;