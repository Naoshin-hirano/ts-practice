import React, { useEffect, useState } from "react";
import "./App.css";
import { USER_LIST } from "./UserList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { USER_LIST_TYPE } from "./UserListType";

function App() {
    const [selectedTabNumber, setSelectedTabNumber] = useState(0);
    const [userList, setUserList] = useState<USER_LIST_TYPE[]>(USER_LIST);
    console.log(USER_LIST);

    const handleSelect = (index: any, last: any) => {
        console.log("Selected tab: " + index + ", Last tab: " + last);
    };

    const changeSelectedIndex = (index: number) => {
        setSelectedTabNumber(index);
    };

    useEffect(() => {
        setUserList(USER_LIST);
    }, [userList]);
    return (
        <Tabs selectedIndex={selectedTabNumber} onSelect={handleSelect}>
            <TabList>
                <Tab onClick={() => changeSelectedIndex(0)}>全員</Tab>
                <Tab onClick={() => changeSelectedIndex(1)}>生徒</Tab>
                <Tab onClick={() => changeSelectedIndex(2)}>メンター</Tab>
            </TabList>

            <TabPanel>
                <h2>全員表示</h2>
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
            </TabPanel>
            <TabPanel>
                <h2>生徒のみ表示</h2>
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
                            {userList.map(
                                (userInfo, index) =>
                                    userInfo.role === "student" && (
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
                                            <td>
                                                {userInfo.availableStartCode}
                                            </td>
                                            <td>{userInfo.availableEndCode}</td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                    </table>
                </div>
            </TabPanel>
            <TabPanel>
                <h2>メンターのみ表示</h2>
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
                            {userList.map(
                                (userInfo, index) =>
                                    userInfo.role === "mentor" && (
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
                                            <td>
                                                {userInfo.availableStartCode}
                                            </td>
                                            <td>{userInfo.availableEndCode}</td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                    </table>
                </div>
            </TabPanel>
        </Tabs>
    );
}

export default App;
