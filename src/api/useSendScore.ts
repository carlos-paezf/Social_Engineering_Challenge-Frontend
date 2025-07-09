import { useMutation } from "@tanstack/react-query";
import type { GroupRanking } from "../types/Group";
import { api } from "./client";

export const useSendScore = () => {
    return useMutation( {
        mutationFn: async ( groupData: GroupRanking ) => {
            const response = await api.post( "/auth/groups", groupData );
            return response.data;
        }
    } );
};