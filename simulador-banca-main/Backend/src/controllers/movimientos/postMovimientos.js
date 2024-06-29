const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const postMovimietos = async (req, res) => {
  const id_empleado = req.body.idEmpleado;
  const id_boveda = req.body.idBoveda;
  const saldo = req.body.amount;
  const id_tipomov = req.body.tipoMovimiento;
  const { id_detalle } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO movimientos (id_detalle, id_empleado, id_tipomov, id_boveda, saldo) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id_detalle, id_empleado, id_tipomov, id_boveda, saldo]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log("Error al registrar movimiento: ", error);
    res
      .status(500)
      .json({ message: "Error interno al procesar la solicitud: ", error });
  }
};

module.exports = {
  postMovimietos,
};
