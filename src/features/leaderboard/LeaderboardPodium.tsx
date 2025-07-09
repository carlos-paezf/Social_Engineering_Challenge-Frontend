import type { FC } from "react";
import type { GroupRanking } from "../../types/Group";
import { formatDuration } from "../../utils/formatTime";
import { BronzeTrophy, GoldTrophy, SilverTrophy } from "./Thophies";


interface PodiumProps {
    topThree: GroupRanking[];
}


export const LeaderboardPodium: FC<PodiumProps> = ( { topThree } ) => {
    return (
        <div className="flex justify-center items-end gap-6 mb-12">
            {
                topThree.map( ( group, index ) => {
                    const placeColors = [ "text-yellow-400", "text-gray-300", "text-orange-400" ];
                    const bgColors = [ "bg-yellow-700/80", "bg-gray-800/80", "bg-orange-800/80" ];
                    const heights = [ "h-65", "h-55", "h-45" ];

                    return (
                        <div
                            key={ index }
                            className={ `flex flex-col items-center justify-end bg-gray-800 rounded-xl px-4 py-4 shadow-md w-50 text-center ${ heights[ index ] } ${ bgColors[ index ] }` }
                        >
                            { index === 0 && <GoldTrophy /> }
                            { index === 1 && <SilverTrophy /> }
                            { index === 2 && <BronzeTrophy /> }
                            <p className={ `text-2xl font-bold ${ placeColors[ index ] }` }>#{ index + 1 }</p>
                            <p className="text-sm">{ group.groupName }</p>
                            <p className="text-xs text-gray-300">{ group.institution }</p>
                            <p className="text-xs mt-1">⏱ { formatDuration( group.timeTaken ) }</p>
                            <p className="text-xs">❌ { group.attempts } intentos</p>
                        </div>
                    );
                } )
            }
        </div>
    );
};
