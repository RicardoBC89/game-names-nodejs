
const mongoose = require('mongoose');

const Jogo = mongoose.Schema({
    gameTitle: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Jogo", Jogo);