import { Component, signal } from '@angular/core';

interface EnlaceNav {
  etiqueta: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  /** Controla el menú desplegable en móvil */
  readonly menuAbierto = signal(false);

  readonly enlaces: EnlaceNav[] = [
    { etiqueta: 'Inicio', url: '/' },
    { etiqueta: 'Productos', url: '/productos' },
    { etiqueta: 'Soluciones', url: '/soluciones' },
    { etiqueta: 'Marcas', url: '/marcas' },
    { etiqueta: 'Nosotros', url: '/nosotros' },
    { etiqueta: 'Contacto', url: '/contacto' }
  ];

  alternarMenu(): void {
    this.menuAbierto.update(abierto => !abierto);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}