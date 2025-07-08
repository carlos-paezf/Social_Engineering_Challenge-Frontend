import { create } from "zustand";

interface CluesStore {
    startTime: number | null;
    startClock: () => void;
    viewedHints: string[];
    viewHint: ( id: string ) => void;
    visibleCount: number;
    loadNextHint: () => void;
}


/* This code snippet is creating a custom hook called `useCluesStore` using the Zustand library in
TypeScript. The `create` function from Zustand is used to define the store shape and initial state. */
export const useCluesStore = create<CluesStore>(
    ( set, get ) => ( {
        startTime: null,
        startClock: () => {
            if ( get().startTime === null ) {
                set( { startTime: Date.now() } );
            }
        },
        viewedHints: [],
        viewHint: ( id: string ) => {
            const { viewedHints, startClock } = get();
            if ( !viewedHints.includes( id ) ) {
                startClock();
                set( { viewedHints: [ ...viewedHints, id ] } );
            }
        },
        visibleCount: 1,
        loadNextHint: () => {
            const current = get().visibleCount;
            set( { visibleCount: current + 1 } );
        }
    } )
);