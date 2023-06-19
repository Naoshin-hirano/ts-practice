import React, { useState } from "react";
import "./App.css";

function App() {
    const [categoryTab, setCategoryTab] = useState(1);
    const toggleCategory = (tabIndex: number) => {
        setCategoryTab(tabIndex);
    };
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="col-6 tab p-5">
                <ul className="d-flex">
                    <li className="flex-fill" onClick={() => toggleCategory(1)}>
                        全員
                    </li>
                    <li className="flex-fill" onClick={() => toggleCategory(2)}>
                        生徒のみ
                    </li>
                    <li className="flex-fill" onClick={() => toggleCategory(3)}>
                        メンターのみ
                    </li>
                </ul>
                <div className={categoryTab === 1 ? "show-content" : "content"}>
                    <h1>全員</h1>
                </div>
                <div className={categoryTab === 2 ? "show-content" : "content"}>
                    <h1>生徒</h1>
                </div>
                <div className={categoryTab === 3 ? "show-content" : "content"}>
                    <h1>メンター</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
