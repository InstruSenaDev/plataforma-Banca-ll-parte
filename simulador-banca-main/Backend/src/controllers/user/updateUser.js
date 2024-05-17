const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const updateUser = async (req, res) => {
  const userId = req.params.id; // Obtén el ID del usuario de los parámetros de la ruta
  const updateUser = req.body; // Obtén los nuevos datos del usuario desde el cuerpo de la solicitud

  try {
    const { name1, password1, rol1 } = updateUser;
    // Realiza la actualización en la base de datos utilizando el ID
    const updateQuery =
      "UPDATE usuarios SET name_user = $1, password = $2, rol = $3 WHERE id_usuario = $4";
    const updateValues = [name1, password1, rol1, userId];
    await pool.query(updateQuery, updateValues);
    res.status(200).json({ message: "Actualización de usuario exitosa" });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  updateUser,
};
