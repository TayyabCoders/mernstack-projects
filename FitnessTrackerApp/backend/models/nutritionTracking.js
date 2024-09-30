const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    mealType: { 
        type: String, 
        enum: ['breakfast', 'lunch', 'dinner', 'snacks'], 
        required: true 
    },
    foodItem: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'FruitVegetable', 
        required: true 
    }, // Reference to FruitVegetable model
    quantity: { 
        type: Number, 
        required: true 
    }
});

const nutritionTrackingSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'userAccount', 
        required: true 
    },
    date: { 
        type: Date, 
        required: true // User must select a date
    },
    meals: [mealSchema] // Array of meal objects
});

module.exports = mongoose.model('nutritionTracking', nutritionTrackingSchema);
