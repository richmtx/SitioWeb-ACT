import { Component } from '@angular/core';

interface EnlacePie {
  etiqueta: string;
  url: string;
}

interface ColumnaPie {
  titulo: string;
  enlaces: EnlacePie[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly anio = new Date().getFullYear();

  readonly columnas: ColumnaPie[] = [
    {
      titulo: 'Productos',
      enlaces: [
        { etiqueta: 'Radio AM, FM y TV', url: '/productos/radio-tv' },
        { etiqueta: 'Audio profesional', url: '/productos/audio' },
        { etiqueta: 'Micrófonos y soportes', url: '/productos/microfonos' },
        { etiqueta: 'Cables y conectores', url: '/productos/cables' },
        { etiqueta: 'Media y streaming', url: '/productos/streaming' }
      ]
    },
    {
      titulo: 'Servicios',
      enlaces: [
        { etiqueta: 'Instalación de equipo', url: '/servicios#instalacion' },
        { etiqueta: 'Mantenimiento y reparación', url: '/servicios#mantenimiento' },
        { etiqueta: 'Soporte técnico', url: '/servicios#soporte' },
        { etiqueta: 'Capacitación', url: '/servicios#capacitacion' },
        { etiqueta: 'Asesoría de proyectos', url: '/servicios#asesoria' },
        { etiqueta: 'Integración de sistemas', url: '/servicios#integracion' }
      ]
    },
    {
      titulo: 'Empresa',
      enlaces: [
        { etiqueta: 'Nosotros', url: '/nosotros' },
        { etiqueta: 'Marcas', url: '/marcas' },
        { etiqueta: 'Proyectos', url: '/proyectos' },
        { etiqueta: 'Preguntas frecuentes', url: '/preguntas-frecuentes' },
        { etiqueta: 'Contacto', url: '/contacto' }
      ]
    }
  ];
}