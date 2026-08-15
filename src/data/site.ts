// ⚠️ El nombre comercial no fue indicado por la clienta; "Flores & Eventos" es provisional.
export const site = {
  name: 'Flores & Eventos',
  short: 'Flores & Eventos',
  tagline: 'Arreglos florales y decoración de eventos',
  claim: 'Flores para cada momento',
  description:
    'Venta de flores, arreglos florales y decoración de eventos especiales: inauguraciones, bodas y quinceañeros. Ramos, arreglos box, centros de mesa y arreglos de cumpleaños. Pedidos por WhatsApp.',
  phone: '916 973 823',
  phoneIntl: '51916973823',
  url: 'https://floreria-eventos.vercel.app',
};

export function wa(text = 'Hola 👋, quisiera información sobre sus arreglos florales.') {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#porque', label: 'Por qué elegirnos' },
  { href: '#contacto', label: 'Contacto' },
];
