const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const addUser = async (req, res) => {
  const newuser = req.body;

  try {
    const { name, password, rol } = newuser;
    // Verificar si el usuario ya existe
    const checkUserQuery = "SELECT COUNT(*) FROM usuarios WHERE name_user = $1";
    const checkUserValues = [name];
    const userExistsResult = await pool.query(checkUserQuery, checkUserValues);
    const userExists = userExistsResult.rows[0].count > 0;

    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }
    // Insertar el nuevo usuario sin proporcionar un valor para id_usuario
    const insertQuery =
      "INSERT INTO usuarios (name_user, password, rol, estado) VALUES ($1, $2, $3, $4)";
    const insertValues = [name, password, rol, "Activo"];
    const result = await pool.query(insertQuery, insertValues);

    res.status(201).json({ message: "Registro de usuario exitoso" });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  addUser,
};
