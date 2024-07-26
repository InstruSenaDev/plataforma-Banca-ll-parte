const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const postMovimietos = async (req, res) => {
  const id_detalle = req.params.id;
  const id_empleado = req.body.idEmpleado;
  const saldo = req.body.saldo;
  const id_tipomov = req.body.tipoMovimiento;

  try {
    const resultBoveda = await pool.query(
      "SELECT * FROM boveda ORDER BY fecha DESC LIMIT 1"
    );

    const id_boveda = resultBoveda.rows[0].id_boveda;

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
