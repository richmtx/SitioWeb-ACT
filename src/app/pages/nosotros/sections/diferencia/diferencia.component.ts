import { Component } from '@angular/core';

interface Punto {
  titulo: string;
  texto: string;
}

interface Tarjeta {
  /** Sufijo del id del <h3> y del modificador de color de la franja */
  clave: 'valores' | 'diferencia';
  etiqueta: string;
  puntos: Punto[];
}

@Component({
  selector: 'app-nosotros-diferencia',
  templateUrl: './diferencia.component.html',
  styleUrl: './diferencia.component.css'
})
export class NosotrosDiferenciaComponent {
  /** El orden importa: el número de cada punto sale de su posición, y cada tarjeta empieza en 01 */
  readonly tarjetas: Tarjeta[] = [
    {
      clave: 'valores',
      etiqueta: 'Nuestros valores',
      puntos: [
        {
          titulo: 'Seriedad y cumplimiento',
          texto: 'Palabra y honestidad. Lo que acordamos es lo que entregamos.'
        },
        {
          titulo: 'Ejecución profesional',
          texto: 'Nos hacemos responsables del proyecto completo, no solo de la parte que vendimos.'
        },
        {
          titulo: 'Seguimiento posventa',
          texto: 'La relación no termina cuando sale el equipo de nuestras manos.'
        }
      ]
    },
    {
      clave: 'diferencia',
      etiqueta: 'Qué nos diferencia',
      puntos: [
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
      ]
    }
  ];
}
