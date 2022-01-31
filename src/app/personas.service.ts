import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
	personas: Persona[] = [];

	greeting = new EventEmitter<number>();

	constructor(
		private loggingService: LoggingService,
		private dataServices: DataServices
	) { }

	setPeople(peoples: Persona[]) {
		this.personas = peoples;
	}

	getPeoples() {
		return this.dataServices.loadPeoples();
	}

	addPeople(persona: Persona): void {
		this.loggingService.sendMessageConsole('agregamos persona:' + JSON.stringify(persona));
		if (this.personas == null) {
			this.personas = [];
		}
		this.personas.push(persona);
		this.dataServices.savePeoples(this.personas);
	}

	findPeople(index: number): Persona {
		let persona: Persona = this.personas[index];
		return persona;
	}

	updatePeople(index: number, people: Persona): void {
		let persona = this.personas[index];
		persona.name = people.name;
		persona.lastname = people.lastname;
		this.dataServices.updatePeople(index, persona);
	}

	deletePeople(index: number): void {
		this.personas.splice(index, 1);
		this.dataServices.deletePeople(index);
		// se vuelve a guardar el arreglo para regenerar los indices
		this.modificarPersonas();
	}

	modificarPersonas() {
		if (this.personas != null) {
			this.dataServices.savePeoples(this.personas);
		}
	}
}
