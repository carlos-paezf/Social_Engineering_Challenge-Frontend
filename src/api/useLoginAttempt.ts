import { useMutation } from "@tanstack/react-query";
import { api } from "./client";

interface LoginRequest {
    email: string,
    password: string;
}

interface LoginResponse {
    success: boolean;
    message?: string;
}


export const useLogin = () => {
    return useMutation<LoginResponse, Error, LoginRequest>( {
        mutationFn: async ( data ) => {
            const response = await api.post( "/auth/login", data );
            return response.data;
        }
    } );
};