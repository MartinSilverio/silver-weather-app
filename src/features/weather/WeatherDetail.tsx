import { useRealFeelWeather } from './useRealFeelWeather';

function WeatherDetail({
    locationKey,
    cityName,
}: {
    locationKey: string;
    cityName: string;
}) {
    const weatherQuery = useRealFeelWeather(locationKey);

    // if (locationKey === '') return null;

    // if (weatherQuery.isPending)
    //     return (
    //         <div>
    //             <p>Loading temp...</p>
    //         </div>
    //     );

    // console.log(weatherQuery.data);

    // const { Value } = weatherQuery.data;
    // console.log({ Value });

    return (
        <div className="flex h-44 flex-col items-center justify-center rounded-md bg-white">
            <h1>{!weatherQuery.isPending && locationKey !== '' && cityName}</h1>
            <h1>
                {weatherQuery.isPending || locationKey === ''
                    ? '--'
                    : `${weatherQuery.data.Value}°F`}
            </h1>
        </div>
    );
}

export default WeatherDetail;
