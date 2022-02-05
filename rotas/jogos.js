const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.send("ve se ta funcionando")
})

router.get("/", (req,res) => {
    res.send("Meu deus funciono???")
})

module.exports = router;