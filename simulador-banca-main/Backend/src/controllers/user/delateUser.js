const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const DelateUser = async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const result2 = await pool.query(`
      UPDATE DetalleProducto
      SET responsable = NULL
      WHERE responsable = ${userId}
      `);
  
      // Buscar el usuario por su ID
      const result = await pool.query(
        `DELETE  FROM public.usuarios
      WHERE ID_Usuario = ${userId};`
      );
  
      // Enviar una respuesta de éxito
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      // Si ocurre algún error, enviar una respuesta de error con el mensaje
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ message: "Error al eliminar usuario" });
    }
  };

  module.exports = {
    DelateUser,
  };
  