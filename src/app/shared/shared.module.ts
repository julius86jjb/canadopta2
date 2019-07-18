import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BigfooterComponent } from './bigfooter/bigfooter.component';


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        NavbarComponent,
        BigfooterComponent,
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        NavbarComponent,
        BigfooterComponent,
    ]
})


export class SharedModule {}

