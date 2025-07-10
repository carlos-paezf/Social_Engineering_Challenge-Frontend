import { useHints } from "../../api/useHints";
import { LoaderSpinner } from "../../components/LoaderSpinner";
import { ScrollSentinel } from "../../components/ScrollSentinel";
import { useCluesStore } from "../../store/useCluesStore";
import type { Hint } from "../../types/PostHint";
import { sortByRecentDate } from "../../utils/formatTime";
import { CluePost } from "./CluePost";


export const CluesFeed = () => {
    const { data: hints, isLoading, isError } = useHints();
    const visibleCount = useCluesStore( ( state ) => state.visibleCount );
    const loadNextHint = useCluesStore( ( state ) => state.loadNextHint );

    if ( isLoading ) return <LoaderSpinner message="Cargando pistas..." />;
    if ( isError ) return <p className="text-center text-red-600">Error al cargar las pistas.</p>;
    if ( !hints || !hints.length ) return <p className="text-center text-orange-600">No hay pistas para mostrar</p>;

    const sortedHints: Hint[] = sortByRecentDate( hints );
    const visibleHints: Hint[] = sortedHints.slice( 0, visibleCount );

    const hasMore = visibleHints.length < sortedHints.length;

    return (
        <div className="w-full max-w-2xl mx-auto px-4 space-y-6">
            { visibleHints.map( ( hint, idx ) => <CluePost key={ hint.id } idx={ idx } { ...hint } /> ) }
            <ScrollSentinel onVisible={ loadNextHint } />
            { hasMore && <LoaderSpinner message="Cargando más pistas..." /> }
        </div>
    );
};
