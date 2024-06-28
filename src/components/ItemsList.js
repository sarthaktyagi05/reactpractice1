import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemsData }) => {
  //console.log(itemsData);
  return (
    <div>
      {itemsData.map((e) => {
        return (
          <div className="border-b-2 m-4 flex justify-between p-4">
            <div className="w-9/12">
              <div className="font-bold"> {e?.card?.info?.name}</div>
              <div className="font-extrabold text-red-600">
                ₹
                {e?.card?.info?.price / 100 ||
                  e?.card?.info?.defaultPrice / 100}
              </div>
              <p className="text-xs">{e?.card?.info?.description}</p>
            </div>
            <div>
              <button className="absolute m-1 p-1 rounded-md bg-slate-400">
                ADD +
              </button>
            </div>
            <div className="w-3/12">
              <img src={CDN_URL + e?.card?.info?.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
