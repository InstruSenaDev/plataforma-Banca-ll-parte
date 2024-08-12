const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const getClient = async (req, res) => {
  try {
    // Realizar la consulta SQL para obtener todos los clientes
    const userDetailsQuery = `
      SELECT 
      c.id_cliente,
      fpn.ip_documento AS documento,
      fpn.ip_tipodoc,
      fpn.ip_primerNombre AS nombre,
      fpn.ip_primerApellido,
      fpn.ip_segundoApellido,
      dc.saldo,
      dc.num_cuenta,
      tc.descripcion,
      dc.estado
      FROM cliente AS c
      INNER JOIN formpersonnatural AS fpn ON c.id_formpn = fpn.id_formpn
      INNER JOIN detalle_cuenta AS dc ON c.id_cliente = dc.id_cliente
      INNER JOIN tipo_cuentas AS tc ON tc.id_tcuenta = dc.id_detalle;`;

    // Ejecutar la consulta SQL
    const userDetailsResult = await pool.query(userDetailsQuery);

    // Verificar si se encontraron detalles de los usuarios
    if (userDetailsResult.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron detalles para los usuarios" });
    }

    // Devolver los detalles encontrados en la respuesta
    res.status(200).json(userDetailsResult.rows);
  } catch (error) {
    console.error("Error al obtener detalles de los usuarios:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getClient,
};
