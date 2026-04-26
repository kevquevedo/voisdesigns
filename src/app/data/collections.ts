import { Injectable } from '@angular/core';
import { Collection } from '../models/collection.model';

export const COLLECTIONS: Collection[] = [
  {
    n: '01',
    name: 'Olmo',
    desc: 'Mesas y consolas / nogal macizo',
    num: 'N° 001 — 008',
    img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
  },
  {
    n: '02',
    name: 'Hito',
    desc: 'Sillas y banquetas / roble ahumado',
    num: 'N° 009 — 016',
    img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
  },
  {
    n: '03',
    name: 'Voiel',
    desc: 'Almacenaje / cedro y bronce',
    num: 'N° 017 — 024',
    img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
  },
];