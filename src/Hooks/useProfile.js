import { useEffect, useState } from "react"
import { GIT_PROFILE_URL } from "../utils/constnant"

const useProfile = async() => {
    const [profileData, setProfileData] = useState()

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async() => {
        await axios.get(GIT_PROFILE_URL).then((response) => {
            const json = response.json();
            setProfileData(json.da)
        })
    }
    return profileData
}

export default useProfile