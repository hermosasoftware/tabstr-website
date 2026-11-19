export type Industry = {
  id: string;
  name: string;
  summary: string;
  href: string;
  focus?: boolean;
};

/** Restaurants and bars stay the core. The other three are the wider coverage. */
export const INDUSTRIES: readonly Industry[] = [
  {
    id: "restaurantes",
    name: "Restaurantes y bares",
    summary: "Siguen siendo el foco: mesas, cocina, reservas y el turno de la noche.",
    href: "/pos-para-restaurantes/",
    focus: true,
  },
  {
    id: "retail",
    name: "Retail",
    summary: "Tienda al detalle con caja rápida, inventario y factura electrónica.",
    href: "/pos-para-comercios/#retail",
  },
  {
    id: "minisupers",
    name: "Minisupers",
    summary: "Mostrador y reposición, sin una licencia por cada caja.",
    href: "/pos-para-comercios/#minisupers",
  },
  {
    id: "licoreras",
    name: "Licoreras",
    summary: "Venta al detalle, inventario y Hacienda 4.4 en la misma caja.",
    href: "/pos-para-comercios/#licoreras",
  },
];
