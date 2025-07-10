export interface GroupBasic {
    groupName: string;
    institution: string;
    leaderName: string;
    memberCount: number;
}

export interface GroupBack extends GroupBasic {
    id: string;
}


export interface GroupRanking {
    group: GroupBasic;
    timeTaken: number;
    attempts: number;
}

export interface Ranking {
    groupId: string;
    timeTaken: number;
    attempts: number;
}