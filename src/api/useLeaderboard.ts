import { useQuery } from "@tanstack/react-query";
import type { GroupRanking } from "../types/Group";


export const useLeaderboard = () => {
    return useQuery<GroupRanking[]>( {
        queryKey: [ "ranking" ],
        queryFn: async () => {
            // const response = await api.get( "/auth/groups/ranking" );
            // return response.data;
            return [
                {
                    attempts: 1,
                    groupName: "asdas",
                    institution: "adasd",
                    leaderName: "asdasd",
                    memberCount: 2,
                    timeTaken: 123123
                },
                {
                    attempts: 1,
                    groupName: "asdas",
                    institution: "adasd",
                    leaderName: "asdasd",
                    memberCount: 2,
                    timeTaken: 123123
                },
                {
                    attempts: 1,
                    groupName: "asdas",
                    institution: "adasd",
                    leaderName: "asdasd",
                    memberCount: 2,
                    timeTaken: 123123
                },
                {
                    attempts: 1,
                    groupName: "asdas",
                    institution: "adasd",
                    leaderName: "asdasd",
                    memberCount: 2,
                    timeTaken: 123123
                },
            ];
        }
    } );
};