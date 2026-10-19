import { Component } from '@angular/core';

interface Paso {
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-servicios-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrl: './laboratorio.component.css'
})
export class ServiciosLaboratorioComponent {
  /** El orden importa: el número de cada paso sale de su posición */
  readonly pasos: Paso[] = [
    {
      titulo: 'Diagnóstico sin costo',
      texto: 'Recibimos su equipo y lo revisamos a fondo. La revisión no se cobra, llegue a repararse o no.'
    },
    {
      titulo: 'Le decimos el daño y el precio',
      texto: 'Le explicamos qué falla encontramos y cuánto cuesta repararla, antes de tocar nada.'
    },
    {
      titulo: 'Usted decide',
      texto: 'Si autoriza, reparamos. Si no, le devolvemos su equipo sin cargo alguno.'
    }
  ];
}
