const express = require('express');

const app = express();

app.listen(3000, ()=> {
    console.log('Esta funcionando');
})

app.get("/", (req, res)=>{
    res.send ('Será que ta funcionando?????')
})
