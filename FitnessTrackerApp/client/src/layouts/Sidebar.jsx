import React from 'react'

export default function Sidebar() {
  return (
  <>
  <header className="top-header">
    <nav className="navbar navbar-expand align-items-center gap-4">
      <div className="btn-toggle">
        <a href="javascript:;"><i className="material-icons-outlined">menu</i></a>
      </div>
      <div className="search-bar flex-grow-1">
        <div className="position-relative">
          <input className="form-control rounded-5 px-5 search-control d-lg-block d-none" type="text" placeholder="Search"/>
          <span className="material-icons-outlined position-absolute d-lg-block d-none ms-3 translate-middle-y start-0 top-50">search</span>
          <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 search-close">close</span>
          <div className="search-popup p-3">
            <div className="card rounded-4 overflow-hidden">
              <div className="card-header d-lg-none">
                <div className="position-relative">
                  <input className="form-control rounded-5 px-5 mobile-search-control" type="text" placeholder="Search"/>
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
                <hr/>
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
  
                <hr/>
                <p className="search-title">Members</p>
  
                <div className="search-list d-flex flex-column gap-2">
                  <div className="search-list-item d-flex align-items-center gap-3">
                    <div className="memmber-img">
                      <img src="assets/images/avatars/01.png" width="32" height="32" className="rounded-circle" alt=""/>
                    </div>
                    <div className="">
                      <h5 className="mb-0 search-list-title ">Andrew Stark</h5>
                    </div>
                  </div>
  
                  <div className="search-list-item d-flex align-items-center gap-3">
                    <div className="memmber-img">
                      <img src="assets/images/avatars/02.png" width="32" height="32" className="rounded-circle" alt=""/>
                    </div>
                    <div className="">
                      <h5 className="mb-0 search-list-title ">Snetro Jhonia</h5>
                    </div>
                  </div>
  
                  <div className="search-list-item d-flex align-items-center gap-3">
                    <div className="memmber-img">
                      <img src="assets/images/avatars/03.png" width="32" height="32" className="rounded-circle" alt=""/>
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
          <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="avascript:;" data-bs-toggle="dropdown"><img src="assets/images/county/02.png" width="22" alt=""/>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/01.png" width="20" alt=""/><span className="ms-2">English</span></a>
            </li>
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/02.png" width="20" alt=""/><span className="ms-2">Catalan</span></a>
            </li>
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/03.png" width="20" alt=""/><span className="ms-2">French</span></a>
            </li>
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/04.png" width="20" alt/><span className="ms-2">Belize</span></a>
            </li>
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/05.png" width="20" alt=""/><span className="ms-2">Colombia</span></a>
            </li>
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/06.png" width="20" alt=""/><span className="ms-2">Spanish</span></a>
            </li>
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/07.png" width="20" alt=""/><span className="ms-2">Georgian</span></a>
            </li>
            <li><a className="dropdown-item d-flex align-items-center py-2" href="javascript:;"><img src="assets/images/county/08.png" width="20" alt=""/><span className="ms-2">Hindi</span></a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown position-static d-md-flex d-none">
          <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-auto-close="outside"
          data-bs-toggle="dropdown" href="javascript:;"><i className="material-icons-outlined">done_all</i></a>
          <div className="dropdown-menu dropdown-menu-end mega-menu shadow-lg p-4 p-lg-5">
            <div className="mega-menu-widgets">
             <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4 g-lg-5">
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <div className="mega-menu-icon flex-shrink-0 bg-danger">
                          <i className="material-icons-outlined">question_answer</i>
                        </div>
                        <div className="mega-menu-content">
                           <h5>Marketing</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/02.png" width="40" alt=""/>
                        <div className="mega-menu-content">
                           <h5>Website</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/03.png" width="40" alt=""/>
                        <div className="mega-menu-content"> 
                            <h5>Subscribers</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/01.png" width="40" alt=""/>
                        <div className="mega-menu-content">
                           <h5>Hubspot</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/11.png" width="40" alt=""/>
                        <div className="mega-menu-content">
                           <h5>Templates</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/13.png" width="40" alt=""/>
                        <div className="mega-menu-content">
                           <h5>Ebooks</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/12.png" width="40" alt=""/>
                        <div className="mega-menu-content">
                           <h5>Sales</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/08.png" width="40" alt=""/>
                        <div className="mega-menu-content">
                           <h5>Tools</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-4 shadow-none border mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-start gap-3">
                        <img src="assets/images/megaIcons/09.png" width="40" alt=""/>
                        <div className="mega-menu-content">
                           <h5>Academy</h5>
                           <p className="mb-0 f-14">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                             the visual form of a document.</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
             </div>
            </div>
          </div>
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
                      <img src="assets/images/apps/01.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Gmail</p>
                    </div>
                  </div>
                </div>
                <div className="col border-end">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/02.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Skype</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/03.png" width="36" alt=""/>
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
                      <img src="assets/images/apps/04.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">YouTube</p>
                    </div>
                  </div>
                </div>
                <div className="col border-end">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/05.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Google</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/06.png" width="36" alt=""/>
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
                      <img src="assets/images/apps/07.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Spotify</p>
                    </div>
                  </div>
                </div>
                <div className="col border-end">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/08.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Yahoo</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/09.png" width="36" alt=""/>
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
                      <img src="assets/images/apps/10.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Figma</p>
                    </div>
                  </div>
                </div>
                <div className="col border-end">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/11.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Paypal</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="app-wrapper d-flex flex-column gap-2 text-center">
                    <div className="app-icon">
                      <img src="assets/images/apps/12.png" width="36" alt=""/>
                    </div>
                    <div className="app-name">
                      <p className="mb-0">Photo</p>
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
                    <hr className="dropdown-divider"/>
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
                      <img src="assets/images/avatars/01.png" className="rounded-circle" width="45" height="45" alt=""/>
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
                      <img src="assets/images/apps/13.png" className="rounded-circle" width="45" height="45" alt=""/>
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
                      <img src="assets/images/apps/14.png" className="rounded-circle" width="45" height="45" alt=""/>
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
                      <img src="assets/images/avatars/06.png" className="rounded-circle" width="45" height="45" alt=""/>
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
        <li className="nav-item d-md-flex d-none">
          <a className="nav-link position-relative" data-bs-toggle="offcanvas" href="#offcanvasCart"><i
              className="material-icons-outlined">shopping_cart</i>
            <span className="badge-notify">8</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a href="javascrpt:;" className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
             <img src="assets/images/avatars/01.png" className="rounded-circle p-1 border" width="45" height="45" alt=""/>
          </a>
          <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
            <a className="dropdown-item  gap-2 py-2" href="javascript:;">
              <div className="text-center">
                <img src="assets/images/avatars/01.png" className="rounded-circle p-1 shadow mb-3" width="90" height="90"
                  alt=""/>
                <h5 className="user-name mb-0 fw-bold">Hello, Jhon</h5>
              </div>
            </a>
            <hr className="dropdown-divider"/>
            <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
              className="material-icons-outlined">person_outline</i>Profile</a>
            <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
              className="material-icons-outlined">local_bar</i>Setting</a>
            <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
              className="material-icons-outlined">dashboard</i>Dashboard</a>
            <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
              className="material-icons-outlined">account_balance</i>Earning</a>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
                className="material-icons-outlined">cloud_download</i>Downloads</a>
            <hr className="dropdown-divider"/>
            <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="javascript:;"><i
            className="material-icons-outlined">power_settings_new</i>Logout</a>
          </div>
        </li>
      </ul>

    </nav>
  </header>
   <aside className="sidebar-wrapper" data-simplebar="true">
    <div className="sidebar-header">
      <div className="logo-icon">
        <img src="assets/images/logo-icon.png" className="logo-img" alt=""/>
      </div>
      <div className="logo-name flex-grow-1">
        <h5 className="mb-0">Maxton</h5>
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
              <li><a href="index-2.html"><i className="material-icons-outlined">arrow_right</i>Analysis</a>
              </li>
              <li><a href="index2.html"><i className="material-icons-outlined">arrow_right</i>eCommerce</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" className="has-arrow">
              <div className="parent-icon"><i className="material-icons-outlined">widgets</i>
              </div>
              <div className="menu-title">Widgets</div>
            </a>
            <ul>
              <li><a href="widgets-data.html"><i className="material-icons-outlined">arrow_right</i>Data</a>
              </li>
              <li><a href="widgets-static.html"><i className="material-icons-outlined">arrow_right</i>Static</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">apps</i>
              </div>
              <div className="menu-title">Apps</div>
            </a>
            <ul>
              <li><a href="app-emailbox.html"><i className="material-icons-outlined">arrow_right</i>Email Box</a>
              </li>
              <li><a href="app-emailread.html"><i className="material-icons-outlined">arrow_right</i>Email Read</a>
              </li>
              <li><a href="app-chat-box.html"><i className="material-icons-outlined">arrow_right</i>Chat</a>
              </li>
              <li><a href="app-fullcalender.html"><i className="material-icons-outlined">arrow_right</i>Calendar</a>
              </li>
              <li><a href="app-to-do.html"><i className="material-icons-outlined">arrow_right</i>To do</a>
              </li>
              <li><a href="app-invoice.html"><i className="material-icons-outlined">arrow_right</i>Invoice</a>
              </li>
            </ul>
          </li>
          <li className="menu-label">UI Elements</li>
          <li>
            <a href="cards.html">
              <div className="parent-icon"><i className="material-icons-outlined">inventory_2</i>
              </div>
              <div className="menu-title">Cards</div>
            </a>
          </li>
          
          <li>
            <a href="javascript:;" className="has-arrow">
              <div className="parent-icon"><i className="material-icons-outlined">shopping_bag</i>
              </div>
              <div className="menu-title">eCommerce</div>
            </a>
            <ul>
              <li><a href="ecommerce-add-product.html"><i className="material-icons-outlined">arrow_right</i>Add Product</a>
              </li>
              <li><a href="ecommerce-products.html"><i className="material-icons-outlined">arrow_right</i>Products</a>
              </li>
              <li><a href="ecommerce-customers.html"><i className="material-icons-outlined">arrow_right</i>Customers</a>
              </li>
              <li><a href="ecommerce-customer-details.html"><i className="material-icons-outlined">arrow_right</i>Customer Details</a>
              </li>
              <li><a href="ecommerce-orders.html"><i className="material-icons-outlined">arrow_right</i>Orders</a>
              </li>
              <li><a href="ecommerce-order-details.html"><i className="material-icons-outlined">arrow_right</i>Order Details</a>
              </li>
            </ul>     
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">card_giftcard</i>
              </div>
              <div className="menu-title">Components</div>
            </a>
            <ul>
              <li><a href="component-alerts.html"><i className="material-icons-outlined">arrow_right</i>Alerts</a>
              </li>
              <li><a href="component-accordions.html"><i className="material-icons-outlined">arrow_right</i>Accordions</a>
              </li>
              <li><a href="component-badges.html"><i className="material-icons-outlined">arrow_right</i>Badges</a>
              </li>
              <li><a href="component-buttons.html"><i className="material-icons-outlined">arrow_right</i>Buttons</a>
              </li>
              <li><a href="component-carousels.html"><i className="material-icons-outlined">arrow_right</i>Carousels</a>
              </li>
              <li><a href="component-media-object.html"><i className="material-icons-outlined">arrow_right</i>Media
                  Objects</a>
              </li>
              <li><a href="component-modals.html"><i className="material-icons-outlined">arrow_right</i>Modals</a>
              </li>
              <li><a href="component-navs-tabs.html"><i className="material-icons-outlined">arrow_right</i>Navs & Tabs</a>
              </li>
              <li><a href="component-navbar.html"><i className="material-icons-outlined">arrow_right</i>Navbar</a>
              </li>
              <li><a href="component-paginations.html"><i className="material-icons-outlined">arrow_right</i>Pagination</a>
              </li>
              <li><a href="component-popovers-tooltips.html"><i className="material-icons-outlined">arrow_right</i>Popovers
                  & Tooltips</a>    
              </li>
              <li><a href="component-progress-bars.html"><i className="material-icons-outlined">arrow_right</i>Progress</a>
              </li>
              <li><a href="component-spinners.html"><i className="material-icons-outlined">arrow_right</i>Spinners</a>
              </li>
              <li><a href="component-notifications.html"><i
                    className="material-icons-outlined">arrow_right</i>Notifications</a>
              </li>
              <li><a href="component-avtars-chips.html"><i className="material-icons-outlined">arrow_right</i>Avatrs &
                  Chips</a>
              </li>
              <li><a href="component-typography.html"><i className="material-icons-outlined">arrow_right</i>Typography</a>
               </li>
               <li><a href="component-text-utilities.html"><i className="material-icons-outlined">arrow_right</i>Utilities</a>
               </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">view_agenda</i>
              </div>
              <div className="menu-title">Icons</div>
            </a>
            <ul>
              <li><a href="icons-line-icons.html"><i className="material-icons-outlined">arrow_right</i>Line Icons</a>
              </li>
              <li><a href="icons-boxicons.html"><i className="material-icons-outlined">arrow_right</i>Boxicons</a>
              </li>
              <li><a href="icons-feather-icons.html"><i className="material-icons-outlined">arrow_right</i>Feather
                  Icons</a>
              </li>
            </ul>
          </li>
          <li className="menu-label">Forms & Tables</li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">toc</i>
              </div>
              <div className="menu-title">Forms</div>
            </a>
            <ul>
              <li><a href="form-elements.html"><i className="material-icons-outlined">arrow_right</i>Form Elements</a>
              </li>
              <li><a href="form-input-group.html"><i className="material-icons-outlined">arrow_right</i>Input Groups</a>
              </li>
              <li><a href="form-radios-and-checkboxes.html"><i className="material-icons-outlined">arrow_right</i>Radios &
                  Checkboxes</a>
              </li>
              <li><a href="form-layouts.html"><i className="material-icons-outlined">arrow_right</i>Forms Layouts</a>
              </li>
              <li><a href="form-validations.html"><i className="material-icons-outlined">arrow_right</i>Form Validation</a>
              </li>
              <li><a href="form-wizard.html"><i className="material-icons-outlined">arrow_right</i>Form Wizard</a>
              </li>
              <li><a href="form-file-upload.html"><i className="material-icons-outlined">arrow_right</i>File Upload</a>
              </li>
              <li><a href="form-date-time-pickes.html"><i className="material-icons-outlined">arrow_right</i>Date
                  Pickers</a>
              </li>
              <li><a href="form-select2.html"><i className="material-icons-outlined">arrow_right</i>Select2</a>
              </li>
              <li><a href="form-repeater.html"><i className="material-icons-outlined">arrow_right</i>Form Repeater</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">api</i>
              </div>
              <div className="menu-title">Tables</div>
            </a>
            <ul>
              <li><a href="table-basic-table.html"><i className="material-icons-outlined">arrow_right</i>Basic Table</a>
              </li>
              <li><a href="table-datatable.html"><i className="material-icons-outlined">arrow_right</i>Data Table</a>
              </li>
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
                  <li><a href="auth-basic-login.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Login</a></li>
                  <li><a href="auth-basic-register.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Register</a></li>
                  <li><a href="auth-basic-forgot-password.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Forgot Password</a></li>
                  <li><a href="auth-basic-reset-password.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Reset Password</a></li>
                </ul>
              </li>
              <li><a className="has-arrow" href="javascript:;"><i className="material-icons-outlined">arrow_right</i>Cover</a>
                <ul>
                  <li><a href="auth-cover-login.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Login</a></li>
                  <li><a href="auth-cover-register.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Register</a></li>
                  <li><a href="auth-cover-forgot-password.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Forgot Password</a></li>
                  <li><a href="auth-cover-reset-password.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Reset Password</a></li>
                </ul>
              </li>
              <li><a className="has-arrow" href="javascript:;"><i className="material-icons-outlined">arrow_right</i>Boxed</a>
                  <ul>
                    <li><a href="auth-boxed-login.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Login</a></li>
                    <li><a href="auth-boxed-register.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Register</a></li>
                    <li><a href="auth-boxed-forgot-password.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Forgot Password</a></li>
                    <li><a href="auth-boxed-reset-password.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>Reset Password</a></li>
                  </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="user-profile.html">
              <div className="parent-icon"><i className="material-icons-outlined">person</i>
              </div>
              <div className="menu-title">User Profile</div>
            </a>
          </li>
          <li>
            <a href="timeline.html">
              <div className="parent-icon"><i className="material-icons-outlined">join_right</i>
              </div>
              <div className="menu-title">Timeline</div>
            </a>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">report_problem</i>
              </div>
              <div className="menu-title">Pages</div>
            </a>
            <ul>
              <li><a href="pages-error-404.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>404
                  Error</a>
              </li>
              <li><a href="pages-error-505.html" target="_blank"><i className="material-icons-outlined">arrow_right</i>505
                  Error</a>
              </li>
              <li><a href="pages-coming-soon.html" target="_blank"><i
                    className="material-icons-outlined">arrow_right</i>Coming Soon</a>
              </li>
              <li><a href="pages-starter-page.html" target="_blank"><i
                    className="material-icons-outlined">arrow_right</i>Blank Page</a> 
              </li>
            </ul>
          </li>
          <li>
            <a href="faq.html">
              <div className="parent-icon"><i className="material-icons-outlined">help_outline</i>
              </div>
              <div className="menu-title">FAQ</div>
            </a>
          </li>
          <li>
            <a href="pricing-table.html">
              <div className="parent-icon"><i className="material-icons-outlined">sports_football</i>
              </div>
              <div className="menu-title">Pricing</div>
            </a>
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
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">sports_football</i>
              </div>
              <div className="menu-title">Maps</div>
            </a>
            <ul>
              <li><a href="map-google-maps.html"><i className="material-icons-outlined">arrow_right</i>Google Maps</a>
              </li>
              <li><a href="map-vector-maps.html"><i className="material-icons-outlined">arrow_right</i>Vector Maps</a>
              </li>
            </ul>
          </li>
          <li className="menu-label">Others</li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon"><i className="material-icons-outlined">face_5</i>
              </div>
              <div className="menu-title">Menu Levels</div>
            </a>
            <ul>
              <li><a className="has-arrow" href="javascript:;"><i className="material-icons-outlined">arrow_right</i>Level
                  One</a>
                <ul>
                  <li><a className="has-arrow" href="javascript:;"><i className="material-icons-outlined">arrow_right</i>Level
                      Two</a>
                    <ul>
                      <li><a href="javascript:;"><i className="material-icons-outlined">arrow_right</i>Level Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascrpt:;">
              <div className="parent-icon"><i className="material-icons-outlined">description</i>
              </div>
              <div className="menu-title">Documentation</div>
            </a>
          </li>
          <li>
            <a href="javascrpt:;">
              <div className="parent-icon"><i className="material-icons-outlined">support</i>
              </div>
              <div className="menu-title">Support</div>
            </a>
          </li>
         </ul>
    </div>
  </aside>
    </>
  )
}
