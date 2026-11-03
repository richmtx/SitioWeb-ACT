import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { InicioConfianzaComponent } from './sections/confianza/confianza.component';
import { InicioMarcasComponent } from './sections/marcas/marcas.component';
import { InicioServiciosResumenComponent } from './sections/servicios-resumen/servicios-resumen.component';
import { InicioTestimoniosComponent } from './sections/testimonios/testimonios.component';

@Component({
  selector: 'app-inicio',
  imports: [HeroComponent, InicioServiciosResumenComponent, InicioTestimoniosComponent, InicioConfianzaComponent, InicioMarcasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent { }