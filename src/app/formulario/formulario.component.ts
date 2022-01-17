import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() createdPeople = new EventEmitter<Persona>();

  nameInput: string = '';
  lastnameInput: string = '';

  addPeople(): void {
    let newPeople = new Persona(this.nameInput, this.lastnameInput);
    this.createdPeople.emit(newPeople);
    this.cleanInput();
  }

  cleanInput(): void {
    this.nameInput = '';
    this.lastnameInput = '';
  }

}
