import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {WeatherDataService} from '../../../services/weather-data.service';
import {WeatherData} from '../../../models/Weather';

@Component({
  selector: 'app-weather-data-controller',
  templateUrl: './weather-data-controller.component.html',
  styleUrls: ['./weather-data-controller.component.css']
})
export class WeatherDataControllerComponent implements OnInit, OnDestroy {
  loading = true;
  weatherDataSubscription: Subscription;
  currentCity: string;

  constructor(public weatherService: WeatherDataService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.weatherDataSubscription = this.weatherService.getWeatherData().subscribe(
      () => {
        this.loading = false;
        this.currentCity = this.weatherService.currentCity;
      }
    );
  }

  ngOnDestroy(): void {
    this.weatherDataSubscription.unsubscribe();
  }

  get weatherData(): WeatherData {
    return this.weatherService.weatherData;
  }

}
