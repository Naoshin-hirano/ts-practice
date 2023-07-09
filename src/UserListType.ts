export type USER_LIST_TYPE = {
    id: number;
    name: string;
    role: "student" | "mentor";
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

export const CATEGORY_TYPE = {
    ALL: 1, // 全員
    STUDENT: 2, // 生徒
    MENTOR: 3, // メンター
} as const;
