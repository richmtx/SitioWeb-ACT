import { Component } from '@angular/core';
import { BentoComponent } from './sections/bento/bento.component';
import { ServiciosLaboratorioComponent } from './sections/laboratorio/laboratorio.component';
import { ServiciosLlaveEnManoComponent } from './sections/llave-en-mano/llave-en-mano.component';
import { ServiciosCoberturaComponent } from './sections/cobertura/cobertura.component';
import { ServiciosProyectosComponent } from './sections/proyectos/proyectos.component';

@Component({
  selector: 'app-servicios',
  imports: [BentoComponent, ServiciosLaboratorioComponent, ServiciosLlaveEnManoComponent, ServiciosCoberturaComponent, ServiciosProyectosComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent { }
