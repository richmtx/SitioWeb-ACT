import { Component } from '@angular/core';

interface Servicio {
  /** Ancla de la tarjeta: coincide con los enlaces del pie (/servicios#id) */
  id: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  /** Contenido entregado por el cliente: no modificar sin su visto bueno */
  readonly servicios: Servicio[] = [
    {
      id: 'instalacion',
      etiqueta: 'SERVICIO 01',
      titulo: 'Instalación de equipo',
      texto: 'Acudimos a su estación a instalar el equipo adquirido y lo dejamos operando. Incluye capacitación al personal que va a quedar a cargo.',
      imagen: '/img/servicios/instalacion.webp',
      alt: 'Técnico conectando cables en la parte trasera de un rack de transmisión'
    },
    {
      id: 'mantenimiento',
      etiqueta: 'SERVICIO 02',
      titulo: 'Mantenimiento y reparación',
      texto: 'Servicio correctivo y preventivo para transmisores, consolas, procesadores y equipo de audio y video, sin importar dónde lo haya comprado.',
      imagen: '/img/servicios/mantenimiento.webp',
      alt: 'Transmisor de radio abierto sobre una mesa de laboratorio'
    },
    {
      id: 'soporte',
      etiqueta: 'SERVICIO 03',
      titulo: 'Soporte técnico',
      texto: 'Atención directa con nuestros ingenieros para resolver fallas y dudas del equipo. Disponible 24 × 7 × 365.',
      imagen: '/img/servicios/soporte.webp',
      alt: 'Audífonos profesionales sobre una consola mezcladora encendida'
    },
    {
      id: 'capacitacion',
      etiqueta: 'SERVICIO 04',
      titulo: 'Capacitación',
      texto: 'Entrenamos a su personal en el manejo del equipo suministrado, en su estación o en nuestras instalaciones.',
      imagen: '/img/servicios/capacitacion.webp',
      alt: 'Dos personas frente a una consola de radio durante una capacitación'
    },
    {
      id: 'asesoria',
      etiqueta: 'SERVICIO 05',
      titulo: 'Asesoría y diseño de proyectos',
      texto: 'Le ayudamos a definir qué equipo necesita su proyecto de radio, televisión o audio, ajustado a su presupuesto y a lo que quiere lograr.',
      imagen: '/img/servicios/asesoria.webp',
      alt: 'Plano técnico desplegado junto a un micrófono de locución'
    },
    {
      id: 'integracion',
      etiqueta: 'SERVICIO 06',
      titulo: 'Integración de sistemas',
      texto: 'Armamos estudios completos de televisión, radio y streaming: equipo, cableado, configuración y puesta en marcha.',
      imagen: '/img/servicios/integracion.webp',
      alt: 'Rack completo de equipo de transmisión con sus indicadores encendidos'
    }
  ];
}
