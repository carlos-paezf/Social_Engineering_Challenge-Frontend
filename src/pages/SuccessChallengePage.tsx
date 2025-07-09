import { useEffect, useState } from "react";
import { useGameStore } from "../store/useGameStore";
import { useCluesStore } from "../store/useCluesStore";
import { useSendScore } from "../api/useSendScore";
import { MainLayout } from "../layout/MainLayout";
import { formatDuration } from "../utils/formatTime";


export const SuccessChallengePage = () => {
    const { mutate: sendScore, isPending, isSuccess } = useSendScore();
    const groupData = useGameStore.getState().groupData;
    const startTime = useCluesStore.getState().startTime;
    const failedAttempts = useCluesStore.getState().failedAttempts;
    const hasSentScore = useCluesStore( ( state ) => state.hasSentScore );
    const markScoreSent = useCluesStore( ( state ) => state.markScoreSent );
    const resetProgress = useCluesStore( ( state ) => state.resetProgress );

    const [ timeTaken, setTimeTaken ] = useState<number | null>( null );

    /* The `useEffect` hook in the code snippet is responsible for triggering a side effect when
    certain dependencies change. In this case, the effect is triggered when any of the dependencies
    `groupData`, `startTime`, `failedAttempts`, `hasSentScore`, `sendScore`, or `markScoreSent`
    change. */
    useEffect( () => {
        if ( !groupData || !startTime || hasSentScore ) return;

        const totalTime = Date.now() - startTime;
        setTimeTaken( totalTime );

        sendScore(
            {
                ...groupData, timeTaken: totalTime, attempts: failedAttempts + 1
            },
            {
                onSuccess: () => {
                    markScoreSent();
                    resetProgress();
                }
            } );
    }, [ groupData, startTime, failedAttempts, hasSentScore, sendScore, markScoreSent, resetProgress ] );

    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col items-center justify-center bg-green-900 text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">🎉 ¡Reto Completado!</h1>
                <p className="text-lg text-center mb-6">
                    Felicitaciones <span className="font-semibold">{ groupData?.groupName }</span> de{ " " }
                    <span className="italic">{ groupData?.institution }</span>. Han superado el reto hacker.
                </p>

                { isPending && (
                    <p className="text-yellow-300 animate-pulse">Guardando tu puntaje...</p>
                ) }

                { isSuccess && timeTaken !== null && (
                    <div className="text-center bg-green-800 px-6 py-4 rounded-xl shadow-md mt-4">
                        <p className="text-xl mb-2">🕒 Tiempo: <span className="font-bold">{ formatDuration( timeTaken ) }</span></p>
                        <p className="text-xl">❌ Intentos: <span className="font-bold">{ failedAttempts + 1 }</span></p>
                    </div>
                ) }

                <div className="mt-10 text-sm text-gray-300">
                    Puedes ver tu posición en el ranking desde la página principal.
                </div>
            </div>
        </MainLayout>
    );
};
