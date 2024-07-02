import { CDN_URL } from "../utils/constants";
const RestaurantsCard =(props) => {
    const {info}=props.resdata;
   
     return (
       <div className="w-[300px] border border-solid-black m-3 bg-slate-200 rounded-2xl ">
         <div>
           <img
             alt="restaurent image"
             src={CDN_URL + info.cloudinaryImageId}
             className="w-60 m-6 items-center"
           />
         </div>
         <div className="space-x-3 flex-auto">
           <h4>{info.name}</h4>
           <h4>{info.avgRating + "stars"}</h4>
           <h4>{info.costForTwo}</h4>
           <h4>{info.sla.deliveryTime}  minutes</h4>
         </div>
       </div>
     );
     
   };
   export const restaurantsPromoted=(RestaurantsCard)=>{
    return (props)=>{
      return (
        <div>
        <label className="mx-5 px-2 my-1 rounded-lg bg-black text-white absolute">Promoted</label>
        <RestaurantsCard {...props}/>
        </div>
        
      )
    }
    
   }
   export default RestaurantsCard;