const express = require('express');
const router = express.Router();
const upload = require('../middleware/ImageHandle');

const { 
    getUserAccount,
    createUserAccount,
    updateUserAccount,
    deleteUserAccount
} = require('../controllers/useraccountController');


router.route('/').get(getUserAccount).post(upload,createUserAccount);


router.route('/:id').put(upload,updateUserAccount).delete(deleteUserAccount);



module.exports = router;