import { useMutation } from "@tanstack/react-query";
import type { GroupBack, GroupBasic } from "../types/Group";
import { api } from "./client";
import { useGameStore } from "../store/useGameStore";

interface RegisterResponse {
    success: boolean;
    message?: string;
}



export const useRegisterGroup = () => {
    const setGroupData = useGameStore( ( state ) => state.setGroupData );

    return useMutation<RegisterResponse, Error, GroupBasic>( {
        mutationFn: async ( groupData: GroupBasic ) => {
            const response = await api.post( "/group", groupData );
            return response.data;
        },
        onSuccess: ( groupWithId ) => {
            setGroupData( ( groupWithId as unknown ) as GroupBack );
        }
    } );
};