import { useLeaderboard } from "../api/useLeaderboard";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { LeaderboardPodium } from "../features/leaderboard/LeaderboardPodium";
import { LeaderboardTable } from "../features/leaderboard/LeaderboardTable";
import { MainLayout } from "../layout/MainLayout";


const LeaderboardPage = () => {
    const { data, isLoading, isError } = useLeaderboard();

    if ( isLoading ) return <LoaderSpinner message="Cargando Ranking..." size="lg" />;
    if ( isError ) return <p className="text-center text-red-500">Error al cargar el ranking.</p>;

    const topThree = data?.slice( 0, 3 );
    const othersGroups = data?.slice( 3 );

    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">🏆 Ranking de Grupos</h2>

                { ( !data || !data.length ) && <p className="text-center text-orange-500">No hay registros para listar</p> }

                { ( topThree && topThree.length ) && <LeaderboardPodium topThree={ topThree } /> }

                {
                    !othersGroups || !othersGroups.length
                        ? <p className="text-center text-orange-500">No hay registros para listar</p>
                        : <LeaderboardTable data={ othersGroups! } />
                }
            </div>
        </MainLayout>
    );
};


export default LeaderboardPage;