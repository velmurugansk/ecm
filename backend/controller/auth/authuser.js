const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');
const User = require('../../models/User');

// register
const registerUser = async (req, res) => {
    const {username, email, password } = req.body;
    try{
        const hashpassword = bcrypt.hashpassword(password, email);
        const newUser = new User({
            username,email,
            password:hashpassword
        })

        let crtuster = await newUser.save();
        if(crtuster) {
            res.status(200).json({status:true,message:'Registration Successful'});
        }
    }
    catch(e){
        res.status(200).json({status:false,message:'Something error occured!'});
    }
}


// Login
const login = async (req, res) => {
    const {email, password } = req.body;
    try{

    }
    catch(e){
        res.status(200).json({status:false,message:'Something error occured!'});
    }
}


module.exports = {registerUser};