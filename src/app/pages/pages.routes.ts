import { Routes, RouterModule } from '@angular/router';

import { AdopcionesComponent } from './adopciones/adopciones.component';
import { CentrosComponent } from './centros/centros.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const PagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'adopciones', component: AdopcionesComponent },
            { path: 'centros', component: CentrosComponent },
            { path: 'colabora', component: ColaboraComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );
