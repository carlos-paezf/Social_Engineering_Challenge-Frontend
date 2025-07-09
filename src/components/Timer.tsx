import { useEffect, useState, type FC } from "react";
import { formatDuration } from "../utils/formatTime";

interface TimerProps {
    startTime: number;
    isPaused?: boolean;
    label?: string;
    className?: string;
}


export const Timer: FC<TimerProps> = ( { startTime, isPaused = false, label, className = "" } ) => {
    const [ elapsed, setElapsed ] = useState( 0 );

    useEffect( () => {
        if ( !startTime || isPaused ) return;

        const interval = setInterval( () => {
            const now = Date.now();
            setElapsed( now - startTime );
        }, 1000 );

        return () => clearInterval( interval );
    }, [ startTime, isPaused ] );

    return (
        <div className={ `text-lg font-semibold text-gray-400 ${ className }` }>
            { label && <span className="mr-2">{ label }</span> }
            <span>{ formatDuration( elapsed ) }</span>
        </div>
    );
};
