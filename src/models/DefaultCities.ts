import {Location} from './Location';

// Данные с координатами городов на кнопках были предзагружены и записаны, т.к.
// в запросах к API применяются не названия городов, а координаты, поэтому оптимальнее было сделать так,
// чтобы снизить количество отправляемых запросов в 2 раза.

export const DEFAULT_CITIES: Location[] = [
  {
    name: 'Москва',
    lat: 55.7504461,
    lon: 37.6174943,
    country: 'RU',
  },
  {
    name: 'Санкт-Петербург',
    lat: 59.938732,
    lon: 30.316229,
    country: 'RU',
  },
  {
    name: 'Екатеринбург',
    lat: 56.839104,
    lon: 60.60825,
    country: 'RU',
  },
  {
    name: 'Владивосток',
    lat: 43.1150678,
    lon: 131.8855768,
    country: 'RU',
  },
];

export const getDefaultCity = (cityName: string): Location | undefined => {
  return DEFAULT_CITIES.find(city => city.name === cityName);
};
