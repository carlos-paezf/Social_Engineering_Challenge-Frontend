import { useMutation } from "@tanstack/react-query";
import type { Ranking } from "../types/Group";
import { api } from "./client";

export const useSendScore = () => {
    return useMutation( {
        mutationFn: async ( groupData: Ranking ) => {
            console.log( { groupData } );
            const response = await api.post( "/ranking", groupData );
            return response.data;
        }
    } );
};