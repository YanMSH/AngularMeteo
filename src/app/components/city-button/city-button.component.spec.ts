import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CityButtonComponent} from './city-button.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {WeatherDataService} from '../../../services/weather-data.service';
describe('CityButtonComponent', () => {
  let component: CityButtonComponent;
  let fixture: ComponentFixture<CityButtonComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityButtonComponent],
      imports: [HttpClientTestingModule],
      providers: [WeatherDataService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен создавать компонент без ошибок по компиляции в консоли (проверь консоль)', () => {
    expect(component).toBeTruthy();
  });

  it('должен менять значение параметра isActive на true если buttonName совпадает с currentCity', () => {
    component.buttonName = 'Киров';
    component.currentCity = 'Киров';
    fixture.detectChanges();
    expect(component.isActive).toBe(true);
  });

  it('должен применять определенные стили, если значение параметра isActive = true', () => {
    component.isActive = true;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const classes = [...button.classList];
    expect(classes.includes('bg-red-400')).toBe(true);
    expect(classes.includes('text-white')).toBe(true);
  });

  it('не должен применять определенные стили, если значение параметра isActive = false', () => {
    component.isActive = false;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const classes = [...button.classList];
    expect(classes.includes('bg-red-400')).toBe(false);
    expect(classes.includes('text-white')).toBe(false);
  });

  it('должен при клике вызывать метод chooseCity()', fakeAsync((): void => {
    spyOn(component, 'chooseCity');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.chooseCity).toHaveBeenCalled();
    expect(component.chooseCity).toHaveBeenCalledTimes(1);
  }));
});
