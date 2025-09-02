import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import '@govbr-ds/core/dist/core.js';
import '@govbr-ds/core/dist/core-init.js';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});