import { TAutoCompleteItem } from '../../services/apiAutoComplete';

function LocationResultItem({
    locationItem,
    onSelectLocation,
}: {
    locationItem: TAutoCompleteItem;
    onSelectLocation: (key: string, name: string) => void;
}) {
    return (
        <button
            onClick={() =>
                onSelectLocation(locationItem.Key, locationItem.LocalizedName)
            }
        >
            {locationItem.LocalizedName},{' '}
            {locationItem.AdministrativeArea.LocalizedName},{' '}
            {locationItem.Country.LocalizedName}
        </button>
    );
}

export default LocationResultItem;
