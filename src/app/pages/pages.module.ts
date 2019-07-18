import { NgModule } from '@angular/core';

import { AdopcionesComponent } from './adopciones/adopciones.component';
import { HomeComponent } from './home/home.component';
import { CentrosComponent } from './centros/centros.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ColaboraComponent } from './colabora/colabora.component';
import { ContactoComponent } from './contacto/contacto.component';

import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        HomeComponent,
        AdopcionesComponent,
        CentrosComponent,
        PagesComponent,
        ColaboraComponent,
        ContactoComponent
    ],
    exports: [
        HomeComponent,
        AdopcionesComponent,
        CentrosComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}

