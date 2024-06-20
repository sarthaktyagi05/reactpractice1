import { CDN_URL } from "../utils/constants";
const RestaurantsCard =(props) => {
    const {info}=props.resdata;
   
   
     return (
       <div className="res-card">
         <div className="res-img">
           <img
             alt="restaurent image"
             src={CDN_URL + info.cloudinaryImageId}
             className="image"
           />
         </div>
         <div className="res-details">
           <h4>{info.name}</h4>
           <h4>{info.avgRating + "stars"}</h4>
           <h4>{info.costForTwo}</h4>
           <h4>{info.sla.deliveryTime}  minutes</h4>
         </div>
       </div>
     );
   };
   export default RestaurantsCard;