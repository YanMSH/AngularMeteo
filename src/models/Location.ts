import {WeatherData} from './Weather';

export interface Location {
  name: string;
  local_names?: {
    [name: string]: string
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
}


