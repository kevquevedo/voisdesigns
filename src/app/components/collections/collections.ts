import { Component } from '@angular/core';
import { COLLECTIONS } from '../../data/collections';
import { Collection } from '../../models/collection.model';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './collections.html',
  styleUrl: './collections.scss',
})
export class CollectionsComponent {
  readonly collections: Collection[] = COLLECTIONS;
}