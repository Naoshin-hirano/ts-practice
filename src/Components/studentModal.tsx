import React, {
    ChangeEvent,
    Dispatch,
    FC,
    FormEvent,
    SetStateAction,
    useState,
} from "react";
import { USER_LIST_TYPE } from "../UserListType";

type MODAL_TYPE = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    userList: USER_LIST_TYPE[];
    setUserList: Dispatch<SetStateAction<USER_LIST_TYPE[]>>;
    studentList: USER_LIST_TYPE[];
    setStudentList: Dispatch<SetStateAction<USER_LIST_TYPE[]>>;
    showStudentModal: boolean;
};

export const StudentModal: FC<MODAL_TYPE> = ({
    setShowModal,
    userList,
    setUserList,
    studentList,
    setStudentList,
    showStudentModal,
}: MODAL_TYPE) => {
    const initialValues = {
        name: "",
        email: "",
        age: "",
        postCode: "",
        phone: "",
        hobbies: [""],
        url: "",
        studyMinutes: "",
        taskCode: "",
        studyLangs: [""],
        score: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [studyLanguages, setStudyLanguages] = useState<string[]>([]);
    const [myHobbies, setMyHobbies] = useState<string[]>([]);
    const [oneLanguage, setOneLanguage] = useState<string>("");
    const [oneHobby, setOneHobby] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUserInfo = {
            ...formValues,
            id: userList.length + 1,
            role: "student",
            hobbies: [...myHobbies],
            studyLangs: [...studyLanguages],
        };

        const newUserList = [...userList, newUserInfo];
        const newStudentList = [...studentList, newUserInfo];
        setUserList(newUserList);
        setStudentList(newStudentList);
        setShowModal(false);
    };

    const addStudyLanguages = (language: string) => {
        if (language === "") {
            return;
        }
        const newItem = [...studyLanguages, language];
        setStudyLanguages(newItem);
        setOneLanguage("");
    };

    const addHobby = (hobby: string) => {
        if (hobby === "") {
            return;
        }
        const newItem = [...myHobbies, hobby];
        setMyHobbies(newItem);
        setOneHobby("");
    };

    const handleOneLanguage = (e: ChangeEvent<HTMLInputElement>) => {
        setOneLanguage(e.target.value);
    };

    const handleOneHobby = (e: ChangeEvent<HTMLInputElement>) => {
        setOneHobby(e.target.value);
    };
    return (
        <>
            {showStudentModal && (
                <div id="overlay">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div id="content">
                            <div className="contact-form">
                                <div className="form-field">
                                    <label>
                                        名前:
                                        <input
                                            type="text"
                                            name="name"
                                            value={formValues.name}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        メールアドレス:
                                        <input
                                            type="text"
                                            name="email"
                                            value={formValues.email}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        年齢:
                                        <input
                                            type="text"
                                            name="age"
                                            value={formValues.age}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        郵便番号:
                                        <input
                                            type="text"
                                            name="postCode"
                                            value={formValues.postCode}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        電話番号:
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formValues.phone}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        趣味:
                                        <input
                                            type="text"
                                            name="hobbies"
                                            value={oneHobby}
                                            onChange={(e) => handleOneHobby(e)}
                                        />
                                        <div
                                            className="addItemtoArray"
                                            onClick={() => addHobby(oneHobby)}
                                        >
                                            追加
                                        </div>
                                        <ul>
                                            {myHobbies &&
                                                myHobbies.map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        URL:
                                        <input
                                            type="text"
                                            name="url"
                                            value={formValues.url}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        勉強時間:
                                        <input
                                            type="text"
                                            name="studyMinutes"
                                            value={formValues.studyMinutes}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        課題番号:
                                        <input
                                            type="text"
                                            name="taskCode"
                                            value={formValues.taskCode}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        勉強中の言語:
                                        <input
                                            type="text"
                                            name="studyLangs"
                                            value={oneLanguage}
                                            onChange={(e) =>
                                                handleOneLanguage(e)
                                            }
                                        />
                                        <div
                                            className="addItemtoArray"
                                            onClick={() =>
                                                addStudyLanguages(oneLanguage)
                                            }
                                        >
                                            追加
                                        </div>
                                        <ul>
                                            {studyLanguages &&
                                                studyLanguages.map(
                                                    (item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {item}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                        </ul>
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        ハピネススコア:
                                        <input
                                            type="number"
                                            name="score"
                                            value={formValues.score}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                            </div>
                            <p>
                                <button type="submit">登録</button>
                            </p>
                            <p>
                                <button onClick={() => setShowModal(false)}>
                                    close
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};
