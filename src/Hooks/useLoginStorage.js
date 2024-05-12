import { useState } from "react"


const useLoginStorage = (key) => {
const [value, setValue] = useState(()=>{
    const storeValue = localStorage.getItem(key)
    return storeValue ? JSON.parse(storeValue) : null
})

const setStoreValue = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
}
return [value, setStoreValue]
}

export default useLoginStorage