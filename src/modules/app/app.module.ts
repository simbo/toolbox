import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlsModule } from '../controls/controls.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { ThemeSwitchComponent } from './themes/theme-switch/theme-switch.component';
import { SiteLoadingBarComponent } from './site-loading-bar/site-loading-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ControlsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteMenuComponent,
    ThemeSwitchComponent,
    SiteLoadingBarComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
