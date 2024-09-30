const mongoose = require('mongoose');

const progressTrackingSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'userAccount', 
        required: true 
    },
    totalCalories: { 
        type: Number, 
        required: true 
    },
    totalCarbs: { 
        type: Number, 
        required: true 
    },
    totalFats: { 
        type: Number, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    }  // Date to track daily progress
});

module.exports = mongoose.model('progressTracking', progressTrackingSchema);
