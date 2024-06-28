import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurants = () => {
  const { resId } = useParams();
  const items = useRestaurantsMenu(resId);

  if (items === null) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="w-6/12 m-auto text-center p-3">
        <h1 className="font-bold  items-center size">{items[2]?.card?.card?.info?.name}</h1>
        <h2 className="font-bold  items-center text-fuchsia-400">{items[2]?.card?.card?.info?.cuisines.join(",")}</h2>
      </div>
      <RestaurantCategory
        data={items[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (e) =>
            e.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )}
      />
    </>
  );
};
export default Restaurants;
