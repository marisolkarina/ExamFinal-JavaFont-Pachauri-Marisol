import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPelicula } from '../../modelo/IPelicula';
import { PeliculasService } from '../../servicio/peliculas-service';

@Component({
  selector: 'app-peliculas',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css'
})
export class Peliculas {

  private fb = inject(FormBuilder);

  peliculas: IPelicula[] = [];

  form: FormGroup;

  constructor(private peliculasService: PeliculasService, private change: ChangeDetectorRef){
    this.form = this.fb.group({
      id: [],
      nombre: ['', Validators.required],
      estreno: ['', Validators.required],
      genero: ['', Validators.required],
      duracion: [0, [Validators.required, Validators.min(60)]],
      calificacion: [0, [Validators.required, Validators.max(10), Validators.min(1)]]
    });

    this.listar();
  }

  listar(){
    this.peliculasService.listar().subscribe((data) => {
      this.peliculas = data;
      this.change.detectChanges();
    });
  }

  limpiar(){
    this.form.reset();
  }

  registrar(){
    if(!this.form.valid) return;
    const pelicula = this.form.value;
    this.peliculasService.registrar(pelicula).subscribe(() => {
      this.limpiar();
      this.listar();
    })
  }

  eliminar(id: number){
    this.peliculasService.eliminar(id).subscribe(() => {
      this.listar();
    });
  }

}
