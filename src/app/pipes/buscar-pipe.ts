import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {

    if (!Array.isArray(lista)) return [];
    const textoIngresado = texto.toLowerCase();

    return lista.filter(zap =>
      zap.marca.toLowerCase().includes(textoIngresado) ||
      zap.precio.toString().includes(textoIngresado)
    );
  }

}
