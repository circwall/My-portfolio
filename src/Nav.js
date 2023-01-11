import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import myLogo from './images/CICBRAND.png';
import './Nav.css';
import App from "./App";

const Nav = ({menu,setMenu,displayMenu}) =>{


    return(
        <nav className='nav-bar text-center'>
            <ul className={menu===true? 'navbar-nav' : 'collapsedMenu'}>
            {/*<Icon.ClockFill onClick={displayMenu} className={menu===false ? 'collapsed iconss': 'menubtn'}/>*/}
                <li className="geep">
                    <div  className='headerlink' >
                        <a href="#app">
                        <img src={myLogo}/>
                        </a>
                        <h5 className="container circ mt-2">ircwall</h5>
                    </div>
                </li>
                <li><a href='#about' title="About"><Icon.PersonFill className="iconss"/><h3>About</h3></a></li>
                <li><a href="#technologies" title="Technologies"><Icon.TencentQq className="iconss"/><h3>Technologies</h3></a></li>
                <li><a href="#projects " title="Projects"><Icon.FileBarGraph className="iconss"/><h3>Projects</h3></a></li>
                <li><a href="#message" title="Drop A message"><Icon.Messenger className="iconss"/><h3>Message</h3></a></li>
            </ul>
        </nav>
    )
}

export default Nav ;