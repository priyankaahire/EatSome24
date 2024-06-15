import { useState } from "react";
import { CardShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Hooks/useRestaturantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {
  ITEM_IMG_CDN_URL,
  swiggy_menu_api_URL,
} from "../Common/constnant";
import StarIcon from "@mui/icons-material/Star";
import OfferCard from "./OfferCard";
import RestaurantAddressCard from "./RestaurantAddressCard";
import ScrollLeftRight from "../Common/ScrollLeftRight";
import UseScrollLeftRight from "../../Hooks/useHorizontalScroll";

//% Make the server call and get the real data of resaturan data we need useStae hook
export const RestaurantMenuComponent = () => {
  const {scrollContainerRef, onScroll, onScrollRight, onScrollLeft} = UseScrollLeftRight();

  const { resId } = useParams();
  // % Will create the Restaurant menu Hook to fecth the data (Now this component is  Single Responsibility Principle) because this component only displaying the data it don'r care about how and from where fetch the data
  const [restaurant, menuItems, toPicks, offerDetails] = useRestaurantMenu(
    resId,
    swiggy_menu_api_URL
  );
  const [showIndex, setShowIndex] = useState(null); //by defualt collapse
  const handleClick = () => {
    setShowIndex();
  };
  //! Shimmer logic should be first because, By default resInfo is null then we will faced the issue for de-structure
  if (restaurant == null) return <CardShimmer />;
  return (
      <div className="main-container flex-1 overflow-y-auto mt-24 min-h-[87vh]" key={'restaurant-menu-inde'}>
        <div className="restuarant-menu">
          {/* Menu Info */}
          <div className="restuarant-summary flex justify-center items-center bg-black text-white h-[200px]">
            <img
              className="rounded-md w-60 h-40"
              src={ITEM_IMG_CDN_URL + restaurant?.cloudinaryImageId}
            />
            <div className="m-5 flex flex-col basis-2/6 ">
              <h2 className="text-4xl">{restaurant?.name}</h2>
              <h5 className="text-sm">{restaurant?.areaName}</h5>
              <div className="max-w-[340px] font-semibold flex justify-between items-center text-base mt-4 pb-3">
                <div className="text-white  bg-green-800">
                  <StarIcon sx={{ fontSize: "16px" }} />
                  {restaurant?.avgRating}
                </div>
                <div>|</div>
                <div>{restaurant?.sla?.slaString}</div>
                <div>|</div>
                <div>{restaurant?.costForTwoMessage ?? "₹200 for two"}</div>
              </div>
            </div>
          </div>
          {/* Address Deatils*/}
          <div className="flex justify-center items-center">
            <div className="w-[850px] mt-8 rounded-b-lg bg-gradient-to-b from-white via-gray-200 to-gray-300">
              <div className="bg-white text-slate-500 rounded-3xl border m-3 p-3">
                <RestaurantAddressCard restaurant={restaurant} />
              </div>
            </div>
          </div>
          {/*Offer Details*/}
          <div className="offers-container flex justify-center items-center">
            <div className="offers-content w-[850px] mt-8">
              <div className="memu-title flex justify-between p-3">
               <ScrollLeftRight
               title={`Deals for you`}
               onScrollLeft={()=>onScroll('left')}
               onScrollRight={()=>onScroll('right')}
               />
              </div>
              <div className="offer-item-list">
                <div className="flex overflow-scroll" ref={scrollContainerRef}>
                  {offerDetails.map((offer, index) => (
                    <OfferCard key={index} offer={offer} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* toPicks */}
          {toPicks && toPicks.length > 0 && (
            <div className="restuarant-toppicks-container flex justify-center items-center">
              <div className="toppicks-content w-[850px] mt-8">
                <div className="toppicks-title flex justify-between p-3">
                  <h3 className="font-extrabold text-lg">Top Picks</h3>
                </div>
                <div className="toppicks-item-list"></div>
              </div>
            </div>
          )}
          {/* Line Bar */}
          {toPicks && toPicks.length > 0 && (
          <div className="flex justify-center items-center">
            <div className="bg-slate-300 w-[850px] h-[10px]">
              <div className="memu-title flex justify-between p-3 "></div>
            </div>
          </div>
           )}
          {/* Recommended menu List */}
          <div className="restuarant-menu-container flex justify-center items-center">
            <div className="meanu-content w-[850px] mt-8">
              <div
                className="memu-title flex justify-between p-3"
                onClick={handleClick}
              >
                <h3 className="font-extrabold text-lg">
                  Recommended ({menuItems?.length})
                </h3>
                <span className="arrow-down">&darr;</span>
              </div>
              <div className="menu-item-list">
                {menuItems.map((category, index) => (
                    <RestaurantCategory
                      key={'restaurant-category-'+index}
                      item={category}
                      showItems={index === showIndex ? true : false}
                      setShowIndex={() => setShowIndex(index)}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
