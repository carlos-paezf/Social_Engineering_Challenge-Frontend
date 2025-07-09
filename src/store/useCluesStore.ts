import { create } from "zustand";


type LoginResult = "pending" | "success" | "failed";


interface CluesStore {
    startTime: number | null;
    startClock: () => void;
    viewedHints: string[];
    viewHint: ( id: string ) => void;
    visibleCount: number;
    loadNextHint: () => void;
    loginResult: LoginResult;
    failedAttempts: number;
    markLoginSuccess: () => void;
    markLoginFailure: () => void;
    resetLoginState: () => void;
    hasSentScore: boolean,
    markScoreSent: () => void;
    resetProgress: () => void;
}


let loginResultFromLS: LoginResult = 'pending';
let failedAttemptsFromLS = 0;

try {
    loginResultFromLS = JSON.parse( localStorage.getItem( "loginResult" ) || 'pending' );
    failedAttemptsFromLS = JSON.parse( localStorage.getItem( "failedAttempts" ) || "0" );
} catch {
    loginResultFromLS = 'pending';
    failedAttemptsFromLS = 0;
}


/* This code snippet is creating a custom hook called `useCluesStore` using the Zustand library in
TypeScript. The `create` function from Zustand is used to define the store shape and initial state. */
export const useCluesStore = create<CluesStore>(
    ( set, get ) => {
        const persistedStart = localStorage.getItem( "startTime" );
        const initialStartTime = persistedStart ? Number( persistedStart ) : null;

        return {
            startTime: initialStartTime,
            startClock: () => {
                if ( get().startTime === null ) {
                    const now = Date.now();
                    localStorage.setItem( "startTime", String( now ) );
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
            },
            loginResult: loginResultFromLS,
            failedAttempts: failedAttemptsFromLS,
            markLoginSuccess: () => {
                localStorage.setItem( "loginResult", JSON.stringify( "success" ) );
                set( { loginResult: "success" } );
            },
            markLoginFailure: () => set( ( state ) => {
                const updatedAttempts = state.failedAttempts + 1;
                localStorage.setItem( "loginResult", JSON.stringify( "failed" ) );
                localStorage.setItem( "failedAttempts", JSON.stringify( updatedAttempts ) );
                return {
                    loginResult: "failed",
                    failedAttempts: state.failedAttempts + 1
                };
            } ),
            resetLoginState: () => {
                localStorage.setItem( "loginResult", JSON.stringify( "pending" ) );
                localStorage.setItem( "failedAttempts", JSON.stringify( 0 ) );
                set( { loginResult: "pending", failedAttempts: 0 } );
            },
            hasSentScore: false,
            markScoreSent: () => set( { hasSentScore: true } ),
            resetProgress: () => {
                localStorage.removeItem( "startTime" );
                set( {
                    startTime: null,
                    viewedHints: [],
                    visibleCount: 1,
                    failedAttempts: 0,
                    hasSentScore: false
                } );
            }
        };
    }
);