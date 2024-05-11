# Crearemos un proyecta pasear los perros
-----------------------------------------
https://www.youtube.com/watch?v=x5PZwb4XurU&t=3s&ab_channel=Angular

> 1 Crear proyecto
$ ng new walk-my-dog --inline-style --inline-template 

> 2 Accedemos al proyecto
$ cd walk-my-dog

> 3 Generar un servicio con datos simulados
$ ng generate service Dogs --flat
**Lo rellenamos con datos**

> 4 Creamos un componente independiente para mostrar lista
pasandole la nueva opción --standalone
$ ng generate component DogsList --flat --standalone

> 5 Actualizamos la configuración del enrutador.

> 6 Probamos en el servidor
$ ng serve --o

> 7 Generar un nuevo componente
$ ng generate component DogsListCard --flat --standalone
