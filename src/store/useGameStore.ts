import { create } from "zustand";
import type { GroupBack } from "../types/Group";


interface GameStore {
    groupData: GroupBack | null;
    setGroupData: ( data: GroupBack ) => void;
    clearGroupData: () => void;
}


const loadGroupData = (): GroupBack | null => {
    try {
        const raw = localStorage.getItem( "groupData" );
        if ( !raw ) return null;
        const parsed = JSON.parse( raw );
        if (
            typeof parsed === "object" &&
            parsed !== null &&
            "groupName" in parsed &&
            "institution" in parsed &&
            "leaderName" in parsed &&
            "memberCount" in parsed
        ) {
            return parsed as GroupBack;
        }
        return null;
    } catch {
        return null;
    }
};



export const useGameStore = create<GameStore>(
    ( set ) => ( {
        groupData: loadGroupData(),
        setGroupData: ( data ) => {
            localStorage.setItem( "groupData", JSON.stringify( data ) );
            set( { groupData: data } );
        },
        clearGroupData: () => {
            localStorage.removeItem( "groupData" );
            set( { groupData: null } );
        }
    } )
);