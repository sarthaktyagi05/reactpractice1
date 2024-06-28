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
                    <div className="shadow-xl  bg-slate-50 p-12 rounded-lg my-5">
                        <div className="flex justify-between font-bold text-lg" onClick={handleclick}>
                            <span>{item?.card?.card?.title} ({item?.card?.card?.itemCards?.length})</span>
                            <span>🔽</span>
                        </div>

                        <div>
                        {showItem &&  <ItemList itemsData={item}/>} 
                        </div>

                    </div>
                )
            })
        }
        </div>
        
    )

    

}
export default RestaurantCategory;