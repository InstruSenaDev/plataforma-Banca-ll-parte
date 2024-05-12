const express = require("express");
const router = express.Router();


const loginUser = require("../controllers/auth/loginUser");
const getPendiente = require("../controllers/userState/getPendiente");
const getAutorizado = require("../controllers/userState/getAutorizado");
const getDenegado= require("../controllers/userState/getDenegado");
const AddUser= require("../controllers/user/addUser");
const UpdateUser= require("../controllers/user/updateUser");
const AddFormData= require("../controllers/client/addFormData");
const Estado= require("../controllers/client/clientState/estado");
const EstadoD= require("../controllers/client/clientState/estadoD");
const getDetalle= require("../controllers/product/getDetalle");
const getcliente= require("../controllers/client/getcliente");
const DelateUser= require("../controllers/user/delateUser");
const getBusqueda= require("../controllers/client/getBusqueda");
const getInfoCliente= require("../controllers/client/getInfoCliente");
const UpdateCliente= require("../controllers/client/updateCliente");

router.get("/user", loginUser.user);
router.get("/getclienteP", getPendiente.getPendiente);
router.get("/getclienteA", getAutorizado.getAutorizado);
router.get("/getclienteD", getDenegado.getDenegado);
router.post("/AddUser", AddUser.AddUser);
router.put("/UpdateUser/:id", UpdateUser.UpdateUser);
router.post("/AddFormData/:id", AddFormData.AddFormData);
router.put("/Estado/:id", Estado.Estado);
router.put("/EstadoD/:id", EstadoD.EstadoD);
router.get("/getDetalle", getDetalle.getDetalle);
router.get("/getcliente/:userName", getcliente.getcliente);
router.delete("/user/:userId", DelateUser.DelateUser);
router.get("/getBusqueda", getBusqueda.getBusqueda);
router.get("/getInfoCliente/:accountNumberInt", getInfoCliente.getInfoCliente);
router.put("/UpdateCliente/:id", UpdateCliente.UpdateCliente);

module.exports = router;
