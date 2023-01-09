import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skill.css';

const Skills = () =>{

    return(
        <section className='container ' id='skills'>
            <div className='skillset container'>
                <h1 className='skill-head text-center p-5 '>MY SKILLS</h1>
                <div className="row text-center">
                    <div className="col-md-3 col-sm-6 pt-2">
                        <div className="progress blue">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">90%</div>
                        </div>
                        <span className='text-center '><h3 className='pt-3'>HTML</h3></span>
                    </div>
                    <div className="col-md-3 col-sm-6 pt-2">
                        <div className="progress yellow">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">75%</div>
                        </div>
                        <span className='text-center '><h3 className='pt-3 mx-5'>CSS</h3></span>
                    </div>
                    <div className="col-md-3 col-sm-6 pt-2">
                        <div className="progress green">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">80%</div>
                        </div>
                        <span className='text-center '><h3 className='pt-3'>JAVASCRIPT</h3></span>
                    </div>
                    <div className="col-md-3 col-sm-6 pt-2 ">
                        <div className="progress pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">60%</div>
                        </div>
                        <span className='text-center '><h3 className='pt-3 mx-4 '>REACT</h3></span>
                    </div>
                    <div className="col-md-3 col-sm-6 pt-2">
                        <div className="progress red">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">80%</div>
                        </div>
                        <span className='text-center '><h3 className='pt-3 '>PHOTOSHOP</h3></span>
                    </div>
                    <div className="col-md-3 col-sm-6 pt-2">
                        <div className="progress yellow">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">75%</div>
                        </div>
                        <span className='text-center '><h3 className='pt-3'>ILLUSTRATOR</h3></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills