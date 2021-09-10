const User = require('../models/User');
const ErrorResponse = require('../utlis/errorResponse');

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body;

    //error handling mechanism
    try{
        const user = await User.create({
            username, 
            email, 
            password,
        });
        
    res.status(200).json({
        success: true,
        token: "24asdkjnnasdjk",
    });

    } catch (error) {
   
        next(error);

    }
    
};



exports.login =  async(req, res, next) => {
    const {email, password} = req.body;



    if(!email || !password){
           return next (new ErrorResponse("Please provide an email and password",400));
    }

    try {
        // getting user from db , access's the users password
        const user = await User.findOne({email}).select("+password");


        if(!user){
            return next (new ErrorResponse("invalid credentials",404));
            }
    //running against encrypted password, and will return true or false statement
    const isMatch = await user.matchPasswords(password); 


    if (!isMatch) {
        return next (new ErrorResponse("invalid credentials",404));
    }


    res.status(201).json({
        success: true,
        token: "24asdkjnnasdjk",
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

//create function that gets access to user
const sendToken = (user, statusCode, res) => {
    //get into the user model
    const token = user.getSignedToken();
    res.status(statusCode).json({success:true, token});

}