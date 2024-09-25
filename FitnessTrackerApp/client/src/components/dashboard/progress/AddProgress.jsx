import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import {jwtDecode}  from 'jwt-decode';

export default function AddProgress() {
    const [weight, setWeight] = useState('');
  const [bodyFatPercentage, setBodyFatPercentage] = useState('');
  const [runTime, setRunTime] = useState('');
  const [liftingWeight, setLiftingWeight] = useState('');
  const [progress, setProgress] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id._id;
    console.log(userId)

    const progressData = {
      user: userId,
      weight,
      bodyFatPercentage,
      runTime,
      liftingWeight,
    };

    axios.post('http://localhost:5000/api/progress', progressData)
      .then(response => {
        console.log('Progress added!', response.data);
        alert("Progress Added Successfully")
        // Optionally clear form fields or handle response
        setWeight('');
        setBodyFatPercentage('');
        setRunTime('');
        setLiftingWeight('');
        fetchProgress(); // Fetch updated progress list
      })
      .catch(error => {
        console.error('There was an error adding the progress!', error);
      });
  };

  // const fetchProgress = () => {
  //   const userId = Cookies.get('userId');

  //   if (!userId) return;

  //   axios.get(`http://localhost:5000/api/progress?user=${userId}`)
  //     .then(response => {
  //       setProgress(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the progress!', error);
  //     });
  // };

  // useEffect(() => {
  //   fetchProgress();
  // }, []);
  
  const fetchProgress = () => {
    axios.get(`http://localhost:5000/api/progress`)
      .then(response => {
        setProgress(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the progress!', error);
      });
  };

  useEffect(() => {
    fetchProgress();
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
                                            <h5 className="mb-0 fw-bold">Add Progress</h5>
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
                                            <label for="input1" className="form-label">Progress Weights</label>
                                            <input value={weight}
            onChange={(e) => setWeight(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter weight progress" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Body Percentage</label>
                                            <input value={bodyFatPercentage}
            onChange={(e) => setBodyFatPercentage(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter Percentage of your body" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Run Time</label>
                                            <input value={runTime}
            onChange={(e) => setRunTime(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter your running time" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Lifting Weights</label>
                                            <input  value={liftingWeight}
            onChange={(e) => setLiftingWeight(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter your weight lifting" />
                                        </div>

                                        <div className="col-md-12">
                                            <div className="d-md-flex d-grid align-items-center gap-3">
                                                <button type="submit" className="btn btn-grd-primary px-4">Add Progress</button>
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
              <li className="breadcrumb-item active" aria-current="page">Progress</li>
            </ol>
          </nav>
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
                    <th>Progress weight</th>
                    <th>bodyFatPercentage</th>
                    <th>runTime</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {progress.map(progress => (
                  <tr key={progress._id}>
                    <td>
                      <input className="form-check-input" type="checkbox"/>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="product-box">
                         
                        </div>
                        <div className="product-info">
                          <a href="javascript:;" className="product-title">{progress.weight}</a>
                        
                        </div>
                      </div>
                    </td>
                    <td>{progress.bodyFatPercentage}</td>
                    <td>{progress.runTime}</td>
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



       

        

         
           
        </>
  )
}
