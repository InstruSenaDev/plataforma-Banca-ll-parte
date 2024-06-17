const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const getMovimientos = async (req, res) => {
  try {
    // Consulta SQL para obtener todos los movimientos
    const movementsQuery = `
      SELECT
        id_movimiento,
        id_detalle,
        id_empleado,
        id_tipomov,
        id_boveda,
        saldo,
        fecha
      FROM movimientos;`;

    const movementsResult = await pool.query(movementsQuery);

    // Verificar si se encontraron movimientos
    if (movementsResult.rows.length === 0) {
      return res.status(404).json({ message: "No se encontraron movimientos" });
    }

    // Devolver los movimientos encontrados en la respuesta
    res.status(200).json(movementsResult.rows);
  } catch (error) {
    console.error("Error al obtener movimientos:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getMovimientos,
};
