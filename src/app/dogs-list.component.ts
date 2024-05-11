import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';
import { DogsListCardComponent } from './dogs-list-card.component';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogsListCardComponent], // para utilizar las directivas ngIf, ngFor, etc
  template: `
    <section class="hero-section">
      <h2 class="hero-text">
        Discover Pets to walk near you
      </h2>
    </section>
    <article class="pet-list">
      <app-dogs-list-card *ngFor="let dog of dogsService.dogs; let i = index" [index]="i" [dog]="dog"></app-dogs-list-card>
    </article>
  `,
  styles: [`
    .pet-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 10px;
    }

    .hero-text {
      font-size: 25pt;
      padding: 10px;
    }
  `]
})
export class DogsListComponent {
  //insectamos la lista de dogs en el argumento
  constructor(readonly dogsService: DogsService) {}
}
