import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    n: '01',
    title: ['Casa', 'Quintana'],
    italic: true,
    place: 'Palermo, BA',
    year: '2025',
    scope: 'Mobiliario integral',
  },
  {
    n: '02',
    title: ['Estudio', 'Maderal'],
    italic: true,
    place: 'Cariló',
    year: '2024',
    scope: 'Biblioteca + mesa',
  },
  {
    n: '03',
    title: ['Restaurante', 'Fonda'],
    italic: false,
    place: 'Recoleta, BA',
    year: '2024',
    scope: '30 piezas seriadas',
  },
  {
    n: '04',
    title: ['Departamento', 'Riobamba'],
    italic: true,
    place: 'Barrio Norte',
    year: '2023',
    scope: 'Cocina + vestidor',
  },
];