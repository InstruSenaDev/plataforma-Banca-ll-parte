const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth/loginUser");
const getUsers = require("../controllers/user/getUsers");
const getEmpleadoId = require("../controllers/user/getEmpleadoId");
const addUser = require("../controllers/user/addUser");
const updateUser = require("../controllers/user/updateUser");
const updateBalanceEmpleado = require("../controllers/user/updateBalanceEmpleado");
const deleteUser = require("../controllers/user/deleteUser");

router.post("/login", authController.loginUser);
router.post("/add_user", addUser.addUser);
router.get("/get_users", getUsers.getUsers);
router.get("/get_users/:id", getEmpleadoId.getEmpleadoId);
router.put("/update_user/:id", updateUser.updateUser);
router.put(
  "/empleado_balance/:id",
  updateBalanceEmpleado.updateBalanceEmpleado
);
router.delete("/delete_user/:userId", deleteUser.deleteUser);

module.exports = router;
