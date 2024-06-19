const express = require("express");
const router = express.Router();

const addMovimientos = require("../controllers/movements/Movimientos");


router.get("/addMovimientos", addMovimientos);

module.exports = router;
