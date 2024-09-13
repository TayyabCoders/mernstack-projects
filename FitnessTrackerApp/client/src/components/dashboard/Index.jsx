import React from 'react'

function Index() {
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
                        <h4 className="fw-semibold mb-0 fs-4 mb-0">Jhon Anderson!</h4>
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
          <div className="col-xl-6 col-xxl-2 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-1">
                  <div className="">
                    <h5 className="mb-0">42.5K</h5>
                    <p className="mb-0">Active Users</p>
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
                <div className="chart-container2">
                  <div id="chart1"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0 font-12">24K users increased from last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-2 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">97.4K</h5>
                    <p className="mb-0">Total Users</p>
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
                <div className="chart-container2">
                  <div id="chart2"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0 font-12"><span className="text-success me-1">12.5%</span> from last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="text-center">
                  <h6 className="mb-0">Monthly Revenue</h6>
                </div>
                <div className="mt-4" id="chart5"></div>
                <p>Avrage monthly sale for every author</p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="">
                    <h1 className="mb-0 text-primary">68.9%</h1>
                  </div>
                  <div className="d-flex align-items-center align-self-end">
                    <p className="mb-0 text-success">34.5%</p>
                    <span className="material-icons-outlined text-success">expand_less</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="">
                      <h5 className="mb-0">Device Type</h5>
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
                  <div className="position-relative">
                    <div className="piechart-legend">
                      <h2 className="mb-1">68%</h2>
                      <h6 className="mb-0">Total Views</h6>
                    </div>
                    <div id="chart6"></div>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 d-flex align-items-center gap-2 w-25"><span
                          className="material-icons-outlined fs-6 text-primary">desktop_windows</span>Desktop</p>
                      <div className="">
                        <p className="mb-0">35%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 d-flex align-items-center gap-2 w-25"><span
                          className="material-icons-outlined fs-6 text-danger">tablet_mac</span>Tablet</p>
                      <div className="">
                        <p className="mb-0">48%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 d-flex align-items-center gap-2 w-25"><span
                          className="material-icons-outlined fs-6 text-success">phone_android</span>Mobile</p>
                      <div className="">
                        <p className="mb-0">27%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="card w-100 rounded-4">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-1">
                      <div className="">
                        <h5 className="mb-0">82.7K</h5>
                        <p className="mb-0">Total Clicks</p>
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
                    <div className="chart-container2">
                      <div id="chart3"></div>
                    </div>
                    <div className="text-center">
                      <p className="mb-0 font-12"><span className="text-success me-1">12.5%</span> from last month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 d-flex align-items-stretch">
                <div className="card w-100 rounded-4">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-1">
                      <div className="">
                        <h5 className="mb-0">68.4K</h5>
                        <p className="mb-0">Total Views</p>
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
                    <div className="chart-container2">
                      <div id="chart4"></div>
                    </div>
                    <div className="text-center">
                      <p className="mb-0 font-12">35K users increased from last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="">
                    <h3 className="mb-0">85,247</h3>
                  </div>
                  <div className="flex-grow-0">
                    <p
                      className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-success text-success bg-opacity-10">
                      <span className="material-icons-outlined fs-6">arrow_downward</span>23.7%
                    </p>
                  </div>
                </div>
                <p className="mb-0">Total Accounts</p>
                <div id="chart7"></div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h6 className="mb-0 fw-bold">Campaign Stats</h6>
                  </div>
                  <div className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span className="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                 </div>

                  <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0 bg-transparent">
                        <div className="d-flex align-items-center gap-3">
                          <div className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-primary">
                            <span className="material-icons-outlined text-white">calendar_today</span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Campaigns</h6>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">54</p>
                            <p className="mb-0 fw-bold text-success">28%</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0 bg-transparent">
                        <div className="d-flex align-items-center gap-3">
                          <div className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-success">
                            <span className="material-icons-outlined text-white">email</span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Emailed</h6>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">245</p>
                            <p className="mb-0 fw-bold text-danger">15%</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0 bg-transparent">
                        <div className="d-flex align-items-center gap-3">
                          <div className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-branding">
                            <span className="material-icons-outlined text-white">open_in_new</span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Opened</h6>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">54</p>
                            <p className="mb-0 fw-bold text-success">30.5%</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0 bg-transparent">
                        <div className="d-flex align-items-center gap-3">
                          <div className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-warning">
                            <span className="material-icons-outlined text-white">ads_click</span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Clicked</h6>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">859</p>
                            <p className="mb-0 fw-bold text-danger">34.6%</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0 bg-transparent">
                        <div className="d-flex align-items-center gap-3">
                          <div className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-info">
                            <span className="material-icons-outlined text-white">subscriptions</span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Subscribed</h6>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">24,758</p>
                            <p className="mb-0 fw-bold text-success">53%</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0 bg-transparent">
                        <div className="d-flex align-items-center gap-3">
                          <div className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-danger">
                            <span className="material-icons-outlined text-white">inbox</span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Spam Message</h6>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">548</p>
                            <p className="mb-0 fw-bold text-danger">47%</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0 bg-transparent">
                        <div className="d-flex align-items-center gap-3">
                          <div className="wh-42 d-flex align-items-center justify-content-center rounded-3 bg-grd-deep-blue">
                            <span className="material-icons-outlined text-white">visibility</span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Views Mails</h6>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">9845</p>
                            <p className="mb-0 fw-bold text-success">68%</p>
                          </div>
                        </div>
                      </li>
                  </ul>

              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div id="chart8"></div>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="">
                    <h1 className="mb-0">36.7%</h1>
                  </div>
                  <div className="d-flex align-items-center align-self-end gap-2">
                    <span className="material-icons-outlined text-success">trending_up</span>
                    <p className="mb-0 text-success">34.5%</p>
                  </div>
                </div>
                <p className="mb-4">Visitors Growth</p>
                <div className="d-flex flex-column gap-3">
                  <div className="">
                    <p className="mb-1">Cliks <span className="float-end">2589</span></p>
                    <div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-grd-primary" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="">
                    <p className="mb-1">Likes <span className="float-end">6748</span></p>
                    <div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-grd-warning" style={{width: '55%'}}></div>
                    </div>
                  </div>
                  <div className="">
                    <p className="mb-1">Upvotes <span className="float-end">9842</span></p>
                    <div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-grd-info" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0 fw-bold">Social Leads</h5>
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
                <div className="d-flex flex-column justify-content-between gap-4">
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <img src="assets/images/apps/17.png" width="32" alt=""/>
                      <p className="mb-0">Facebook</p>
                    </div>
                    <div className="">
                      <p className="mb-0 fs-6">55%</p>
                    </div>
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{ "fill": ["#0d6efd", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <img src="assets/images/apps/18.png" width="32" alt=""/>
                      <p className="mb-0">LinkedIn</p>
                    </div>
                    <div className="">
                      <p className="mb-0 fs-6">67%</p>
                    </div>
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{ "fill": ["#fc185a", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <img src="assets/images/apps/19.png" width="32" alt=""/>
                      <p className="mb-0">Instagram</p>
                    </div>
                    <div className="">
                      <p className="mb-0 fs-6">78%</p>
                    </div>
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{ "fill": ["#02c27a", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <img src="assets/images/apps/20.png" width="32" alt=""/>
                      <p className="mb-0">Snapchat</p>
                    </div>
                    <div className="">
                      <p className="mb-0 fs-6">46%</p>
                    </div>
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{ "fill": ["#fd7e14", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <img src="assets/images/apps/05.png" width="32" alt=""/>
                      <p className="mb-0">Google</p>
                    </div>
                    <div className="">
                      <p className="mb-0 fs-6">38%</p>
                    </div>
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{ "fill": ["#0dcaf0", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <img src="assets/images/apps/08.png" width="32" alt=""/>
                      <p className="mb-0">Altaba</p>
                    </div>
                    <div className="">
                      <p className="mb-0 fs-6">15%</p>
                    </div>
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{ "fill": ["#6f42c1", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <img src="assets/images/apps/07.png" width="32" alt=""/>
                      <p className="mb-0">Spotify</p>
                    </div>
                    <div className="">
                      <p className="mb-0 fs-6">12%</p>
                    </div>
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{ "fill": ["#ff00b3", "rgb(255 255 255 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="col-xl-6 col-xxl-4 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-header border-0 p-3 border-bottom">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="">
                    <h5 className="mb-0">New Users</h5>
                  </div>
                  <div className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span className="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="user-list p-3">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <img src="assets/images/avatars/01.png" width="45" height="45" className="rounded-circle" alt=""/>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">Elon Jonado</h6>
                        <p className="mb-0">elon_deo</p>
                      </div>
                      <div className="form-check form-check-inline me-0">
                        <input className="form-check-input ms-0" type="checkbox"/>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img src="assets/images/avatars/02.png" width="45" height="45" className="rounded-circle" alt=""/>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">Alexzender Clito</h6>
                        <p className="mb-0">zli_alexzender</p>
                      </div>
                      <div className="form-check form-check-inline me-0">
                        <input className="form-check-input ms-0" type="checkbox"/>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img src="assets/images/avatars/03.png" width="45" height="45" className="rounded-circle" alt=""/>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">Michle Tinko</h6>
                        <p className="mb-0">tinko_michle</p>
                      </div>
                      <div className="form-check form-check-inline me-0">
                        <input className="form-check-input ms-0" type="checkbox"/>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img src="assets/images/avatars/04.png" width="45" height="45" className="rounded-circle" alt=""/>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">KailWemba</h6>
                        <p className="mb-0">wemba_kl</p>
                      </div>
                      <div className="form-check form-check-inline me-0">
                        <input className="form-check-input ms-0" type="checkbox"/>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img src="assets/images/avatars/05.png" width="45" height="45" className="rounded-circle" alt=""/>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">Henhco Tino</h6>
                        <p className="mb-0">Henhco_tino</p>
                      </div>
                      <div className="form-check form-check-inline me-0">
                        <input className="form-check-input ms-0" type="checkbox"/>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img src="assets/images/avatars/06.png" width="45" height="45" className="rounded-circle" alt=""/>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">Gonjiko Fernando</h6>
                        <p className="mb-0">gonjiko_fernando</p>
                      </div>
                      <div className="form-check form-check-inline me-0">
                        <input className="form-check-input ms-0" type="checkbox"/>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img src="assets/images/avatars/08.png" width="45" height="45" className="rounded-circle" alt=""/>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">Specer Kilo</h6>
                        <p className="mb-0">specer_kilo</p>
                      </div>
                      <div className="form-check form-check-inline me-0">
                        <input className="form-check-input ms-0" type="checkbox"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-transparent p-3">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <a href="javascript:;" className="sharelink"><i className="material-icons-outlined">share</i></a>
                  <a href="javascript:;" className="sharelink"><i className="material-icons-outlined">textsms</i></a>
                  <a href="javascript:;" className="sharelink"><i className="material-icons-outlined">email</i></a>
                  <a href="javascript:;" className="sharelink"><i className="material-icons-outlined">attach_file</i></a>
                  <a href="javascript:;" className="sharelink"><i className="material-icons-outlined">event</i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xxl-8 d-flex align-items-stretch">
            <div className="card w-100 rounded-4">
              <div className="card-body">
               <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">Recent Orders</h5>
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
                <div className="order-search position-relative my-3">
                  <input className="form-control rounded-5 px-5" type="text" placeholder="Search"/>
                  <span className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50">search</span>
                </div>
                 <div className="table-responsive">
                     <table className="table align-middle">
                       <thead>
                        <tr>
                          <th>Item Name</th>
                          <th>Amount</th>
                          <th>Vendor</th>
                          <th>Status</th>
                          <th>Rating</th>
                        </tr>
                       </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                 <div className="">
                                    <img src="assets/images/top-products/01.png" className="rounded-circle" width="50" height="50" alt=""/>
                                 </div>
                                 <p className="mb-0">Sports Shoes</p>
                              </div>
                            </td>
                            <td>$149</td>
                            <td>Julia Sunota</td>
                            <td><p className="dash-lable mb-0 bg-success bg-opacity-10 text-success rounded-2">Completed</p></td>
                            <td>
                              <div className="d-flex align-items-center gap-1">
                                <p className="mb-0">5.0</p>
                                <i className="material-icons-outlined text-warning fs-6">star</i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                 <div className="">
                                    <img src="assets/images/top-products/02.png" className="rounded-circle" width="50" height="50" alt=""/>
                                 </div>
                                 <p className="mb-0">Goldan Watch</p>
                              </div>
                            </td>
                            <td>$168</td>
                            <td>Julia Sunota</td>
                            <td><p className="dash-lable mb-0 bg-success bg-opacity-10 text-success rounded-2">Completed</p></td>
                            <td>
                              <div className="d-flex align-items-center gap-1">
                                <p className="mb-0">5.0</p>
                                <i className="material-icons-outlined text-warning fs-6">star</i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                 <div className="">
                                    <img src="assets/images/top-products/03.png" className="rounded-circle" width="50" height="50" alt=""/>
                                 </div>
                                 <p className="mb-0">Men Polo Tshirt</p>
                              </div>
                            </td>
                            <td>$124</td>
                            <td>Julia Sunota</td>
                            <td><p className="dash-lable mb-0 bg-warning bg-opacity-10 text-warning rounded-2">Pending</p></td>
                            <td>
                              <div className="d-flex align-items-center gap-1">
                                <p className="mb-0">4.0</p>
                                <i className="material-icons-outlined text-warning fs-6">star</i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                 <div className="">
                                    <img src="assets/images/top-products/04.png" className="rounded-circle" width="50" height="50" alt=""/>
                                 </div>
                                 <p className="mb-0">Blue Jeans Casual</p>
                              </div>
                            </td>
                            <td>$289</td>
                            <td>Julia Sunota</td>
                            <td><p className="dash-lable mb-0 bg-success bg-opacity-10 text-success rounded-2">Completed</p></td>
                            <td>
                              <div className="d-flex align-items-center gap-1">
                                <p className="mb-0">3.0</p>
                                <i className="material-icons-outlined text-warning fs-6">star</i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                 <div className="">
                                    <img src="assets/images/top-products/06.png" className="rounded-circle" width="50" height="50" alt=""/>
                                 </div>
                                 <p className="mb-0">Fancy Shirts</p>
                              </div>
                            </td>
                            <td>$389</td>
                            <td>Julia Sunota</td>
                            <td><p className="dash-lable mb-0 bg-danger bg-opacity-10 text-danger rounded-2">Canceled</p></td>
                            <td>
                              <div className="d-flex align-items-center gap-1">
                                <p className="mb-0">2.0</p>
                                <i className="material-icons-outlined text-warning fs-6">star</i>
                              </div>
                            </td>
                          </tr>

                        </tbody>
                     </table>
                 </div>
              </div>
            </div>
          </div>
        </div>



    </div>
  </main>
  

  
     <div className="overlay btn-toggle"></div>

   <footer className="page-footer">
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