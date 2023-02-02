import {TestBed} from '@angular/core/testing';

import {WeatherDataService} from './weather-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('WeatherDataService', () => {
  let service: WeatherDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(WeatherDataService);
  });

  it('должен создаваться инстанс класса', () => {
    expect(service).toBeTruthy();
  });
});
