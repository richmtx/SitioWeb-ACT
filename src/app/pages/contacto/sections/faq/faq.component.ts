import { Component } from '@angular/core';

interface Pregunta {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-contacto-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class ContactoFaqComponent {
  readonly preguntas: Pregunta[] = [
    {
      pregunta: '¿Hacen envíos a otros países?',
      respuesta: 'Sí. Enviamos equipos por diversas paqueterías.'
    },
    {
      pregunta: '¿Pueden instalar los equipos que les compro?',
      respuesta: 'Por supuesto. Acudimos a instalar los equipos y damos capacitación a las personas que quedarán a cargo de ellos.'
    },
    {
      pregunta: '¿Pueden darme más información del equipo que me están cotizando?',
      respuesta: 'Claro. Lo ponemos en contacto con alguno de nuestros ingenieros para que le dé una explicación más amplia de lo que se está cotizando.'
    },
    {
      pregunta: '¿Reparan equipos?',
      respuesta: 'Contamos con laboratorio propio. Entregamos un diagnóstico sin costo, le decimos cuál es el daño y el precio de la reparación. Si usted autoriza, se repara; de lo contrario le regresamos su equipo sin cargo alguno.'
    },
    {
      pregunta: '¿Manejan stock?',
      respuesta: 'Manejamos stock de los equipos más comerciales: micrófonos, mezcladoras, bocinas, audífonos, cables y conectores, entre otros.'
    }
  ];
}
