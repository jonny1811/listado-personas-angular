import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juanez'),
    new Persona('Carlos', 'Lara')
  ];
  nameInput: string = '';
  lastnameInput: string = '';

  addPeople(): void {
    let newPeople = new Persona(this.nameInput, this.lastnameInput);
    this.personas.push(newPeople);
    this.cleanInput();
  }

  cleanInput(): void {
    this.nameInput = '';
    this.lastnameInput = '';
  }
}
