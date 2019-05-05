import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { LampComponent } from './components/lamp/lamp.component';
import { LedComponent } from './components/led/led.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    HumidityComponent,
    LampComponent,
    LedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
