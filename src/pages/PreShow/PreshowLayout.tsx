import React, { useState } from 'react'
import preShowtData from "assets/data/preshowData.json";
const PreShowLayout:React.FC = ()=>{
  // tab 관련
  const tabItems = ['ALL', '모던', '페미닌', '캐주얼', '베이직', '로맨틱'];
  const [clickedIndex, setClickedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setClickedIndex(index);
  };
    const [data, setData] = useState(preShowtData);
    const hasModern = () => {
        const resultModern = preShowtData.filter((list) =>
          list.category.includes("modern")
        );
        setData(resultModern);
      };
      const hasCasual = () => {
        const resultCasual = preShowtData.filter((list) =>
          list.category.includes("casual")
        );
        setData(resultCasual);
      };  
      const hasFeminine = () => {
        const resultFeminine = preShowtData.filter((list) =>
          list.category.includes("feminine")
        );
        setData(resultFeminine);
      };  
      const hasBasic = () => {
        const resultBasic = preShowtData.filter((list) =>
          list.category.includes("basic")
        );
        setData(resultBasic);
      };  
      const hasRomantic = () => {
        const resultRomantic = preShowtData.filter((list) =>
          list.category.includes("romantic")
        );
        setData(resultRomantic);
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
                  {tabItems.map((item, index) => (
                    <li
                      key={index}
                      className={index === clickedIndex? 'active': ''}
                      onClick={()=> handleClick(index)}
                    >
                      <button>
                        #{item}
                      </button>
                    </li>
                  ))}
                </ul>
                <ul>
                    <li>
                        <button onClick={() => setData(preShowtData)}>#ALL</button>
                    </li>
                    <li>
                        <button onClick={hasModern}>#모던</button>
                    </li>
                    <li>
                        <button onClick={hasFeminine}>#페미닌</button>
                    </li>
                    <li>
                        <button onClick={hasCasual}>#캐주얼</button>
                    </li>
                    <li>
                        <button onClick={hasBasic}>#베이직</button>
                    </li>
                    <li>
                        <button onClick={hasRomantic}>#로맨틱</button>
                    </li>
                </ul>
            </div>
            <div className='preshow-content'>
            <div className="event-list-wrap">
                <ul className="event-list">
                {data.map((list) => {
                return (
                    <li key={list.id}>
                        <a href="!#">
                            <img src={list.img} alt="" />
                        </a>
                    </li>
                );
                })}
                </ul>
            </div>
            </div>
        </div>
    )
}
export default PreShowLayout;