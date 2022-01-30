import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.personasService.getPeoples()
      .subscribe(
        (personas) => {
          this.personas = personas;
          this.personasService.setPeople(personas);
        }
      )
  }

  add(): void {
    this.router.navigate(['personas/agregar']);
  }

}
