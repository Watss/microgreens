export type Scene = {
  id: string;
  label: string;
  video: string;
  poster: string;
  title: string;
  eyebrow: string;
  description: string;
  enabled: boolean;
  accent: string;
  durationSeconds?: number;
  tags?: string[];
};

/** Add a video and poster, then enable the scene. Missing files are filtered at runtime. */
export const scenes: Scene[] = [
  {
    id: 'cultivo',
    label: 'Cultivo',
    video: '/videos/microgreens-test.mp4',
    poster: '/images/cultivo-poster.webp',
    title: 'Pequeños brotes.\nGrandes posibilidades.',
    eyebrow: 'Cultivamos pequeños comienzos',
    description:
      'Descubre los microgreens de girasol: brotes frescos que suman sabor, textura y color a tus comidas.',
    enabled: true,
    accent: '#496B48',
    durationSeconds: 5.17,
    tags: ['Cultivo cuidado', 'Frescura de origen'],
  },
  {
    id: 'cosecha',
    label: 'Cosecha',
    video: '/videos/microgreens-02-cosecha.mp4',
    poster: '/images/cosecha-poster.webp',
    title: 'Cosechados en\nsu mejor momento.',
    eyebrow: 'Frescura desde el origen',
    description:
      'Se recolectan durante sus primeras etapas de crecimiento, cuando desarrollan sus hojas jóvenes y características.',
    enabled: true,
    accent: '#496B48',
    durationSeconds: 6.58,
    tags: ['Hojas jóvenes', 'Para disfrutar frescos'],
  },
  {
    id: 'seleccion',
    label: 'Selección',
    video: '/videos/microgreens-03-seleccion.mp4',
    poster: '/images/microgreens-03-seleccion.webp',
    title: 'Una selección cuidadosa.',
    eyebrow: 'Próxima escena',
    description: 'La escena de selección se incorporará cuando el video esté disponible.',
    enabled: false,
    accent: '#496B48',
  },
  {
    id: 'empaque',
    label: 'Empaque',
    video: '/videos/microgreens-04-empaque.mp4',
    poster: '/images/microgreens-04-empaque.webp',
    title: 'Listos para llegar a tu mesa.',
    eyebrow: 'Próxima escena',
    description: 'La escena de empaque se incorporará cuando el video esté disponible.',
    enabled: false,
    accent: '#496B48',
  },
];
