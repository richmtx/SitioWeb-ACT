import { Component } from '@angular/core';
import { NosotrosEncabezadoComponent } from './sections/encabezado/encabezado.component';
import { NosotrosMisionVisionComponent } from './sections/mision-vision/mision-vision.component';
import { NosotrosDiferenciaComponent } from './sections/diferencia/diferencia.component';
import { NosotrosClientesComponent } from './sections/clientes/clientes.component';

@Component({
  selector: 'app-nosotros',
  imports: [NosotrosEncabezadoComponent, NosotrosMisionVisionComponent, NosotrosDiferenciaComponent, NosotrosClientesComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent { }
