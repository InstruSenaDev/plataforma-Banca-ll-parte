const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const userAccounts = async (req, res) => {
  const { id_cliente } = req.params;

  try {
    const result = await pool.query(
      `SELECT 
       dc.id_detalle, 
       c.id_cliente, 
       c.username, 
       dc.num_cuenta, 
       tc.descripcion, 
       tc.id_tcuenta,
       dc.saldo, 
       dc.fecha, 
       dc.estado
       FROM detalle_cuenta AS dc JOIN cliente AS c ON dc.id_cliente = c.id_cliente
       JOIN tipo_cuentas AS tc ON dc.id_tcuenta = tc.id_tcuenta WHERE c.id_cliente = $1 ORDER BY dc.id_detalle ASC`,
      [id_cliente]
    );

    if (result.rows.length > 0) {
      return res.status(200).json(result.rows);
    } else {
      return res.status(404).json({ message: "No se encontraron resultados." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno al procesar la solicitud: ", error });
  }
};

module.exports = {
  userAccounts,
};
