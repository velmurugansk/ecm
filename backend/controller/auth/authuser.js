const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');
const User = require('../../models/User');

// register
const registerUser = async(req, res) => {    
    try{        
        const {username, email, password } = req.body;
        const hashpassword =await bcrypt.hash(password, 10);
        
        const newUser = new User({
            username,
            password:hashpassword,
            email
        })
        
        const crtuster = await newUser.save();
        if(crtuster) {
            res.status(200).json({status:true,message:'Registration Successful'});
        }
    } catch(e){
        res.status(200).json({status:false,message:'Something error occured!'});
    }
}


// Login
const loginUser = async (req, res) => {    
    try{
        const {email, password } = req.body;
        const getuser = await User.findOne({email: email});
        console.log(getuser)
        if(getuser) {
            // Password  -> skvelmurugan19@gmail.com
            const hashedPassword = getuser.password;
            const isMatch = await bcrypt.compare(password, hashedPassword);
            console.log(isMatch)
            isMatch ? res.status(200).json({status:true,message:'Login Successful'}) : res.status(200).json({status:false,message:"Password doesn't match!"});
        } else {
            res.status(200).json({status:false,message:"User doesn't exit!"})
        }
        
    }
    catch(e){
        res.status(200).json({status:false,message:'Something error occured!'});
    }
}


module.exports = {registerUser, loginUser};