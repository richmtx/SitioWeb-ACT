import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

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

  private readonly router = inject(Router);

  /** Ruta actual sin query ni fragmento, para marcar el enlace activo */
  private readonly rutaActual = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => this.limpiar(e.urlAfterRedirects))
    ),
    { initialValue: this.limpiar(this.router.url) }
  );

  readonly enlaces: EnlaceNav[] = [
    { etiqueta: 'Inicio', url: '/' },
    { etiqueta: 'Productos', url: '/productos' },
    { etiqueta: 'Servicios', url: '/servicios' },
    { etiqueta: 'Nosotros', url: '/nosotros' },
    { etiqueta: 'Contacto', url: '/contacto' }
  ];

  esActivo(url: string): boolean {
    const actual = this.rutaActual();
    return url === '/' ? actual === '/' : actual === url || actual.startsWith(url + '/');
  }

  private limpiar(url: string): string {
    return url.split(/[?#]/)[0] || '/';
  }

  alternarMenu(): void {
    this.menuAbierto.update(abierto => !abierto);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}