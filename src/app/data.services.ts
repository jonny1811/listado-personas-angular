import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
	constructor(
		private httpClient: HttpClient,
		private loginService: LoginService
	) { }

	loadPeoples() {
		const token = this.loginService.getIdToken();
		return this.httpClient.get<Persona[]>('https://listado-personas-924f0-default-rtdb.firebaseio.com/datos.json?auth=' + token);
	}

	// Guardar Personas
	savePeoples(people: Persona[]) {
		const token = this.loginService.getIdToken();
		this.httpClient.put('https://listado-personas-924f0-default-rtdb.firebaseio.com/datos.json?auth=' + token, people)
			.subscribe(
				response => console.log("resultado guardar Personas" + JSON.stringify(response)),
				error => console.log("Error al guardar Personas:" + error)
			);
	}

	updatePeople(index: number, people: Persona) {
		const token = this.loginService.getIdToken();
		let url: string;
		url = 'https://listado-personas-924f0-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
		this.httpClient.put(url, people)
			.subscribe(
				response => console.log("resultado al modificar Persona:" + JSON.stringify(response)),
				error => console.log("error al modificar Persona:", error)
			);
	}

	deletePeople(index: number) {
		const token = this.loginService.getIdToken();
		let url: string;
		url = 'https://listado-personas-924f0-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
		this.httpClient.delete(url)
			.subscribe(
				response => console.log("resultado al eliminar Persona:" + JSON.stringify(response)),
				error => console.log("error al eliminar Persona:", error)
			);
	}
}
