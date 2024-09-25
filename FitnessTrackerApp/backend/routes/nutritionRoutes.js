const express = require('express');
const router = express.Router();
const { 
    getNutritionEntries, 
    getNutritionEntryById, 
    createNutritionEntry, 
    updateNutritionEntry, 
    deleteNutritionEntry } = require('../controllers/nutritionController');

    router.route('/').get(getNutritionEntries).post(createNutritionEntry);
    router.route('/:id').put(updateNutritionEntry).delete(deleteNutritionEntry);

module.exports = router;
