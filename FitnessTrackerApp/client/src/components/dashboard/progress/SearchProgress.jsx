import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function SearchProgress() {
    const [selectedDate, setSelectedDate] = useState('');
    const [userId, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            const userIdFromToken = decodedToken._id;
            setUserId(userIdFromToken);
        }
    }, []);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dateData = {
            userId,
            date: selectedDate,
        };

        axios.post('http://localhost:5000/api/progress', dateData) // Replace with your API endpoint
            .then(response => {
                console.log('Date submitted!', response.data);
                alert('Date submitted successfully!');
                setSelectedDate(''); // Reset the date field
            })
            .catch(error => {
                console.error('Error submitting date:', error);
                setErrorMessage('An error occurred while submitting the date.');
            });
    };

    return (
        <div div className="container" style={{ marginTop: '100px' }}>
        <h1 className="text-center mb-4">Select a Date</h1>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Choose a date:</label>
                        <input
                            type="date"
                            id="date"
                            className="form-control"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                        />
                    </div>
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    );
}
