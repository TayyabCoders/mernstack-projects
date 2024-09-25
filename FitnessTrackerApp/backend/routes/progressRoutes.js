const express = require('express');
const router = express.Router();
const { 
    getProgressEntries, 
    getProgressEntryById, 
    createProgressEntry, 
    updateProgressEntry, 
    deleteProgressEntry } = require('../controllers/progressController');


    router.route('/').get(getProgressEntries).post(createProgressEntry);
    router.route('/:id').put(updateProgressEntry).delete(deleteProgressEntry);

module.exports = router;
