import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {

  const handleLogout = () => {
    // Clear the token from localStorage or sessionStorage
    localStorage.removeItem('userToken'); // Or sessionStorage.removeItem('userToken');

    // Redirect to the login page
    window.location.href = '/login';
  };
  return (
    <>
      <header className="top-header">
        <nav className="navbar navbar-expand align-items-center gap-4">
          <div className="btn-toggle">
            <a href="javascript:;"><i className="material-icons-outlined">menu</i></a>
          </div>
          <div className="search-bar flex-grow-1">
            <div className="position-relative">
              <input className="form-control rounded-5 px-5 search-control d-lg-block d-none" type="text" placeholder="Search" />
              <span className="material-icons-outlined position-absolute d-lg-block d-none ms-3 translate-middle-y start-0 top-50">search</span>
              <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 search-close">close</span>
              <div className="search-popup p-3">
                <div className="card rounded-4 overflow-hidden">
                  <div className="card-header d-lg-none">
                    <div className="position-relative">
                      <input className="form-control rounded-5 px-5 mobile-search-control" type="text" placeholder="Search" />
                      <span className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50">search</span>
                      <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 mobile-search-close">close</span>
                    </div>
                  </div>
                  <div className="card-body search-content">
                    <p className="search-title">Recent Searches</p>
                    <div className="d-flex align-items-start flex-wrap gap-2 kewords-wrapper">
                      <a href="javascript:;" className="kewords"><span>Angular Template</span><i
                        className="material-icons-outlined fs-6">search</i></a>
                      <a href="javascript:;" className="kewords"><span>Dashboard</span><i
                        className="material-icons-outlined fs-6">search</i></a>
                      <a href="javascript:;" className="kewords"><span>Admin Template</span><i
                        className="material-icons-outlined fs-6">search</i></a>
                      <a href="javascript:;" className="kewords"><span>Bootstrap 5 Admin</span><i
                        className="material-icons-outlined fs-6">search</i></a>
                      <a href="javascript:;" className="kewords"><span>Html eCommerce</span><i
                        className="material-icons-outlined fs-6">search</i></a>
                      <a href="javascript:;" className="kewords"><span>Sass</span><i
                        className="material-icons-outlined fs-6">search</i></a>
                      <a href="javascript:;" className="kewords"><span>laravel 9</span><i
                        className="material-icons-outlined fs-6">search</i></a>
                    </div>
                    <hr />
                    <p className="search-title">Tutorials</p>
                    <div className="search-list d-flex flex-column gap-2">
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="list-icon">
                          <i className="material-icons-outlined fs-5">play_circle</i>
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title ">Wordpress Tutorials</h5>
                        </div>
                      </div>
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="list-icon">
                          <i className="material-icons-outlined fs-5">shopping_basket</i>
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">eCommerce Website Tutorials</h5>
                        </div>
                      </div>

                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="list-icon">
                          <i className="material-icons-outlined fs-5">laptop</i>
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">Responsive Design</h5>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <p className="search-title">Members</p>

                    <div className="search-list d-flex flex-column gap-2">
                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="memmber-img">
                          <img src="assets/images/avatars/01.png" width="32" height="32" className="rounded-circle" alt="" />
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title ">Andrew Stark</h5>
                        </div>
                      </div>

                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="memmber-img">
                          <img src="assets/images/avatars/02.png" width="32" height="32" className="rounded-circle" alt="" />
                        </div>
                        <div className="">0
                          <h5 className="mb-0 search-list-title ">Snetro Jhonia</h5>
                        </div>
                      </div>

                      <div className="search-list-item d-flex align-items-center gap-3">
                        <div className="memmber-img">
                          <img src="assets/images/avatars/03.png" width="32" height="32" className="rounded-circle" alt="" />
                        </div>
                        <div className="">
                          <h5 className="mb-0 search-list-title">Michle Clark</h5>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="card-footer text-center bg-transparent">
                    <a href="javascript:;" className="btn w-100">See All Search Results</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="navbar-nav gap-1 nav-right-links align-items-center">
            <li className="nav-item d-lg-none mobile-search-btn">
              <a className="nav-link" href="javascript:;"><i className="material-icons-outlined">search</i></a>
            </li>



            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-auto-close="outside"
                data-bs-toggle="dropdown" href="javascript:;"><i className="material-icons-outlined">apps</i></a>
              <div className="dropdown-menu dropdown-menu-end dropdown-apps shadow-lg p-3">
                <div className="border rounded-4 overflow-hidden">
                  <div className="row row-cols-3 g-0 border-bottom">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/01.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Gmail</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/02.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Skype</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/03.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Slack</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-cols-3 g-0 border-bottom">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/04.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">YouTube</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/05.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Google</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/06.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Instagram</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-cols-3 g-0 border-bottom">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/07.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Spotify</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/08.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Yahoo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/09.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Facebook</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-cols-3 g-0">
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/10.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Figma</p>
                        </div>
                      </div>
                    </div>
                    <div className="col border-end">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/11.png" width="36" alt="" />
                        </div>
                        <div className="app-name">
                          <p className="mb-0">Paypal</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="app-wrapper d-flex flex-column gap-2 text-center">
                        <div className="app-icon">
                          <img src="assets/images/apps/12.png" width="36" alt="" />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" data-bs-auto-close="outside"
                data-bs-toggle="dropdown" href="javascript:;"><i className="material-icons-outlined">notifications</i>
                <span className="badge-notify">5</span>
              </a>
              <div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
                <div className="px-3 py-1 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="notiy-title mb-0">Notifications</h5>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret option" type="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="material-icons-outlined">
                        more_vert
                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
                      <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
                        className="material-icons-outlined fs-6">inventory_2</i>Archive All</a></div>
                      <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
                        className="material-icons-outlined fs-6">done_all</i>Mark all as read</a></div>
                      <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
                        className="material-icons-outlined fs-6">mic_off</i>Disable Notifications</a></div>
                      <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
                        className="material-icons-outlined fs-6">grade</i>What's new ?</a></div>
                      <div>
                        <hr className="dropdown-divider" />
                      </div>
                      <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
                        className="material-icons-outlined fs-6">leaderboard</i>Reports</a></div>
                    </div>
                  </div>
                </div>
                <div className="notify-list">
                  <div>
                    <a className="dropdown-item border-bottom py-2" href="javascript:;">
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img src="assets/images/avatars/01.png" className="rounded-circle" width="45" height="45" alt="" />
                        </div>
                        <div className="">
                          <h5 className="notify-title">Congratulations Jhon</h5>
                          <p className="mb-0 notify-desc">Many congtars jhon. You have won the gifts.</p>
                          <p className="mb-0 notify-time">Today</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item border-bottom py-2" href="javascript:;">
                      <div className="d-flex align-items-center gap-3">
                        <div className="user-wrapper bg-primary text-primary bg-opacity-10">
                          <span>RS</span>
                        </div>
                        <div className="">
                          <h5 className="notify-title">New Account Created</h5>
                          <p className="mb-0 notify-desc">From USA an user has registered.</p>
                          <p className="mb-0 notify-time">Yesterday</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item border-bottom py-2" href="javascript:;">
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img src="assets/images/apps/13.png" className="rounded-circle" width="45" height="45" alt="" />
                        </div>
                        <div className="">
                          <h5 className="notify-title">Payment Recived</h5>
                          <p className="mb-0 notify-desc">New payment recived successfully</p>
                          <p className="mb-0 notify-time">1d ago</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item border-bottom py-2" href="javascript:;">
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img src="assets/images/apps/14.png" className="rounded-circle" width="45" height="45" alt="" />
                        </div>
                        <div className="">
                          <h5 className="notify-title">New Order Recived</h5>
                          <p className="mb-0 notify-desc">Recived new order from michle</p>
                          <p className="mb-0 notify-time">2:15 AM</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item border-bottom py-2" href="javascript:;">
                      <div className="d-flex align-items-center gap-3">
                        <div className="">
                          <img src="assets/images/avatars/06.png" className="rounded-circle" width="45" height="45" alt="" />
                        </div>
                        <div className="">
                          <h5 className="notify-title">Congratulations Jhon</h5>
                          <p className="mb-0 notify-desc">Many congtars jhon. You have won the gifts.</p>
                          <p className="mb-0 notify-time">Today</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item py-2" href="javascript:;">
                      <div className="d-flex align-items-center gap-3">
                        <div className="user-wrapper bg-danger text-danger bg-opacity-10">
                          <span>PK</span>
                        </div>
                        <div className="">
                          <h5 className="notify-title">New Account Created</h5>
                          <p className="mb-0 notify-desc">From USA an user has registered.</p>
                          <p className="mb-0 notify-time">Yesterday</p>
                        </div>
                        <div className="notify-close position-absolute end-0 me-3">
                          <i className="material-icons-outlined fs-6">close</i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a href="javascrpt:;" className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                <img src="assets/images/avatars/01.png" className="rounded-circle p-1 border" width="45" height="45" alt="" />
              </a>
              <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
                <a className="dropdown-item  gap-2 py-2" href="javascript:;">
                  <div className="text-center">
                    <img src="assets/images/avatars/01.png" className="rounded-circle p-1 shadow mb-3" width="90" height="90"
                      alt="" />
                    <h5 className="user-name mb-0 fw-bold">Hello, Team of FT</h5>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <Link to="/userProfile" className="dropdown-item d-flex align-items-center gap-2 py-2">
            <i className="material-icons-outlined">person_outline</i>
            Profile
        </Link>

        <Link to="/" className="dropdown-item d-flex align-items-center gap-2 py-2">
            <i className="material-icons-outlined">dashboard</i>
            Dashboard
        </Link>

                <hr className="dropdown-divider" />
                {/* <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
            className="material-icons-outlined">power_settings_new</i>Logout</a> */}
                <button onClick={handleLogout} className="dropdown-item d-flex align-items-center gap-2 py-2"><i
                  className="material-icons-outlined">power_settings_new</i>Logout </button>
              </div>
            </li>
          </ul>

        </nav>
      </header>
      <aside className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <div className="logo-icon">
            <img src="assets/images/" className="logo-img" alt="" />
          </div>
          <div className="logo-name flex-grow-1">
            <h5 className="mb-0">Fitness Tracker</h5>
          </div>
          <div className="sidebar-close">
            <span className="material-icons-outlined">close</span>
          </div>
        </div>
        <div className="sidebar-nav">
          <ul className="metismenu" id="sidenav">
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon"><i className="material-icons-outlined">home</i>
                </div>
                <div className="menu-title">Dashboard</div>
              </a>
              <ul>
                <li><Link to="/">
                  <i className="material-icons-outlined">arrow_right</i>
                  Analysis
                </Link>
                </li>
                <li><a href="index2.html"><i className="material-icons-outlined">arrow_right</i>Fitness</a>
                </li>
              </ul>
            </li>
            {/* <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon"><i className="material-icons-outlined">widgets</i>
                </div>
                <div className="menu-title">Widgets</div>
              </a>
              <ul>
                <li><a href="widgets-data.html"><i className="material-icons-outlined">arrow_right</i>Data</a>
                </li>

              </ul>
            </li> */}

            <li className="menu-label">UI Elements</li>


            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon"><i className="material-icons-outlined">shopping_bag</i>
                </div>
                <div className="menu-title">Fitness Forms</div>
              </a>
              <ul>
                <li>
                  <Link to="/addnutrion">
                    <i className="material-icons-outlined">arrow_right</i>
                    Nutrition Form
                  </Link>
                </li>
                {/* <li>
        <Link to="/nutrition-list">
          <i className="material-icons-outlined">arrow_right</i>
          Nutrition List
        </Link>
      </li> */}
                <li>
                  <Link to="/addprogress">
                    <i className="material-icons-outlined">arrow_right</i>
                    Progress Display
                  </Link>
                </li>
                {/* <li>
        <Link to="/progress-list">
          <i className="material-icons-outlined">arrow_right</i>
          Progress List
        </Link>
      </li> */}
                <li>
                  <Link to="/addworkout">
                    <i className="material-icons-outlined">arrow_right</i>
                    Workout Form
                  </Link>
                </li>
                {/* <li>
                  <Link to="/addexercise">
                    <i className="material-icons-outlined">arrow_right</i>
                    Exercise Form
                  </Link>
                </li> */}
              </ul>
            </li>

            <li>

              <ul>


              </ul>
            </li>

            <li className="menu-label">Pages</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon"><i className="material-icons-outlined">lock</i>
                </div>
                <div className="menu-title">Authentication</div>
              </a>
              <ul>
                <li><a className="has-arrow" href="javascript:;"><i className="material-icons-outlined">arrow_right</i>Basic</a>
                  <ul>
                    <li>
                      <Link to="/login">
                        <i className="material-icons-outlined">arrow_right</i>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register">
                        <i className="material-icons-outlined">arrow_right</i>
                        Register
                      </Link>
                    </li>
              
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/userprofile">
                <div className="parent-icon">
                  <i className="material-icons-outlined">person</i>
                </div>
                <div className="menu-title">User Profile</div>
              </Link>
            </li>

        
             
           
           
            <li className="menu-label">Charts & Maps</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon"><i className="material-icons-outlined">fitbit</i>
                </div>
                <div className="menu-title">Charts</div>
              </a>
              <ul>
                <li><a href="charts-apex-chart.html"><i className="material-icons-outlined">arrow_right</i>Apex</a>
                </li>
                <li><a href="charts-chartjs.html"><i className="material-icons-outlined">arrow_right</i>Chartjs</a>
                </li>
              </ul>
            </li>


          </ul>
        </div>
      </aside>
    </>
  )
}
