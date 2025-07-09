export interface GroupData {
    groupName: string;
    institution: string;
    leaderName: string;
    memberCount: number;
}


export interface GroupRanking extends GroupData {
    timeTaken: number;
    attempts: number;
}