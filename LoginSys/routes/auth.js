const express = require ('express');
const router = express.Router();


const {register, login, forgotpassword, resetpassword, Elogin, Eregister, Mlogin, Mregister} = require ('../controllers/auth');

router.route("/register").post(register);

router.route("/Eregister").post(Eregister);
router.route("/Mregister").post(Mregister);

router.route("/login").post(login);

router.route("/Elogin").post(Elogin);
router.route("/Mlogin").post(Mlogin);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;

