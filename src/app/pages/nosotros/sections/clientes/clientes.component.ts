import { Component } from '@angular/core';

interface Cliente {
  titulo: string;
  apoyo: string;
}

@Component({
  selector: 'app-nosotros-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class NosotrosClientesComponent {
  readonly clientes: Cliente[] = [
    {
      titulo: 'Televisoras',
      apoyo: 'Estudios, sets completos y mantenimiento. Canal 10, en Durango.'
    },
    {
      titulo: 'Estaciones de radio',
      apoyo: 'Cabinas, transmisores de AM y FM, enlaces y refacciones. Grupo Radio Comunicación, Cinco Radio y Radio Coral.'
    },
    {
      titulo: 'Gobierno e instituciones educativas',
      apoyo: 'Canales universitarios y televisoras de gobierno. Canal ITD y la Universidad Autónoma de Durango.'
    },
    {
      titulo: 'Productoras y eventos sociales',
      apoyo: 'Micrófonos, mezcladoras, bocinas y sistemas de audio profesional.'
    },
    {
      titulo: 'Empresas y corporativos',
      apoyo: 'Audio para recintos, media y streaming.'
    }
  ];
}
