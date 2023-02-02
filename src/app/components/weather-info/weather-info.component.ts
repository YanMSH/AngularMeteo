import {Component, Input} from '@angular/core';
import {WeatherData, WeatherViewNumbers} from '../../../models/Weather';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent {
  @Input() loading: boolean;
  @Input() weather: WeatherData;
  @Input() currentCity: string;

  constructor() {
  }

  get weatherStatus(): string {
    return this.weather.weather[0].description;
  }

  get temperature(): WeatherViewNumbers {
    return {
      average: this.weather.main.temp,
      min: this.weather.main.temp_min,
      max: this.weather.main.temp_max,
      windSpeed: this.weather.wind.speed
    };
  }

  get weatherIcon(): string{
    return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}.png`;
  }
}
