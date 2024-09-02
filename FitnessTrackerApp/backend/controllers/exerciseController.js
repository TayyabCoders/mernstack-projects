const Exercise = require('../models/workoutTracking').Exercise;

// Get all exercises for a specific workout
const getExercises = async (req, res) => {
    const { workoutId } = req.params;
    try {
        const exercises = await Exercise.find({ workout: workoutId });
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new exercise
const createExercise = async (req, res) => {
    const { workout, name, sets, reps, weight, notes } = req.body;
    const newExercise = new Exercise({ workout, name, sets, reps, weight, notes });

    try {
        const savedExercise = await newExercise.save();
        res.status(201).json(savedExercise);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an exercise
const updateExercise = async (req, res) => {
    const { id } = req.params;
    const { name, sets, reps, weight, notes } = req.body;

    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(id, { name, sets, reps, weight, notes }, { new: true });
        if (!updatedExercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json(updatedExercise);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an exercise
const deleteExercise = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedExercise = await Exercise.findByIdAndDelete(id);
        if (!deletedExercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json({ message: 'Exercise deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getExercises,
    createExercise,
    updateExercise,
    deleteExercise
};
