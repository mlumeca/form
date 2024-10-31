import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  person = new PersonDto('', '', 0, '', '', '', '',0, 0);
  submitted = false;

  constructor() {}

  addPerson() {
    console.log(this.person);
    this.submitted = true;
  }

  calculateNifLetter() {
  
  }
}
