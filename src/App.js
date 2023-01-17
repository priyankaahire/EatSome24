
import React, {createElement, useState} from 'react';
import ReactDOM from 'react-dom/client';
import appLogo from '../public/images/logo.jpg';

import HeaderComponent from './component/Header'; 
import FooterComponent from './component/Footer'
import ResturantListComponent from './component/ResturantList'
import { RESTURANT_ARRAY } from './constnant';


const AppLayout = () =>{
    const [serachText, setSearchText] = useState();
    const handleClick = e => {
        setSearchText(e.target.value);
    };
    return (
        <React.Fragment>
            <HeaderComponent handleClick={handleClick} />
            <ResturantListComponent serachText={serachText}/>
            <FooterComponent />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
