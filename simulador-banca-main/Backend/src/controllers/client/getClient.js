const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const getClient = async (req, res) => {
  try {
    const nameUser = req.params.userName; // Obtener el valor de name_user de los parámetros de la ruta

    // Realizar la consulta SQL con el nombre de usuario como filtro
    const userDetailsQuery = `
      SELECT 
      c.id_cliente, 
      fpn.ip_documento, 
      fpn.ip_primerNombre, 
      fpn.ip_primerApellido, 
      fpn.ip_segundoApellido,
      dc.saldo,
      dc.num_cuenta,
      tc.descripcion
      FROM cliente AS c
      INNER JOIN formpersonnatural AS fpn ON c.id_formpn = fpn.id_formpn
      INNER JOIN detalle_cuenta AS dc ON c.id_cliente = dc.id_cliente
      INNER JOIN tipo_cuentas AS tc ON tc.id_tcuenta = dc.id_detalle
      WHERE fpn.ip_documento = $1;`;

    const userDetailsValues = [nameUser]; // Parámetros de la consulta SQL
    const userDetailsResult = await pool.query(
      userDetailsQuery,
      userDetailsValues
    );
    // Ejecutar la consulta SQL

    // Verificar si se encontraron detalles del usuario
    if (userDetailsResult.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron detalles para este usuario" });
    }

    // Si se encuentran detalles, devolverlos en la respuesta
    res.status(200).json(userDetailsResult.rows[0]);
  } catch (error) {
    console.error("Error al obtener detalles del usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
module.exports = {
  getClient,
};
