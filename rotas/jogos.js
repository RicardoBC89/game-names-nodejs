const express = require("express");
const router = express.Router();
const Jogo = require('../models/Jogo')
const Response = require('../models/Response')

router.post("/", (req, res) => {
    console.log(req.body)
    const jogo = new Jogo({
        gameTitle: req.body.gameTitle,
        companyName: req.body.companyName,
        imageURL: req.body.imageURL
    });

    jogo.save().then((dado) => {
        res.json(dado);
    }).catch((erro) => {
        res.json(erro);
        console.log(erro);
    });
})

router.get("/", (req,res) => {
    Jogo.find().then( jogos => {
        const response = new Response({
            result: jogos
        })
        res.json(response)
    });
})

module.exports = router;