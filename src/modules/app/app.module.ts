import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorNamerModule } from '../color-namer/color-namer.module';
import { HashGeneratorModule } from '../hash-generator/hash-generator.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ColorNamerModule,
    HashGeneratorModule,
    AppRoutingModule
  ],
    AppComponent,
    HomePageComponent,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
