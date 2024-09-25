import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode}  from 'jwt-decode';

export default function AddNutrition() {
    const [mealType, setMealType] = useState('');
    const [foodItem, setFoodItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');
    const [nutritionEntries, setNutritionEntries] = useState([]);
    const [userId, setUserId] = useState('');

    // useEffect(() => {
    //     // Retrieve user ID from cookies or authentication context
    //     const token = localStorage.getItem('userToken');
    //     const decodedToken = jwtDecode(token);
    //     const userId = decodedToken.id._id;
    //     console.log(userId)

       
    //         // Fetch previously logged nutrition data for this user
    //         axios.get(`http://localhost:5000/api/nutrition/${userId}`)
    //             .then(response => {
    //                 setNutritionEntries(response.data);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching nutrition data:', error);
    //             });
    // }, [userId]);
    useEffect(() => {
            axios.get(`http://localhost:5000/api/nutrition`)
                .then(response => {
                    setNutritionEntries(response.data);
                })
                .catch(error => {
                    console.error('Error fetching nutrition data:', error);
                });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('userToken');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id._id;
        console.log(userId)

        const nutritionData = {
            user: userId,
            mealType,
            foodItem,
            quantity,
            calories,
            protein,
            carbs,
            fats,
        };

        axios.post('http://localhost:5000/api/nutrition', nutritionData)
            .then(response => {
                console.log('Nutrition data logged!', response.data);
                alert("Nutrients Added Successfully")
                setNutritionEntries([...nutritionEntries, response.data]); // Add the new entry to the list
            })
            .catch(error => {
                console.error('Error logging nutrition data:', error);
            });
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
                                       
                                        <div className="col-md-12">
                                            <label for="input7" className="form-label">Meal Type</label>
                                            <select value={mealType} onChange={(e) => setMealType(e.target.value)} required>
                        <option value="">Select Meal Type</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="snacks">Snacks</option>
                    </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">FoodItems</label>
                                            <input value={foodItem} onChange={(e) => setFoodItem(e.target.value)}  type="text" className="form-control" id="input1" placeholder="Enter meal type" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Quantity</label>
                                            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter quantity of meal" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Calories</label>
                                            <input value={calories} onChange={(e) => setCalories(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter calories of meal" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Protein</label>
                                            <input value={protein} onChange={(e) => setProtein(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter proteins of meal" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Carbs</label>
                                            <input value={carbs} onChange={(e) => setCarbs(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter carbs of meal" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="input1" className="form-label">Fats</label>
                                            <input value={fats} onChange={(e) => setFats(e.target.value)} type="text" className="form-control" id="input1" placeholder="Enter fats of meal" />
                                        </div>
                                        

                                        <div className="col-md-12">
                                            <div className="d-md-flex d-grid align-items-center gap-3">
                                                <button type="submit" className="btn btn-grd-primary px-4">Add Nutrition</button>
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
                    <th>
                      <input className="form-check-input" type="checkbox"/>
                    </th>
                    <th>MealType</th>
                    <th>Food Item</th>
                    <th>Carbs</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {nutritionEntries.map(nutritionEntrie => (
                  <tr key={nutritionEntrie._id}>
                    <td>
                      <input className="form-check-input" type="checkbox"/>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="product-box">
                         
                        </div>
                        <div className="product-info">
                          <a href="javascript:;" className="product-title">{nutritionEntrie.mealType}</a>
                       
                        </div>
                      </div>
                    </td>
                    <td>{nutritionEntrie.mealType}</td>
                    <td>{nutritionEntrie.foodItem}</td>
                    <td>{nutritionEntrie.carbs}</td>
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
