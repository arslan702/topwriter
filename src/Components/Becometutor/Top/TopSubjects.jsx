import React from 'react';
import '../Top/top.css';
import bus from '../../../Images/bus.png';
import hum from '../../../Images/hum.png';
import mat from '../../../Images/mat.png';



export default function TopSubjects() {
    return (
        <div className='top'>
        <div className="container">
            <div className="row my-4">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <h4><i>Top Tutoring Subjects</i> </h4>
            </div>
            </div>
            <div className="row my-3">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={bus} alt=""  /><span>Accounting</span>
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={hum} alt=""  /><span>Accounting</span>
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={mat} alt=""  /><span>Accounting</span>
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={hum} alt=""  /><span>Accounting</span>
            </div>
            </div>
            </div>

            <div className="row my-3">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={bus} alt=""  /><span>Accounting</span>
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={hum} alt=""  /><span>Accounting</span>
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={bus} alt=""  /><span>Accounting</span>
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="topcard-body">
            <img src={mat} alt=""  /><span>Accounting</span>
            </div>
            </div>
            </div>


        </div>
        </div>
    )
}
