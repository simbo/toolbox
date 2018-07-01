import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorsModule } from '../colors/colors.module';
import { StringsModule } from '../strings/strings.module';
import { ControlsModule } from '../controls/controls.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { ThemeSwitchComponent } from './themes/theme-switch/theme-switch.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ColorsModule,
    StringsModule,
    ControlsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteMenuComponent,
    ThemeSwitchComponent
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
