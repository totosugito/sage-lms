//
//
const router = require('express').Router()
const { check } = require('express-validator')

const authController = require('../module/auth')
// const googleController = require('../controllers/googleAuth');
const Auth = require('../util/is-auth')
const User = require('../model/user')


router.get('/find-all', authController.find_all)


router.post('/register', [

    check('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .custom((value,{req})=>{
        return User.findOne({ email: value })
        .then(user=>{
            if (user) {
                return Promise.reject('Email already exists!');
            }
        })
    }),

    check('password')
        .trim()
        .isLength({ min: 5 }),

    check('name')
        .trim()
        .not()
        .isEmpty()

], authController.register)

router.post('/login', [

    check('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .custom( (value, { req }) => {
        return User.findOne({email:value})
            .then( user => {
            if (!user) {
                return Promise.reject('No account with this email !')
            }
        })
    })], authController.login)

// router.post('/signup/otp', authController.otpVerification)
// router.post('/signup/resetOtp', authController.resetPassword)
// router.post('/signup/otp-resend', authController.resendOtp)
// router.post('/signup/checkOtp', authController.resetOtpVerification)
router.post('/signup/reset-password', authController.newPassword)

// google authentication route

// router.post("/google_login",googleController.googleLogin);
// router.post("/google_signup",googleController.googleSignUp);

// Fetching access Token using refresh token
router.post("/auth/token/", Auth.GetnewAccessToken)


module.exports = router;
