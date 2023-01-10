import React, { useState } from "react";
import './Technologies.css'
import * as Icon from 'react-bootstrap-icons';
import reactImage from './images/react-1.png'


const Technologies = () => {
    const [collapsed, setcollapsed] = useState(false);
    const handleClick =() =>{
        collapsed===true?setcollapsed(false):setcollapsed(true)        
    }
    const techs = [
        {
            nome : 'React Js',
            index:1,
        },
        {
            nome : 'Vanila JS',
            index:2,
        },
        {
            nome : 'ES6',
            index:3,
        },
        {
            nome : 'HTML5',
            index:4,
        },
        {
            nome : 'CSS3',
            index:5,
        },

        {
            nome :'JavaScript',
            index:6,
        },
        {
            nome:'Bootstrap',
            index:7,
        },
        {
            nome:'SASS',
            index:8,
        },
        {
            nome:'Firebase',
            index:9,
        }
    ]
    return(
        <section id='technologies'>
            <div className="container techDescriptionn ">
                <h1 className="text-center">TECHNOLOGIES</h1>
                <p className="pages"> Some of the Technologies I've worked with in the feild of web development, especialy Front-end and hosting. Here are some Technologies i have worked with</p>
            </div>
            <div className="container techbig card bg-dark">
                <div className="frontend pt-3">
                    <img id='image'src={reactImage}/>
                    <div className="mx-2">
                        <h3>Front-End</h3>
                        <p>React.JS and Vanila JS</p>
                    </div>
                </div>
                <div className={collapsed===true? 'collapsed':'showMore'} onClick={handleClick}>
                    click to show more
                </div>
                <div className={collapsed===false? "collapsed" : "techcontainer "} key={'techCon'}>
                    {techs.map((tech)=>(
                        <div onClick={handleClick} className="" key={tech.nome}>
                            <div key={tech.index} className="tech">
                                {tech.nome}
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
  
    )
}

export default Technologies; 