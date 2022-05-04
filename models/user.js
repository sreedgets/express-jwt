const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, minLength: 5},
    password: {type: String, minLength: 5}
});

module.exports = mongoose.model('User', UserSchema);