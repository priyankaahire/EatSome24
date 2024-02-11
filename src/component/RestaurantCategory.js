//* It shpuel looping of catergoary and inside each caterogy called item list page
//* 

import { useState } from "react"
import ItemList from "./ItemList"

export default RestaurantCategory = ({data, setShowIndex, showItems}) => {
   //! const [showItems, setShowItems] = useState(false)
   //! Basically i dont want to give a power of show and collapse to the vmy category i want to pass
   //! to the my parent i.e we will called the setShowIndex of parent insid ethat will handle the collapse
   //* If it has own state then it is uncntroll component if you you have from parent state then it is controlled component
   const handleClick = () => {
        setShowIndex()
    }
    return (
        <>
         <div className="w-6/12 mx-auto bg-gray-50 my-4 p-3 ">
            <div className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.title} {data.itemCards.length}
                </span>
                <span>&darr;</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
         </div>
        </>
    )
}