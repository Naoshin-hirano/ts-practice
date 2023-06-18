export type USER_LIST_TYPE = {
    id: number;
    name: string;
    role: string;
    email: string;
    age: number;
    postCode: string;
    phone: string;
    hobbies: string[];
    url: string;
    studyMinutes?: number;
    taskCode?: number;
    studyLangs?: string[];
    score?: number;
    experienceDays?: number;
    useLangs?: string[];
    availableStartCode?: number;
    availableEndCode?: number;
};