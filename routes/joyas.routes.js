import express from "express";
import {
  obtenerJoyas,
  obtenerJoyasConFiltros,
} from "../controllers/joyas.controller.js";

const router = express.Router();

router.get("/", obtenerJoyas);
router.get("/filtros", obtenerJoyasConFiltros);

export default router;
