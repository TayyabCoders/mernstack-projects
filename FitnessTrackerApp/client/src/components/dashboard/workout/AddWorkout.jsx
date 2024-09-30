import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function AddWorkout() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('strength');
    const [date, setDate] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [notes, setNotes] = useState('');
    const [workouts, setWorkouts] = useState([]);
    const [existingDates, setExistingDates] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Get today's date in YYYY-MM-DD format for comparison
    const today = new Date().toISOString().split('T')[0];

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;

        if (selectedDate < today) {
            setErrorMessage('You cannot select a past date.');
            setDate('');
        } else if (existingDates.includes(new Date(selectedDate).toLocaleDateString())) {
            setErrorMessage('You cannot select a date that has already been logged.');
            setDate('');
        } else {
            setErrorMessage('');
            setDate(selectedDate);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('userToken');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken._id;

        // Check if the selected date is already in existingDates
        if (existingDates.includes(new Date(date).toLocaleDateString())) {
            alert('You cannot select a date that already exists in the database.');
            return;
        }

        axios.post('http://localhost:5000/api/workout', { 
            user: userId, 
            date, 
            name, 
            category, 
            sets, 
            reps, 
            weight, 
            notes 
        })
        .then(response => {
            console.log('Workout added!', response.data);
            // Clear form fields
            setName('');
            setCategory('strength');
            setDate('');
            setSets('');
            setReps('');
            setWeight('');
            setNotes('');
            alert("Workout Added Successfully");
            // Update existingDates with the new date
            setExistingDates(prevDates => [...prevDates, new Date(date).toLocaleDateString()]);
        })
        .catch(error => {
            console.error('There was an error adding the workout!', error);
        });
    };

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken._id;

        // Fetch workouts for the logged-in user
        axios.get(`http://localhost:5000/api/workout?userId=${userId}`)
            .then(response => {
                setWorkouts(response.data);
                // Extract dates to prevent duplicates
                const dates = response.data.map(workout => new Date(workout.date).toLocaleDateString());
                setExistingDates(dates);
            })
            .catch(error => {
                console.error('There was an error fetching the workouts!', error);
            });
    }, []);

    const handleDelete = (workoutId) => {
      if (window.confirm('Are you sure you want to delete this workout?')) {
          axios.delete(`http://localhost:5000/api/workout/${workoutId}`)
              .then(() => {
                  setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout._id !== workoutId));
                  alert('Workout deleted successfully');
              })
              .catch(error => {
                  console.error('There was an error deleting the workout!', error);
              });
      }
  };

    return (
        <>
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="row">
                        <div className="col-12 col-xl-12">
                            <div className="card rounded-4 border-top border-4 border-primary border-gradient-1">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <h5 className="mb-0 fw-bold">Add Workout</h5>
                                    </div>
                                    <form onSubmit={handleSubmit} className="row g-4">
                                        <div className="col-md-6">
                                            <label htmlFor="input1" className="form-label">Workout Name</label>
                                            <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="input1" placeholder="Workout Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="date" className="form-label">Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="date"
                                                value={date}
                                                onChange={handleDateChange}
                                                min={today}
                                                required
                                            />
                                            {errorMessage && <div className="text-danger">{errorMessage}</div>}
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputSets" className="form-label">Sets</label>
                                            <input value={sets} onChange={e => setSets(e.target.value)} type="number" className="form-control" id="inputSets" placeholder="Number of Sets" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputReps" className="form-label">Reps</label>
                                            <input value={reps} onChange={e => setReps(e.target.value)} type="number" className="form-control" id="inputReps" placeholder="Number of Reps" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputWeight" className="form-label">Weight</label>
                                            <input value={weight} onChange={e => setWeight(e.target.value)} type="number" className="form-control" id="inputWeight" placeholder="Weight (optional)" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputNotes" className="form-label">Notes</label>
                                            <textarea value={notes} onChange={e => setNotes(e.target.value)} className="form-control" id="inputNotes" placeholder="Any additional notes" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="input7" className="form-label">Category</label>
                                            <select value={category} onChange={e => setCategory(e.target.value)} id="input7" className="form-select">
                                                <option value="">Choose...</option>
                                                <option value="strength">Strength</option>
                                                <option value="cardio">Cardio</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-md-flex d-grid align-items-center gap-3">
                                                <button type="submit" className="btn btn-grd-primary px-4">Add Workout</button>
                                                <button type="button" className="btn btn-light px-4" onClick={() => { 
                                                    setName(''); 
                                                    setCategory('strength'); 
                                                    setDate(''); 
                                                    setSets(''); 
                                                    setReps(''); 
                                                    setWeight(''); 
                                                    setNotes(''); 
                                                }}>Reset</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
                                                <th>Sets</th>
                                                <th>Reps</th>
                                                <th>Weight</th>
                                                <th>Notes</th>
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
                                                            <div className="product-info">
                                                                <a href="javascript:;" className="product-title">{workout.name}</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{workout.category}</td>
                                                    <td>{new Date(workout.date).toLocaleDateString()}</td>
                                                    <td>{workout.sets}</td>
                                                    <td>{workout.reps}</td>
                                                    <td>{workout.weight || 'N/A'}</td>
                                                    <td>{workout.notes || 'N/A'}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => handleDelete(workout._id)}>Delete</button>
                                                    </td> 
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
    );
}
