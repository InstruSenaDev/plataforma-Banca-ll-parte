const express = require("express");
const router = express.Router();

const postMovimietos = require("../controllers/movimientos/postMovimientos");
const entradaBoveda = require("../controllers/movimientos/entradaBoveda");
const salidaBoveda = require("../controllers/movimientos/salidaBoveda");
const getBoveda = require("../controllers/movimientos/getBoveda");
const getMovimientos = require("../controllers/movimientos/getMovimientos");

router.get("/get_boveda", getBoveda.getBoveda);
router.get("/get_movimientos", getMovimientos.getMovimientos);
router.post("/post_movimiento", postMovimietos.postMovimietos);
router.post("/entrada_boveda/:idEmpleado", entradaBoveda.entradaBoveda);
router.post("/salida_boveda/:idEmpleado", salidaBoveda.salidaBoveda);

module.exports = router;
