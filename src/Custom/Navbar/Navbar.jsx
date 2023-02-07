import React from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="wrapper">
          <Link className="logo" to="/">
            <i>Top Writer</i>
          </Link>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links mb-0">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times" />
            </label>
            <li>
              <Link className="" to="studytools">
                Study tools
              </Link>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item ">
                Dropdown Menu
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
            <li></li>

            <li>
              <Link className="" to="educators">
                Educators
              </Link>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Dropdown Menu
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>

            <li>
              <Link className="" to="becometutor">
                Become a tutor
              </Link>
            </li>

            <li>
              <a href="#" className="desktop-item">
                All Subjects
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                All Subjects
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Vectors</a>
                      </li>
                      <li>
                        <a href="#">Business cards</a>
                      </li>
                      <li>
                        <a href="#">Custom logo</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Business</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Maths</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Programming</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Writing</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Science</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Site Seal</a>
                      </li>
                      <li>
                        <a href="#">VPS Hosting</a>
                      </li>
                      <li>
                        <a href="#">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="#">Website design</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>< button 

            className='btn2'
            style={{lineHeight:'20px'}}
            >log In</button> </li>

          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars" />
          </label>
        </div>
      </nav>
    </div>
  );
}
