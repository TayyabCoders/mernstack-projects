import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function AddNutrition() {
    const [date, setDate] = useState('');
    const [meals, setMeals] = useState([
        { mealType: 'breakfast', foodItem: '', quantity: '' },
        { mealType: 'lunch', foodItem: '', quantity: '' },
        { mealType: 'dinner', foodItem: '', quantity: '' },
        { mealType: 'snacks', foodItem: '', quantity: '' }
    ]);
    const [nutritionEntries, setNutritionEntries] = useState([]);
    const [userId, setUserId] = useState('');
    const [foodItems, setFoodItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            const userIdFromToken = decodedToken._id;
            setUserId(userIdFromToken);
        }

        // Fetch previously logged nutrition data for the logged-in user
        if (userId) {
          axios.get(`http://localhost:5000/api/nutrition?userId=${userId}`) // Pass userId as query parameter
              .then(response => {
                  setNutritionEntries(response.data);
              })
              .catch(error => {
                  console.error('Error fetching nutrition data:', error);
              });
      }
      

        // Fetch available food items (fruits and vegetables)
        axios.get('http://localhost:5000/api/fruitvegetable')
            .then(response => {
                setFoodItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching food items:', error);
            });
    }, [userId]); // Add userId as dependency

    const today = new Date().toISOString().split('T')[0];
    const selectedDates = nutritionEntries.map(entry => entry.date.split('T')[0]);

    const handleMealChange = (index, field, value) => {
        const updatedMeals = [...meals];
        updatedMeals[index][field] = value;
        setMeals(updatedMeals);
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;

        if (selectedDate < today) {
            setErrorMessage('You cannot select a past date.');
            setDate('');
        } else if (selectedDates.includes(selectedDate)) {
            setErrorMessage('You cannot select a date that has already been logged.');
            setDate('');
        } else {
            setErrorMessage('');
            setDate(selectedDate);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nutritionData = {
            user: userId,
            date,
            meals
        };

        axios.post('http://localhost:5000/api/nutrition', nutritionData)
            .then(response => {
                console.log('Nutrition data logged!', response.data);
                setNutritionEntries([...nutritionEntries, response.data]);
                alert("Nutrients Added Successfully");
            })
            .catch(error => {
                console.error('Error logging nutrition data:', error);
            });
    };
    const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to delete this nutrient?')) {
      axios.delete(`http://localhost:5000/api/nutrition/${id}`)
          .then(response => {
              console.log('Nutrition entry deleted:', response.data);
              // Update the state to remove the deleted entry
              setNutritionEntries(nutritionEntries.filter(entry => entry._id !== id));
              alert('Nutrition entry deleted successfully');
          })
          .catch(error => {
              console.error('Error deleting nutrition entry:', error);
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
                                        <div className="">
                                            <h5 className="mb-0 fw-bold">Add Nutrition</h5>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit} className="row g-4">
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

                                        {meals.map((meal, index) => (
                                            <div key={index} className="col-md-12">
                                                <h5 className="mt-4">{meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1)}</h5>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor={`foodItem-${index}`} className="form-label">Food Item</label>
                                                        <select
                                                            className="form-select"
                                                            id={`foodItem-${index}`}
                                                            value={meal.foodItem}
                                                            onChange={(e) => handleMealChange(index, 'foodItem', e.target.value)}
                                                            required
                                                        >
                                                            <option value="">Select Food Item</option>
                                                            {foodItems.map(item => (
                                                                <option key={item._id} value={item._id}>{item.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor={`quantity-${index}`} className="form-label">Quantity</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id={`quantity-${index}`}
                                                            value={meal.quantity}
                                                            onChange={(e) => handleMealChange(index, 'quantity', e.target.value)}
                                                            min="1"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="col-md-12 mt-4">
                                            <div className="d-md-flex d-grid align-items-center gap-3">
                                                <button type="submit" className="btn btn-grd-primary px-4">Add Nutrition</button>
                                                <button type="reset" className="btn btn-light px-4">Reset</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nutrition Entries Table */}
                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Fitness Tracker</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item"><a href="#"><i className="bx bx-home-alt"></i></a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Nutrition</li>
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
                                                <th>Date</th>
                                                <th>Meal Type</th>
                                                <th>Food Item</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {nutritionEntries.map(entry => (
                                                <tr key={entry._id}>
                                                    <td>{new Date(entry.date).toLocaleDateString()}</td>
                                                    <td>
                                                        {entry.meals.map(meal => (
                                                            <div key={meal._id}>
                                                                {meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1)}
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {entry.meals.map(meal => (
                                                            <div key={meal._id}>
                                                                {meal.foodItem ? meal.foodItem.name : 'N/A'}
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {entry.meals.map(meal => (
                                                            <div key={meal._id}>
                                                                {meal.quantity}
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger" 
                                                            onClick={() => handleDelete(entry._id)} 
                                                        >
                                                            Delete
                                                        </button>
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
