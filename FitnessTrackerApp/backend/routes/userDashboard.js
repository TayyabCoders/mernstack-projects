const express = require('express');
const {getUserDashboard} = require('../controllers/getUserDashboard');
const { verifyToken } = require('../middleware/verifyToken.js');


const router = express.Router();


router.route('/').get(verifyToken,getUserDashboard);


module.exports =router