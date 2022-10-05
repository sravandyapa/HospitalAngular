import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { NavBarComponentComponent } from './component/nav-bar-component/nav-bar-component.component';
import { CorosolComponentComponent } from './component/corosol-component/corosol-component.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponentComponent,
    NavBarComponentComponent,
    CorosolComponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
