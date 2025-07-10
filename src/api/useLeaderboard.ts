import { useQuery } from "@tanstack/react-query";
import type { GroupRanking } from "../types/Group";
import { api } from "./client";


export const useLeaderboard = () => {
    return useQuery<GroupRanking[]>( {
        queryKey: [ "ranking" ],
        queryFn: async () => {
            const response = await api.get( "/ranking" );
            return response.data;
        }
    } );
};