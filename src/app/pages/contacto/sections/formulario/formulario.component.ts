import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class ContactoFormularioComponent {
  enviar(): void {
    // TODO: destino del formulario pendiente de definir con el cliente.
  }
}
