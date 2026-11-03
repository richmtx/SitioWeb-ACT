import { Component } from '@angular/core';
import { ContactoFormularioComponent } from './sections/formulario/formulario.component';

@Component({
  selector: 'app-contacto',
  imports: [ContactoFormularioComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent { }