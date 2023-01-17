  
import ResturantCardComponent from "./ResturantCard"
import {RESTURANT_ARRAY} from '../constnant'
import { useState } from "react"
//! Instead of passing index wise data we can use FOR loop but in FUNCTINAL programing we can use used MAP not an LOOP
//! <ResturantCard {...RESTURANT_ARRAY[0].data} />
//! <ResturantCard {...RESTURANT_ARRAY[1].data}/>
//! <ResturantCard {...RESTURANT_ARRAY[2].data}/> */

export default ResturantListComponent = (props) => {
    const filteredItems = props?.serachText ? RESTURANT_ARRAY.filter(restaurant => (restaurant.data.name).toLowerCase().includes(props.serachText.toLowerCase())) : RESTURANT_ARRAY
    return (
        <>
            <div className='resturant-container'>
                {
                    filteredItems?.map(restaurant => {
                        return <ResturantCardComponent key={restaurant.data.id} {...restaurant.data} />
                    })
                }
            </div>
        </>
        
    )
}