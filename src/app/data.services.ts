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

	updatePeople(index: number, people: Persona) {
		let url: string;
		url = 'https://listado-personas-924f0-default-rtdb.firebaseio.com/datos/' + index + '.json';
		this.httpClient.put(url, people)
			.subscribe(
				response => console.log("resultado al modificar Persona:" + response),
				error => console.log("error al modificar Persona:", error)
			);
	}

	deletePeople(index: number) {
		let url: string;
		url = 'https://listado-personas-924f0-default-rtdb.firebaseio.com/datos/' + index + '.json';
		this.httpClient.delete(url)
			.subscribe(
				response => console.log("resultado al eliminar Persona:" + response),
				error => console.log("error al eliminar Persona:", error)
			);
	}
}
