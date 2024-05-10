import {useState, useEffect} from 'react';
import axios from 'axios';
import { SWIGGY_URL } from '../utils/constnant';
const useResData = (API_URL) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
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
  
          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = await checkJsonData(jsonData);
              setAllRestaurants(resData);
              setFilteredRestaurants(resData);
            });
          } catch (error) {
            console.error("Error fetching JSON:", error);
          }
        } catch (error) {
          console.error("Error fetching JSON:", error);
        }
      };

      return [allRestaurants, filteredRestaurants]
}

export default useResData