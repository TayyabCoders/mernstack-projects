const Workout = require('../models/workoutTracking').Workout;

// Get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().populate('user');
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new workout
const createWorkout = async (req, res) => {
    const { user, name, category } = req.body;
    const newWorkout = new Workout({ user, name, category });

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
    const { name, category } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid workout ID' });
    }

    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(id, { name, category }, { new: true });
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
