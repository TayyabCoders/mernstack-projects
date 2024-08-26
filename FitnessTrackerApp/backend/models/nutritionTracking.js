const mongoose = require("mongoose");

const nutritionTracking_Model = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userAccount', required: true },
    date: { type: Date, default: Date.now },
    mealType: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'snacks'], required: true },
    foodItem: { type: String, required: true },
    quantity: { type: Number, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fats: { type: Number, required: true }
  });
  
  module.exports = mongoose.model('nutritionTracking', nutritionTracking_Model);
  