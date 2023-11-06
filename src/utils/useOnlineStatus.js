import {useEffect, useState } from "react";
const useOnlineStatus = async() => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false) //% return boolean value
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])
   
    return onlineStatus
}
export default useOnlineStatus;
