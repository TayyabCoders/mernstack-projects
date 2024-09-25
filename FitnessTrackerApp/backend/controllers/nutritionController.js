const Nutrition = require('../models/nutritionTracking'); // Import the nutrition model
const mongoose = require('mongoose');

// Get all nutrition entries
const getNutritionEntries = async (req, res) => {
    try {
        const nutritionEntries = await Nutrition.find().populate('user');
        res.status(200).json(nutritionEntries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get nutrition entry by ID
const getNutritionEntryById = async (req, res) => {
    const { userid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid nutrition entry ID' });
    }

    try {
        const nutritionEntry = await Nutrition.findById({userAccount: userid} ).populate('user');
        if (!nutritionEntry) {
            return res.status(404).json({ message: 'Nutrition entry not found' });
        }
        res.status(200).json(nutritionEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new nutrition entry
const createNutritionEntry = async (req, res) => {
    const { user, mealType, foodItem, quantity, calories, protein, carbs, fats } = req.body;
    const newNutritionEntry = new Nutrition({ user, mealType, foodItem, quantity, calories, protein, carbs, fats });

    try {
        const savedNutritionEntry = await newNutritionEntry.save();
        res.status(201).json(savedNutritionEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a nutrition entry
const updateNutritionEntry = async (req, res) => {
    const { id } = req.params;
    const { mealType, foodItem, quantity, calories, protein, carbs, fats } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid nutrition entry ID' });
    }

    try {
        const updatedNutritionEntry = await Nutrition.findByIdAndUpdate(id, { mealType, foodItem, quantity, calories, protein, carbs, fats }, { new: true });
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
