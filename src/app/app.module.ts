import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { NofoundComponent } from './views/nofound/nofound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './util/angularmaterial/angularmaterial.module';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    NofoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
