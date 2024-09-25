import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export default function UserProfile() {
  // State to hold user data
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userCPassword, setUserCPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState({ username: '', email: '' });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match validation
    if (userPassword !== userCPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('userToken');
      const decodedToken = jwtDecode(token); // Decode the token to get user ID
      const id = decodedToken._id; // Assuming JWT is stored in localStorage

      console.log('Sending data:', {
        username: userName,
        email: userEmail,
        password: userPassword,
      });


      const response = await axios.put(`http://localhost:5000/api/useraccount/${id}`, {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
      }); 

      // Get the new token from the server response
    const { token: newToken } = response.data;

    // Update localStorage with the new token
    localStorage.setItem('userToken', newToken);

     // Decode the new token and update the UI
     const updatedDecodedToken = jwtDecode(newToken);
     setUserData({
       username: updatedDecodedToken.userName, // Access directly from the decoded token
       email: updatedDecodedToken.userEmail, // Assuming userEmail is also inside the decoded token
     });
      
      setSuccess(true); // Set success flag
      setError(null); // Clear error
      console.log('Profile updated successfully:', response.data);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
      setSuccess(false); // Set success to false if there's an error
    }
  };

  // Handle reset button
  const handleReset = () => {
    setUserName('');
    setUserEmail('');
    setUserPassword('');
    setUserCPassword('');
    setError(null);
    setSuccess(false);
  };
  useEffect(() => {
    const token = localStorage.getItem('userToken');
        // Decode the token
        const decodedToken = jwtDecode(token);
        
        // Log the entire decoded token to check the structure
        console.log("Decoded Token:", decodedToken);

        // Extract username and email (adjust based on your token structure)
        const username = decodedToken.userName;
        const userEmail =decodedToken.userEmail;
        console.log(username)
        console.log(userEmail)

        // Set the extracted data into the state
        setUserData({ username, email: userEmail });

       
      
  }, []);
  return (
    <>

  <main className="main-wrapper">
    <div className="main-content">
      
				<div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div className="breadcrumb-title pe-3">Components</div>
					<div className="ps-3">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
								</li>
								<li className="breadcrumb-item active" aria-current="page">User Profile</li>
							</ol>
						</nav>
					</div>
					<div className="ms-auto">
						<div className="btn-group">
							<button type="button" className="btn btn-primary">Settings</button>
							<button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
							</button>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="javascript:;">Action</a>
								<a className="dropdown-item" href="javascript:;">Another action</a>
								<a className="dropdown-item" href="javascript:;">Something else here</a>
								<div className="dropdown-divider"></div>	<a className="dropdown-item" href="javascript:;">Separated link</a>
							</div>
						</div>
					</div>
				</div>
	
      

        <div className="card rounded-4">
          <div className="card-body p-4">
             <div className="position-relative mb-5">
              <img src="assets/images/gallery/profile-cover.html" className="img-fluid rounded-4 shadow" alt=""/>
              <div className="profile-avatar position-absolute top-100 start-50 translate-middle">
                <img src="assets/images/avatars/01.png" className="img-fluid rounded-circle p-1 bg-grd-danger shadow" width="170" height="170" alt=""/>
          </div>
             </div>
              <div className="profile-info pt-5 d-flex align-items-center justify-content-between">
                <div className="">
                  <h3>User-Name: {userData.username}</h3>
                  <p className="mb-0">{userData.email}<br/>
                   Status: Active</p>
                </div>
              
              </div>
              <div className="kewords d-flex align-items-center gap-3 mt-4 overflow-x-auto">
                 <button type="button" className="btn btn-sm btn-light rounded-5 px-4">UX Research</button>
                 <button type="button" className="btn btn-sm btn-light rounded-5 px-4">CX Strategy</button>
                 <button type="button" className="btn btn-sm btn-light rounded-5 px-4">Management</button>
              </div>
          </div>
        </div>

        <div className="row">
           <div className="col-12 col-xl-8">
            <div className="card rounded-4 border-top border-4 border-primary border-gradient-1">
              <div className="card-body p-4">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0 fw-bold">Edit Profile</h5>
                  </div>
                  <div className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown">
                      <span className="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                 </div>
								<form onSubmit={handleSubmit} className="row g-4">
                {error && <p className="alert alert-danger">{error}</p>}
                {success && <p className="alert alert-success">Profile updated successfully!</p>}
									<div className="col-md-6">
										<label for="input1" className="form-label">User Name</label>
										<input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" id="input1" placeholder="User Name"/>
									</div>
									
									<div className="col-md-12">
										<label for="input4" className="form-label">Email</label>
										<input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" className="form-control" id="input4"/>
									</div>
									<div className="col-md-12">
										<label for="input5" className="form-label">Password</label>
										<input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" className="form-control" id="input5"/>
									</div>
                  <div className="col-md-12">
										<label for="input6" className="form-label"> Confirm Password</label>
										<input value={userCPassword} onChange={(e) => setUserCPassword(e.target.value)} type="password" className="form-control" id="input6"/>
									</div>
                  <div className="col-md-12">
										<div className="d-md-flex d-grid align-items-center gap-3">
											<button type="submit" className="btn btn-grd-primary px-4">Update Profile</button>
											<button type="button" className="btn btn-light px-4">Reset</button>
										</div>
									</div> 
								</form>
							</div>
            </div>
           </div>  
           <div className="col-12 col-xl-4">
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0 fw-bold">About</h5>
                  </div>
                  <div className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown">
                      <span className="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                 </div>
                 <div className="full-info">
                  <div className="info-list d-flex flex-column gap-3">
                    <div className="info-list-item d-flex align-items-center gap-3"><span className="material-icons-outlined">account_circle</span><p className="mb-0">Full Name: {userData.username}</p></div>
                    <div className="info-list-item d-flex align-items-center gap-3"><span className="material-icons-outlined">done</span><p className="mb-0">Status: active</p></div>
                   
                    <div className="info-list-item d-flex align-items-center gap-3"><span className="material-icons-outlined">send</span><p className="mb-0">Email: {userData.email}</p></div>
                
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0 fw-bold">Accounts</h5>
                  </div>
                  <div className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown">
                      <span className="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                 </div>

                {/* <div className="account-list d-flex flex-column gap-4">
                  <div className="account-list-item d-flex align-items-center gap-3">
                    <img src="assets/images/apps/05.png" width="35" alt=""/>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Google</h6>
                      <p className="mb-0">Events and Reserch</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" checked/>
                    </div>
                  </div>
                  <div className="account-list-item d-flex align-items-center gap-3">
                    <img src="assets/images/apps/02.png" width="35" alt=""/>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Skype</h6>
                      <p className="mb-0">Events and Reserch</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" checked/>
                    </div>
                  </div>
                  <div className="account-list-item d-flex align-items-center gap-3">
                    <img src="assets/images/apps/03.png" width="35" alt=""/>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Slack</h6>
                      <p className="mb-0">Communication</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" checked/>
                    </div>
                  </div>
                  <div className="account-list-item d-flex align-items-center gap-3">
                    <img src="assets/images/apps/06.png" width="35" alt=""/>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Instagram</h6>
                      <p className="mb-0">Social Network</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" checked/>
                    </div>
                  </div>
                  <div className="account-list-item d-flex align-items-center gap-3">
                    <img src="assets/images/apps/17.png" width="35" alt=""/>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Facebook</h6>
                      <p className="mb-0">Social Network</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" checked/>
                    </div>
                  </div>
                  <div className="account-list-item d-flex align-items-center gap-3">
                    <img src="assets/images/apps/11.png" width="35" alt=""/>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Paypal</h6>
                      <p className="mb-0">Social Network</p>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" checked/>
                    </div>
                  </div>
                </div> */}



              </div>
            </div>

           </div>
        </div>
       


    </div>
  </main>
  


      <div className="overlay btn-toggle"></div>
  
  
  
  <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart">
    <div className="offcanvas-header border-bottom h-70">
      <h5 className="mb-0" id="offcanvasRightLabel">8 New Orders</h5>
      <a href="javascript:;" className="primaery-menu-close" data-bs-dismiss="offcanvas">
        <i className="material-icons-outlined">close</i>
      </a>
    </div>
    <div className="offcanvas-body p-0">
      <div className="order-list">
        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/01.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">White Men Shoes</h5>
            <p className="mb-0 order-price">$289</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>

        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/02.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">Red Airpods</h5>
            <p className="mb-0 order-price">$149</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>

        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/03.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">Men Polo Tshirt</h5>
            <p className="mb-0 order-price">$139</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>

        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/04.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">Blue Jeans Casual</h5>
            <p className="mb-0 order-price">$485</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>

        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/05.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">Fancy Shirts</h5>
            <p className="mb-0 order-price">$758</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>

        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/06.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">Home Sofa Set </h5>
            <p className="mb-0 order-price">$546</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>

        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/07.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">Black iPhone</h5>
            <p className="mb-0 order-price">$1049</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>

        <div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
          <div className="order-img">
            <img src="assets/images/orders/08.png" className="img-fluid rounded-3" width="75" alt=""/>
          </div>
          <div className="order-info flex-grow-1">
            <h5 className="mb-1 order-title">Goldan Watch</h5>
            <p className="mb-0 order-price">$689</p>
          </div>
          <div className="d-flex">
            <a className="order-delete"><span className="material-icons-outlined">delete</span></a>
            <a className="order-delete"><span className="material-icons-outlined">visibility</span></a>
          </div>
        </div>
      </div>
    </div>
    <div className="offcanvas-footer h-70 p-3 border-top">
      <div className="d-grid">
        <button type="button" className="btn btn-grd btn-grd-primary" data-bs-dismiss="offcanvas">View Products</button>
      </div>
    </div>
  </div>
  


  
  <button className="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop">
    <i className="material-icons-outlined">tune</i>Customize
  </button>
  
  <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="staticBackdrop">
    <div className="offcanvas-header border-bottom h-70">
      <div className="">
        <h5 className="mb-0">Theme Customizer</h5>
        <p className="mb-0">Customize your theme</p>
      </div>
      <a href="javascript:;" className="primaery-menu-close" data-bs-dismiss="offcanvas">
        <i className="material-icons-outlined">close</i>
      </a>
    </div>
    <div className="offcanvas-body">
      <div>
        <p>Theme variation</p>

        <div className="row g-3">
          <div className="col-12 col-xl-6">
            <input type="radio" className="btn-check" name="theme-options" id="BlueTheme" checked/>
            <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="BlueTheme">
              <span className="material-icons-outlined">contactless</span>
              <span>Blue</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input type="radio" className="btn-check" name="theme-options" id="LightTheme"/>
            <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="LightTheme">
              <span className="material-icons-outlined">light_mode</span>
              <span>Light</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input type="radio" className="btn-check" name="theme-options" id="DarkTheme"/>
            <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="DarkTheme">
              <span className="material-icons-outlined">dark_mode</span>
              <span>Dark</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input type="radio" className="btn-check" name="theme-options" id="SemiDarkTheme"/>
            <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="SemiDarkTheme">
              <span className="material-icons-outlined">contrast</span>
              <span>Semi Dark</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input type="radio" className="btn-check" name="theme-options" id="BoderedTheme"/>
            <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="BoderedTheme">
              <span className="material-icons-outlined">border_style</span>
              <span>Bordered</span>
            </label>
          </div>
        </div>

      </div>
    </div>
  </div>
    </>
  )
}