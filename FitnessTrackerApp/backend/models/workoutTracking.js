const mongoose = require("mongoose");

const workoutTracking_Model = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userAccount', required: true }, // User reference
    date: { type: Date, required: true }, // Date selected by the user
    name: { type: String, required: true }, // Exercise name
    category: { type: String, enum: ['strength', 'cardio'], required: true }, // Category with enum
    sets: { type: Number, required: true }, // Number of sets
    reps: { type: Number, required: true }, // Number of reps
    weight: { type: Number }, // Weight used
    notes: { type: String } // Any additional notes
});

module.exports = mongoose.model('workoutTracking', workoutTracking_Model);
