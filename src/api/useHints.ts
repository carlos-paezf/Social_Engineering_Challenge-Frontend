import { useQuery } from "@tanstack/react-query";
import { api } from "./client";

export interface Hint {
    id: string;
    imageUrl: string;
    description: string;
    postDate: string;
    likes: number;
    comments: string[];
}

/**
 * The useHints function is a custom hook in TypeScript that fetches hints data from an API using
 * useQuery.
 * @returns The `useHints` function is returning a query object that fetches hints data from an API
 * endpoint `/hints` using the `useQuery` hook.
 */
export const useHints = () => {
    return useQuery<Hint[]>( {
        queryKey: [ "hints" ],
        queryFn: async () => {
            const response = await api.get( "/hints" );
            return response.data;
        }
    } );
};