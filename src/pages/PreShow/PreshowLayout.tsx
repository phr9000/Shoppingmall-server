import React, { useState } from 'react'
import preShowtData from "assets/data/preshowData.json";
const PreShowLayout:React.FC = ()=>{
    const [data, setData] = useState(preShowtData);
    const hasModern = () => {
        const resultModern = preShowtData.filter((list) =>
          list.category.includes("modern")
        );
        setData(resultModern);
      };
    return (
        <div className='main-layout-container preshow-container'>
            <div className='title-area'>
                <div className="title">pre show</div>
                <div className="desc">
                    W컨셉의 주요 브랜드의 신상과 트렌드를 먼저 만나볼 수 있어요
                </div>
            </div>
            <div className='preshow-tab'>
                <ul>
                    <li>
                        <button onClick={() => setData(preShowtData)}>all</button>
                    </li>
                    <li>
                        <button onClick={hasModern}>modern</button>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='preshow-content'>
            <div className="event-list-wrap">
                {data.map((list) => {
                return (
                    <ul className="event-list">
                    <li key={list.id}>
                        <div className="event-preview">
                        </div>
                        <div className="event-wrap">
                        <li className="event-name">{list.title}</li>
                        </div>
                    </li>
                    </ul>
                );
                })}
            </div>
            </div>
        </div>
    )
}
export default PreShowLayout;