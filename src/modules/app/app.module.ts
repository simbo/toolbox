import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';

import { MessageBusService } from './message-bus/message-bus.service';
import { ColorsModule } from '../colors/colors.module';
import { StringsModule } from '../strings/strings.module';

@NgModule({
  imports: [
    BrowserModule,
    ColorsModule,
    StringsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteMenuComponent
  ],
  providers: [
    MessageBusService,
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
