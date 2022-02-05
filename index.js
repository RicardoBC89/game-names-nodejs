const express = require('express');

const app = express();

app.listen(3000, ()=> {
    console.log('Esta funcionando');
})

const minhaRouter = require("./rotas/jogos");

app.use("/jogos", minhaRouter);