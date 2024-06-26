const express = require("express");
const router = express.Router();

const postMovimietos = require("../controllers/movimientos/postMovimientos");

router.post("/post_movimiento", postMovimietos.postMovimietos);

module.exports = router;
