import { useHints } from "../../api/useHints";
import type { Hint } from "../../types/PostHint";
import { sortByRecentDate } from "../../utils/formatTime";
import { CluePost } from "./CluePost";


export const CluesFeed = () => {
    const { data: hints, isLoading, isError } = useHints();

    if ( isLoading ) {
        return <p className="text-center text-gray-600">Cargando pistas...</p>;

    }

    if ( isError ) {
        return <p className="text-center text-red-600">Error al cargar las pistas.</p>;
    }

    if ( !hints || !hints.length ) {
        return <p className="text-center text-orange-600">No hay pistas para mostrar</p>;
    }

    const sortedHints: Hint[] = sortByRecentDate( hints );

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            { sortedHints.map( ( hint ) => <CluePost key={ hint.id } { ...hint } /> ) }
        </div>
    );
};
