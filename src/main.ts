import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppModule1 } from './app/app.module1';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule1)
  .catch(err => console.log(err));

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


