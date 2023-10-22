import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constnant"
import Shimmer from "./Shimmer"
import axios from "axios";
import { useParams } from "react-router-dom";
//% Make the server call and get the real data of resaturan data we need useStae hook
export const RestaurantDeatilsComponent = () => {
   const [resInfo, setResInfo] = useState(null)
   const {resId } = useParams()
    useEffect(()=>{
        fetchRestaurantDeatils()
    }, [])

    const fetchRestaurantDeatils = async() => {
        await axios.get(MENU_API + resId).then((response) => {
            const json =  response
            setResInfo(json.data?.data)
        });
    }

   
    //! Shimmer logic should be first because, By default resInfo is null then we will faced the issue for de-structure
    if (resInfo == null) return <h1>Not found</h1>
     //% Let destructure it
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (resInfo == null) ? <Shimmer /> :(
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