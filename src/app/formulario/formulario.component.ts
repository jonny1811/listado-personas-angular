import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameInput: string = '';
  lastnameInput: string = '';

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) {
    this.personasService.greeting.subscribe((index: number) => alert('El indice es: ' + index));
  }

  ngOnInit(): void {

  }

  addPeople(): void {
    let newPeople = new Persona(this.nameInput, this.lastnameInput);
    // this.loggingService.sendMessageConsole('Enviamos esta persona:' + JSON.stringify(newPeople));
    // this.createdPeople.emit(newPeople);
    this.personasService.addPeople(newPeople);
    this.cleanInput();
  }

  cleanInput(): void {
    this.nameInput = '';
    this.lastnameInput = '';
  }

}
