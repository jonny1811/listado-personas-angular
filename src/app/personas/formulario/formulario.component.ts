import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameInput: string = '';
  lastnameInput: string = '';
  index: number;
  editionMode: number;

  constructor(
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.greeting.subscribe((index: number) => alert('El indice es: ' + index));
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.editionMode = +this.route.snapshot.queryParams['editionMode'];

    if (this.editionMode !== null && this.editionMode === 1) {
      let persona: Persona = this.personasService.findPeople(this.index);
      this.nameInput = persona.name;
      this.lastnameInput = persona.lastname;
    }
  }

  onSavePeople(): void {
    let newPeople = new Persona(this.nameInput, this.lastnameInput);
    if (this.editionMode !== null && this.editionMode === 1) {
      this.personasService.updatePeople(this.index, newPeople);
    } else {
      this.personasService.addPeople(newPeople);
    }
    this.router.navigate(['personas']);
  }

  deletePeople() {
    if (this.index !== null) {
      this.personasService.deletePeople(this.index);
    }
    this.router.navigate(['personas']);
  }

}
