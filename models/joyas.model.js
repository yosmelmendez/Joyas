import pool from "../conexion/db.js";
import format from "pg-format";

export const obtenerProductosDB = async ({
  limits = 10,
  order_by = "id_ASC",
  page = 1,
}) => {
  const [campo, direccion] = order_by.split("_");
  const offset = (page - 1) * limits;

  const formattedQuery = format(
    "SELECT * FROM inventario ORDER BY %I %s LIMIT %L OFFSET %L",
    campo,
    direccion.toUpperCase(),
    limits,
    offset
  );

  const { rows } = await pool.query(formattedQuery);
  return rows;
};

export const obtenerJoyasPorFiltrosDB = async ({
  precio_max,
  precio_min,
  categoria,
  metal,
}) => {
  let filtros = [];
  let values = [];
  let index = 1;

  if (precio_max)
    filtros.push(`precio <= $${index}`), values.push(precio_max), index++;
  if (precio_min)
    filtros.push(`precio >= $${index}`), values.push(precio_min), index++;
  if (categoria)
    filtros.push(`categoria = $${index}`), values.push(categoria), index++;
  if (metal) filtros.push(`metal = $${index}`), values.push(metal), index++;

  let consulta = "SELECT * FROM inventario";
  if (filtros.length > 0) consulta += ` WHERE ${filtros.join(" AND ")}`;

  const { rows } = await pool.query(consulta, values);
  return rows;
};
