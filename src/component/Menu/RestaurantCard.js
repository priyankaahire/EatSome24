import StarIcon from "@mui/icons-material/Star";
import { IMG_CDN_URL } from "../Common/constnant";

const RestaurantCardComponent = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  sla,
  promoted,
  areaName,
  costForTwoMessage,
  aggregatedDiscountInfoV3
}) => {
  
  const { slaString, lastMileTravelString } = sla;
  const {header, subHeader} = aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3 : {}
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div className="">
          <div className="bg-gray-300">
            {" "}
            <img
              height="160"
              alt="Avatar"
              src={IMG_CDN_URL + cloudinaryImageId}
            />
          </div>
          <div className="p-6">
            {promoted?.toString()}
            <div className="font-bold text-lg text-black ellipsis-text">
              {name}
            </div>
            <div
              title={cuisines.join(", ")}
              className="text-sm text-slate-600 ellipsis-text"
            >
              {cuisines.join(", ")}
            </div>
            <h5 className="text-sm">{areaName}</h5>
            <span className="flex justify-around text-xs font-bold text-center mt-4 mb-2">
              <h4 className="text-white  bg-green-800 text-center col-span-2">
                <StarIcon sx={{ fontSize: "12px" }} />
                {avgRating}
              </h4>
              <h4>•</h4>
              <h4>{slaString}</h4>
              <h4>•</h4>
              <h4>{costForTwoMessage ?? "₹200 for two"}</h4>
            </span>
            <div className="mb-2 divide-y divide-slate-600 ">
             
              <div className="text-sm text-slate-600 inline-flex gap-1">
                <div className="">{header}</div>
                {subHeader && <div className="">|</div> }
                <div className="">{subHeader}</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  );
};

export default RestaurantCardComponent;
