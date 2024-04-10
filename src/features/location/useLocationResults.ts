import { useQuery } from '@tanstack/react-query';
import { getAutoComplete } from '../../services/apiAutoComplete';

export function useLocationResults(locationName: string) {
    const {
        data: locations,
        isPending,
        isError,
        error,
        fetchStatus,
    } = useQuery({
        queryKey: ['location_search', locationName],
        queryFn: () => getAutoComplete(locationName),
        enabled: locationName !== '',
    });

    return { locations, isPending, isError, error, fetchStatus };
}
