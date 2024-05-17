const express = require("express");
const router = express.Router();

const getPendiente = require("../controllers/userState/getPendiente");
const getAutorizado = require("../controllers/userState/getAutorizado");
const getDenegado = require("../controllers/userState/getDenegado");

const AddFormData = require("../controllers/client/addFormData");
const Estado = require("../controllers/client/clientStatus/estado");
const EstadoD = require("../controllers/client/clientStatus/estadoD");
const getDetalle = require("../controllers/accounts/getDetails");
const getcliente = require("../controllers/client/getcliente");

const getBusqueda = require("../controllers/client/getBusqueda");
const getInfoCliente = require("../controllers/client/getInfoCliente");
const UpdateCliente = require("../controllers/client/updateCliente");

router.get("/getclienteP", getPendiente.getPendiente);
router.get("/getclienteA", getAutorizado.getAutorizado);
router.get("/getclienteD", getDenegado.getDenegado);
router.post("/AddFormData/:id", AddFormData.AddFormData);
router.put("/Estado/:id", Estado.Estado);
router.put("/EstadoD/:id", EstadoD.EstadoD);
router.get("/getDetalle", getDetalle.getDetails);
router.get("/getcliente/:userName", getcliente.getcliente);
router.get("/getBusqueda", getBusqueda.getBusqueda);
router.get("/getInfoCliente/:accountNumberInt", getInfoCliente.getInfoCliente);
router.put("/UpdateCliente/:id", UpdateCliente.UpdateCliente);

module.exports = router;
