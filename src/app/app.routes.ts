import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';

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
    {
        path: 'productos',
        component: ProductosComponent,
        title: 'Productos — ACT'
    },
    {
        path: 'contacto',
        component: ContactoComponent,
        title: 'Contacto — ACT'
    },
    {
        path: 'cotizacion',
        component: CotizacionComponent,
        title: 'Solicitar cotización — ACT'
    },
    { path: '**', redirectTo: '' }
];
