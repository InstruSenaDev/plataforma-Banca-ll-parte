const { Pool } = require("pg");
const { CONFIG_BD } = require("../../config/db");

const pool = new Pool(CONFIG_BD);

const getPendiente = async (req, res) => {
  try {
    const result = await pool.query(`
    SELECT
    c.ID_Cliente,
    fpn.IP_primerNombre AS Nombre,
    fpn.IP_documento,
    c.Estado AS EstadoCliente,
    tp.Descripcion AS Producto,
    dp.N_Cuenta,
    dp.fecha
FROM
    DetalleProducto dp
    JOIN cliente c ON dp.Cliente = c.ID_Cliente
    JOIN FormPersonNatural fpn ON c.inf_cliente = fpn.ID_FormPN
    JOIN producto p ON dp.Producto = p.ID_Producto
    JOIN tipoproducto tp ON p.Tipo = tp.ID_tipo
  WHERE
   c.Estado = 'Pendiente';
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
    getPendiente
  };
  