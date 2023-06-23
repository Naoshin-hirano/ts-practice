export type USER_LIST_TYPE = {
    id: number;
    name: string;
    role: string;
    email: string;
    age: number | string;
    postCode: string;
    phone: string;
    hobbies: string[];
    url: string;
    studyMinutes?: number | string;
    taskCode?: number | string;
    studyLangs?: string[];
    score?: number | string;
    experienceDays?: number | string;
    useLangs?: string[];
    availableStartCode?: number | string;
    availableEndCode?: number | string;
};
