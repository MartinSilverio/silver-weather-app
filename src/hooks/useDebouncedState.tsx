import { useEffect, useState } from 'react';

export function useDebouncedState<T>(state: T, delay: number) {
    const [newState, setNewState] = useState<T>(state);

    useEffect(() => {
        if (newState !== state) {
            const timeout = setTimeout(() => {
                setNewState(state);
            }, delay);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [delay, state, newState]);

    return newState;
}
