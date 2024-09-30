const ProgressTracking = require('../models/progressTracking');
const NutritionTracking = require('../models/nutritionTracking');
const FruitVegetable = require('../models/fruitVegetable');

// Calculate total calories, carbs, and fats for a user
const calculateProgress = async (userId, date) => {
    try {
        // Find the user's meals for the selected date
        const nutritionData = await NutritionTracking.findOne({ user: userId, date }).populate('meals.foodItem');

        if (!nutritionData) {
            throw new Error('No nutrition data found for the selected date.');
        }

        let totalCalories = 0;
        let totalCarbs = 0;
        let totalFats = 0;

        // Calculate total calories, carbs, and fats for all meals
        nutritionData.meals.forEach(meal => {
            const foodItem = meal.foodItem;
            totalCalories += foodItem.calories * meal.quantity;
            totalCarbs += foodItem.carbs * meal.quantity;
            totalFats += foodItem.fats * meal.quantity;
        });

        // Return calculated totals
        return { totalCalories, totalCarbs, totalFats };
    } catch (error) {
        console.error('Error calculating progress:', error);
        throw error;
    }
};

// Create a new progress entry by calculating the values
const calculateAndCreateProgressEntry = async (req, res) => {
    const { userId, date } = req.body;

    try {
        // Calculate progress for the user
        const { totalCalories, totalCarbs, totalFats } = await calculateProgress(userId, date);

        // Save progress
        const progress = new ProgressTracking({
            user: userId,
            totalCalories,
            totalCarbs,
            totalFats,
            date
        });
        await progress.save();

        // Send the progress data as JSON to the frontend
        res.status(201).json({
            totalCalories: progress.totalCalories,
            totalCarbs: progress.totalCarbs,
            totalFats: progress.totalFats
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating progress entry', error: error.message });
    }
};

// Get all progress entries for a user
const getProgressEntries = async (req, res) => {
    try {
        const { userId } = req.query; // Destructure userId from query parameters
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' }); // Handle missing userId
        }
        
        const progressEntries = await ProgressTracking.find({ user: userId });
        
        if (progressEntries.length === 0) {
            return res.status(404).json({ message: 'No progress entries found for this user' }); // Handle no entries found
        }

        res.status(200).json(progressEntries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching progress entries', error });
    }
};


// Get progress entry by ID
const getProgressEntryById = async (req, res) => {
    try {
        const progressEntry = await ProgressTracking.findById(req.params.id);
        if (!progressEntry) {
            return res.status(404).json({ message: 'Progress entry not found' });
        }
        res.status(200).json(progressEntry);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching progress entry', error });
    }
};

// Update a progress entry
const updateProgressEntry = async (req, res) => {
    try {
        const updatedProgressEntry = await ProgressTracking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProgressEntry) {
            return res.status(404).json({ message: 'Progress entry not found' });
        }
        res.status(200).json(updatedProgressEntry);
    } catch (error) {
        res.status(500).json({ message: 'Error updating progress entry', error });
    }
};

// Delete a progress entry
const deleteProgressEntry = async (req, res) => {
    try {
        const deletedProgressEntry = await ProgressTracking.findByIdAndDelete(req.params.id);
        if (!deletedProgressEntry) {
            return res.status(404).json({ message: 'Progress entry not found' });
        }
        res.status(200).json({ message: 'Progress entry deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting progress entry', error });
    }
};

module.exports = {
    calculateAndCreateProgressEntry,
    getProgressEntries,
    getProgressEntryById,
    updateProgressEntry,
    deleteProgressEntry
};
