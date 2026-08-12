import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaJuegos } from './components/lista-juegos/lista-juegos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaJuegos],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Prueba');
}
