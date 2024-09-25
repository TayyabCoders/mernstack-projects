import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function AddExercise() {
    const [workout, setWorkout] = useState('');
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');
  const [workoutOptions, setWorkoutOptions] = useState([]);
  const [exercises, setExercises] = useState([]);

  // Fetch workouts from backend when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/workout') // Adjust API endpoint as needed
      .then(response => {
        setWorkoutOptions(response.data); // Assuming response.data contains the list of workouts
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const userId = Cookies.get('userId');
    // if (!userId) {
    //   console.error('User ID is not found in the cookie!');
    //   return;
    // }

    axios.post('http://localhost:5000/api/exercise', { 
        workout, 
        name, 
        sets, 
        reps, 
        weight, 
        notes, 
    })
    .then(response => {
      console.log('Exercise added!', response.data);
      alert("Exercise added successfully")
      // Optionally clear form fields or handle response
    })
    .catch(error => {
      console.error('There was an error adding the exercise!', error);
    });
  };
  useEffect(() => {
    axios.get('http://localhost:5000/api/exercise')
      .then(response => {
        setExercises(response.data);
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
                                            <h5 className="mb-0 fw-bold">Add Exercise</h5>
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
                                            <label for="input1" className="form-label">Exercise Name</label>
                                            <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="input1" placeholder="Exercise Name" />
                                        </div>
                                       
                                        <div className="col-md-12">
                                            <label for="input7" className="form-label">Workout</label>
                                            <select 
          value={workout} 
          onChange={(e) => setWorkout(e.target.value)} 
          required
        >
          <option value="">Select Exercise</option>
          {workoutOptions.map((workoutOption) => (
            <option key={workoutOption._id} value={workoutOption._id}>
              {workoutOption.name} {/* Adjust to fit your workout object structure */}
            </option>
          ))}
        </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Sets</label>
                                            <input value={sets} onChange={e => setSets(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter Sets" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Reps</label>
                                            <input value={reps} onChange={e => setReps(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter Reps" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Weight</label>
                                            <input value={weight} onChange={e => setWeight(e.target.value)} type="text" className="form-control" id="input1" placeholder="ENter weight" />
                                        </div>

                                        <div className="col-md-12">
                                            <div className="d-md-flex d-grid align-items-center gap-3">
                                                <button type="submit" className="btn btn-grd-primary px-4">Add Exercise</button>
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
              <li className="breadcrumb-item active" aria-current="page">Exercise</li>
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
                    <th>Exercise Name</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {exercises.map(exercise => (
                  <tr key={exercise._id}>
                    <td>
                      <input className="form-check-input" type="checkbox"/>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="product-box">
                          <img src="assets/images/orders/01.png" width="70" className="rounded-3" alt=""/>
                        </div>
                        <div className="product-info">
                          <a href="javascript:;" className="product-title">{exercise.name}</a>
                         
                        </div>
                      </div>
                    </td>
                    <td>{exercise.name}</td>
                    <td>{exercise.sets}</td>
                    <td>{exercise.reps}</td>
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
