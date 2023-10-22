/**
     * Header
        - Logo
        - nav items (Home, about )
        - cart
        * Body
        -  serach bar
        -  RestaurantsCard
            -Image
            -name, price, description 
            -Ration
            - Cusines tags
        * footer
        - links
        - @
 */
import React, {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import appLogo from '../public/images/logo.jpg';
//% Default import
import HeaderComponent from './component/Header'; //% OR import HeaderComponent from './component/Header.js'
import FooterComponent from './component/Footer'
import RestaurantListComponent from './component/ResturantList'
import { RESTURANT_ARRAY } from './constnant';

//% Named import
//% import { Title } from './component/Header'; //! It is not an O B J E C T Destructuring
//~^ This will make sence import * as obj from './component/Header';
//~^ obj.Title 

//% One more way to import Hedaer and Title {Header, Title}
//% 


//* React element i.e JSX
const heading3 = (
    <h1 id="heading" key="heading">
       This is the namastye page
    </h1>
)

//* React Component
//% - Functional 
//% Name of the component start with the CAPITAL LETTER
//% Composing components

//~! Error is : ONLY ONE PARENT OVER HERE THATS WHY REQUIRED REACT FRAGMENT FOR THIS EX. <></>
// const AppLayout = () =>{
//     return (
//         {
//            <HeaderComponent />
//            <bodyComponent />
//            <FooterComponent />
//         }
//     )
// }

//% WHAT IS VIRUAL DOM
//% 

const AppLayout = () =>{
 
    return (
        <React.Fragment>
            <HeaderComponent />
            <RestaurantListComponent />
            <FooterComponent />
        </React.Fragment>
    )
}
//~% Using JSX CREATE THE H1 TAG
const root = ReactDOM.createRoot(document.getElementById('root'))
//async defecr
//^ Following are the way you can passed to the render
root.render(<AppLayout />)
//% I can call as functin call
//root.render(HeaderComponent())
