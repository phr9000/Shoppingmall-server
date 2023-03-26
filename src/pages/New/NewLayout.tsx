import React, { useState } from 'react'
import { Pagination } from 'antd';
import newDailyData from 'assets/data/newDailyData.json'
import newWeeklyData from 'assets/data/newWeeklyData.json'
import { Select } from 'antd';
import ProductIntro from 'components/ProductIntro';
import ProductList from 'assets/data/products.json'
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const NewLayout:React.FC = ()=>{
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    console.log(search);
  };

  let [isInputClicked, setIsInputClicked] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  
  const taglist = ["스웨트셔츠", "에코백", "메리제인", "원피스", "후디", "스니커즈", "착용", "미니백", "블라우스"]
  const smallMenuList = ["CATEGORY", "BRAND", "PRICE", "BENEFIT", "COLOR", "DISCOUNT"]
  const FilterMenuList = ["WOMEN", "MEN", "LIFE", "BEAUTY"]
  const LuxuryList = ["LUXURY", "럭셔리백", "럭셔리어패럴", "럭셔리슈즈", "럭셔리액세서리", "럭셔리키즈"]

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="new-container">
      <div style={{ fontSize: "40px", marginTop:"-20px", marginBottom:"40px" }}>
        NEW
      </div>
      <div className="hot-tag-container">
        <div className='hot-tag-area'>
          <h4>인기태그</h4>
          <ul style={{ listStyle:"none" }} className="contents">
            {
              taglist.filter(value => value === "스웨트셔츠").map((value)=>
                <li className="tag side-tag" data-hashtag={{value}} key={value}>
                  <button type="button">{value}</button>
                </li>
              )
            }
            {
              taglist.filter(value => value !== "스웨트셔츠" && value !== "블라우스").map((value)=>
                <li className="tag tag_items" data-hashtag={{value}} key={value}>
                  <button type="button">{value}</button>
                </li>
              )
            }
            {
              taglist.filter(value => value === "블라우스").map((value)=>
                <li className="tag side_tag" data-hashtag={{value}} key={value}>
                  <button type="button">{value}</button>
                </li>
              )
            }
          </ul>
        </div>
        <div className='search-container' style={{ borderBottom: "1px solid black", marginRight:"50px" }}>
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
      <div style={{ display: "flex", flexDirection: "row", alignItems: "start",verticalAlign:"top", width:"1780px", justifyContent: "space-between", marginTop:"50px"}}>
        <div style={{ display: "flex", flexDirection: "column",  width:"300px", height:"100%" }}>
            <div style={{ width:"300px", height:"155px", backgroundColor:"gray"}}>
              <h4 style={{ padding:"20px", fontSize:"28px", color:"white" }}>TODAY<br/>UPDATED</h4>
              <h4 style={{ padding:"20px", fontSize:"15px", color:"white" }}>오늘 등록된 신상품 191</h4>
            </div>
            <div style={{ width:"300px", height:"53px", backgroundColor:"lightgray"}}>
              <h4 style={{ padding:"20px", fontSize:"18px" }}>날짜별 신상품</h4>
            </div>
            <div style={{ width:"300px", height:"370px", overflow: "auto",backgroundColor:"#FBFBFB" }}>
              {
                newDailyData.map(
                  (value)=><div key={value.date} style={{ gap: "1rem", padding:"10px",height:"37px",fontSize:"15px", borderBottom:"1px solid lightgray", display: "flex", flexDirection: "row", justifyContent: "space-between" }}><p style={{ color:"grey" }}> {value.date} </p> <p> {value.count} </p></div>
                )
              }
            </div>
            <div style={{ width:"300px", height:"53px", backgroundColor:"lightgray"}}>
              <h4 style={{ padding:"20px", fontSize:"18px" }}>주간별 신상품</h4>
            </div>
            <div style={{ width:"300px", height:"370px", overflow: "auto", backgroundColor:"#FBFBFB" }}>
              {
                newWeeklyData.map(
                  (value)=><div  key={value.name} style={{ padding:"10px",height:"37px",fontSize:"15px", borderBottom:"1px solid lightgray", display: "flex", flexDirection: "row", justifyContent: "space-between" }}><p style={{ color:"grey" }}> {value.name} </p> <p style={{ textAlign: "right" }}> {value.count} </p></div>
                )
              }
            </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column", width:"1450px",}}>
            <div style={{ display: "flex", flexDirection: "row", width:"97%", height:"55px", backgroundColor:"#FBFBFB", marginLeft:"20px", borderTop:"1px solid lightgrey", borderBottom:"3px solid black", justifyContent: "space-between" }}>
              <p style={{ padding:"18px", fontSize:"15px", fontWeight:"bold" }}>Filter +</p>
              <ul style={{ padding:"18px", listStyle:"none" }}>
                {
                    smallMenuList.map((value)=>
                    <li style={{ display: "inline", marginRight:"40px" }} data-hashtag={{value}} key={value}>
                      <button style={{ fontSize:"15px", fontWeight:"bold" }}type="button">{value}</button>
                    </li>
                  )
                }
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width:"97%", height:"700px", backgroundColor:"#FBFBFB", marginLeft:"20px", justifyContent:"flex-start" }}>
                <ul style={{ padding:"18px", listStyle:"none" }}>
                {
                    FilterMenuList.map((value)=>
                    <li style={{ display: "inline", marginRight:"40px" }} data-hashtag={{value}} key={value}>
                      <button style={{ fontSize:"15px", fontWeight:"bold" }}type="button">{value}</button>
                    </li>
                  )
                }
              </ul>
              <div style={{ marginLeft:"40px", display: "flex", flexDirection: "column", width:"94%", height:"532px", backgroundColor:"white" }}>
                <ul style={{ padding:"18px", listStyle:"none", marginLeft:"30px", width:"95%", height:"60px",borderBottom:"1px solid lightgrey" }}>
                  {
                    LuxuryList.map((value)=>
                    <li style={{ display: "inline", marginRight:"90px" }} data-hashtag={{value}} key={value}>
                      <Checkbox style={{ marginLeft:"20px",fontSize:"13px" }} onChange={onChange}>{value}</Checkbox>
                    </li>
                  )
                }
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", width:"97%", height:"55px", marginLeft:"20px", justifyContent: "space-between" }}>
              <p style={{ padding:"18px", fontSize:"15px" }}>108,652 개의 상품</p>
              <div  style={{ marginTop:"18px" }} >
                <Select
                  defaultValue="90개씩"
                  style={{ width: 120, marginRight:"30px" }}
                  onChange={handleChange}
                  options={[
                    { value: '30', label: '30개씩' },
                    { value: '60', label: '60개씩' },
                    { value: '90', label: '90개씩' }
                  ]}
                />
                <Select
                  defaultValue="신상품순"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: 'new', label: '신상품순' },
                    { value: 'sell', label: '판매순' },
                    { value: 'discount', label: '할인율순' },
                    { value: 'low', label: '낮은 가격 순' },
                    { value: 'high', label: '높은 가격 순' },
                    { value: 'review', label: '리뷰 순' }
                  ]}
                />
              </div>
            </div>
            <div>
              <ProductIntro datalist={ProductList}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination style={{ marginTop:"60px" }} defaultCurrent={1} total={50} />
    </div>
  )
}

export default NewLayout;