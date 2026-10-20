import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { InicioMarcasComponent } from './sections/marcas/marcas.component';

@Component({
  selector: 'app-inicio',
  imports: [HeroComponent, InicioMarcasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent { }
