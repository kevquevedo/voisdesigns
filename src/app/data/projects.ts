import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    n: '01',
    title: ['Casa', 'Quintana'],
    italic: true,
    place: 'Palermo, BA',
    year: '2025',
    scope: 'Mobiliario integral',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    n: '02',
    title: ['Estudio', 'Maderal'],
    italic: true,
    place: 'Cariló',
    year: '2024',
    scope: 'Biblioteca + mesa',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
  },
  {
    n: '03',
    title: ['Restaurante', 'Fonda'],
    italic: false,
    place: 'Recoleta, BA',
    year: '2024',
    scope: '30 piezas seriadas',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    n: '04',
    title: ['Departamento', 'Riobamba'],
    italic: true,
    place: 'Barrio Norte',
    year: '2023',
    scope: 'Cocina + vestidor',
    img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80',
  },
];