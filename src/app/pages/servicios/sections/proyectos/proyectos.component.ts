import { Component, ElementRef, afterNextRender, signal, viewChild } from '@angular/core';

/** Cada clave define fondo y tinta juntos en el CSS (.proyecto--<clave>) */
type ClaveColor = 'marino' | 'cian' | 'amarillo' | 'azul' | 'verde' | 'rojo';

interface Proyecto {
  clave: ClaveColor;
  cliente: string;
  trabajo: string;
  lugar: string;
  anio: number;
}

/** Separación entre tarjetas: debe coincidir con el gap del CSS */
const GAP = 20;

@Component({
  selector: 'app-servicios-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  host: { '(window:resize)': 'actualizarExtremos()' }
})
export class ServiciosProyectosComponent {
  readonly proyectos: Proyecto[] = [
    {
      clave: 'marino',
      cliente: 'Canal 10',
      trabajo: 'Servicio, equipos de transmisión y soporte técnico.',
      lugar: 'Durango',
      anio: 2025
    },
    {
      clave: 'cian',
      cliente: 'Canal ITD',
      trabajo: 'Proyecto llave en mano para estudio, soporte y asesoría.',
      lugar: 'Durango',
      anio: 2026
    },
    {
      clave: 'amarillo',
      cliente: 'Asociación Veracruzana de Comunicadores Populares',
      trabajo: 'Venta de equipos para sus cabinas de transmisión.',
      lugar: 'Puebla',
      anio: 2026
    },
    {
      clave: 'azul',
      cliente: 'Grupo Radio Comunicación',
      trabajo: 'Transmisor de audio FM de 1000 watts.',
      lugar: 'Chiapas',
      anio: 2025
    },
    {
      clave: 'verde',
      cliente: 'Cinco Radio',
      trabajo: 'Refacciones para su transmisor de FM.',
      lugar: 'Puebla',
      anio: 2026
    },
    {
      clave: 'rojo',
      cliente: 'Juan Saulo Solano',
      trabajo: 'Transmisor de FM de 1000 watts.',
      lugar: 'Guadalajara',
      anio: 2025
    }
  ];

  private readonly carrusel = viewChild.required<ElementRef<HTMLElement>>('carrusel');

  /** En el prerender se asume el scroll en 0: retroceder nace deshabilitado */
  readonly enInicio = signal(true);
  readonly enFinal = signal(false);

  constructor() {
    // Solo en el navegador: aquí ya hay medidas reales
    afterNextRender(() => this.actualizarExtremos());
  }

  /** Avanza o retrocede una tarjeta más el gap (392px en escritorio) */
  desplazar(direccion: 1 | -1): void {
    const el = this.carrusel().nativeElement;
    const tarjeta = el.querySelector('li');
    const paso = (tarjeta?.offsetWidth ?? 372) + GAP;
    el.scrollBy({ left: paso * direccion });
  }

  actualizarExtremos(): void {
    const el = this.carrusel().nativeElement;
    // 1px de tolerancia: el zoom del navegador deja scrollLeft fraccionario
    this.enInicio.set(el.scrollLeft <= 1);
    this.enFinal.set(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }
}
