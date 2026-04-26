import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';
import { ParallaxDirective } from '../../directives/parallax';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {}