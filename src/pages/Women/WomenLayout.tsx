import React from "react";
import BestPickLayout from './BestPickLayout';
const WomenLayout: React.FC = () => {
const womenlist = [
    "APPAREL",
    "BAG",
    "SHOES",
    "ACC",
    "LUXURY",
    "ACTIVE",
    ];
return (
    <div className="women-container">
        <div className="main-title-area">
            <h2>
                WOMEN
            </h2>
            <div className="thumbnail_layout">
                {/* exhibition */}
                <ul className="exhibition">
                    <li>
                        <a href="!#">
                            <img src={process.env.PUBLIC_URL + '/images/women_1.jpg'} alt="banner1" />
                            <div className="txt">
                                <strong>MOMEN</strong>
                                <p>인플루언서들이 소개하는 봄 스타일링</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src={process.env.PUBLIC_URL + '/images/women_2.jpg'} alt="banner1" />
                            <div className="txt">
                                <strong>LEMEME</strong>
                                <p>이주의 추천백 #114. 르메메 '삭 파니에'</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src={process.env.PUBLIC_URL + '/images/women_3.jpg'} alt="banner1" />
                            <div className="txt">
                                <strong>IN THE STAR</strong>
                                <p>23 SUMMER COLLECTION OPEN</p>
                            </div>
                        </a>
                    </li>
                </ul>
                {/* category link */}
                <div className="women-container__cate-link-item">
                     <ul>
                        {womenlist.map((value)=>(
                        <li>
                            <a href="!#">
                                <em>WOMEN</em>
                                <p>{value}</p>
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
                {/* BEST PICK */} 
                <BestPickLayout/>
            </div>
        </div>
    </div>
);
};
export default WomenLayout;