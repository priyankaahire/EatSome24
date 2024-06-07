
import React, {createContext, createElement, useState, lazy, Suspense, useEffect} from 'react';
import ReactDOM from 'react-dom/client';


import HeaderComponent from './component/Header'; 
import FooterComponent from './component/Footer'
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom"
import { ContactComponent } from './component/Contact';
import { ErrorComponent } from './component/Common/Error';
import { RestaurantMenuComponent } from './component/Menu/RestaurantMenu';
import {Provider} from 'react-redux'; //It is Bride btween app and redux
import appStore from './utils/appStore';
import CartComponent from './component/Cart/Cart';
import MainComponent from './component/Main';
import LoginComponent from './component/Profile/Login';

//% Using lazy i will call my Grocery on demand i will call this
//% lazy: come with callback param adn it use import function with path as value
const About   = lazy(() => import("./component/About"))

const AppLayout = () =>{
    const [userName, setUserName] = useState()
    //authentication
    useEffect(() =>{
        // make Api call and send username and password
        const data = {
            name: "Priyanka Ahire",
        }
        setUserName(data.name)
    }, [])
    return (
        <Provider store={appStore}>
                <HeaderComponent />
                <Outlet  />
                <FooterComponent />
        </Provider>
       
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
                element:<MainComponent />
            },
            {
                path:"/about",
                element:(
                    <Suspense >
                        <About />
                    </Suspense>
                )
            },
            {
                path:"/contact",
                element:(<Suspense fallback={<h1>Loading....</h1>}><ContactComponent /></Suspense>)
            },
            {
                path:"/restaurant-details/:resId",
                element:<RestaurantMenuComponent /> //~% Dyanamic Routing
            },
            {
                path:"cart",
                element:<CartComponent />
            },
            {
                path:'login',
                element:<LoginComponent />
            },
            
            
        ],
        errorElement:<ErrorComponent />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById('root'))
//! root.render(<AppLayout />)
//% We will provide the Roter to the root render
//% It will work if I wrote in Brouser "http://localhost:1234/about" it will route to the about page
root.render(<RouterProvider router={appRouter} />)
