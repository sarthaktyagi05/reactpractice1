import RestaurantsCard, { restaurantsPromoted } from "./RestaurantsCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredfRestaurants, setfilteredfRestaurants] = useState([]);
  const [enable, setenable] = useState(false);
  const [searchText, setSearchText] = useState("");
  const Restaurantpromoted = restaurantsPromoted(RestaurantsCard);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let fetchdata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await fetchdata.json();
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline, Please check your internet connection 📶
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-auto">
      <div className="flex m-3 justify-between">
        <div className="search-filter mx-3">
          <input
            type="text"
            className="border border-solid border-black rounded-2xl px-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Restaurants"
          />
          <button
            className="bg-red-400 px-4 rounded-xl mx-2"
            onClick={() => {
              const searchData = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredfRestaurants(searchData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-red-400 px-4 rounded-xl mx-2"
          onClick={() => {
            let filterdata = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            if (!enable) {
              setfilteredfRestaurants(filterdata);
              setenable(true);
            } else {
              fetchData();
              setenable(false);
            }
          }}
        >
          Top rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap w-10/12 m-auto  ">
        {filteredfRestaurants?.map((rests) => {
          return (
            <Link key={rests.info.id} to={"/restaurants/" + rests.info.id}>
              {rests.info.promoted === true ? (
                <Restaurantpromoted resdata={rests} />
              ) : (
                <RestaurantsCard resdata={rests} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
