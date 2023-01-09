import React, { useState } from "react";
import myLogo from './images/CICBRAND.png';
import * as Icon from 'react-bootstrap-icons';
import { useSearchParams } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';


const Header = ({menu,setMenu,displayMenu}) =>{

  

    return(
        <header>
            <div  className='headerlink' >
                <a href="#app">
                <img src={myLogo}/>
                </a>
                <h5 className="container circ mt-2">ircwall</h5>
            </div>
            <Icon.MenuButtonWide className={ menu ===true? 'collapsed': 'menubtn'} onClick={displayMenu}/>
            <CloseButton variant="white" className={ menu ===false? 'collapsed': 'exitmenu'} onClick={displayMenu}/>
        </header>
    )
}
export default Header;