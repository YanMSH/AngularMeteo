import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonPanelComponent} from './button-panel.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DEFAULT_CITIES} from '../../../models/DefaultCities';

describe('ButtonPanelComponent', () => {
  let component: ButtonPanelComponent;
  let fixture: ComponentFixture<ButtonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPanelComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен создавать компонент без ошибок по компиляции в консоли (проверь консоль)', () => {
    expect(component).toBeTruthy();
  });

  it('должен создавать столько кнопок, сколько элементов в DEFAULT_CITIES', () => {
    const buttonsList = fixture.debugElement.nativeElement.querySelectorAll('app-city-button');
    console.log([...buttonsList]);
    expect([...buttonsList].length).toBe(DEFAULT_CITIES.length);
  });
});
