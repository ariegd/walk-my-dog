import { Injectable } from '@angular/core';

export interface Dog {
  name: string;
  ownerName:string;
  description:string;
  photoUrl:string;
  location:string;
}


@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs:Dog[] = [
    {
      name: 'Robbie',
      ownerName:'Esther Fraiser',
      description:'Morbi in urna in nunc hendrerit disnissim.',
      photoUrl:'/assets/pexels-alexandru-rotariu-230845-733416.jpg',
      location:'Mountain View, CA',
    },
    {
      name: 'Firulais',
      ownerName:'Marcos Rodríguez',
      description:'Juguetón y glotón.',
      photoUrl:'/assets/pexels-gilberto-reyes-259461-825949.jpg',
      location:'Almería, ES',
    },
    {
      name: 'Hercules',
      ownerName:'Yolanda Milanes',
      description:'Mordisque todo lo que encuentra.',
      photoUrl:'/assets/pexels-lucasandrade-4681107.jpg',
      location:'Galicia, ES',
    },
    {
      name: 'Tobby',
      ownerName:'Pidio Valdés',
      description:'Incansable, le encanta la calle.',
      photoUrl:'/assets/pexels-poodles2doodles-1458916.jpg',
      location:'Avila, ES',
    }
  ]



  constructor() { }
}
