import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule], // para utilizar las directivas ngIf, ngFor, etc
  template: `
    <section class="hero-section">
      <h2 class="hero-text">
        dogs-list works!
      </h2>
    </section>
    <article class="pet-list">
      <ul>
        <li *ngFor="let dog of dogsService.dogs">
          {{dog.name}}
          <p>{{dog.description}}</p>
        </li>
      </ul>
    </article>
  `,
  styles: `
  .pet-list{
    display:flex;
    flex-wrap: wrap;
  }`
})
export class DogsListComponent {
  //insectamos la lista de dogs en el argumento
  constructor(readonly dogsService: DogsService) {}

  ngOnInit():void{}
}
