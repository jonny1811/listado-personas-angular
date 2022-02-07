import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
	token: string;
	constructor(
		private httpClient: HttpClient,
		private loginService: LoginService
	) {
		this.token = loginService.getIdToken();
	}

	loadPeoples() {
		return this.httpClient.get<Persona[]>('https://listado-personas-924f0-default-rtdb.firebaseio.com/datos.json?auth=' + this.token);
	}

	// Guardar Personas
	savePeoples(people: Persona[]) {
		this.httpClient.put('https://listado-personas-924f0-default-rtdb.firebaseio.com/datos.json?auth=' + this.token, people)
			.subscribe(
				response => console.log("resultado guardar Personas" + response),
				error => console.log("Error al guardar Personas:" + error)
			);
	}

	updatePeople(index: number, people: Persona) {
		let url: string;
		url = 'https://listado-personas-924f0-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + this.token;
		this.httpClient.put(url, people)
			.subscribe(
				response => console.log("resultado al modificar Persona:" + response),
				error => console.log("error al modificar Persona:", error)
			);
	}

	deletePeople(index: number) {
		let url: string;
		url = 'https://listado-personas-924f0-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + this.token;
		this.httpClient.delete(url)
			.subscribe(
				response => console.log("resultado al eliminar Persona:" + response),
				error => console.log("error al eliminar Persona:", error)
			);
	}
}
