const Nutrition = require('../models/nutritionTracking'); // Import the nutrition model
const mongoose = require('mongoose');

// Get all nutrition entries for a specific user
const getNutritionEntries = async (req, res) => {
    try {
        const userId = req.query.userId; // Extract userId from query parameters

        // If userId is provided, filter by user
        const nutritionEntries = await Nutrition.find(userId ? { user: userId } : {}) // Fetch entries for the specific user
            .populate('user') // Populate user details
            .populate('meals.foodItem'); // Populate foodItem with FruitVegetable details inside meals array

        res.status(200).json(nutritionEntries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get nutrition entry by ID
const getNutritionEntryById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid nutrition entry ID' });
    }

    try {
        const nutritionEntry = await Nutrition.findById(id)
            .populate('user') // Populate user details
            .populate('meals.foodItem'); // Populate foodItem with FruitVegetable details inside meals array
        if (!nutritionEntry) {
            return res.status(404).json({ message: 'Nutrition entry not found' });
        }
        res.status(200).json(nutritionEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new nutrition entry (supports multiple meals)
const createNutritionEntry = async (req, res) => {
    const { user, date, meals } = req.body; // Now accepting multiple meals and date

    if (!user || !date || !meals || !meals.length) {
        return res.status(400).json({ message: 'User, date, and meals are required' });
    }

    try {
        // Create a new nutrition entry with meals array
        const newNutritionEntry = new Nutrition({ user, date, meals });
        const savedNutritionEntry = await newNutritionEntry.save();
        res.status(201).json(savedNutritionEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a nutrition entry (supports updating multiple meals)
const updateNutritionEntry = async (req, res) => {
    const { id } = req.params;
    const { date, meals } = req.body; // Allow updating meals and date

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid nutrition entry ID' });
    }

    if (!meals || !meals.length) {
        return res.status(400).json({ message: 'Meals array cannot be empty' });
    }

    try {
        const updatedNutritionEntry = await Nutrition.findByIdAndUpdate(
            id,
            { date, meals }, // Updating date and meals
            { new: true }
        )
            .populate('user') // Populate user details after update
            .populate('meals.foodItem'); // Populate foodItem inside meals array
        if (!updatedNutritionEntry) {
            return res.status(404).json({ message: 'Nutrition entry not found' });
        }
        res.status(200).json(updatedNutritionEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a nutrition entry
const deleteNutritionEntry = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid nutrition entry ID' });
    }

    try {
        const deletedNutritionEntry = await Nutrition.findByIdAndDelete(id);
        if (!deletedNutritionEntry) {
            return res.status(404).json({ message: 'Nutrition entry not found' });
        }
        res.status(200).json({ message: 'Nutrition entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getNutritionEntries,
    getNutritionEntryById,
    createNutritionEntry,
    updateNutritionEntry,
    deleteNutritionEntry
};
