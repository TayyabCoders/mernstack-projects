import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const navigate = useNavigate();
  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [UserCPassword, setUserCPassword] = useState('');

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


  const HandleSubmit = async (e) => {
    e.preventDefault();


    if (UserPassword !== UserCPassword) {
      toastMessage("Password  not matched with Confirm Password ","error")
      return;
    }

    const newUser = {
      userName: UserName,
      userEmail: UserEmail,
      userPassword: UserPassword
    }
    try{
    const CreateAccount_Response = await axios.post("http://localhost:5000/api/useraccount/",newUser);
   

    if(CreateAccount_Response.status===200){
      toastMessage("Account Register Successfully","Success");

      setTimeout(() => {
        navigate('/login')
      }, 3000);
    }
  }catch(error){
    toastMessage(error.response.data.error,"error")

  }


  }
  return (
    <>
<div className="container-fluid my-5">
   <div className="row">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-5 mx-auto">
       <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
         <div className="card-body p-5">
             <img src="assets/images/logo1.png" className="mb-4" width="145" alt=""/>
             <h4 className="fw-bold">Get Started Now</h4>
             <p className="mb-0">Enter your credentials to create your account</p>

             <div className="form-body my-4">
                                   <form onSubmit={HandleSubmit} className="row g-3">
                                       <div className="col-12">
                                           <label for="inputUsername" className="form-label">Username</label>
                                           <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" id="inputUsername" placeholder="Jhon"/>
                                       </div>
                                       <div className="col-12">
                                           <label for="inputEmailAddress" className="form-label">Email Address</label>
                                           <input type="email" onChange={(e) => setUserEmail(e.target.value)} className="form-control" id="inputEmailAddress" placeholder="example@user.com"/>
                                       </div>
                                       <div className="col-12">
                                           <label for="inputChoosePassword" className="form-label">Password</label>
                                           <div className="input-group" id="show_hide_password">
                                               <input type="password" onChange={(e) => setUserPassword(e.target.value)} className="form-control border-end-0" id="inputChoosePassword" placeholder="Enter Password"/>
                      <a href="javascript:;" className="input-group-text bg-transparent"><i className="bi bi-eye-slash-fill"></i></a>
                                           </div>
                                       </div>
                                       <div className="col-12">
                                           <label for="inputChoosePassword" className="form-label">Confirm Password</label>
                                           <div className="input-group" id="show_hide_password">
                                               <input type="password" onChange={(e) => setUserCPassword(e.target.value)} className="form-control border-end-0" id="inputChoosePassword" placeholder="Enter Confirm Password"/>
                      <a href="javascript:;" className="input-group-text bg-transparent"><i className="bi bi-eye-slash-fill"></i></a>
                                           </div>
                                       </div>
                                       <div className="col-12">
                                           <div className="form-check form-switch">
                                               <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                               <label className="form-check-label" for="flexSwitchCheckChecked">I read and agree to Terms &amp; Conditions</label>
                                           </div>
                                       </div>
                                       <div className="col-12">
                                           <div className="d-grid">
                                               <button type="submit" className="btn btn-grd-danger">Register</button>
                                           </div>
                                       </div>
                                       <div className="col-12">
                                           <div className="text-start">
                                               <p className="mb-0">Already have an account? <a href="auth-basic-login.html">Sign in here</a></p>
                                           </div>
                                       </div>
                                   </form>
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
