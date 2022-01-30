const mongoose = require('mongoose');

//user model
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        min: 7
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true
    }
});

module.exports = mongoose.model('User', UserSchema)