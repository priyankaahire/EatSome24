
import React, {createContext, createElement, useState} from 'react';
import ReactDOM from 'react-dom/client';
import appLogo from '../public/images/logo.jpg';

import HeaderComponent from './component/Header'; 
import FooterComponent from './component/Footer'
import RestaurantListComponent from './component/RestaurantList'
import { RESTURANT_ARRAY } from './utils/constnant';
import {RouterProvider, createBrowserRouter, Outlet, useOutletContext} from "react-router-dom"
import { AboutComponent } from './component/About';
import { ContactComponent } from './component/Contact';
import { ErrorComponent } from './component/Error';
import { RestaurantDeatilsComponent } from './component/RestaurantDetails';

const MyContext = createContext();

const AppLayout = () =>{
    const [serachText, setSearchText] = useState();
    const context = useOutletContext()
    const handleClick = e => {
        setSearchText(e.target.value);
    };
    return (
        <MyContext.Provider value={serachText}>
            <HeaderComponent handleClick={handleClick} />
            {/* <RestaurantListComponent serachText={serachText}/> */}
            <Outlet  />
            <FooterComponent />
        </MyContext.Provider>
    )
}
//% createBrowserRouter: Content the array of object with path and second with the which componnet you want to load
//% "appRouter" is the configuration we created now we have to  passed this configuration to the 
//% RouterProvide is required: Provide routing configuartion to aour app earlier we directly render the appLayout (root.render(<AppLayout />)), and this RouterProvider exported from the react-dom librray
//% WHO WROTE THE CODE FOR US ...........??????

//~% Childern componnet: Outlet (I have to create the childeren rout for the applayout)
    //% If want to about then only body should change
    //% Heere basivcally, we were loading on Applayout as children but if path is empty by default we want to load "RestaurantListComponent"
    //% Outlet come into the picture, it is componnet we have to craete the <Outlet /> inside the component (AppLayout) it will filed childeren accorningto the path
    //~% Outlet: it is nothing but tuneel where component enters according to the path
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<RestaurantListComponent />
            },
            {
                path:"/about",
                element:<AboutComponent />
            },
            {
                path:"/contact",
                element:<ContactComponent />
            },
            {
                path:"/restaurant-details/:resId",
                element:<RestaurantDeatilsComponent /> //~% Dyanamic Routing
            }
        ],
        // element:<ErrorComponent />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById('root'))
//! root.render(<AppLayout />)
//% We will provide the Roter to the root render
//% It will work if I wrote in Brouser "http://localhost:1234/about" it will route to the about page
root.render(<RouterProvider router={appRouter} />)
