import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Ticket from './images/ticket view.PNG';
import Boxapp from './images/boxapp.png';
import meals1 from './images/mealsapp1.png'
import meals2 from './images/mealsapp2.png'
import teamapp from './images/team1.png'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Carousel from 'react-bootstrap/Carousel'
import './contacts.css';

function Projects({projects,setProjects,displayProjects}) {
    
  return (
    <section  className='pb-5 sectionge' id='projects'>
        <div className='text-center pb-3'>
            <h1>PROJECTS</h1>
            <div className='btn'>
                <p onClick={displayProjects} className={projects===false? 'collapsed': ''}>TAP TO VIEW PROJECTS</p>
                <p onClick={displayProjects} className={projects===true? 'collapsed': ''}>TAP TO HIDE PROJECTS</p>
                <Icon.ArrowDownCircleFill onClick={displayProjects} className={projects===false? 'collapsed': 'arrows'}/>
                <Icon.ArrowUpCircleFill onClick={displayProjects} className={projects===true? 'collapsed': 'arrows'}/>
            </div>
        </div>
        <div  variant='dark' className={projects===true? 'collapsed': 'container carde  prodiv'} id='projectgee' >
            <div className=' bg-dark  eachpr'>
                <img
                className="d-block w-100 h-100 image"
                src={teamapp}
                alt="spy team App"
                />
                
                <div className='text-center pt-4 pb-4'>
                    <a href='' title='Preview live page'><h3>TEAM MEMBER APPLICATION</h3></a>
                </div>
                <div className='text-center container pt-4 pb-4'>
                    <article>
                        A Web Application that monitors a particular staff , it keeps the records of each member in a group and also can be changed throught the app too try is out.
                    </article>
                    <div className='codeSources pt-4 pb-1'>
                        <a href='' className='btn' title='Preview live app'>LIVE APPLICATION</a>
                        <a href='https://github.com/circwall/Team-MembersApp' className='btn' title='Check github'>SOURCE CODE</a>
                    </div>
                </div>
            </div>
            <div className='bg-dark  eachpr'>
                <img
                className="d-block w-100 image"
                src={meals1}
                alt="Mealsapp"
                
                />
                
                <div className='text-center pt-4 pb-4'>
                    <a href='' title='Preview live page'><h3 className='text-center'>MEALS APPLICATION</h3></a>
                </div>
                <div className='text-center container pt-4 pb-4'>
                    <article>
                        An amazing Meals application that allows user to search and also add a meal as favourite meals.
                        With an <strong>API</strong> that fetches random meals .
                    </article>
                    <div className='codeSources pt-4 pb-1'>
                        <a href='' className='btn' title='Preview live app'>LIVE APPLICATION</a>
                        <a href='https://github.com/circwall/Meal-Application' className='btn' title='Check github'>SOURCE CODE</a>
                    </div>
                </div>
            </div>
            <div className='bg-dark  eachpr'>
                <img
                className="d-block w-100 image"
                src={Ticket}
                alt="Ticket APP"
                />
                <div className='text-center pt-4 pb-4'>
                    <a href='' title='Preview live page'><h3>TICKET APPLICATION</h3></a>
                </div>
                <div className='text-center container pt-4 pb-4'>
                    <article>
                        This is a Web Application that allows ticket sellers to register 
                        and know the actual numbers of ticket buyers and party attendants availiable in a club
                    </article>
                    <div className='codeSources pt-4 pb-1'>
                        <a href='' className='btn' title='Preview live app'>LIVE APPLICATION</a>
                        <a href='https://github.com/circwall/Ticket-App' className='btn' title='Check github'>SOURCE CODE</a>
                    </div>
                </div>
            </div>
            <div className=' bg-dark  eachpr'>
                <img
                className="d-block w-100 h-100 image"
                src={Boxapp}
                alt="Box App"
                />
                <div className='text-center pt-4 pb-4'>
                    <a href='' title='Preview live page'><h3>BOX APPLICATION</h3></a>
                </div>
                <div className='text-center container pt-4 pb-4'>
                    <article>
                        It is more of Kids Applicationthat allows them select a particular color and and see the theme color of the app change.
                        this amazing App helps kids identify colors. 
                    </article>
                    <div className='codeSources pt-4 pb-1'>
                        <a href='' className='btn' title='Preview live app'>LIVE APPLICATION</a>
                        <a href='https://github.com/circwall/App-for-Babies' className='btn' title='Check github'>SOURCE CODE</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Projects;
