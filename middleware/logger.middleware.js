export const logger = (req, res, next) => {
  console.log(`📝 Consulta a ruta: ${req.method} ${req.url}`);
  next();
};
