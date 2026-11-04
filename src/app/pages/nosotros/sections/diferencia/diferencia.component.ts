import { Component } from '@angular/core';

interface Punto {
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-nosotros-diferencia',
  templateUrl: './diferencia.component.html',
  styleUrl: './diferencia.component.css'
})
export class NosotrosDiferenciaComponent {
  /** El orden importa: el número de cada punto sale de su posición */
  readonly puntos: Punto[] = [
    {
      titulo: 'Soporte técnico',
      texto: 'Atención directa con nuestros ingenieros, no con un conmutador. Oficina de lunes a viernes y servicio técnico los 365 días del año.'
    },
    {
      titulo: 'Asesoría en proyectos',
      texto: 'Le ayudamos a definir qué equipo necesita antes de que lo compre, ajustado a su proyecto y a su presupuesto.'
    },
    {
      titulo: 'Tiempos de entrega',
      texto: 'Le confirmamos el plazo antes de cerrar, según el producto y el destino, y lo cumplimos.'
    }
  ];
}
