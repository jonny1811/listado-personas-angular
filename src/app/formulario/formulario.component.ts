import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // nameInput: string = '';
  // lastnameInput: string = '';
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('lastnameInput') lastnameInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) { }

  ngOnInit(): void {

  }

  addPeople(): void {
    let newPeople = new Persona(this.nameInput.nativeElement.value, this.lastnameInput.nativeElement.value);
    // this.loggingService.sendMessageConsole('Enviamos esta persona:' + JSON.stringify(newPeople));
    // this.createdPeople.emit(newPeople);
    this.personasService.addPeople(newPeople);
    this.cleanInput();
  }

  cleanInput(): void {
    this.nameInput.nativeElement.value = '';
    this.lastnameInput.nativeElement.value = '';
  }

}
