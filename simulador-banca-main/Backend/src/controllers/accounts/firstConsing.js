const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const firstConsing = async (req, res) => {
  try {
    const result = await pool.query(`
         SELECT
      dc.id_detalle,
      c.id_cliente,
      fpn.ip_primerNombre AS nombre,
      fpn.ip_documento,
      dc.num_cuenta,
      tc.descripcion,
      dc.nueva,
     UPDATE detalle_cuenta SET id_detalle = 1 WHERE nueva = 'No'
    `);

    if (result.rows.length > 0) {
      return res.status(200).json({ result });
    } else {
      return res.status(404).json({ message: "No se encontraron resultados." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};

module.exports = {
  firstConsing,
};
