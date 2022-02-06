const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')


mongoose.connect(process.env.DB_CREDENTIALS, (erro) => {
    if (erro) {
        console.log("Falha ao conectar ao Banco de dados");
    } else {
        console.log("Conectado ao Banco de dados");
    }
})

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.listen(3000, ()=> {
    console.log('Esta funcionando');
})

const minhaRouter = require("./rotas/jogos");

app.use("/jogos", minhaRouter);