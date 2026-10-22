import { NgTemplateOutlet } from '@angular/common';
import { afterNextRender, Component, ElementRef, signal, viewChildren } from '@angular/core';

interface Marca {
  nombre: string;
  /** Ruta al logotipo; vacía → se muestra el nombre en texto */
  logo: string;
  /**
   * Según la proporción del archivo (ancho ÷ alto); cada una tiene su tope de
   * ancho y alto para igualar el área visual. Sin forma → topes por defecto.
   *   ancho ≥ 3.5 · medio 1.8–3.5 · compacto < 1.8
   */
  forma?: Forma;
}

type Forma = 'ancho' | 'medio' | 'compacto';

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
    { nombre: 'Andrew', logo: '/img/marcas/andrew.png', forma: 'compacto' },
    { nombre: 'Arrakis', logo: '/img/marcas/arrakis.png', forma: 'compacto' },
    { nombre: 'Audio-Technica', logo: '/img/marcas/audio-technica.png', forma: 'compacto' },
    { nombre: 'Belden', logo: '/img/marcas/belden.png', forma: 'ancho' },
    { nombre: 'Blackmagic', logo: '/img/marcas/blackmagic.png', forma: 'compacto' },
    // Columna 2
    { nombre: 'Comrex', logo: '/img/marcas/comrex.png', forma: 'compacto' },
    { nombre: 'Crown', logo: '/img/marcas/crown.png', forma: 'compacto' },
    { nombre: 'dbx', logo: '/img/marcas/dbx.png', forma: 'compacto' },
    { nombre: 'Elenos', logo: '/img/marcas/elenos.png', forma: 'compacto' },
    { nombre: 'Euro Acoustics', logo: '/img/marcas/euro-acoustics.png', forma: 'compacto' },
    // Columna 3
    { nombre: 'Feelworld', logo: '/img/marcas/feelworld.png', forma: 'compacto' },
    { nombre: 'Inovonics', logo: '/img/marcas/inovonics.png', forma: 'medio' },
    { nombre: 'Jampro', logo: '/img/marcas/jampro.png', forma: 'compacto' },
    // Columna 4
    { nombre: 'JBL', logo: '/img/marcas/jbl.png', forma: 'compacto' },
    { nombre: 'JK Audio', logo: '/img/marcas/jk-audio.png', forma: 'compacto' },
    { nombre: 'Mackie', logo: '/img/marcas/mackie.png', forma: 'medio' },
    // Columna 5
    { nombre: 'Orban', logo: '/img/marcas/orban.png', forma: 'compacto' },
    { nombre: 'Roland', logo: '/img/marcas/roland.png', forma: 'compacto' },
    { nombre: 'Samson', logo: '/img/marcas/samson.png', forma: 'compacto' },
    { nombre: 'Sennheiser', logo: '/img/marcas/sennheiser.png', forma: 'compacto' },
    // Columna 6
    { nombre: 'Shure', logo: '/img/marcas/shure.png', forma: 'compacto' },
    { nombre: 'Sinteck', logo: '/img/marcas/sinteck.png', forma: 'medio' },
    { nombre: 'Telycam', logo: '/img/marcas/telycam.png', forma: 'compacto' },
    { nombre: 'Yamaha', logo: '/img/marcas/yamaha.png', forma: 'compacto' },
    { nombre: 'Yellowtec', logo: '/img/marcas/yellowtec.png', forma: 'compacto' }
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
