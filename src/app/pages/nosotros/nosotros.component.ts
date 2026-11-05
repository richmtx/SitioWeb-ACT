import { Component } from '@angular/core';
import { NosotrosMisionVisionComponent } from './sections/mision-vision/mision-vision.component';
import { NosotrosDiferenciaComponent } from './sections/diferencia/diferencia.component';
import { NosotrosClientesComponent } from './sections/clientes/clientes.component';

@Component({
  selector: 'app-nosotros',
  imports: [NosotrosMisionVisionComponent, NosotrosDiferenciaComponent, NosotrosClientesComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent { }
