const mongoose = require('mongoose');
const Jogo = require('../models/Jogo')

class JogoModel{
    constructor(gameTitle, companyName, imageURL) {
        this.gameTitle = gameTitle
        this.companyName = companyName
        this.imageURL = imageURL
    }
   
}

const Response = mongoose.Schema({
    result : [{
        gameTitle : String,
        companyName : String,
        imageURL : String
         }]
});

module.exports = mongoose.model("Response", Response);