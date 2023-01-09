import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import * as Icon from 'react-bootstrap-icons';

const About = () =>{
    return(
        <section id='about' className="About-section container pt-5 pb-5 text-center">
            <h1 className="about text-center">ABOUT ME<p><Icon.Person/></p></h1>
            <article className="article px-2 ">
            I'm a front-end web application developer based in Nigeria who enjoys creating things that live on the internet.
            I look for creative ways to push the boundaries of a website's front-end and back-end code without compromising on 
            the browser support and performance and I focus on building accessible, inclusive products and digital experience 
            for a variety of clients. My strongest skills are<span> React, HTML, ES6, CSS, Git.</span><p className="pt-3">I am good at connecting features with a business's value for a better user experience. 
            I am adaptable and having worked on many projects to enable improve my Knowledge, I understand the importance of good communication for
            optimum productivity in a team and company as a whole.</p>
            </article>
            <div className="info box" >
                <div className="person-info" id="uls">
                    <div className="left ">
                        <ul className="person-nf-li" >
                            <li><span className="tag">First Name:</span> <span className="other">Ikpechukwu</span></li>
                            <li><span className="tag">Last Name:</span> <span className="other">TOCHI GOSPEL</span></li>
                            <li><span className="tag">Star Name:</span> <span className="other">Circwall</span></li>
                            <li><span className="tag">Nationality:</span> <span className="other">Nigeria</span></li>
                            <li><span className="tag">Phone: </span><span className="other"><a href="https://wa.me/message/47FRT6RPOC6XJ1" title="Whatsapp" className="contacts">+2348140797203</a></span></li>
                            <li><span className="tag"><a href="https://www.facebook.com/circwall" className="contacts"><Icon.Facebook/> </a></span><span className="other"><a href="https://www.facebook.com/circwall" className="contacts">Ikpechukwu Tochi Circ</a></span> </li>
                            {/*<li><span><Icon.Twitter/> </span>Circwall</li>
                            <li><span><Icon.Whatsapp/></span>+2349024633042</li>*/}

                        </ul>
                    </div>
                    <div className="right">
                        <ul className="person-nf-li">
                            <li><span className="tag">Email:</span><span className="other">tochigospel32@gmail.com</span></li>
                            <li><span className="tag">Age:</span><span className="other">20 Years</span></li>
                            <li><span className="tag">Adress:</span> <span className="other">Abia</span></li>
                            <li><span className="tag">Languages:</span> <span className="other">English, Pigin, Igbo</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;