const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect("mongodb+srv://admin:admin@cluster0.oom4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (erro) => {
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