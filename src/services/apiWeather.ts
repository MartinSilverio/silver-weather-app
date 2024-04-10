import { getForecastUrl } from '../utils/helperFns';

export async function getRawWeather(locationKey: string) {
    const resp = await fetch(getForecastUrl(locationKey));
    if (!resp.ok) throw new Error('Something went wrong');

    const data = await resp.json();

    return data;
}

export async function getRealFeelWeather(locationKey: string) {
    const data = await getRawWeather(locationKey);

    console.log(data);

    return data[0].RealFeelTemperature;
}
