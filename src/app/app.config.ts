import { ViewportScroller } from '@angular/common';
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // 'top' y no 'enabled': al cambiar de página siempre se sube al inicio,
    // incluso al volver con el botón de atrás
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })),
    // Angular baja a las anclas con window.scrollTo e ignora scroll-padding-top:
    // le pasamos ese mismo valor (--act-nav-alto) para que el navbar no tape el título
    provideAppInitializer(() => {
      inject(ViewportScroller).setOffset(() =>
        [0, parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0]);
    }),
    provideClientHydration(withEventReplay())
  ]
};
