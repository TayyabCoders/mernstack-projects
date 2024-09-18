const mongoose = require("mongoose");

const workoutTracking_Model = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userAccount', required: true },
    name: { type: String, required: true },
    category: { type: String, enum: ['strength', 'cardio'], required: true },
    date: { type: Date, default: Date.now }
  });
  
  const exerciseTracking_Model = mongoose.Schema({
    workout: { type: mongoose.Schema.Types.ObjectId, ref: 'workoutTracking', required: true },
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number },
    notes: { type: String }
  });
  
  module.exports = {
    Workout: mongoose.model('workoutTracking', workoutTracking_Model),
    Exercise: mongoose.model('exerciseTracking', exerciseTracking_Model)
  };