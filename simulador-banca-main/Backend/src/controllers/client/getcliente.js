const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const getcliente = async (req, res) => {
    try {
      const nameUser = req.params.userName; // Obtener el valor de name_user de los parámetros de la ruta
  
      // Realizar la consulta SQL con el nombre de usuario como filtro
      const userDetailsQuery = `
      SELECT c.ID_Cliente, 
      fpn.IP_documento, 
      fpn.IP_primerNombre, 
      fpn.IP_primerApellido, 
      fpn.IP_segundoApellido, 
      c.Saldo, 
      tp.Descripcion as nombre_producto, 
      dp.N_Cuenta
  FROM cliente c
  JOIN FormPersonNatural fpn ON c.inf_cliente = fpn.ID_FormPN
  JOIN DetalleProducto dp ON c.ID_Cliente = dp.Cliente
  JOIN producto p ON dp.producto = p.ID_Producto
  JOIN tipoproducto tp ON p.Tipo = tp.ID_tipo
  WHERE fpn.IP_documento = $1;`;
  
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
    getcliente,
  };
  