import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDataControllerComponent} from './weather-data-controller.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {WeatherDataService} from '../../../services/weather-data.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Subscription} from 'rxjs';

describe('WeatherDataControllerComponent', () => {
  let component: WeatherDataControllerComponent;
  let fixture: ComponentFixture<WeatherDataControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDataControllerComponent],
      imports: [HttpClientTestingModule],
      providers: [WeatherDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherDataControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен создавать компонент без ошибок по компиляции в консоли (проверь консоль)', () => {
    expect(component).toBeTruthy();
  });

  it('должен делать подписку при инициализации компонента', () => {
    component.ngOnInit();
    const sub = component.weatherDataSubscription;
    const isSubscription = sub instanceof Subscription;
    expect(isSubscription).toBe(true);
    expect(sub.closed).toBe(false);
  });

  it('должен отписываться при уничтожении компонента', () => {
    component.ngOnDestroy();
    const sub = component.weatherDataSubscription;
    const isSubscription = sub instanceof Subscription;
    expect(isSubscription).toBe(true);
    expect(sub.closed).toBe(true);
  });
});
