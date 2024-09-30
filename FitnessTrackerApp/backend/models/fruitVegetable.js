// models/FruitVegetable.js
const mongoose = require('mongoose');

const FruitVegetableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Fruit', 'Vegetable'], required: true },
  calories: { type: Number, required: true },
  fats: { type: Number, required: true },  // Added fats field
  carbs: { type: Number, required: true }, // Added carbs field
  vitamins: [String] // Array of vitamins like 'Vitamin C', 'Vitamin A'
});

const FruitVegetable = mongoose.model('FruitVegetable', FruitVegetableSchema);

module.exports = FruitVegetable;
