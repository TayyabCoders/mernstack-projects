import React, { useState,useEffect  } from 'react';
import axios from 'axios';

export default function AddWorkout() {
    const [name, setName] = useState('');
  const [category, setCategory] = useState('strength');
  const [date, setDate] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/workout', { name, category, date })
      .then(response => {
        console.log('Workout added!', response.data);
        // Optionally clear form fields or handle response
      })
      .catch(error => {
        console.error('There was an error adding the workout!', error);
      });
    };
    useEffect(() => {
        axios.get('http://localhost:5000/api/workout')
          .then(response => {
            setWorkouts(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the workouts!', error);
          });
      }, []);
    return (
        <>
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="row">
                        <div className="col-12 col-xl-12">
                            <div className="card rounded-4 border-top border-4 border-primary border-gradient-1">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <div className="">
                                            <h5 className="mb-0 fw-bold">Add Workout</h5>
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
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Workout Name</label>
                                            <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="input1" placeholder="Workout Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <label for="input6" className="form-label">Date </label>
                                            <input value={date} onChange={e => setDate(e.target.value)}  type="date" className="form-control" id="input6" />
                                        </div>
                                        <div className="col-md-12">
                                            <label for="input7" className="form-label">Category</label>
                                            <select value={category} onChange={e => setCategory(e.target.value)}  id="input7" className="form-select">
                                                <option selected="">Choose...</option>
                                                <option value="strength">Strength</option>
                                                <option value="cardio">Cardio</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="d-md-flex d-grid align-items-center gap-3">
                                                <button type="submit" className="btn btn-grd-primary px-4">Add Workout</button>
                                                <button type="button" className="btn btn-light px-4">Reset</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                  
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Fitness Tracker</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Workout</li>
            </ol>
          </nav>
        </div>
        <div className="ms-auto">
          <div className="btn-group">
            <button type="button" className="btn btn-primary">Settings</button>
            <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"> <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a className="dropdown-item"
                href="javascript:;">Action</a>
              <a className="dropdown-item" href="javascript:;">Another action</a>
              <a className="dropdown-item" href="javascript:;">Something else here</a>
              <div className="dropdown-divider"></div> <a className="dropdown-item" href="javascript:;">Separated link</a>
            </div>
          </div>
        </div>
      </div>

      <div className="product-count d-flex align-items-center gap-3 gap-lg-4 mb-4 fw-medium flex-wrap font-text1">
        <a href="javascript:;"><span className="me-1">All</span><span className="text-secondary">(88754)</span></a>
        <a href="javascript:;"><span className="me-1">Published</span><span className="text-secondary">(56242)</span></a>
        <a href="javascript:;"><span className="me-1">Drafts</span><span className="text-secondary">(17)</span></a>
        <a href="javascript:;"><span className="me-1">On Discount</span><span className="text-secondary">(88754)</span></a>
      </div>

      <div className="row g-3">
        <div className="col-auto">
          <div className="position-relative">
            <input className="form-control px-5" type="search" placeholder="Search Products"/>
            <span
              className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50 fs-5">search</span>
          </div>
        </div>
        <div className="col-auto flex-grow-1 overflow-auto">
          <div className="btn-group position-static">
            <div className="btn-group position-static">
              <button type="button" className="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown"
                aria-expanded="false">
                Category
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
              </ul>
            </div>
            <div className="btn-group position-static">
              <button type="button" className="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown"
                aria-expanded="false">
                Vendor
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
              </ul>
            </div>
            <div className="btn-group position-static">
              <button type="button" className="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown"
                aria-expanded="false">
                Collection
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="javascript:;">Action</a></li>
                <li><a className="dropdown-item" href="javascript:;">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="javascript:;">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex align-items-center gap-2 justify-content-lg-end">
            <button className="btn btn-filter px-4"><i className="bi bi-box-arrow-right me-2"></i>Export</button>
            <button className="btn btn-primary px-4"><i className="bi bi-plus-lg me-2"></i>Add Product</button>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <div className="product-table">
            <div className="table-responsive white-space-nowrap">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>
                      <input className="form-check-input" type="checkbox"/>
                    </th>
                    <th>Workout Name</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {workouts.map(workout => (
                  <tr key={workout._id}>
                    <td>
                      <input className="form-check-input" type="checkbox"/>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="product-box">
                          <img src="assets/images/orders/01.png" width="70" className="rounded-3" alt=""/>
                        </div>
                        <div className="product-info">
                          <a href="javascript:;" className="product-title">{workout.name}</a>
                          <p className="mb-0 product-category">Category : Fashion</p>
                        </div>
                      </div>
                    </td>
                    <td>{workout.category}</td>
                    <td>{new Date(workout.date).toLocaleDateString()}</td>
                  </tr>
                   ))}
                </tbody>
              </table>
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
                                <img src="assets/images/orders/01.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <img src="assets/images/orders/02.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <img src="assets/images/orders/03.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <img src="assets/images/orders/04.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <img src="assets/images/orders/05.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <img src="assets/images/orders/06.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <img src="assets/images/orders/07.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <img src="assets/images/orders/08.png" className="img-fluid rounded-3" width="75" alt="" />
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
                                <input type="radio" className="btn-check" name="theme-options" id="BlueTheme" checked />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="BlueTheme">
                                    <span className="material-icons-outlined">contactless</span>
                                    <span>Blue</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input type="radio" className="btn-check" name="theme-options" id="LightTheme" />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="LightTheme">
                                    <span className="material-icons-outlined">light_mode</span>
                                    <span>Light</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input type="radio" className="btn-check" name="theme-options" id="DarkTheme" />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="DarkTheme">
                                    <span className="material-icons-outlined">dark_mode</span>
                                    <span>Dark</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input type="radio" className="btn-check" name="theme-options" id="SemiDarkTheme" />
                                <label className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4" for="SemiDarkTheme">
                                    <span className="material-icons-outlined">contrast</span>
                                    <span>Semi Dark</span>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6">
                                <input type="radio" className="btn-check" name="theme-options" id="BoderedTheme" />
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
