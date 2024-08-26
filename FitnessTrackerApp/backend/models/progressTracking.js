const mongoose = require("mongoose");

const progressTracking_Model = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userAccount', required: true },
    date: { type: Date, default: Date.now },
    weight: { type: Number },
    bodyFatPercentage: { type: Number },
    runTime: { type: Number },
    liftingWeight: { type: Number }
  });
  
  module.exports = mongoose.model('progressTracking', progressTracking_Model);
  