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
        
    res.status(201).json({
        success: true,
        token:"asdjklasdlasdkl"
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


    sendToken(user, 200, res);

    } catch (error){
        res.status(500).json ({success: false, error: error.message});
    }
};


exports.forgotpassword = async (req, res, next) => {
    const {email} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user) {
            return next(new ErrorResponse("Email could not be sent", 404))
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetURL = `http://FRONTEND URL/${resetToken}`;

        const message = `
            <h1> You have requested a password reset </h1>
            <p> Please go the following link to reset your password </p>
            <a href=${resetURL} clicktracking=off>${resetURL} </a>
        `

        try {
            await sendEmail({
                to: user.email,
                subject: "Password reset request",
                text: message
            });

            res.status(200).json({success: true, data: "Email Sent"});

        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse("Email could not be sent", 500))

        }
    } catch (error) {
        next(error);


    }
}

exports.resetpassword =  (req, res, next) => {

    res.send("Reset Password Route");

};

//create function that gets access to user
const sendToken = (user, statusCode, res) => {
    //get into the user model
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({success:true, token});

}
