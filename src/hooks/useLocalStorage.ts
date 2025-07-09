import { useEffect, useState } from "react";


/**
 * The `useLocalStorage` function in TypeScript allows you to store and retrieve values in the
 * browser's localStorage with error handling.
 * @param {string} key - The `key` parameter in the `useLocalStorage` function is a string that
 * represents the key under which the value will be stored in the localStorage. It is used to uniquely
 * identify the data stored in the localStorage.
 * @param {T} initialValue - The `initialValue` parameter in the `useLocalStorage` function is the
 * initial value that will be used if there is no value stored in the localStorage under the specified
 * key. It is the value that will be returned if there is no existing data in the localStorage for the
 * provided key.
 * @returns The `useLocalStorage` function returns a tuple containing two elements: `storedValue` and
 * `setStoredValue`. These elements are returned as a constant tuple using TypeScript's `as const`
 * syntax.
 */
export function useLocalStorage<T> ( key: string, initialValue: T ) {
    const [ storedValue, setStoredValue ] = useState<T>( () => {
        try {
            const item = localStorage.getItem( key );
            return item !== null ? JSON.parse( item ) : initialValue;
        } catch ( error ) {
            console.warn( "Error reading localStorage key", key, error );
            return initialValue;
        }
    } );

    useEffect( () => {
        try {
            localStorage.setItem( key, JSON.stringify( storedValue ) );
        } catch ( error ) {
            console.warn( "Error writing localStorage key: ", key, error );
        }
    }, [ key, storedValue ] );

    return [ storedValue, setStoredValue ] as const;
}