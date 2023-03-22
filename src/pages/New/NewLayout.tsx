import React, { useState } from 'react'
import { Pagination } from 'antd';

const NewLayout:React.FC = ()=>{
  const [search, setSearch] = useState('');
  const handleSearch = () => {
      console.log(search);
    };
  
  // input 호버시 placeholder 사라지게
  let [isInputClicked, setIsInputClicked] = useState(false);

  const taglist = ["스웨트셔츠", "에코백", "메리제인", "원피스", "후디", "스니커즈", "착용", "미니백", "블라우스"]
    
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ fontSize: "40px" }}>
        NEW
      </div>
      <div className="hot_tag">
        <h4>인기태그</h4>
        <ul style={{ listStyle:"none" }}>
          {
            taglist.filter(value => value === "스웨트셔츠").map((value)=>
              <li className="side_tag" data-hashtag={{value}}>
                <button type="button">{value}</button>
              </li>
            )
          }
          {
            taglist.filter(value => value !== "스웨트셔츠" && value !== "블라우스").map((value)=>
              <li className="tag_items" style={{ float: "left", marginRight: "20px" }} data-hashtag={{value}}>
                <button type="button">{value}</button>
              </li>
            )
          }
          {
            taglist.filter(value => value === "블라우스").map((value)=>
              <li className="side_tag" data-hashtag={{value}}>
                <button type="button">{value}</button>
              </li>
            )
          }
        </ul>
        <div className='search-container' style={{ borderBottom: "1px solid black", paddingRight:"10px" }}>
            <div className='search-area'>
                <div className='flex align-center'>
                    <input
                        type="text"
                        style={{ border:"none" }}
                        onFocus={() => {
                            setIsInputClicked(true);
                        }}
                        // 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
                        onBlur={() => {
                            setIsInputClicked(false);
                        }}
                        placeholder={isInputClicked === true ? "" : "태그 검색"}
                        onChange={e=>setSearch(e.target.value)}
                    />
                    <button className='icon del-icon' onClick={()=> handleSearch()}></button>
                    <button className='icon search-icon' onClick={()=> handleSearch()}></button>
                </div>
            </div>
        </div>
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </div>

  )
}

export default NewLayout;