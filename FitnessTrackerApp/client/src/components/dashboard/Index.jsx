import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';

Chart.register(...registerables, ChartDataLabels); // Register the datalabels plugin

function Index() {
  const [userData, setUserData] = useState({ username: '', email: '' });
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (token) {
      // Decode the token
      const decodedToken = jwtDecode(token);
      
      // Log the entire decoded token to check the structure
      console.log("Decoded Token:", decodedToken);

      // Extract username and email (adjust based on your token structure)
      const username = decodedToken.userName; // Ensure this matches your token structure
      const userEmail = decodedToken.userEmail; // Ensure this matches your token structure
      console.log(username);
      console.log(userEmail);

      // Set the extracted data into the state
      setUserData({ username, email: userEmail });
    } else {
      return <Navigate to="/login" />; // No token means not logged in
    }
  }, []);
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userIdFromToken = decodedToken._id;
      setUserId(userIdFromToken);
    }
    const fetchProgressData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/progress?userId=${userId}`);
        setProgressData(data);
      } catch (error) {
        console.error('Error fetching progress data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProgressData();
  }, [userId]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!progressData || !progressData.length) {
    return <div>No progress data available</div>; // Handle case when no data is returned
  }

  const totalCalories = progressData.reduce((acc, entry) => acc + entry.totalCalories, 0);
  const totalCarbs = progressData.reduce((acc, entry) => acc + entry.totalCarbs, 0);
  const totalFats = progressData.reduce((acc, entry) => acc + entry.totalFats, 0);

  const totalNutrition = totalCalories + totalCarbs + totalFats;

  const pieData = {
    labels: ['Calories', 'Carbs', 'Fats'],
    datasets: [
      {
        label: 'Nutrition Distribution',
        data: [totalCalories, totalCarbs, totalFats],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Calories', 'Carbs', 'Fats'],
    datasets: [
      {
        label: 'Nutrition in Percentage',
        data: [
          ((totalCalories / totalNutrition) * 100).toFixed(2),
          ((totalCarbs / totalNutrition) * 100).toFixed(2),
          ((totalFats / totalNutrition) * 100).toFixed(2),
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        color: '#fff', // Change color as needed
        formatter: (value) => {
          const percentage = ((value / totalNutrition) * 100).toFixed(2); // Calculate percentage
          return `${percentage}%`; // Show percentage directly
        },
      },
    },
  };
  return (
    <>
  <main className="main-wrapper">
    <div className="main-content">
      
				<div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div className="breadcrumb-title pe-3">Dashboard</div>
					<div className="ps-3">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
								</li>
								<li className="breadcrumb-item active" aria-current="page">Analysis</li>
							</ol>
						</nav>
					</div>
					<div className="ms-auto">
						<div className="btn-group">
							<button type="button" className="btn btn-outline-primary">Settings</button>
							<button type="button" className="btn btn-outline-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
							</button>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="javascript:;">Action</a>
								<a className="dropdown-item" href="javascript:;">Another action</a>
								<a className="dropdown-item" href="javascript:;">Something else here</a>
								<div className="dropdown-divider"></div>	<a className="dropdown-item" href="javascript:;">Separated link</a>
							</div>
						</div>
					</div>
				</div>
				
     
        <div className="row">
          <div className="col-xxl-8 d-flex align-items-stretch">
            <div className="card w-100 overflow-hidden rounded-4">
              <div className="card-body position-relative p-4">
                <div className="row">
                  <div className="col-12 col-sm-7">
                    <div className="d-flex align-items-center gap-3 mb-5">
                      <img src="assets/images/avatars/01.png" className="rounded-circle bg-grd-info p-1"  width="60" height="60" alt="user"/>
                      <div className="">
                        <p className="mb-0 fw-semibold">Welcome back</p>
                        <h4 className="fw-semibold mb-0 fs-4 mb-0">{userData.username}</h4>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-5">
                      <div className="">
                        <h4 className="mb-1 fw-semibold d-flex align-content-center">$65.4K<i className="ti ti-arrow-up-right fs-5 lh-base text-success"></i>
                        </h4>
                        <p className="mb-3">Today's Sales</p>
                        <div className="progress mb-0" style={{height:'5px'}}>
                          <div className="progress-bar bg-grd-success" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="vr"></div>
                      <div className="">
                        <h4 className="mb-1 fw-semibold d-flex align-content-center">78.4%<i className="ti ti-arrow-up-right fs-5 lh-base text-success"></i>
                        </h4>
                        <p className="mb-3">Growth Rate</p>
                        <div className="progress mb-0" style={{height:'5px'}}>
                          <div className="progress-bar bg-grd-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-5">
                    <div className="welcome-back-img pt-4">
                       <img src="assets/images/gallery/welcome-back-3.png" height="180" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: '20px' }}>
      <h2>Nutrition Progress</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <div style={{ width: '300px', height: '300px' }}>
        <h3>Pie Chart</h3>
        <Pie data={pieData} options={options} />
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <h3>Bar Chart</h3>
        <Bar data={barData} options={options} />
      </div>
    </div>
    </div>
         
         </div>



    </div>
  </main>
  

  
     <div className="overlay btn-toggle"></div>

   <footer className="page-footer mt-5">
    <p className="mb-0">Copyright © 2024. All right reserved.</p>
  </footer>


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

export default Index