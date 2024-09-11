import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie';
import {jwtDecode}  from 'jwt-decode';

import { Link } from 'react-router-dom';

export default function Login() {
  const Navigate = useNavigate();
  const [UserEmail , setUserEmail] = useState('');
  const [UserPassword , setUserPassword] = useState('');
 
  const toastMessage = (message,type) => {
    (type==="error")?(
    toast.error(message, {
      position: "top-right"
    })

  ):(
    toast.success(message, {
      position: "top-right"
    })
 
  )
  }


const HandleLogin =async(e)=>{
  e.preventDefault();

  const userData = {
    userEmail:UserEmail,
    userPassword:UserPassword
  } 

  try{

    const LoginResponse = await axios.post("http://localhost:5000/api/useraccount/login/",userData);
    
    if(LoginResponse.status === 200){
      const token = LoginResponse.data.token;
    
      
      const decodedToken = jwtDecode(token);
      
     
      
      Cookies.set('userData',token, { expires: 7 });
      toastMessage("Login Successfully !!" ,"Success")

      setTimeout(() => {
        
        Navigate('/');
      }, 3000);

    }

  }catch(error){
    toastMessage(error.response.data.error ,"error")
    console.log(error)
  }
}
  return (
    <>
   
    <div className="auth-basic-wrapper d-flex align-items-center justify-content-center">
      <div className="container-fluid my-5 my-lg-0">
        <div className="row">
           <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
            <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
              <div className="card-body p-5">
                  <img src="assets/images/logo1.png" className="mb-4" width="145" alt=""/>
                  <h4 className="fw-bold">Get Started Now</h4>
                  <p className="mb-0">Enter your credentials to login your account</p>

                  <div onSubmit={HandleLogin} className="form-body my-5">
										<form className="row g-3">
											<div className="col-12">
												<label for="inputEmailAddress" className="form-label">Email</label>
												<input type="email" onChange={(e)=>setUserEmail(e.target.value)} className="form-control" id="inputEmailAddress" placeholder="jhon@example.com"/>
											</div>
											<div className="col-12">
												<label for="inputChoosePassword" className="form-label">Password</label>
												<div className="input-group" id="show_hide_password">
													<input type="password" onChange={(e)=>setUserPassword(e.target.value)} className="form-control border-end-0" id="inputChoosePassword" placeholder="Enter Password"/> 
                          <a href="javascript:;" className="input-group-text bg-transparent"><i className="bi bi-eye-slash-fill"></i></a>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
													<label className="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
												</div>
											</div>
											<div className="col-md-6 text-end">	<a href="auth-basic-forgot-password.html">Forgot Password ?</a>
											</div>
											<div className="col-12">
												<div className="d-grid">
													<button type="submit" className="btn btn-grd-primary">Login</button>
												</div>
											</div>
											<div className="col-12">
												<div className="text-start">
													<p className="mb-0">Don't have an account yet? <a href="auth-basic-register.html">Sign up here</a>
													</p>
												</div>
											</div>
										</form>
									</div>

                  <div className="separator section-padding">
                    <div className="line"></div>
                    <p className="mb-0 fw-bold">OR SIGN IN WITH</p>
                    <div className="line"></div>
                  </div>

                  <div className="d-flex gap-3 justify-content-center mt-4">
                    <a href="javascript:;" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger">
                      <i className="bi bi-google fs-5 text-white"></i>
                    </a>
                    <a href="javascript:;" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-deep-blue">
                      <i className="bi bi-facebook fs-5 text-white"></i>
                    </a>
                    <a href="javascript:;" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-info">
                      <i className="bi bi-linkedin fs-5 text-white"></i>
                    </a>
                    <a href="javascript:;" className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-royal">
                      <i className="bi bi-github fs-5 text-white"></i>
                    </a>
                  </div>

              </div>
            </div>
           </div>
        </div>
     </div>
    </div>

    <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"

                  />
   
    </>
  )
}
