import { useMutation } from "@tanstack/react-query";
import type { GroupData } from "../types/Group";
import { api } from "./client";

interface RegisterResponse {
    success: boolean;
    message?: string;
}



export const useRegisterGroup = () => {
    return useMutation<RegisterResponse, Error, GroupData>( {
        mutationFn: async ( groupData: GroupData ) => {
            const response = await api.post( "/auth/groups", groupData );
            return response.data;
        }
    } );
};