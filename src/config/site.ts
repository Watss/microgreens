export const site = {
  name: 'Vireya Microgreens',
  url: 'https://watss.github.io',
  locale: 'es_CL',
  title: 'Microgreens de girasol frescos | Vireya Microgreens',
  description:
    'Pequeños brotes de girasol para sumar frescura, textura y color a tus comidas. Conoce cómo los cultivamos y descubre nuevas formas de disfrutarlos.',
  socialImage: '/images/microgreens-social.webp',
};

const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const withBase = (path: string) => `${baseUrl}${path.replace(/^\/+/, '')}`;

/** Completa estos datos cuando exista un canal real de pedidos. Usa el teléfono en formato internacional, solo dígitos. */
export const store = {
  whatsappNumber: '',
  email: '',
  productName: 'microgreens de girasol',
};
