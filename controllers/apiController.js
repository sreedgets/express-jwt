const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getApiIndex = (req, res) => {
    res.json({
        message: 'This is the api homepage'
    });
}

exports.postRegisterUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        const user = new User({
            username: req.body.username,
            password: hash
        });
    
        const saveUser = await user.save();
    
        res.json({
            user: saveUser
        });
    });
}