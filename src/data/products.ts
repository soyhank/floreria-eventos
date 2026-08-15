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
  },
];

export const fmt = (n: number) => `S/ ${n.toLocaleString('es-PE')}`;
