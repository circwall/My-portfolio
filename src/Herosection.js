import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import myProfile from './images/pics.png'
import About from './About';



const Firstside = () =>{
    return(
        <section className='  main-section' id='herosect'>
            <div className='mainge '>
                <div className=' pt-5'>
                    <div className=' gee'>
                        <div className='nameside p-5 '>
                            <h2>
                                <span className='hi'>Hi </span>
                                I'm <span className='my-name'>Ikpechukwu Tochukwu </span>
                            </h2>

                            <p className='description'>A Front-end developer with a year of experience </p>
                        </div>
                        <div className='imageside'>
                            <img className='mydp img-fluid imge-responsive' src={myProfile} />
                            {/*<div className='spinner-div'>
                                <caption className='spinner-grow'></caption>
                                <caption className='spinner-grow'></caption>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Firstside;