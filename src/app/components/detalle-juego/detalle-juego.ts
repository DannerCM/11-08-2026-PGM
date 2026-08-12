import { Component } from '@angular/core';
import { Personaje } from '../../model/personaje';
import { Juegos } from '../../service/juegos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-juego',
  imports: [],
  templateUrl: './detalle-juego.html',
  styleUrl: './detalle-juego.scss',
})
export class DetalleJuego {
  personaje: Personaje | undefined;

  constructor(
    private route: ActivatedRoute,
    private juegoService: Juegos
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaje = this.juegoService.buscarPersonajePorId(id);
  }
}
