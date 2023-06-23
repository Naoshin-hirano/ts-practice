import React, { useState } from "react";
import "./App.css";
import { MentorModal } from "./Components/mentorModal";
import { StudentModal } from "./Components/studentModal";

import { initialState } from "./UserList";
import { USER_LIST_TYPE } from "./UserListType";

function App() {
    // ユーザーリスト（全員）
    const [userList, setUserList] = useState<USER_LIST_TYPE[]>(
        initialState.userList
    );
    // ユーザーリスト（生徒のみ）
    const filteredByStudentList = userList.filter(
        (userInfo) => userInfo.role === "student"
    );
    // ユーザーリスト（mentorのみ）
    const filteredByMentorList = userList.filter(
        (userInfo) => userInfo.role === "mentor"
    );
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showMentorModal, setShowMentorModal] = useState(false);
    // タブの表示切り替え状態管理
    const [categoryTab, setCategoryTab] = useState(1);
    // ユーザーリスト（studentのみ）の状態管理
    const [studentList, setStudentList] = useState<USER_LIST_TYPE[]>(
        filteredByStudentList
    );
    // ユーザーリスト（mentorのみ）の状態管理
    const [mentorList, setMentorList] = useState<USER_LIST_TYPE[]>(
        filteredByMentorList
    );

    // タブの表示切り替え
    const toggleCategory = (tabIndex: number) => {
        setCategoryTab(tabIndex);
    };

    // ボタンをclickしたコラムでソートする
    const sortByColumn = (
        column: keyof USER_LIST_TYPE,
        userInfoList: USER_LIST_TYPE[]
    ) => {
        const sortedList = [...userInfoList].sort((a, b) => {
            const columnA = a[column];
            const columnB = b[column];
            if (
                typeof columnA !== "undefined" &&
                typeof columnB !== "undefined"
            ) {
                if (columnA < columnB) return -1;
                if (columnA > columnB) return 1;
                return 0;
            }
            return 0;
        });

        // 各ロールのみのリストの場合、そのロールのみのリストのstateを更新
        if (!userInfoList[0].studyMinutes) {
            setMentorList(sortedList);
        } else {
            setStudentList(sortedList);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="col-6 tab p-5">
                <ul className="d-flex">
                    {initialState.roleCategory.map((category) => {
                        return (
                            <li
                                key={category.id}
                                className="flex-fill"
                                onClick={() => toggleCategory(category.id)}
                            >
                                {category.label}
                            </li>
                        );
                    })}
                </ul>
                <div className={categoryTab === 1 ? "show-content" : "content"}>
                    <h1>全員</h1>
                    <div>
                        <table border={1} width="500" cellPadding="0">
                            <thead>
                                <tr>
                                    <th>名前</th>
                                    <th>ロール</th>
                                    <th>メールアドレス</th>
                                    <th>年齢</th>
                                    <th>郵便番号</th>
                                    <th>電話番号</th>
                                    <th>趣味</th>
                                    <th>URL</th>
                                    <th>勉強時間</th>
                                    <th>課題番号</th>
                                    <th>勉強中の言語</th>
                                    <th>パピネススコア</th>
                                    <th>実務経験月数</th>
                                    <th>現場で使っている言語</th>
                                    <th>担当できる課題番号初め</th>
                                    <th>担当できる課題番号終わり</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map((userInfo, index) => (
                                    <tr key={index}>
                                        <td>{userInfo.name}</td>
                                        <td>{userInfo.role}</td>
                                        <td>{userInfo.email}</td>
                                        <td>{userInfo.age}</td>
                                        <td>{userInfo.postCode}</td>
                                        <td>{userInfo.phone}</td>
                                        <td>{userInfo.hobbies}</td>
                                        <td>{userInfo.url}</td>
                                        <td>{userInfo.studyMinutes}</td>
                                        <td>{userInfo.taskCode}</td>
                                        <td>{userInfo.studyLangs}</td>
                                        <td>{userInfo.score}</td>
                                        <td>{userInfo.experienceDays}</td>
                                        <td>{userInfo.useLangs}</td>
                                        <td>{userInfo.availableStartCode}</td>
                                        <td>{userInfo.availableEndCode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={categoryTab === 2 ? "show-content" : "content"}>
                    <h1>生徒</h1>
                    <button onClick={() => setShowStudentModal(true)}>
                        生徒を登録
                    </button>
                    <div>
                        <table border={1} width="500" cellPadding="0">
                            <thead>
                                <tr>
                                    <th>名前</th>
                                    <th>ロール</th>
                                    <th>メールアドレス</th>
                                    <th>年齢</th>
                                    <th>郵便番号</th>
                                    <th>電話番号</th>
                                    <th>趣味</th>
                                    <th>URL</th>
                                    <th>
                                        <button
                                            onClick={() =>
                                                sortByColumn(
                                                    "studyMinutes",
                                                    studentList
                                                )
                                            }
                                        >
                                            勉強時間
                                        </button>
                                    </th>
                                    <th>課題番号</th>
                                    <th>勉強中の言語</th>
                                    <th>
                                        <button
                                            onClick={() =>
                                                sortByColumn(
                                                    "score",
                                                    studentList
                                                )
                                            }
                                        >
                                            パピネススコア
                                        </button>
                                    </th>
                                    <th>実務経験月数</th>
                                    <th>現場で使っている言語</th>
                                    <th>担当できる課題番号初め</th>
                                    <th>担当できる課題番号終わり</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.map((userInfo, index) => (
                                    <tr key={index}>
                                        <td>{userInfo.name}</td>
                                        <td>{userInfo.role}</td>
                                        <td>{userInfo.email}</td>
                                        <td>{userInfo.age}</td>
                                        <td>{userInfo.postCode}</td>
                                        <td>{userInfo.phone}</td>
                                        <td>{userInfo.hobbies}</td>
                                        <td>{userInfo.url}</td>
                                        <td>{userInfo.studyMinutes}</td>
                                        <td>{userInfo.taskCode}</td>
                                        <td>{userInfo.studyLangs}</td>
                                        <td>{userInfo.score}</td>
                                        <td>{userInfo.experienceDays}</td>
                                        <td>{userInfo.useLangs}</td>
                                        <td>{userInfo.availableStartCode}</td>
                                        <td>{userInfo.availableEndCode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={categoryTab === 3 ? "show-content" : "content"}>
                    <h1>メンター</h1>
                    <button onClick={() => setShowMentorModal(true)}>
                        メンターを登録
                    </button>
                    <div>
                        <table border={1} width="500" cellPadding="0">
                            <thead>
                                <tr>
                                    <th>名前</th>
                                    <th>ロール</th>
                                    <th>メールアドレス</th>
                                    <th>年齢</th>
                                    <th>郵便番号</th>
                                    <th>電話番号</th>
                                    <th>趣味</th>
                                    <th>URL</th>
                                    <th>勉強時間</th>
                                    <th>課題番号</th>
                                    <th>勉強中の言語</th>
                                    <th>パピネススコア</th>
                                    <th>
                                        <button
                                            onClick={() =>
                                                sortByColumn(
                                                    "experienceDays",
                                                    mentorList
                                                )
                                            }
                                        >
                                            実務経験月数
                                        </button>
                                    </th>
                                    <th>現場で使っている言語</th>
                                    <th>担当できる課題番号初め</th>
                                    <th>担当できる課題番号終わり</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mentorList.map((userInfo, index) => (
                                    <tr key={index}>
                                        <td>{userInfo.name}</td>
                                        <td>{userInfo.role}</td>
                                        <td>{userInfo.email}</td>
                                        <td>{userInfo.age}</td>
                                        <td>{userInfo.postCode}</td>
                                        <td>{userInfo.phone}</td>
                                        <td>{userInfo.hobbies}</td>
                                        <td>{userInfo.url}</td>
                                        <td>{userInfo.studyMinutes}</td>
                                        <td>{userInfo.taskCode}</td>
                                        <td>{userInfo.studyLangs}</td>
                                        <td>{userInfo.score}</td>
                                        <td>{userInfo.experienceDays}</td>
                                        <td>{userInfo.useLangs}</td>
                                        <td>{userInfo.availableStartCode}</td>
                                        <td>{userInfo.availableEndCode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showStudentModal && (
                <StudentModal
                    setShowModal={setShowStudentModal}
                    userList={userList}
                    setUserList={setUserList}
                    studentList={studentList}
                    setStudentList={setStudentList}
                />
            )}
            {showMentorModal && (
                <MentorModal
                    setShowModal={setShowMentorModal}
                    userList={userList}
                    setUserList={setUserList}
                    mentorList={mentorList}
                    setMentorList={setMentorList}
                />
            )}
        </div>
    );
}

export default App;
