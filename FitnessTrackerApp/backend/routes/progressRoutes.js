const express = require('express');
const router = express.Router();
const { 
    getProgressEntries, 
    getProgressEntryById, 
    calculateAndCreateProgressEntry, // Updated function for calculating and creating progress
    updateProgressEntry, 
    deleteProgressEntry 
} = require('../controllers/progressController');

// Route to get all progress entries and create a new one with calculations
router.route('/')
    .get(getProgressEntries)
    .post(calculateAndCreateProgressEntry); // Use the new calculateAndCreateProgressEntry

// Routes for updating and deleting a specific progress entry by ID
router.route('/:id')
    .get(getProgressEntryById)
    .put(updateProgressEntry)
    .delete(deleteProgressEntry);

module.exports = router;
