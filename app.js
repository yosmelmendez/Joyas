import express from "express";
import joyasRoutes from "./routes/joyas.routes.js";
import { logger } from "./middleware/logger.middleware.js";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/joyas", joyasRoutes);

export default app;
