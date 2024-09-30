const Workout = require('../models/workoutTracking'); // Adjusted to import the model directly

// Get all workouts for the logged-in user
const getWorkouts = async (req, res) => {
    const userId = req.query.userId; // Get user ID from the request
    try {
        const workouts = await Workout.find({ user: userId }).populate('user');
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new workout with date validation
const createWorkout = async (req, res) => {
    const { user, date, name, category, sets, reps, weight, notes } = req.body;

    // Check if the date is already used by the user
    const existingWorkout = await Workout.findOne({ user, date });
    if (existingWorkout) {
        return res.status(400).json({ message: 'Workout already exists for this date' });
    }

    const newWorkout = new Workout({ user, date, name, category, sets, reps, weight, notes });

    try {
        const savedWorkout = await newWorkout.save();
        res.status(201).json(savedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const mongoose = require('mongoose');

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { date, name, category, sets, reps, weight, notes } = req.body; // Allow updating all fields

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid workout ID' });
    }

    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(
            id,
            { date, name, category, sets, reps, weight, notes }, // Update all relevant fields
            { new: true }
        );
        if (!updatedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid workout ID' });
    }

    try {
        const deletedWorkout = await Workout.findByIdAndDelete(id);
        if (!deletedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout
};
