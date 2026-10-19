import { Component } from '@angular/core';

interface Punto {
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-servicios-cobertura',
  templateUrl: './cobertura.component.html',
  styleUrl: './cobertura.component.css'
})
export class ServiciosCoberturaComponent {
  /** El orden importa: el número de cada punto sale de su posición */
  readonly puntos: Punto[] = [
    {
      titulo: 'Cobertura nacional e internacional',
      texto: 'Venta, servicio y mantenimiento en todo México y en otros países.'
    },
    {
      // × es U+00D7, con espacios finos (U+2009) alrededor
      titulo: 'Soporte 24 × 7 × 365',
      texto: 'Oficina de lunes a viernes de 9:00 a 18:00. Servicio técnico todo el año.'
    },
    {
      titulo: 'Garantía de fábrica',
      texto: 'La garantía se gestiona directamente con el fabricante del equipo.'
    },
    {
      titulo: 'Facturamos',
      texto: 'Emitimos factura tanto por venta de equipo como por servicio.'
    }
  ];

  /** 0 → "01", 3 → "04" */
  numero(indice: number): string {
    return String(indice + 1).padStart(2, '0');
  }
}
