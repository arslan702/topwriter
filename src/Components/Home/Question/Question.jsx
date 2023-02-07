import React from "react";
import "../Question/question.css";
import img from "../../../Images/question.png";
import img1 from "../../../Images/connect.png";
import img2 from "../../../Images/explain.png";



export default function Question() {
  return (
    <div className="question mt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div className="question-header">
              <h4>How Q&A Tutoring Works</h4>
            </div>
          </div>
        </div>
        <div className="row  mt-3">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="question-img text-center">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="question-detail text-center pt-4">
              <h5>Post a Question</h5>
              <p>
                Ask all types of questions big or small from basic math to
                rocket science.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="question-img text-center">
              <img src={img1} alt="" className="img-fluid" />
            </div>
            <div className="question-detail text-center pt-4">
              <h5>Post a Question</h5>
              <p>
                Ask all types of questions big or small from basic math to
                rocket science.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="question-img text-center">
              <img src={img2} alt="" className="img-fluid" />
            </div>
            <div className="question-detail text-center pt-4">
              <h5>Post a Question</h5>
              <p>
                Ask all types of questions big or small from basic math to
                rocket science.
              </p>
            </div>
          </div>
        </div>
        



      </div>
    </div>
  );
}
