const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Verificar si el correo ya está registrado
    const nameExistsQuery = "SELECT * FROM usuarios WHERE name_user = $1";
    const nameExistsValues = [name];
    const nameExistsResult = await pool.query(
      nameExistsQuery,
      nameExistsValues
    );

    if (nameExistsResult.rows.length === 0) {
      return res.status(400).json({ message: "ese nombre no está registrado" });
    }

    // Verificar el password
    const bankPassword = nameExistsResult.rows[0].password;

    if (password !== bankPassword) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Obtener el tipo de usuario (admin o cliente)
    const userType = nameExistsResult.rows[0].rol;

    // Si las credenciales son válidas, obtener todos los datos del usuario
    const userQuery = "SELECT * FROM usuarios WHERE name_user = $1";
    const userValues = [name];
    const userResult = await pool.query(userQuery, userValues);

    if (userResult.rows.length === 0) {
      return res
        .status(400)
        .json({ message: "No se encontró información del usuario" });
    }

    // Acceder a los datos del usuario en la respuesta
    const userData = userResult.rows[0];

    // Determinar el tipo de usuario en la respuesta
    userData.rol = userType;

    // Enviar los datos del usuario en la respuesta JSON
    res
      .status(200)
      .json({ message: "Inicio de sesión exitoso", user: userData });
  } catch (error) {
    console.error("Error al intentar iniciar sesión:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  loginUser,
};
