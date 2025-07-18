import { Routes } from '@angular/router';
import { Inicio } from './comp/inicio/inicio';
import { PaginaNoFound } from './comp/pagina-no-found/pagina-no-found';
import { Juego } from './comp/juego/juego';
import { Peliculas } from './comp/peliculas/peliculas';

export const routes: Routes = [
    {path: '',  redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio},
    {path: 'juego', component: Juego},
    {
        path: 'zapatillas-pipe',
        loadComponent: () => import('./comp/zapatillas/zapatillas').then(m => m.Zapatillas)
    },
    {
        path: 'peliculas-model',
        loadComponent: () => import('./comp/peliculas/peliculas').then(m => m.Peliculas)
    },
    {path: '**', component: PaginaNoFound}
];
