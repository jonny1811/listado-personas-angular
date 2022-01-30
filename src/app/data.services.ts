import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) { }

  loadPeoples() {
    return this.httpClient.get<Persona[]>('https://listado-personas-924f0-default-rtdb.firebaseio.com/datos.json');
  }

  // Guardar Personas
  savePeoples(people: Persona[]) {
    this.httpClient.put('https://listado-personas-924f0-default-rtdb.firebaseio.com/datos.json', people)
      .subscribe(
        response => console.log("resultado guardar Personas" + response),
        error => console.log("Error al guardar Personas:" + error)
      );
  }
}
