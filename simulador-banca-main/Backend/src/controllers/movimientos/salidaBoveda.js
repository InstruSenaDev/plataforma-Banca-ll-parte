const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const salidaBoveda = async (req, res) => {
  const { id_movimiento, saldo_boveda, salida_saldo } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO boveda (id_movimiento, saldo_boveda, entrada_saldo, salida_saldo) VALUES ($1, $2, $3, $4) RETURNING *",
      [id_movimiento, saldo_boveda, 0, salida_saldo]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log("Error al registrar movimiento en bóveda: ", error);
    res
      .status(500)
      .json({ message: "Error interno al procesar la solicitud: ", error });
  }
};

module.exports = {
  salidaBoveda,
};
