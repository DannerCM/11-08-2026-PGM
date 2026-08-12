import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Personaje } from '../../model/personaje';
import { Juegos } from '../../service/juegos';

@Component({
  selector: 'app-lista-juegos',
  imports: [RouterLink],
  templateUrl: './lista-juegos.html',
  styleUrl: './lista-juegos.scss',
})
export class ListaJuegos {
  personajes: Personaje[] = [];

  constructor(private juegoService: Juegos) {
    this.personajes = this.juegoService.listarPersonajes();
  }
}
