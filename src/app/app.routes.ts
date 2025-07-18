import { Routes } from '@angular/router';
import { Inicio } from './comp/inicio/inicio';
import { PaginaNoFound } from './comp/pagina-no-found/pagina-no-found';
import { Juego } from './comp/juego/juego';

export const routes: Routes = [
    {path: '',  redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio},

    {
        path: 'zapatillas-pipe',
        loadComponent: () => import('./comp/zapatillas/zapatillas').then(m => m.Zapatillas)
    },
    {path: 'juego', component: Juego},
    {path: '**', component: PaginaNoFound}
];
