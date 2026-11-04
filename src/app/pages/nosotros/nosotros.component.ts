import { Component } from '@angular/core';
import { NosotrosMisionVisionComponent } from './sections/mision-vision/mision-vision.component';
import { NosotrosDiferenciaComponent } from './sections/diferencia/diferencia.component';

@Component({
  selector: 'app-nosotros',
  imports: [NosotrosMisionVisionComponent, NosotrosDiferenciaComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent { }
