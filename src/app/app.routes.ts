import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'ACT — Equipo profesional para radio y televisión'
    },
    {
        path: 'servicios',
        component: ServiciosComponent,
        title: 'Servicios — ACT'
    },
    { path: '**', redirectTo: '' }
];