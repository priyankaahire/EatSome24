import { useState, useEffect} from "react";
import axios from "axios";
import { MENU_TYPE_KEY, OFFER_KEY1, OFFER_KEY2, RESTAURANT_TYPE_KEY } from "../public/common/constnant";
const useRestaurantMenu = (resId, menu_api) => {
    const [restInfo, setRestInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [restaurant, setRestaurant] = useState(null)
    const [topPicks, setTopPicks] = useState([])
    const [offerDetails, setOfferDetails] = useState([]);


    useEffect(()=>{
        feactData()
    }, []);

    const feactData = async() => {
        try {
            const response = await axios.get(menu_api + resId)
            if(response.status !== 200) {
                const err = response.status
                console.error(err);
            } else {
                const json = response?.data
console.log(json)
                // set restaurant data
               
                const restaurantData = json?.data?.cards
                ?.map(item => item.card)
                ?.find((item) => item && item.card["@type"] == RESTAURANT_TYPE_KEY)?.card
                ?.info || null;
                setRestaurant(restaurantData)

                // set menu item

                const menuItemsData = json?.data?.cards
                                        .find((item) => item.groupedCard)
                                        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                                        ?.map(item => item.card?.card)
                                        ?.filter(item => item && item["@type"] == MENU_TYPE_KEY)
                                        ?.map(i => i.itemCards)
                                        ?.flat()
                                        ?.map(i => i.card?.info) || [];

                const offerData = json?.data?.cards
                .map(i=>i.card)
                ?.find(i=>i && i.card["@type"] == OFFER_KEY1)?.card
                ?.gridElements?.infoWithStyle?.offers || []
                console.log(offerData)

                // set unique menuitem
                const uniqueMenuItem = [];
                menuItemsData.forEach(element => {
                    const isFind = uniqueMenuItem.find(x=>x.id === element.id)
                    if(!isFind) {
                        uniqueMenuItem.push(element)
                    }
                });

                setMenuItems(uniqueMenuItem)
                setTopPicks([])
                setOfferDetails(offerData)
            }
        } catch(e) {
            setMenuItems([]);
            setRestaurant(null);
            setTopPicks([])
            setOfferDetails([])
            console.error(e);
        }
       
    }

    return [restaurant, menuItems, topPicks, offerDetails] //% Job to return the rest Info
}

export default useRestaurantMenu;