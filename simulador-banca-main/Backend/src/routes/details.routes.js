const express = require("express");
const router = express.Router();

const accountsAuthorized = require("../controllers/accounts/getAuthorized");
const accountsDenied = require("../controllers/accounts/getDenied");
const accountsWaiting = require("../controllers/accounts/getWaiting");
const accountsDetail = require("../controllers/accounts/getDetails");

router.get("/authorized", accountsAuthorized.getAuthorized);
router.get("/denied", accountsDenied.getDenied);
router.get("/waiting", accountsWaiting.getWaiting);
router.get("/details", accountsDetail.getDetails);

module.exports = router;
