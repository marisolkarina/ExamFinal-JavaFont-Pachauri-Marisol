import { Component } from '@angular/core';
import { zapatillas } from '../../../data';
import { CommonModule } from '@angular/common';
import { BuscarPipe } from '../../pipes/buscar-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zapatillas',
  imports: [CommonModule, BuscarPipe, FormsModule],
  templateUrl: './zapatillas.html',
  styleUrl: './zapatillas.css'
})
export class Zapatillas {

  listaZapatillas = zapatillas;
  filtroXMarcaPrecio: string='';

}
