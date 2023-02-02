import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {WeatherDataService} from '../../../services/weather-data.service';


@Component({
  selector: 'app-city-button',
  templateUrl: './city-button.component.html',
  styleUrls: ['./city-button.component.scss'],
})
export class CityButtonComponent implements OnInit, OnChanges {
  @Input() buttonName: string;
  @Input() currentCity: string;
  isActive: boolean;
  constructor(public weatherService: WeatherDataService) {
  }

  ngOnInit(): void {
    this.isActive = this.buttonName === this.currentCity;
  }

  ngOnChanges(): void {
    this.isActive = this.buttonName === this.currentCity;
  }

  chooseCity(): void {
    return this.weatherService.pushCity(this.buttonName);
  }
}
