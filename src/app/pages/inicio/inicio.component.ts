import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';

@Component({
  selector: 'app-inicio',
  imports: [HeroComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent { }
