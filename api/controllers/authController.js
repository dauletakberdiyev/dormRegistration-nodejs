const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//register
exports.register = async function (req, res){
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.SECRET_KEY
        ).toString(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    });
    
    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
};

//login
exports.login = async function (req, res){
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json('Wrong username!');

        const bytes = CryptoJS.AES.decrypt(
            user.password, 
            process.env.SECRET_KEY
        );
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && 
            res.status(401).json('Wrong password!');

        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn: '2h'}
        )

        const {password, ...info} = user._doc;

        res.status(200).json({...info, accessToken});
    }catch(err){
        res.status(500).json(err)
    }
}