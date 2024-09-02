const express = require('express');
const router = express.Router();

const { 
    getUserAccount,
    createUserAccount,
    updateUserAccount,
    deleteUserAccount
} = require('../controllers/useraccountController');


router.route('/').get(getUserAccount).post(createUserAccount);


router.route('/:id').put(updateUserAccount).delete(deleteUserAccount);



module.exports = router;