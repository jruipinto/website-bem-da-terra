import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuSvgComponent } from './components/menu-svg/menu-svg.component';
import { PolygonSvgComponent } from './components/polygon-svg/polygon-svg.component';
import { WelcomeImageComponent } from './components/welcome-image/welcome-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './components/navbar/navbar.service';
import { WelcomeSectionComponent } from './sections/welcome-section/welcome-section.component';
import { PermaculturaSectionComponent } from './sections/permacultura-section/permacultura-section.component';
import { EscolaSectionComponent } from './sections/escola-section/escola-section.component';
import { CaminhadasSectionComponent } from './sections/caminhadas-section/caminhadas-section.component';
import { ServicosSectionComponent } from './sections/servicos-section/servicos-section.component';
import { ContactosSectionComponent } from './sections/contactos-section/contactos-section.component';
import { ButtonCtaComponent } from './components/button-cta/button-cta.component';
import { BosqueSectionComponent } from './sections/bosque-section/bosque-section.component';
import { PhoneIconComponent } from './components/phone-icon/phone-icon.component';
import { FacebookIconComponent } from './components/facebook-icon/facebook-icon.component';
import { EmailIconComponent } from './components/email-icon/email-icon.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddressIconComponent } from './components/address-icon/address-icon.component';
import { AgendaSectionComponent } from './sections/agenda-section/agenda-section.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IvyCarouselModule,
    ScullyLibModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LogoComponent,
    MenuSvgComponent,
    PolygonSvgComponent,
    WelcomeImageComponent,
    NavbarComponent,
    WelcomeSectionComponent,
    PermaculturaSectionComponent,
    EscolaSectionComponent,
    CaminhadasSectionComponent,
    ServicosSectionComponent,
    ContactosSectionComponent,
    ButtonCtaComponent,
    BosqueSectionComponent,
    PhoneIconComponent,
    FacebookIconComponent,
    EmailIconComponent,
    ScrollTopComponent,
    CarouselComponent,
    HomePageComponent,
    AddressIconComponent,
    AgendaSectionComponent,
  ],
  bootstrap: [AppComponent],
  providers: [NavbarService],
})
export class AppModule {}
