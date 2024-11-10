const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// register
const registerUser = async(req, res) => {    
    try{        
        const {username, email, password } = req.body;
        const getuser = await User.findOne({email: email});
        if(getuser) {
            res.status(200).json({status:false,message:'User already exist with same email!'});    
        }

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
        if(getuser) {
            // Password  -> skvelmurugan19@gmail.com
            const hashedPassword = getuser.password;
            const isMatch = await bcrypt.compare(password, hashedPassword);    
            const user = {
                email : getuser.email,
                role : getuser.role,
                id: getuser._id
            }    
            const token = jwt.sign({email : getuser.email, role : getuser.role}, 'SECRET_KEY', { expiresIn: "60m" })                        
            isMatch ? res.status(200).cookie("token", token, {httpOnly: true, secure: false}).json({status:true,message:'Login Successful'}) : res.status(200).json({status:false,message:"Password doesn't match!"});
        } else {
            res.status(200).json({status:false,message:"User doesn't exit!"})
        }
        
    }
    catch(e){
        res.status(200).json({status:false,message:'Something error occured!'});
    }
}

const logoutUser = async (req, res) => {
    res.clearCookie('token').json({status:true, message:"Logged out successfully!"});
}

const authMidleware = async (req, res, next) => {    
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({status:false, message: 'Unauthorised user!'});
    }
    try {
        const decoded = jwt.verify(token, 'SECRET_KEY');
        req.user = decoded;
        next()
    } catch (e) {
        res.status(401).json({status:false,message:'Unauthorised user!'});
    }
}

module.exports = {registerUser, loginUser, logoutUser, authMidleware};