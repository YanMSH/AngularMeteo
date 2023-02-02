import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import {WeatherData} from '../models/Weather';
import {getDefaultCity} from '../models/DefaultCities';
import {BASE_URL, Endpoints} from '../http/http.constants';
import {map, switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {LANG, UNITS} from './weather-data.service.constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private apiKey: string | undefined;
  public weatherData: WeatherData | undefined;
  public cityInput = new BehaviorSubject('Москва');
  public currentCity: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
  }

  pushCity(cityName: string): void {
    this.cityInput.next(cityName);
  }

  getWeatherData(): Observable<WeatherData> {
    return this.cityInput
      .pipe(
        map((value) => {
          this.currentCity = value;
          return getDefaultCity(value);
        }),
        switchMap((location) =>
          this.http.get<WeatherData>(BASE_URL + Endpoints.CURRENT_WEATHER,
            {
              params: new HttpParams({
                fromObject: {
                  lat: location.lat.toString(),
                  lon: location.lon.toString(),
                  units: UNITS,
                  lang: LANG,
                  appid: environment.apiKey,
                }
              })
            })))
      .pipe(
        tap((value) => {
          this.weatherData = value;
        }));
  }
}
