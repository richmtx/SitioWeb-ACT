import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

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
    {
        path: 'nosotros',
        component: NosotrosComponent,
        title: 'Nosotros — ACT'
    },
    { path: '**', redirectTo: '' }
];