import React, {
    ChangeEvent,
    Dispatch,
    FC,
    FormEvent,
    SetStateAction,
    useState,
} from "react";
import { USER_LIST_TYPE } from "../UserListType";

type MENTOR_MODAL_TYPE = {
    showMentorModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    userList: USER_LIST_TYPE[];
    setUserList: Dispatch<SetStateAction<USER_LIST_TYPE[]>>;
    mentorList: USER_LIST_TYPE[];
    setMentorList: Dispatch<SetStateAction<USER_LIST_TYPE[]>>;
};

export const MentorModal: FC<MENTOR_MODAL_TYPE> = ({
    showMentorModal,
    setShowModal,
    userList,
    setUserList,
    mentorList,
    setMentorList,
}: MENTOR_MODAL_TYPE) => {
    const initialValues = {
        name: "",
        email: "",
        age: "",
        postCode: "",
        phone: "",
        hobbies: [""],
        url: "",
        experienceDays: "",
        useLangs: [""],
        availableStartCode: "",
        availableEndCode: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [useLanguages, setUseLanguages] = useState<string[]>([]);
    const [myHobbies, setMyHobbies] = useState<string[]>([]);
    const [oneLanguage, setOneLanguage] = useState<string>("");
    const [oneHobby, setOneHobby] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUserInfo: USER_LIST_TYPE = {
            ...formValues,
            id: userList.length + 1,
            role: "mentor",
            hobbies: [...myHobbies],
            useLangs: [...useLanguages],
        };

        const newUserList = [...userList, newUserInfo];
        const newMentorList = [...mentorList, newUserInfo];
        setUserList(newUserList);
        setMentorList(newMentorList);
        setShowModal(false);
    };

    const addUseLangs = (language: string) => {
        if (language === "") {
            return;
        }
        const newItem = [...useLanguages, language];
        setUseLanguages(newItem);
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
            {showMentorModal && (
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
                                        実務経験月数:
                                        <input
                                            type="text"
                                            name="experienceDays"
                                            value={formValues.experienceDays}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        現場で使っている言語:
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
                                                addUseLangs(oneLanguage)
                                            }
                                        >
                                            追加
                                        </div>
                                        <ul>
                                            {useLanguages &&
                                                useLanguages.map(
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
                                        担当できる課題番号初め:
                                        <input
                                            type="number"
                                            name="availableStartCode"
                                            value={
                                                formValues.availableStartCode
                                            }
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </label>
                                </div>
                                <div className="form-field">
                                    <label>
                                        担当できる課題番号終わり:
                                        <input
                                            type="number"
                                            name="availableEndCode"
                                            value={formValues.availableEndCode}
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
