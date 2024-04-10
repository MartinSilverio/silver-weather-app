import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LocationSearch from './features/location/LocationSearch';
import { useState } from 'react';
import WeatherDetail from './features/weather/WeatherDetail';

const queryClient = new QueryClient();

function App() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [locationName, setLocationName] = useState('');

    function handleSelectLocation(locationKey: string, cityName: string) {
        setSelectedLocation(locationKey);
        setLocationName(cityName);
    }

    return (
        <QueryClientProvider client={queryClient}>
            <AppLayout>
                <div className="mx-auto mt-24 space-y-5">
                    <LocationSearch
                        key={selectedLocation}
                        onSelectLocation={handleSelectLocation}
                    />
                    <WeatherDetail
                        locationKey={selectedLocation}
                        cityName={locationName}
                    />
                </div>
            </AppLayout>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
