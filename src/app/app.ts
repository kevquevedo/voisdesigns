import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav';
import { HeroComponent } from './components/hero/hero';
import { IndexStripComponent } from './components/index-strip/index-strip';
import { CollectionsComponent } from './components/collections/collections';
import { ProjectsComponent } from './components/projects/projects';
import { AboutComponent } from './components/about/about';
import { CustomComponent } from './components/custom/custom';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    IndexStripComponent,
    CollectionsComponent,
    ProjectsComponent,
    AboutComponent,
    CustomComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}