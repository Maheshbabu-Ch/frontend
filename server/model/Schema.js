const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    followers: { type: Array, defaultValue : []},
    following: {type:Array, defaultValue: []},
    bio : { type: String}
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };