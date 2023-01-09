import React from "react";
import { Icon0Circle } from "react-bootstrap-icons";
import './Footer.css';
import logo from './images/CICBRAND.png';
import * as Icon from 'react-bootstrap-icons';



const Footer = () => {

    let date = new Date();
    return(
        <footer className="footer container px-4 p-4">
            <div>
                <h6 style={{opacity:'60%'}}>CALL</h6><p>+2349024633042</p>
                <h6 style={{opacity:'60%'}}>EMAIL</h6><p>tochigospel32@gmail.com</p>
            </div>
            <div className="text-center">
                <h6 style={{opacity:'60%'}}>LET'S EASE YOUR BUSINESS PLANS</h6>
                <hr/>
            </div>
            <div>
                <div className="icon text-center">
                    <img className="iconi" src={logo} style={{width:'40px'}}/>
                    <span>CIRCWALL</span>
                </div>
                <div className="text-center">{date.getUTCFullYear()}</div>
            </div>
            <div className="text-center icons">
                <a href="https://github.com/circwall"><Icon.Github/></a> <a href="https://www.facebook.com/circwall"><Icon.Facebook/></a> <a href="https://www.linkedin.com/in/tochi-gospel/"><Icon.Linkedin/></a>
            </div>
        </footer>
    )
}

export default Footer;