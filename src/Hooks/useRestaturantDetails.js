import { useState, useEffect} from "react";
import axios from "axios";
import { MENU_API } from "../utils/constnant"
const useRestaurantDeatils = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
        feactData()
    }, []);

    const feactData = async() => {
        await axios.get(MENU_API + resId).then((response) => {
            const json =  response
            setRestInfo(json.data)
        });
    }

    return restInfo //% Job to return the rest Info
}

export default useRestaurantDeatils;