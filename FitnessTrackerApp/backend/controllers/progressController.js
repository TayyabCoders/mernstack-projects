const Progress = require('../models/progressTracking'); // Import the progress model
const mongoose = require('mongoose');

// Get all progress entries
const getProgressEntries = async (req, res) => {
    try {
        const progressEntries = await Progress.find().populate('user');
        res.status(200).json(progressEntries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get progress entry by ID
const getProgressEntryById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid progress entry ID' });
    }

    try {
        const progressEntry = await Progress.findById(id).populate('user');
        if (!progressEntry) {
            return res.status(404).json({ message: 'Progress entry not found' });
        }
        res.status(200).json(progressEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new progress entry
const createProgressEntry = async (req, res) => {
    const { user, weight, bodyFatPercentage, runTime, liftingWeight } = req.body;
    const newProgressEntry = new Progress({ user, weight, bodyFatPercentage, runTime, liftingWeight });

    try {
        const savedProgressEntry = await newProgressEntry.save();
        res.status(201).json(savedProgressEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a progress entry
const updateProgressEntry = async (req, res) => {
    const { id } = req.params;
    const { weight, bodyFatPercentage, runTime, liftingWeight } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid progress entry ID' });
    }

    try {
        const updatedProgressEntry = await Progress.findByIdAndUpdate(id, { weight, bodyFatPercentage, runTime, liftingWeight }, { new: true });
        if (!updatedProgressEntry) {
            return res.status(404).json({ message: 'Progress entry not found' });
        }
        res.status(200).json(updatedProgressEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a progress entry
const deleteProgressEntry = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid progress entry ID' });
    }

    try {
        const deletedProgressEntry = await Progress.findByIdAndDelete(id);
        if (!deletedProgressEntry) {
            return res.status(404).json({ message: 'Progress entry not found' });
        }
        res.status(200).json({ message: 'Progress entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProgressEntries,
    getProgressEntryById,
    createProgressEntry,
    updateProgressEntry,
    deleteProgressEntry
};
