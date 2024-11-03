import { Component } from '@angular/core';
import { PersonDto } from '../../models/person.dto';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

  person = new PersonDto('', '', 0, '', '', '', '', 0, 0);
  submitted = false;
  passwordMatch = false;
  sexList = ['mujer', 'hombre', 'otro'];
  optionList = ['Redes sociales (TikTok, Instagram, Facebook, Youtube).', 'Recomendación de amigos o familia.', 'Otro:'];
  resto: number | undefined;
  nifLetter: string = '-';
  passwordMismatchMessage: string | undefined;

  constructor() {}

  addPerson() {
    console.log(this.person);
    this.submitted = true;
  }

  calculateNifLetter() {
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    this.resto = this.person.nif % 23;
    if (this.resto >= 0 && this.resto <= 22 && this.person.nif.toString().length == 8) { //
      this.nifLetter = letters[this.resto];
    } else {
      this.nifLetter == '-';
    }
  }

  checkPassword() {
    if (this.person.password !== this.person.passwordAgain) {
      this.passwordMismatchMessage = "La contraseña no coincide.";
    } else {
      this.passwordMismatchMessage = " ";
      this.passwordMatch = true;
    }
  }
}