import { useQuery } from "@tanstack/react-query";
import type { Hint } from "../types/PostHint";

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
            // const response = await api.get( "/hints" );
            // return response.data;
            return [
                {
                    id: "1",
                    imageUrl: "/assets/tom.png",
                    description: "Tom me alegra cada mañana 🐱",
                    postDate: "2025-02-14",
                    likes: 12,
                    comments: [ "¡Qué tierno!", "Se parece a mi gato 😺" ],
                    profileName: "Maria"
                },
                {
                    id: "2",
                    imageUrl: "/assets/cartagena.png",
                    description: "Amo viajar a Cartagena cada diciembre con mis papás 🏖️",
                    postDate: "2024-12-10",
                    likes: 34,
                    comments: [ "¡Qué lindo destino!", "Yo también fui en diciembre" ],
                    profileName: "Maria"
                },
            ];
        }
    } );
};