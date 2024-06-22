const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const postBoveda = async (req, res) => {};

module.exports = {
  postBoveda,
};
