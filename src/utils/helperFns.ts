import { API_KEY, TEMPERATURE_URL } from '../data/constants';

export function getForecastUrl(locationKey: string) {
    return `${TEMPERATURE_URL}/${locationKey}?apikey=${API_KEY}&details=true`;
}
