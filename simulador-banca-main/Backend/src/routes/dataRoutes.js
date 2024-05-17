const express = require("express");
const router = express.Router();

const Estado = require("../controllers/client/status/estado");
const EstadoD = require("../controllers/client/status/estadoD");
const getcliente = require("../controllers/client/getcliente");

const getBusqueda = require("../controllers/client/getBusqueda");
const getInfoCliente = require("../controllers/client/getInfoCliente");
const UpdateCliente = require("../controllers/client/updateCliente");

router.put("/Estado/:id", Estado.Estado);
router.put("/EstadoD/:id", EstadoD.EstadoD);
router.get("/getcliente/:userName", getcliente.getcliente);
router.get("/getBusqueda", getBusqueda.getBusqueda);
router.get("/getInfoCliente/:accountNumberInt", getInfoCliente.getInfoCliente);
router.put("/UpdateCliente/:id", UpdateCliente.UpdateCliente);

module.exports = router;
