import React from 'react'
import '../Feature/feature.css'
import img3 from "../../../Images/linear.jpg";
import img4 from "../../../Images/rocket.jpg";
import img5 from "../../../Images/international-law.jpg";
import img6 from "../../../Images/literature.jpg";
import img7 from "../../../Images/mat.png";
import img8 from "../../../Images/pro.png";
import img9 from "../../../Images/sci.png";
import img10 from "../../../Images/wri.png";
import img11 from "../../../Images/bus.png";
import img12 from "../../../Images/hum.png";

export default function Feature() {
    return (
        <div className='my-3' >
            <div className="container">
            <div className="row mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div className="feature">
              <h4>Featured Subjects</h4>
            </div>
          </div>
        </div>
            <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="row mt-4">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img3} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img4} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img5} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img6} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
        </div>
          </div>

          <div className="carousel-item">
           <div className="row mt-4">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img5} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img3} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img6} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img4} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          </div>


          </div>
          <div className="carousel-item">
          <div className="row mt-4">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img4} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img3} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img6} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
            <div className="card-body">
              <div className="feature-img">
                <img src={img5} alt="" className="img-fluid" />
              </div>
              <div className="feature-imgtext">
                <h6 className="p-3">Linear Algebra</h6>
              </div>
            </div>
          </div>
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
      <div className="feature2 mt-5">
<div className="row">
<div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
<div className="feature2-img">
<img src={img7} alt="" className='img-fluid' />
</div>
<h6 className='pt-2' >Mathematics</h6>
</div>
<div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
<div className="feature2-img">
<img src={img8} alt="" className='img-fluid' />
</div>
<h6 className='pt-2' >Programming</h6>
</div>
<div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
<div className="feature2-img">
<img src={img9} alt="" className='img-fluid' />
</div>
<h6 className='pt-2' >Science</h6>
</div>
<div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center mt-4">
<div className="feature2-img">
<img src={img10} alt="" className='img-fluid' />
</div>
<h6 className='pt-2' >Writing</h6>
</div>
<div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center mt-4">
<div className="feature2-img">
<img src={img11} alt="" className='img-fluid' />
</div>
<h6 className='pt-2' >Business</h6>
</div>
<div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center mt-4">
<div className="feature2-img">
<img src={img12} alt="" className='img-fluid' />
</div>
<h6 className='pt-2' >Humanities</h6>
</div>
</div>
</div>
        </div>
        </div>
    )
}
