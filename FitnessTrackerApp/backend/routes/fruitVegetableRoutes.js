const express = require('express');
const router = express.Router();
const { 
    getFruitVegetableEntries, 
    getFruitVegetableEntryById, 
    createFruitVegetableEntry, 
    updateFruitVegetableEntry, 
    deleteFruitVegetableEntry 
} = require('../controllers/fruitsvegetableController');

router.route('/').get(getFruitVegetableEntries).post(createFruitVegetableEntry);
router.route('/:id').put(updateFruitVegetableEntry).delete(deleteFruitVegetableEntry);

module.exports = router;
