import { useQuery } from "@tanstack/react-query";
import type { Hint } from "../types/PostHint";
import { api } from "./client";

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