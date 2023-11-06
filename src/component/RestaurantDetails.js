import { useEffect, useState } from "react"

import Shimmer from "./Shimmer"

import { useParams } from "react-router-dom";
import useRestaurantDeatils from "../utils/useRestaturantDetails";
//% Make the server call and get the real data of resaturan data we need useStae hook
export const RestaurantDeatilsComponent = () => {
  
   const {resId } = useParams()
    //% Will create the Restaurant menu Hook to fecth the data (Now this component is  Single Responsibility Principle) because this component only displaying the data it don'r care about how and from where fetch the data
   const restInfo = useRestaurantDeatils(resId)

   
    //! Shimmer logic should be first because, By default resInfo is null then we will faced the issue for de-structure
    if (restInfo == null) return <Shimmer />
     //% Let destructure it
    const {name, cuisines, costForTwoMessage} = restInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <>
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>menu</h2>
            <ul>
                {itemCards?.map((item) => {
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs. "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                })}
            </ul>
        </div>
        </>
    )
}