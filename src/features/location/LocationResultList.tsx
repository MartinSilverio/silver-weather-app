import { TAutoCompleteItem } from '../../services/apiAutoComplete';
import LocationResultItem from './LocationResultItem';

function LocationResultList({
    locationList,
    onSelectLocation,
}: {
    locationList: TAutoCompleteItem[] | undefined;
    onSelectLocation: (key: string, name: string) => void;
}) {
    if (!locationList) return null;

    return (
        <ul className="divide-y-2">
            {locationList.map((locationItem) => (
                <li
                    className="py-1 pl-1 hover:bg-blue-400"
                    key={locationItem.Key}
                >
                    <LocationResultItem
                        locationItem={locationItem}
                        onSelectLocation={onSelectLocation}
                    />
                </li>
            ))}
        </ul>
    );
}

export default LocationResultList;
