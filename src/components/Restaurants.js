
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";


const Restaurants=()=>{
    const {resId}=useParams();
    const items=useRestaurantsMenu(resId);
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
                    items[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item) =>  {
                     return  <li key={item?.card?.info?.id}>{item?.card?.info?.name +" --------  Price " + (item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100)}</li>
                    })
                }
                </ul>
            </div>
        </div>
    )
}
export default Restaurants;