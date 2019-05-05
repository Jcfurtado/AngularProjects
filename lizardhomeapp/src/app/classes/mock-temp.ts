import { Temperature } from './temperature';

export const TEMP: Temperature[] = [
    { id: 0, sensor: 'DHT11', location: 'Outside', temp: 20 },
    { id: 1, sensor: 'DHT22', location: 'Hot Side', temp: 23.5 },
    { id: 2, sensor: 'DHT22', location: 'Cold Side', temp: 21.5 },
    { id: 3, sensor: 'DS18B20', location: 'High Lair', temp: 24 }
];
