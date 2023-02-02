import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherInfoComponent} from './weather-info.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {WeatherDataService} from '../../../services/weather-data.service';
import {CapitalizePipe} from '../../pipes/capitalize.pipe';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MOCK_WEATHER, MOCK_WEATHER_VIEW_NUMBERS} from '../../../models/Weather';

describe('WeatherInfoComponent', () => {
  let component: WeatherInfoComponent;
  let fixture: ComponentFixture<WeatherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherInfoComponent, CapitalizePipe],
      imports: [HttpClientTestingModule],
      providers: [WeatherDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен создавать компонент без ошибок по компиляции в консоли (проверь консоль)', () => {
    expect(component).toBeTruthy();
  });

  it('при загрузке не должен отображать контейнер с информацией о погоде', () => {
    component.loading = true;
    const mainContainer = fixture.debugElement.nativeElement.querySelector('weather-info-container');
    expect(mainContainer).toBe(null);
  });

  it('должно корректно преобразовывать моковые данные', () => {
    component.weather = MOCK_WEATHER;
    expect(component.temperature).toEqual(MOCK_WEATHER_VIEW_NUMBERS);
    expect(component.weatherStatus).toEqual('мокрый дождь');
    expect(component.weatherIcon).toEqual('http://openweathermap.org/img/wn/99x.png');
  });
});
