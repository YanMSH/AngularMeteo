import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CityButtonComponent } from './components/city-button/city-button.component';
import {WeatherDataService} from '../services/weather-data.service';
import {HeaderComponent} from './components/header/header.component';
import {ButtonPanelComponent} from './components/button-panel/button-panel.component';
import {WeatherInfoComponent} from './components/weather-info/weather-info.component';
import {WeatherDataControllerComponent} from './components/weather-data-controller/weather-data-controller.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    CityButtonComponent,
    HeaderComponent,
    ButtonPanelComponent,
    WeatherInfoComponent,
    WeatherDataControllerComponent,
    CapitalizePipe,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
