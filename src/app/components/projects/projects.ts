import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project.model';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS;
}