import React from 'react';
import '../Home/home.css';
import img from '../../../Images/splash_3.jpg'
import img2 from '../../../Images/splash_4.jpg'
import img3 from '../../../Images/splash_5.jpg'
import Question from '../Question/Question'
import Feature from '../Feature/Feature'

export default function Home() {
    return (
        <div className='home'>
 <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-header text-center text-white">
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-header text-center text-white">
             
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-header text-center text-white">
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
      <Question/>
      <Feature/>
        </div>
    )
}
