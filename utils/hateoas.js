export const inventarioHATEOAS = (productos) => {
  const results = productos.slice(0, 4).map((producto) => ({
    name: producto.nombre,
    href: `/inventario/joya/${producto.id}`,
  }));

  const total = productos.length;
  const totalStock = productos.reduce((acc, item) => acc + item.stock, 0);

  return { total, totalStock, results };
};
