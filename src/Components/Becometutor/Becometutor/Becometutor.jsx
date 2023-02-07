import React from 'react';
import '../Becometutor/becometutor.css'
import img from '../../../Images/become.png';
import Why from '../Why/Why';
import TopSubjects from '../Top/TopSubjects'
import Subscription from '../Subscriptio/Subscription'

export default function Becometutor() {
    return (
        <div className='tutor' >
            <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="tutor-header">
            <h4><i>Earn Money Answering</i></h4>
            <br/>
            <h1><b><i>HomeWork Questions </i> </b></h1>
            <br/>
            <p>Earn up to <span className='fs-4' ><b>$7,500 USD monthly</b></span>  working from home tutoring students</p>
<button className='btn3' >Apply Now</button>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="tutor-img text-center">
            <img src={img} alt=""/>
            </div>
            </div>
            </div>
            </div>
            <Why/>
            <TopSubjects/>
            <Subscription/>
        </div>
    )
}
