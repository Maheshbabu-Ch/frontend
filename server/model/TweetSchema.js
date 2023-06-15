const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    userID: {type: String, required: true},
    content :{type:String, required: true,max:255},
    likes: {type: Array, defaultValue:[]}
}, {
    timestamps: true,
});

const Tweet = mongoose.model("Tweet", TweetSchema);

module.exports = { Tweet };