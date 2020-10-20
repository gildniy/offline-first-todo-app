import {useCallback, useEffect, useState} from "react";
import {get, set} from "idb-keyval";

export function usePersistedState<TState>(keyToPersistWith: string, defaultState: TState) {
    const [state, setState] = useState<TState | undefined>(undefined);

    useEffect(() => {
        get<TState>(keyToPersistWith).then(retrievedState => setState(retrievedState ?? defaultState));
    }, [keyToPersistWith, setState, defaultState]);

    const setPersistedValue = useCallback(async (newValue: TState) => {
        setState(newValue);
        await set(keyToPersistWith, newValue);
    }, [keyToPersistWith, setState]);

    return [state, setPersistedValue] as const;
}