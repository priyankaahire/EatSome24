import { useEffect, useState } from "react"

//~% Function Base component
const User =(props) => {
    const [count] = useState(1)
    const [count2] = useState(2) //! Behind the scen react create the Big state object for us like class Component

    

    return (
        <>
        <div className="user-card">
            <span>Count: {count}</span>
            <span>Name: {props.name}</span>
        </div>
        </>
    )
}

export default User