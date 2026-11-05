import { Component } from '@angular/core';

/** A vertical · B horizontal · C foto a sangre · D horizontal invertida */
type TipoTarjeta = 'vertical' | 'horizontal' | 'foto' | 'invertida';

interface Servicio {
  /** Sirve de id (anclas del footer) y de clase de posición en la retícula */
  clave: string;
  tipo: TipoTarjeta;
  etiqueta: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-servicios-bento',
  templateUrl: './bento.component.html',
  styleUrl: './bento.component.css'
})
export class BentoComponent {
  readonly servicios: Servicio[] = [
    {
      clave: 'integracion',
      tipo: 'horizontal',
      etiqueta: 'Llave en mano',
      titulo: 'Integración de sistemas',
      texto: 'Armamos estudios completos de televisión, radio y streaming: equipo, cableado, configuración y puesta en marcha.'
    },
    {
      clave: 'instalacion',
      tipo: 'vertical',
      etiqueta: 'En sitio',
      titulo: 'Instalación de equipo',
      texto: 'Acudimos a su estación a instalar el equipo adquirido y lo dejamos operando. Incluye capacitación al personal que va a quedar a cargo.'
    },
    {
      clave: 'mantenimiento',
      tipo: 'vertical',
      etiqueta: 'Laboratorio propio',
      titulo: 'Mantenimiento y reparación',
      texto: 'Servicio correctivo y preventivo para transmisores, consolas, procesadores y equipo de audio y video, sin importar dónde lo haya comprado.'
    },
    {
      clave: 'soporte',
      tipo: 'foto',
      etiqueta: '24 × 7 × 365',
      titulo: 'Soporte técnico',
      texto: 'Atención directa con nuestros ingenieros para resolver fallas y dudas del equipo.'
    },
    {
      clave: 'asesoria',
      tipo: 'invertida',
      etiqueta: 'Antes de comprar',
      titulo: 'Asesoría y diseño de proyectos',
      texto: 'Le ayudamos a definir qué equipo necesita su proyecto de radio, televisión o audio, ajustado a su presupuesto.'
    },
    {
      clave: 'capacitacion',
      tipo: 'foto',
      etiqueta: 'A su personal',
      titulo: 'Capacitación',
      texto: 'Entrenamos a su equipo en el manejo de los aparatos suministrados.'
    }
  ];
}
