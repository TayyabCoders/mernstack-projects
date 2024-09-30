const FruitVegetable = require('../models/fruitVegetable'); // Import the fruits and vegetable model
const mongoose = require('mongoose');

// Get all fruits and vegetables entries
const getFruitVegetableEntries = async (req, res) => {
    try {
        const fruitVegetableEntries = await FruitVegetable.find();
        res.status(200).json(fruitVegetableEntries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get fruit/vegetable entry by ID
const getFruitVegetableEntryById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid fruit/vegetable entry ID' });
    }

    try {
        const fruitVegetableEntry = await FruitVegetable.findById(id);
        if (!fruitVegetableEntry) {
            return res.status(404).json({ message: 'Fruit/vegetable entry not found' });
        }
        res.status(200).json(fruitVegetableEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new fruit or vegetable entry
const createFruitVegetableEntry = async (req, res) => {
    const { name, type, calories, fats, carbs, vitamins } = req.body;
    const newFruitVegetableEntry = new FruitVegetable({ name, type, calories, fats, carbs, vitamins });

    try {
        const savedFruitVegetableEntry = await newFruitVegetableEntry.save();
        res.status(201).json(savedFruitVegetableEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a fruit/vegetable entry
const updateFruitVegetableEntry = async (req, res) => {
    const { id } = req.params;
    const { name, type, calories, fats, carbs, vitamins } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid fruit/vegetable entry ID' });
    }

    try {
        const updatedFruitVegetableEntry = await FruitVegetable.findByIdAndUpdate(id, { name, type, calories, fats, carbs, vitamins }, { new: true });
        if (!updatedFruitVegetableEntry) {
            return res.status(404).json({ message: 'Fruit/vegetable entry not found' });
        }
        res.status(200).json(updatedFruitVegetableEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a fruit/vegetable entry
const deleteFruitVegetableEntry = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid fruit/vegetable entry ID' });
    }

    try {
        const deletedFruitVegetableEntry = await FruitVegetable.findByIdAndDelete(id);
        if (!deletedFruitVegetableEntry) {
            return res.status(404).json({ message: 'Fruit/vegetable entry not found' });
        }
        res.status(200).json({ message: 'Fruit/vegetable entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getFruitVegetableEntries,
    getFruitVegetableEntryById,
    createFruitVegetableEntry,
    updateFruitVegetableEntry,
    deleteFruitVegetableEntry
};
