import { ChangeEvent, useState } from 'react';
import { useDebouncedState } from '../../hooks/useDebouncedState';
import { useLocationResults } from './useLocationResults';
import LocationResultList from './LocationResultList';

function LocationSearch({
    onSelectLocation,
}: {
    onSelectLocation: (key: string, name: string) => void;
}) {
    const [city, setCity] = useState('');
    const debouncedCity = useDebouncedState<string>(city, 1000);

    const { locations, isPending, isError, fetchStatus } =
        useLocationResults(debouncedCity);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCity(e.target.value);
    }

    // function handleSelectLocation(location: string) {
    //     setCity('');
    //     onSelectLocation(location);
    // }

    //TODO use useEffect to clear city selection when cityKey is selected (ie when it changes)
    // This'll be for when we move selectedCity to context, to reduce prop drilling
    //Addendum, used a key for set at app level, when it changes it resets the Component (due to how diffing rules work)

    if (isError) return null;

    console.log(locations);
    console.log(fetchStatus);

    return (
        <div className=" relative flex flex-col  space-y-4 rounded-md bg-white p-4">
            <h1>Weather</h1>
            <p>Enter a city to get the current temperature.</p>
            <input
                className="rounded-md border border-slate-400 p-2"
                placeholder="Search for a city"
                onChange={handleChange}
                value={city}
                type="text"
            />
            {isError && 'Something went wrong'}
            <div className="list absolute top-[145px] w-full self-center rounded-md bg-white shadow-lg">
                {fetchStatus === 'fetching' && isPending
                    ? 'Loading...'
                    : city && (
                          <LocationResultList
                              locationList={locations}
                              onSelectLocation={onSelectLocation}
                          />
                      )}
            </div>
        </div>
    );
}

export default LocationSearch;
