const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const updateInfo = async (req, res) => {
  const { id_empleado } = req.params;
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "UPDATE empleados SET username = $1, password = $2 WHERE id_empleado = $3",
      [username, password, id_empleado]
    );

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Actualización exitosa" });
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  } catch (error) {
    console.error("Error actualizando datos del empleado", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  updateInfo,
};
