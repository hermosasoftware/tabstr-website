import article1Image from "../assets/images/article1.webp";
import article2Image from "../assets/images/article2.webp";
import salesStatsImage from "../assets/images/sales-stats.webp";
import aiAssistanceImage from "../assets/images/ai-assistance.webp";
import devicesImage from "../assets/images/for-all-devices.webp";
import tablesImage from "../assets/images/tabs-management.webp";

export interface BlogPost {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  date: string;
  datePublished: string;
  category: string;
  readingMinutes: number;
}

export const blogData: BlogPost[] = [
  {
    title: "Cómo calcular el servicio del 10% + IVA en factura electrónica 4.4",
    subtitle:
      "El 10% no es IVA. Mirá el cálculo de un casado en colones, los errores de caja y cómo queda cada cifra en el comprobante de Hacienda.",
    image: salesStatsImage.src,
    href: "/blog/servicio-10-iva-factura-electronica-4-4/",
    date: "17 de noviembre, 2026",
    datePublished: "2026-11-17",
    category: "Hacienda",
    readingMinutes: 8,
  },
  {
    title: "Food cost en restaurantes de Costa Rica: fórmula, errores y cómo controlarlo",
    subtitle:
      "La fórmula con un casado real en colones, los errores que inflan el costo y qué podés ver con inventario y ventas.",
    image: aiAssistanceImage.src,
    href: "/blog/food-cost-restaurantes-costa-rica/",
    date: "17 de noviembre, 2026",
    datePublished: "2026-11-17",
    category: "Costos",
    readingMinutes: 8,
  },
  {
    title: "Migrar de un POS con licencia por dispositivo: costos ocultos y pasos reales",
    subtitle:
      "Licencias, capacitación y hardware amarrado. El paso a paso para cambiar sin apagar el local, con el catálogo listo el día uno.",
    image: article2Image.src,
    href: "/blog/migrar-pos-licencia-por-dispositivo/",
    date: "17 de noviembre, 2026",
    datePublished: "2026-11-17",
    category: "Migración",
    readingMinutes: 8,
  },
  {
    title: "IVA y códigos CABYS en restaurantes y sodas: guía práctica 2026",
    subtitle:
      "Qué código usar si hay mesero, si es soda y si vendés café de estante. La tarifa sale del CABYS, no de la memoria del cajero.",
    image: article1Image.src,
    href: "/blog/iva-codigos-cabys-restaurantes-sodas/",
    date: "17 de noviembre, 2026",
    datePublished: "2026-11-17",
    category: "Hacienda",
    readingMinutes: 8,
  },
  {
    title: "Por qué un POS sin licencia por dispositivo cambia las reglas en Costa Rica",
    subtitle:
      "Cuatro pantallas no son cuatro productos. El modelo por dispositivo cobra por respirar. Acá está la cuenta.",
    image: devicesImage.src,
    href: "/blog/pos-sin-licencia-por-dispositivo/",
    date: "17 de noviembre, 2026",
    datePublished: "2026-11-17",
    category: "Modelo",
    readingMinutes: 7,
  },
  {
    title: "Cómo registrar SINPE Móvil correctamente en tu punto de venta",
    subtitle:
      "El comprobante en el chat del personal no es un arqueo. Así se ata el SINPE a la cuenta, en el mismo POS.",
    image: tablesImage.src,
    href: "/blog/registrar-sinpe-movil-punto-de-venta/",
    date: "17 de noviembre, 2026",
    datePublished: "2026-11-17",
    category: "Caja",
    readingMinutes: 7,
  },
  {
    title: "Control de merma e inventario por receta en restaurantes pequeños",
    subtitle:
      "La soda no pierde plata en un robo grande. La pierde en la porción, el almuerzo del primo y la factura del proveedor que nadie compara.",
    image: salesStatsImage.src,
    href: "/blog/control-merma-inventario-restaurantes/",
    date: "17 de noviembre, 2026",
    datePublished: "2026-11-17",
    category: "Inventario",
    readingMinutes: 8,
  },
  {
    title: "Tabstr nació el día que me cobraron $250 por accesar a los datos de mi negocio desde la casa.",
    subtitle:
      "Un POS famoso. Licencia por dispositivo. Otra licencia para ver mis reportes. Capacitación obligatoria. Y un software que, encima, solo quería vivir en el sistema operativo que ellos decidieron.",
    image: article2Image.src,
    href: "/blog/tabstr-nacio-cobro-250/",
    date: "29 de agosto, 2026",
    datePublished: "2026-08-29",
    category: "Historia",
    readingMinutes: 4,
  },
  {
    title: 'Tu POS no es lealtad. Es pereza disfrazada de "así siempre lo hemos hecho".',
    subtitle:
      "Los sistemas de siempre se diseñaron en otra época. Seguir con ellos no te hace prudente. Te hace lento. Y migrar no tiene por qué doler.",
    image: article1Image.src,
    href: "/blog/tu-pos-no-es-lealtad/",
    date: "29 de agosto, 2026",
    datePublished: "2026-08-29",
    category: "Migración",
    readingMinutes: 4,
  },
];
