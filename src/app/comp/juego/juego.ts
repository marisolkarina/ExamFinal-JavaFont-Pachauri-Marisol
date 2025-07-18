import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-juego',
  imports: [CommonModule, FormsModule],
  templateUrl: './juego.html',
  styleUrl: './juego.css'
})
export class Juego {

  numeroAl1: number = Math.floor(Math.random() * 5) + 1;
  numeroAl2: number = Math.floor(Math.random() * 5) + 1;

  numero1: number = 0;
  numero2: number = 0;
  intentos1: number = 0;
  intentos2: number = 0;
  puntajeTotal: number = 0;

  mensaje1: string = '';
  mensaje2: string = '';

  adivino1: boolean = false;
  adivino2: boolean = false;

  enviarNumero1(form: NgForm) {
    if (!form.valid || this.intentos1 >= 2 || this.adivino1) {
      this.mensaje1 = 'Numero invalido';
      return;
    }
    this.intentos1++;

    if (this.numero1===this.numeroAl1) {
      const puntos = (this.intentos1 === 1 ? 100 : 50);
      this.puntajeTotal += puntos;
      this.mensaje1 = `Ganaste ${puntos} puntos`;
      this.adivino1 = true;
    } else if (this.intentos1===2) {
      this.mensaje1 = `¡Fallaste! El numero era ${this.numeroAl1}.`;
    } else {
      this.mensaje1 = 'Incorrecto, te queda 1 intento.';
    }

    this.numero1 = 0;
    form.resetForm();
  }

  enviarNumero2(form: NgForm) {
    if (!form.valid || this.intentos2 >= 2 || this.adivino2) {
      this.mensaje2 = 'Numero invalido';
      return;
    }
    this.intentos2++;

    if (this.numero2 === this.numeroAl2) {
      const puntos = (this.intentos2 === 1 ? 100 : 50);
      this.puntajeTotal += puntos;
      this.mensaje2 = `Ganaste ${puntos} puntos`;
      this.adivino2 = true;
    } else if (this.intentos2 === 2) {
      this.mensaje2 = `¡Fallaste! El numero era ${this.numeroAl2}.`;
    } else {
      this.mensaje2 = 'Incorrecto, te queda 1 intento.';
    }

    this.numero2 = 0;
    form.resetForm();
  }

  reiniciarJuego() {
    this.numeroAl1 = Math.floor(Math.random() * 5) + 1;
    this.numeroAl2 = Math.floor(Math.random() * 5) + 1;
    this.numero1 = 0;
    this.numero2 = 0;
    this.intentos1 = 0;
    this.intentos2 = 0;
    this.puntajeTotal = 0;
    this.mensaje1 = '';
    this.mensaje2 = '';
  }
}
