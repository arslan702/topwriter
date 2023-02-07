import React from 'react';
import '../Why/why.css'
import img5 from '../../../Images/Commission.png'
import img6 from '../../../Images/Freedom-min.png'
import img7 from '../../../Images/Income-min.png'


export default function Why() {
    return (
        <div className ='why' >
        <div className="container">
            <div className="row">
            <div className="col lg-12 col-md-12 col-sm-12 col-12">
            <div className="why-header">
            <h3>Why tutor on Studypool?</h3>
            <br/>
            <p>There are many reasons to make Studypool your go-to source for online tutoring work.</p>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="why-details">
            <img src={img5} alt="" className='img-fluid' />
            <h5>Lowest Service Fees</h5>
            <br/>
            <p>Starting at 20%, Studypool charges the lowest service fees in the market. We like to give our tutors what they earn! </p>
            </div>
            </div>

             <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="why-details">
            <img src={img6} alt="" className='img-fluid' />
            <h5>Lowest Service Fees</h5>
            <br/>
            <p>Starting at 20%, Studypool charges the lowest service fees in the market. We like to give our tutors what they earn! </p>
            </div>
            </div>

             <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="why-details">
            <img src={img7} alt="" className='img-fluid' />
            <h5>Lowest Service Fees</h5>
            <br/>
            <p>Starting at 20%, Studypool charges the lowest service fees in the market. We like to give our tutors what they earn! </p>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
