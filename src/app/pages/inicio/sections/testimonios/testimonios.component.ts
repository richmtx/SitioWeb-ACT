import { Component, ElementRef, afterNextRender, signal, viewChild } from '@angular/core';

/** Cada clave define fondo y tinta juntos en el CSS (.testimonio--<clave>) */
type ClaveColor = 'gris' | 'amarillo' | 'cian' | 'verde';

interface Testimonio {
  clave: ClaveColor;
  nombre: string;
  /** Cita textual: no se recorta ni se edita */
  cita: string;
  empresa: string;
  puesto: string;
}

/** Separación entre tarjetas: debe coincidir con el gap del CSS */
const GAP = 20;

@Component({
  selector: 'app-inicio-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css',
  host: { '(window:resize)': 'actualizarExtremos()' }
})
export class InicioTestimoniosComponent {
  readonly testimonios: Testimonio[] = [
    {
      clave: 'gris',
      nombre: 'Ing. José Cruz',
      cita: 'Tengo una buena experiencia. Siempre nos aclaran las dudas; es una empresa comprometida con la calidad y el servicio.',
      empresa: 'Compañía Periodística Criterios',
      puesto: 'Director técnico'
    },
    {
      clave: 'amarillo',
      nombre: 'Lic. Raúl Posadas',
      cita: 'Es una empresa que tiene marcas de vanguardia. Siempre cumplen con los tiempos de entrega y sus precios son muy competitivos.',
      empresa: 'Universidad Autónoma de Durango',
      puesto: 'Director de radio'
    },
    {
      clave: 'cian',
      nombre: 'Lic. Juan Santiago Hernández',
      cita: 'Es un gran equipo de trabajo, les tengo mucha confianza. Manejan buenas marcas y excelentes costos.',
      empresa: 'Radio Coral',
      puesto: 'Director general'
    },
    {
      clave: 'verde',
      nombre: 'Lic. Juan Luis Lara Amaya',
      cita: 'Recomiendo totalmente a Audio y Consultoría en Televisión Digital Terrestre por su excelente atención y rapidez. Compré mi equipo y llegó al día siguiente.',
      empresa: 'La Raza de Morelos',
      puesto: 'Radiodifusor'
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
