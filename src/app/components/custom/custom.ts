import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';

interface Step {
  n: string;
  t: string;
  d: string;
}

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './custom.html',
  styleUrl: './custom.scss',
})
export class CustomComponent {
  readonly steps: Step[] = [
    {
      n: 'I',
      t: 'Conversación',
      d: 'Visitamos el espacio o conversamos por video. Entendemos el uso, la luz, la rutina.',
    },
    {
      n: 'II',
      t: 'Plano firmado',
      d: 'Dibujo técnico a mano y vista 3D. Selección de madera, herrajes y terminación.',
    },
    {
      n: 'III',
      t: 'Taller',
      d: 'Construcción artesanal con ensambles tradicionales. Seguimiento fotográfico semanal.',
    },
    {
      n: 'IV',
      t: 'Entrega',
      d: 'Logística, instalación y firma de la pieza. Garantía de oficio por diez años.',
    },
  ];
}