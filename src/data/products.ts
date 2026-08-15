export type Category = 'arreglos' | 'eventos';

export const categories: { id: Category | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todo' },
  { id: 'arreglos', label: 'Arreglos y ramos' },
  { id: 'eventos', label: 'Eventos' },
];

export interface Product {
  slug: string;
  name: string;
  price: number; // soles
  priceNote?: string; // "desde", "por unidad", etc.
  cat: Category;
  img: string; // /img/*.webp (4:5)
  desc: string;
  tags: string[];
  ideal: string[];      // ocasiones sugeridas
  includes: string[];   // qué incluye / cómo se personaliza
  gallery?: string[];   // imágenes extra (4:5)
}

export const products: Product[] = [
  {
    slug: 'ramo',
    name: 'Arreglo de mano',
    price: 400,
    priceNote: 'desde',
    cat: 'arreglos',
    img: '/img/ramo.webp',
    desc: 'Ramo premium de rosas rojas con follaje tropical y envoltura elegante. Ideal para aniversarios, pedidas y sorpresas.',
    tags: ['Rosas', 'Aniversario', 'Sorpresa'],
    ideal: ['Aniversarios','Pedidas de mano','San Valentín','Sorpresas'],
    includes: ['Rosas rojas premium con follaje tropical','Envoltura elegante y lazo','Tarjeta con dedicatoria','Cantidad de rosas y color a elección'],
  },
  {
    slug: 'box',
    name: 'Arreglo box',
    price: 140,
    priceNote: 'desde',
    cat: 'arreglos',
    img: '/img/box.webp',
    desc: 'Caja elegante con rosas y bombones. Un detalle compacto y sofisticado, perfecto para regalar en cualquier ocasión.',
    tags: ['Rosas', 'Bombones', 'Regalo'],
    ideal: ['Cumpleaños','Agradecimientos','Detalles corporativos','Día de la madre'],
    includes: ['Caja rígida con rosas naturales','Bombones de chocolate','Colores de rosas a elección (rojas, azules, blancas…)','Tarjeta personalizada'],
  },
  {
    slug: 'cumpleanos',
    name: 'Arreglo de cumpleaños',
    price: 180,
    priceNote: 'desde',
    cat: 'arreglos',
    img: '/img/cumpleanos.webp',
    desc: 'Canasta de rosas y lirios con globos metálicos, chocolates y tarjeta. Llega listo para sorprender.',
    tags: ['Globos', 'Chocolates', 'Cumpleaños'],
    ideal: ['Cumpleaños','Aniversarios','Bienvenidas'],
    includes: ['Canasta con rosas y lirios','Globos metálicos con mensaje','Chocolates y tarjeta','Colores y tamaño según presupuesto'],
  },
  {
    slug: 'inauguracion',
    name: 'Arreglo de inauguración',
    price: 100,
    priceNote: 'desde',
    cat: 'eventos',
    img: '/img/inauguracion.webp',
    desc: 'Arreglo de pie con girasoles, lirios y flores tropicales, con cinta o dedicatoria para la empresa homenajeada.',
    tags: ['Corporativo', 'Pedestal', 'Dedicatoria'],
    ideal: ['Apertura de negocios','Aniversarios de empresa','Homenajes'],
    includes: ['Arreglo de pie sobre pedestal','Girasoles, lirios y flores tropicales','Cinta impresa o tarjeta con el nombre de la empresa','Entrega en el local el día del evento'],
  },
  {
    slug: 'centro-mesa',
    name: 'Centro de mesa para 15 años',
    price: 100,
    priceNote: 'c/u',
    cat: 'eventos',
    img: '/img/centro-mesa.webp',
    desc: 'Centro de mesa alto en base dorada con rosas, hortensias y follaje. Diseñado en la paleta de colores de tu fiesta.',
    tags: ['Quinceañero', 'Mesa', 'Dorado'],
    ideal: ['Quinceañeros','Bodas','Aniversarios','Cenas de gala'],
    includes: ['Base alta dorada o plateada','Rosas, hortensias y follaje','Paleta de colores de la fiesta','Precio por unidad; descuentos por cantidad a consultar'],
  },
  {
    slug: 'boda',
    name: 'Decoración de boda',
    price: 2000,
    priceNote: 'desde',
    cat: 'eventos',
    img: '/img/boda.webp',
    desc: 'Ambientación floral completa: pasillo, altar o arco, sillas y mesas. Diseño a medida según el estilo y el lugar de la ceremonia.',
    tags: ['Altar', 'Pasillo', 'A medida'],
    ideal: ['Ceremonia civil o religiosa','Recepción','Sesión de fotos'],
    includes: ['Diseño del pasillo, altar o arco floral','Decoración de mesas y sillas','Bouquet de la novia y boutonniere (a consultar)','Montaje y retiro coordinados con el local'],
  },
];

export const fmt = (n: number) => `S/ ${n.toLocaleString('es-PE')}`;
