const User = require('../models/User');

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body;

    //error handling mechanism
    try{
        const user = await User.create({
            username, 
            email, 
            password,
        });

        res.status(201).json({
            success: true,
            user: User,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message, 
        });

    }
    
};



exports.login =  async(req, res, next) => {
    const {email, password} = req.body;



    if(!email || !password){
            res.status(400).json({success: false, error: "Please provide email and password"})
    }

    try {
        // getting user from db , access's the users password
        const user = await User.findOne({email}).select("+password");


        if(!user){
                res.status(404).json({ success:false, error: "Invalid Credentials"});
            }
    //running against encrypted password, and will return true or false statement
    const isMatch = await user.matchPasswords(password);


    if (!isMatch) {
        res.status(404).json({success: false, error: "invalid credentials"});
    }

    res.status(200).json({
        success: true,
        token: "token222322",
    });

    } catch (error){
        res.status(500).json ({success: false, error: error.message});
    }
};


exports.forgotpassword =  (req, res, next) => {

    res.send("Forgot Password Route");

};

exports.resetpassword =  (req, res, next) => {

    res.send("Reset Password Route");

};