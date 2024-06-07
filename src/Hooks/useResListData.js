import {useState, useEffect} from 'react';
import axios from 'axios';
import { SWIGGY_URL, TOP_RESTAURANT, WHAT_IN_YOUR_MIND } from '../component/Common/constnant';
const useResData = (API_URL) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [whatInYourFind, setWhatInYourMind] = useState([]);
    const [topRestaurant, setTopRestaurant] = useState([]);
    useEffect(() => {
        getResturantApiResponse();
      }, []);

      const getResturantApiResponse = async () => {
        try {
          try {
            await axios.get(`${API_URL}`).then(async (response) => {
              const jsonData = response;
                  // initialize checkJsonData() function to check Swiggy Restaurant data
                async function checkJsonData(jsonData) {
                    for (let i = 0; i < jsonData?.data?.data?.cards?.length; i++) {
                
                      // initialize checkData for Swiggy Restaurant data
                      let checkData = jsonData?.data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
                      // if checkData is not undefined then return it
                      if (checkData !== undefined) {
                          return checkData;
                      }
                  
                    }

                }
           
              const resWhatInYourData = jsonData?.data?.data?.cards
              ?.map(item => item.card)
              ?.find((item) => item && item.card["@type"] == WHAT_IN_YOUR_MIND && item?.card?.id == "whats_on_your_mind")?.card
              ?.imageGridCards?.info || null;
              setWhatInYourMind(resWhatInYourData)
           
              const topRest = jsonData?.data?.data?.cards
              ?.map(item => item.card)
              ?.find((item) => item && item.card["@type"] == TOP_RESTAURANT && item?.card?.id == "top_brands_for_you")?.card
              ?.gridElements?.infoWithStyle?.restaurants || null;
              setTopRestaurant(topRest)
              // call the checkJsonData() function which return Swiggy Restaurant data
              const resData = await checkJsonData(jsonData);
              setAllRestaurants(resData);
              setFilteredRestaurants(resData);
              console.log(resWhatInYourData)
            });
          } catch (error) {
            console.error("Error fetching JSON:", error);
          }
        } catch (error) {
          console.error("Error fetching JSON:", error);
        }
      };

      return [allRestaurants, filteredRestaurants, whatInYourFind, topRestaurant]
}

export default useResData