import React from "react";
import "../Subscriptio/subscription.css";

export default function Subscription() {
  return (
    <div>
      <div className="pricing mt-3 mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
              <div className="pricing-header text-center my-4">
                <h2>
                  <b>Pricing Tables Of Your Desired Plans </b>{" "}
                </h2>
                <h4>United States Currency Pricing Table</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
              <div className="card-body">
                <div className="days text-center text-dark py-3">
                  <h2>4 days classes</h2>
                  <h5>In a week</h5>
                </div>
                <div className="monthly text-center py-3">
                  <h1>
                    <b>40$</b>
                  </h1>
                  <h6>Monthly</h6>
                </div>
                <div className="trial text-center py-2">
                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    3 days free trail
                  </h6>

                  <h6>
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>{" "}
                    Up to 20 Minutes
                  </h6>

                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    16 Classes per Month
                  </h6>

                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    Monthly Test
                  </h6>
                </div>
                <div className="register text-center">
                  <a href="/" className="btn btn-light py-2 px-3 my-3">
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
              <div className="card-body">
                <div className="days text-center  text-dark py-3">
                  <h2>6 days classes</h2>
                  <h5>In a week</h5>
                </div>
                <div className="monthly text-center py-3">
                  <h1>
                    <b>50$</b>
                  </h1>
                  <h6>Monthly</h6>
                </div>
                <div className="trial text-center py-2">
                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    3 days free trail
                  </h6>

                  <h6>
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>{" "}
                    Up to 20 Minutes
                  </h6>

                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    24 Classes per Month
                  </h6>

                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    Monthly Test
                  </h6>
                </div>
                <div className="register text-center">
                  <a href="/" className="btn btn-light py-2 px-3 my-3">
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
              <div className="card-body">
                <div className="days text-center text-dark py-3">
                  <h2>Yearly Plan</h2>
                  <h5>6 days In a week</h5>
                </div>
                <div className="monthly  text-center py-3">
                  <h1>
                    <b>40$</b>
                  </h1>
                  <h6>Monthly</h6>
                </div>
                <div className="trial text-center py-2">
                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    3 days free trail
                  </h6>

                  <h6>
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>{" "}
                    Up to 20 Minutes
                  </h6>

                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    16 Classes per Month
                  </h6>

                  <h6>
                    {" "}
                    <span>
                      <i class="bi bi-check-circle"></i>
                    </span>
                    Monthly Test
                  </h6>
                </div>
                <div className="register text-center">
                  <a href="/" className="btn btn-light py-2 px-3 my-3">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
