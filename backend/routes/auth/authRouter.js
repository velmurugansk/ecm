const express = require('express');
const {registerUser, loginUser, logoutUser, authMidleware} = require('../../controller/auth/authuser')

const router = express.Router();

router.post('/register',registerUser);
router.post('/login', loginUser);
router.post('/logut', logoutUser);
router.get('/check-auth', authMidleware, (req, res) => {
    res.json({status:true, message:"Authenticated user!"})
})

module.exports = router