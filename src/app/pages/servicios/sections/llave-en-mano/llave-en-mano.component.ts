import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-llave-en-mano',
  templateUrl: './llave-en-mano.component.html',
  styleUrl: './llave-en-mano.component.css'
})
export class ServiciosLlaveEnManoComponent {
  readonly sistemas: string[] = [
    'Estudios de radio AM y FM',
    'Estudios y sets de televisión',
    'Cabinas de audio profesional',
    'Sistemas de media y streaming'
  ];
}
