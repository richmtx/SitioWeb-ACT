import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'ACT — Equipo profesional para radio y televisión'
    },
    { path: '**', redirectTo: '' }
];