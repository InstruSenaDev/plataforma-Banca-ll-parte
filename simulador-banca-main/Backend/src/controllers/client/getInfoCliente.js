const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const getInfoCliente = async (req, res) => {
    try {
      // Obtén el número de cuenta proporcionado en la URL
      const { accountNumberInt } = req.params;
  
      // Consulta SQL modificada para filtrar por el número de cuenta
      const clienteQuery = `
      SELECT c.ID_Cliente, 
      fpn.IP_primerNombre AS PrimerNombre, 
      fpn.IP_primerApellido AS PrimerApellido, 
      fpn.IP_segundoApellido AS SegundoApellido, 
      dp.N_Cuenta,
      c.Saldo
  FROM cliente c
  JOIN DetalleProducto dp ON c.ID_Cliente = dp.Cliente
  JOIN FormPersonNatural fpn ON c.inf_cliente = fpn.ID_FormPN
        WHERE dp.N_Cuenta = $1;`;
  
      const clienteValue = [accountNumberInt];
      const clienteInfo = await pool.query(clienteQuery, clienteValue);
  
      // Verifica si se encontraron datos
      if (clienteInfo.rows.length > 0) {
        // Si se encontraron datos, envía el primer resultado al cliente
        res.status(200).json(clienteInfo.rows[0]);
      } else {
        // Si no se encontraron datos, envía un mensaje indicando que no se encontró ningún cliente con el número de cuenta proporcionado
        res.status(404).json({
          message:
            "No se encontró ningún cliente con el número de cuenta proporcionado",
        });
      }
    } catch (error) {
      console.error("Error al obtener información del cliente:", error.message);
      res.status(500).json({ error: "Error al obtener información del cliente" });
    }
  };
  module.exports = {
    getInfoCliente
  };
  
  