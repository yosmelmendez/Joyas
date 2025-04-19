import {
  obtenerProductosDB,
  obtenerJoyasPorFiltrosDB,
} from "../models/joyas.model.js";
import { inventarioHATEOAS } from "../utils/hateoas.js";

export const obtenerJoyas = async (req, res) => {
  try {
    const productos = await obtenerProductosDB(req.query);
    const HATEOAS = inventarioHATEOAS(productos);
    res.json(HATEOAS);
  } catch (error) {
    console.error("Error al obtener el inventario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const obtenerJoyasConFiltros = async (req, res) => {
  try {
    const productos = await obtenerJoyasPorFiltrosDB(req.query);
    res.json(productos);
  } catch (error) {
    console.error("Error en filtros:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
