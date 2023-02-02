export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  timezone: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}

export interface WeatherViewNumbers {
  average: number;
  min: number;
  max: number;
  windSpeed: number;
}

export const MOCK_WEATHER: WeatherData = {
  coord: {
    lat: 12.3456,
    lon: 78.9012
  },
  weather: [{
    id: 1234,
    main: 'Wet rain',
    description: 'мокрый дождь',
    icon: '99x'
  }],
  base: 'stations',
  main: {
    temp: 66.66,
    feels_like: 55.55,
    temp_min: -99.99,
    temp_max: 99.99,
    pressure: 9999,
    humidity: 0,
    sea_level: 9999,
    grnd_level: 999
  },
  visibility: 99999,
  wind: {
    speed: 6.66,
    deg: 180,
    gust: 1.23,
  },
  clouds: {
    all: 99
  },
  dt: 1675337863,
  sys: {
    type: 9,
    id: 1234567,
    country: 'RU',
    sunrise: 1675337999,
    sunset: 1675337000
  },
  timezone: 99999,
  id: 999666,
  name: 'Энск',
  cod: 444
};

export const MOCK_WEATHER_VIEW_NUMBERS: WeatherViewNumbers = {
  average: MOCK_WEATHER.main.temp,
  min: MOCK_WEATHER.main.temp_min,
  max: MOCK_WEATHER.main.temp_max,
  windSpeed: MOCK_WEATHER.wind.speed,
};

