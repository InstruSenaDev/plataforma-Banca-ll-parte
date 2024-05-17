const express = require("express");
const router = express.Router();

const getClient = require("../controllers/client/getClient");
const getAccount = require("../controllers/client/getAccount");
const getSearch = require("../controllers/client/getSearch");
const clientStatus = require("../controllers/client/status/clientStatus");
const clientDenied = require("../controllers/client/status/estadoD");
const updateBalance = require("../controllers/client/updateClient");

router.get("/get_client/:userName", getClient.getClient);
router.get("/get_account/:accountNumberInt", getAccount.getAccount);
router.get("/get_search", getSearch.getSearch);
router.put("/client_status/:id", clientStatus.clientStatus);
router.put("/EstadoD/:id", clientDenied.EstadoD);
router.put("/update_balance/:id", updateBalance.updateClient);

module.exports = router;
