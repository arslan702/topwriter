import React from 'react';
import '../SignUp/signup.css'

export default function Signup() {
    return (
        <div className= 'signup' >
        <div className="container">
        
<div className="contact-details ">
            <div className="col-lg-12 col-md-6 col-sm-12 col-12">
            <label htmlFor="/" className='px-4 pb-0' >Name</label><br/>
            <input type="text" name="name" id="name" placeholder='Your Name' required />
            </div>
            <div className="col-lg-12 col-md-6 col-sm-12 col-12">
            <label htmlFor="/" className='px-4  pb-0' >Email</label><br/>
            <input type="email" name="email" id="email" placeholder='Your Email' required /> 
            </div>
            <div className="col-lg-12 col-md-6 col-sm-12 col-12"> 
            <label htmlFor="/" className='px-4 pb-0' >Password</label><br/>
            <input type="password" name="password" id="password" placeholder='Password'required />  
            </div> 
                
              
           <div className="button text-center mt-2 ">
              <p  className="btn btn-transparent m-2 px-3 py-2">
Create Account
              </p>
              </div>
              <p className='text-center' >OR</p>
              <div className="icons text-center d-flex mx-2">
              <div className="google">
              <button className='px-2' ><span><i class="fab fa-google mx-1 px-1 py-3 fs-5"></i></span>Signup with Google </button>
              </div>
              
              <div className="facebook">
              <button><span><i class="fab fa-facebook mx-1 fs-5"></i></span>Signup with Facebook </button>
              </div>
              </div>
                </div>
        </div>
        </div>
    )
}
