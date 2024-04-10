import { useQuery } from '@tanstack/react-query';
import { getRealFeelWeather } from '../../services/apiWeather';

export function useRealFeelWeather(locationKey: string = '') {
    const realFeelWeatherQuery = useQuery({
        queryKey: ['real_feel_weather', locationKey],
        queryFn: () => getRealFeelWeather(locationKey),
        enabled: locationKey !== '',
    });

    return realFeelWeatherQuery;
}
