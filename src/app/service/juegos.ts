import { Injectable } from '@angular/core';
import { Personaje } from '../model/personaje';

@Injectable({
  providedIn: 'root',
})
export class Juegos {
  private listaPersonajes: Personaje[] = [
    {
      personajeId: 1,
      nombreCompleto: 'Walter White',
      apodo: 'Heisenberg',
      interpretadoPor: 'Bryan Cranston',
      ocupacion: 'Profesor de química',
      estatus: 'Presunto muerto',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    },
    {
      personajeId: 2,
      nombreCompleto: 'Jesse Pinkman',
      apodo: "Cap'n Cook",
      interpretadoPor: 'Aaron Paul',
      ocupacion: 'Fabricante de metanfetamina',
      estatus: 'Vivo',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_jesse-pinkman-lg.jpg',
    },
    {
      personajeId: 3,
      nombreCompleto: 'Saul Goodman',
      apodo: 'Jimmy McGill',
      interpretadoPor: 'Bob Odenkirk',
      ocupacion: 'Abogado',
      estatus: 'Vivo',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_saul-goodman-lg.jpg',
    },
    {
      personajeId: 4,
      nombreCompleto: 'Gustavo Fring',
      apodo: 'Gus',
      interpretadoPor: 'Giancarlo Esposito',
      ocupacion: 'Dueño de Los Pollos Hermanos',
      estatus: 'Fallecido',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_gustavo-fring-lg.jpg',
    },
    {
      personajeId: 5,
      nombreCompleto: 'Mike Ehrmantraut',
      apodo: 'Mike',
      interpretadoPor: 'Jonathan Banks',
      ocupacion: 'Ex policía / fijador',
      estatus: 'Fallecido',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg',
    },
    {
      personajeId: 6,
      nombreCompleto: 'Hank Schrader',
      apodo: 'ASAC Hank',
      interpretadoPor: 'Dean Norris',
      ocupacion: 'Agente de la DEA',
      estatus: 'Fallecido',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_hank-schrader-lg.jpg',
    },
    {
      personajeId: 7,
      nombreCompleto: 'Skyler White',
      apodo: 'Sky',
      interpretadoPor: 'Anna Gunn',
      ocupacion: 'Contadora',
      estatus: 'Viva',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_skyler-white-lg.jpg',
    },
    {
      personajeId: 8,
      nombreCompleto: 'Walter White Jr.',
      apodo: 'Flynn',
      interpretadoPor: 'RJ Mitte',
      ocupacion: 'Estudiante',
      estatus: 'Vivo',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-jr-lg.jpg',
    },
    {
      personajeId: 9,
      nombreCompleto: 'Lydia Rodarte-Quayle',
      apodo: 'Lydia',
      interpretadoPor: 'Laura Fraser',
      ocupacion: 'Ejecutiva de Madrigal',
      estatus: 'Fallecida',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_lydia-rodarte-quayle-lg.jpg',
    },
    {
      personajeId: 10,
      nombreCompleto: 'Tuco Salamanca',
      apodo: 'Tuco',
      interpretadoPor: 'Raymond Cruz',
      ocupacion: 'Narcotraficante',
      estatus: 'Fallecido',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_tuco-salamanca-lg.jpg',
    },
    {
      personajeId: 11,
      nombreCompleto: 'Héctor Salamanca',
      apodo: 'Tío',
      interpretadoPor: 'Mark Margolis',
      ocupacion: 'Don del cartel',
      estatus: 'Fallecido',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_hector-salamanca-lg.jpg',
    },
    {
      personajeId: 12,
      nombreCompleto: 'Jane Margolis',
      apodo: 'Jane',
      interpretadoPor: 'Krysten Ritter',
      ocupacion: 'Tatuadora',
      estatus: 'Fallecida',
      foto: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_jane-margolis-lg.jpg',
    },
  ];

  obtenerJuegos(): Personaje[] {
    return this.listaPersonajes;
  }
  obtenerJuegoPorId(id: number): Personaje | undefined {
    return this.listaPersonajes.find((personaje) => personaje.personajeId === id);
  }

  listarPersonajes(): Personaje[] {
    return this.listaPersonajes;
  }

  buscarPersonajePorId(id: number): Personaje | undefined {
    return this.listaPersonajes.find((personaje) => personaje.personajeId === id);
  }

  buscarPersonajePorNombre(nombre: string): Personaje | undefined {
    return this.listaPersonajes.find((p) => p.nombreCompleto.toLowerCase() === nombre.toLocaleLowerCase());
  }
}
