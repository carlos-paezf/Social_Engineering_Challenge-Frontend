import type { FC } from "react";
import type { GroupRanking } from "../../types/Group";
import { formatDuration } from "../../utils/formatTime";


interface LeaderboardProps {
    data: GroupRanking[];
}

export const LeaderboardTable: FC<LeaderboardProps> = ( { data } ) => {
    return (
        <table className="w-4xl text-center border border-gray-100 text-gray-100">
            <thead className="bg-gray-100 text-gray-800">
                <tr>
                    <th className="p-3">#</th>
                    <th className="p-3">Grupo</th>
                    <th className="p-3">Institución</th>
                    <th className="p-3">Líder</th>
                    <th className="p-3">Integrantes</th>
                    <th className="p-3">Tiempo</th>
                    <th className="p-3">Intentos</th>
                </tr>
            </thead>
            <tbody>
                { data.map( ( group, index ) => (
                    <tr key={ index } className="border-t text-gray-800 border-gray-700 hover:bg-gray-800 hover:text-gray-100 transition-colors">
                        <td className="p-3 font-semibold">{ index + 4 }</td>
                        <td className="p-3">{ group.groupName }</td>
                        <td className="p-3">{ group.institution }</td>
                        <td className="p-3">{ group.leaderName }</td>
                        <td className="p-3">{ group.memberCount }</td>
                        <td className="p-3">{ formatDuration( group.timeTaken ) }</td>
                        <td className="p-3">{ group.attempts }</td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    );
};
