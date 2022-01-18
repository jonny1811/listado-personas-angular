import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juanez')
  ];

  greeting = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) { }

  addPeople(persona: Persona): void {
    this.loggingService.sendMessageConsole('agregamos persona:' + JSON.stringify(persona));
    this.personas.push(persona);
  }
}
