import { Component } from '@angular/core';
import { ContactoFormularioComponent } from './sections/formulario/formulario.component';
import { ContactoFaqComponent } from './sections/faq/faq.component';

@Component({
  selector: 'app-contacto',
  imports: [ContactoFormularioComponent, ContactoFaqComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent { }