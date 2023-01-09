import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import './Nav.css';
import App from "./App";

const Nav = ({menu,setMenu,displayMenu}) =>{


    return(
        <nav className='nav-bar text-center'>
            <ul className={menu===true? 'navbar-nav' : 'collapsed'}>
            {/*<Icon.ClockFill onClick={displayMenu} className={menu===false ? 'collapsed iconss': 'menubtn'}/>*/}
                <li><a href='#app' title="Home"><Icon.HouseFill className="iconss"/><h6>circwall</h6></a></li>
                <li><a href='#about' title="About"><Icon.PersonFill className="iconss"/><h6>About</h6></a></li>
                <li><a href="#technologies" title="Technologies"><Icon.TencentQq className="iconss"/><h6>Technologies</h6></a></li>
                <li><a href="#projects " title="Projects"><Icon.FileBarGraph className="iconss"/><h6>Projects</h6></a></li>
                <li><a href="#message" title="Drop A message"><Icon.Messenger className="iconss"/><h6>Message</h6></a></li>
            </ul>
        </nav>
    )
}

export default Nav ;