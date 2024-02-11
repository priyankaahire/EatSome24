import { useEffect, useState } from "react"

import Shimmer from "./Shimmer"

import { useParams } from "react-router-dom";
import useRestaurantDeatils from "../utils/useRestaturantDetails";
import RestaurantCategory from "./RestaurantCategory";
//% Make the server call and get the real data of resaturan data we need useStae hook
export const RestaurantDeatilsComponent = () => {
  
   const {resId } = useParams()
    //% Will create the Restaurant menu Hook to fecth the data (Now this component is  Single Responsibility Principle) because this component only displaying the data it don'r care about how and from where fetch the data
   const restInfo = useRestaurantDeatils(resId)
   const [showIndex, setShowIndex] = useState(null); //by defualt collapse
   
    //! Shimmer logic should be first because, By default resInfo is null then we will faced the issue for de-structure
    if (restInfo == null) return <Shimmer />
     //% Let destructure it
    const {name, cuisines, costForTwoMessage} = restInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories  = restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <>
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => (
                // It is controll component
                <RestaurantCategory 
                 key={category?.card?.card.title}
                 data={category?.card?.card}
                 showItems ={index === showIndex ? true : false}
                 setShowIndex = {()=> setShowIndex(index)}
                />
            ))}
        </div>
        </>
    )
}