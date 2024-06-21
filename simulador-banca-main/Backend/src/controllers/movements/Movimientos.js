const { Pool } = require('pg');
const { CONFIG_BD } = require('../../config/db');

const pool = new Pool(CONFIG_BD);

const addMovimientos = async (req, res) => {
  const newMovement = req.body;

  try {
    const {
      id_detalle,
      id_empleado,
      id_tipomov,
      id_boveda,
      saldo,
      fecha,
      tipo_movimiento, // Asegúrate de que el nombre de la propiedad sea correcto según tu estructura
    } = newMovement;

    // Consulta SQL para insertar un nuevo movimiento
    const insertMovementQuery = `
      INSERT INTO movimientos (
        id_detalle,
        id_empleado,
        id_tipomov,
        id_boveda,
        saldo,
        fecha,
        tipo_movimiento
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id_movimiento;`;

    // Ejecutar la consulta de inserción
    const insertValues = [
      id_detalle,
      id_empleado,
      id_tipomov,
      id_boveda,
      saldo,
      fecha,
      tipo_movimiento,
    ];

    const insertResult = await pool.query(insertMovementQuery, insertValues);

    // Verificar si se insertó el movimiento
    if (insertResult.rowCount === 0) {
      return res.status(500).json({ message: 'No se pudo insertar el movimiento' });
    }

    // Devolver el ID del movimiento insertado en la respuesta
    res.status(201).json({ id_movimiento: insertResult.rows[0].id_movimiento });
  } catch (error) {
    console.error('Error al insertar movimiento:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  addMovimientos,
};
