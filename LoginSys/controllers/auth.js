const User = require("../models/User");
const Staff = require("../models/Staff");
const Manager = require("../models/Manager");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
  
    try {
      const user = await User.create({
        username,
        email,
        password,
      });
  
      sendToken(user, 200, res);
    } catch (err) {
      next(err);
    }
  };
  

  exports.Mregister = async (req, res, next) => {
    const { username, email, password } = req.body;
  
    try {
      const manager = await Manager.create({
        username,
        email,
        password,
      });
  
      sendToken(manager, 200, res);
    } catch (err) {
      next(err);
    }
  };

  exports.Eregister = async (req, res, next) => {
    const { username, email, password } = req.body;
  
    try {
      const staff = await Staff.create({
        username,
        email,
        password,
      });
  
      sendToken(staff, 200, res);
    } catch (err) {
      next(err);
    }
  };

exports.login = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));

    }
    try {
        const user = await User.findOne({ email }).select("+password");

        if(!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }


        const isMatch = await user.matchPasswords(password);

        if(!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        sendToken(user, 200, res);

    } catch (error) {
        next(error);

    }
}


exports.Elogin = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));

    }
    try {
        const staff = await Staff.findOne({ email }).select("+password");

        if(!staff) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }


        const isMatch = await staff.matchPasswords(password);

        if(!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        sendToken(staff, 200, res);

    } catch (error) {
        next(error);

    }
}

exports.Mlogin = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));

    }
    try {
        const manager = await Manager.findOne({ email }).select("+password");

        if(!manager) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }


        const isMatch = await manager.matchPasswords(password);

        if(!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        sendToken(manager, 200, res);

    } catch (error) {
        next(error);

    }
}

exports.forgotpassword = async (req, res, next) => {
    const {email} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user) {
            return next(new ErrorResponse("Email could not be sent", 404))
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetURL = `http://localhost:3000/passwordreset/${resetToken}`;

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

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token})
}
