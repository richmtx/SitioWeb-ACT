import { NgTemplateOutlet } from '@angular/common';
import { afterNextRender, Component, ElementRef, signal, viewChildren } from '@angular/core';

interface Marca {
  nombre: string;
  /** Ruta al logotipo; vacía → se muestra el nombre en texto */
  logo: string;
}

/** Fichas por columna, de izquierda a derecha. Suman 25. */
const FICHAS_POR_COLUMNA = [5, 5, 3, 3, 4, 5];

@Component({
  selector: 'app-inicio-marcas',
  imports: [NgTemplateOutlet],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class InicioMarcasComponent {
  /** El orden importa: se reparten por columna según FICHAS_POR_COLUMNA */
  readonly marcas: Marca[] = [
    // Columna 1
    { nombre: 'Andrew', logo: '/img/marcas/andrew.png' },
    { nombre: 'Arrakis', logo: '/img/marcas/arrakis.png' },
    { nombre: 'Audio-Technica', logo: '/img/marcas/audio-technica.png' },
    { nombre: 'Belden', logo: '/img/marcas/belden.png' },
    { nombre: 'Blackmagic', logo: '/img/marcas/blackmagic.png' },
    // Columna 2
    { nombre: 'Comrex', logo: '/img/marcas/comrex.png' },
    { nombre: 'Crown', logo: '/img/marcas/crown.png' },
    { nombre: 'dbx', logo: '/img/marcas/dbx.png' },
    { nombre: 'Elenos', logo: '/img/marcas/elenos.png' },
    { nombre: 'Euro Acoustics', logo: '/img/marcas/euro-acoustics.png' },
    // Columna 3
    { nombre: 'Feelworld', logo: '/img/marcas/feelworld.png' },
    { nombre: 'Inovonics', logo: '/img/marcas/inovonics.png' },
    { nombre: 'Jampro', logo: '/img/marcas/jampro.png' },
    // Columna 4
    { nombre: 'JBL', logo: '/img/marcas/jbl.png' },
    { nombre: 'JK Audio', logo: '/img/marcas/jk-audio.png' },
    { nombre: 'Mackie', logo: '/img/marcas/mackie.png' },
    // Columna 5
    { nombre: 'Orban', logo: '/img/marcas/orban.png' },
    { nombre: 'Roland', logo: '/img/marcas/roland.png' },
    { nombre: 'Samson', logo: '/img/marcas/samson.png' },
    { nombre: 'Sennheiser', logo: '/img/marcas/sennheiser.png' },
    // Columna 6
    { nombre: 'Shure', logo: '/img/marcas/shure.png' },
    { nombre: 'Sinteck', logo: '/img/marcas/sinteck.png' },
    { nombre: 'Telycam', logo: '/img/marcas/telycam.png' },
    { nombre: 'Yamaha', logo: '/img/marcas/yamaha.png' },
    { nombre: 'Yellowtec', logo: '/img/marcas/yellowtec.png' }
  ];

  /** Las seis columnas; las tres primeras van a la izquierda del bloque central */
  readonly columnas: Marca[][] = FICHAS_POR_COLUMNA.map((cantidad, i) => {
    const inicio = FICHAS_POR_COLUMNA.slice(0, i).reduce((a, b) => a + b, 0);
    return this.marcas.slice(inicio, inicio + cantidad);
  });

  /** Marcas cuyo logotipo no cargó: caen al nombre en texto */
  readonly fallidas = signal(new Set<string>());

  private readonly logos = viewChildren<ElementRef<HTMLImageElement>>('logo');

  constructor() {
    // Con prerenderizado, una imagen puede fallar antes de hidratar y su (error)
    // se pierde: al primer render en el navegador revisamos las que ya fallaron.
    afterNextRender(() => {
      for (const { nativeElement: img } of this.logos()) {
        if (img.complete && img.naturalWidth === 0) this.marcarFallida(img.alt);
      }
    });
  }

  marcarFallida(nombre: string): void {
    this.fallidas.update(previas => new Set(previas).add(nombre));
  }
}
