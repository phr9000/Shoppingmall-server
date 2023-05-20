import React from "react";
import BestPickLayout from './BestPickLayout';
import ComCarousel from "components/ComCarousel";
import ProductCard from "components/ProductCard";
import womenData from "assets/data/womenData.json";
const WomenLayout: React.FC = () => {
const womenlist = [
    "APPAREL",
    "BAG",
    "SHOES",
    "ACC",
    "LUXURY",
    "ACTIVE",
    ];
// hot keyword
type keywordType = {
    countNumber: number;
    title: string;
};
const keywordList: keywordType[] = [
    {countNumber: 1, title: '원피스'},
    {countNumber: 2, title: '여름 블라우스'},
    {countNumber: 3, title: '레인부츠'},
    {countNumber: 4, title: '반팔'},
    {countNumber: 5, title: '샌들'},
    {countNumber: 6, title: '위캔드오프'},
    {countNumber: 7, title: '이미스'},
    {countNumber: 8, title: '나이키'},
    {countNumber: 9, title: '시엔느'},
    {countNumber: 10, title: '블라우스'},
];

return (
    <main>
        
        <div  className="container-wrapper women-container">
            <section className='thumbnail-container' >
                <h2 className='thumbnail-title'>
                    WOMEN
                </h2>
                {/* exhibition */}
                <div className="exhibition-container">
                    <ul className="exhibition-area">
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
                </div>
                {/* category link */}
                <div className="cate-link-area">
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
            </section>
            {/* BEST PICK */} 
            <BestPickLayout/>
            {/* EXCLUSIVE */}
            <section className='thumbnail-container exclusive-container'>
                <h2 className='thumbnail-title'>EXCLUSIVE <span className='plus'></span></h2>
                <ComCarousel/>
            </section>
            {/* md banner */}
            <section className="md-banner-container">
                <div className="video-area">
                    <iframe 
                        width="663" 
                        height="373" 
                        src="https://www.youtube.com/embed/D9vtDMPypv4?list=TLGG5ODNlAulQ-EyMDA1MjAyMw" title="W컨셉 라이브 | 비비(BIBI) | 하이서울쇼룸 | FedexxGirl | 플레이리스트" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>
                <div className="issue-area">
                    <a href="!#">
                        <img src="/images/women_issue_banner.jpg" alt="women issue banner" />
                    </a>
                </div>
            </section>
            <section className="hot-keyword-container">
                <div className="rank-container">
                    <div className="rank-area">
                        <h4 className="title">HOT KEYWORD</h4>
                        <ul>
                            {
                                keywordList.map((item:keywordType, index: number)=>(
                                    <li key={index}>
                                        <span className="num">{item.countNumber}</span>
                                        <a href="!#" title={item.title}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="rank-area">
                        <h4 className="title">TOP BRAND</h4>
                        <ul>
                            {
                                keywordList.map((item:keywordType, index: number)=>(
                                    <li key={index}>
                                        <span className="num">{item.countNumber}</span>
                                        <a href="!#" title={item.title}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* top seller */}
                <div className="product-list-container">
                    <h4 className="title">top seller</h4>
                    {/* list */}
                    <div className="product-container">
                        <ul className="product-inner">
                        {womenData.hotkeyword
                            .map((list) => {
                                return (
                                    <ProductCard datalist={[list]} key={list.id}/>
                                );
                            })}
                        </ul>
                    </div>
                    <h4 className="title w-mt10">WHAT'S NEW</h4>
                    {/* list */}
                    <div className="product-container">
                        <ul className="product-inner">
                        {womenData.hotkeyword
                            .map((list) => {
                                return (
                                    <ProductCard datalist={[list]} key={list.id}/>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </main>
);
};
export default WomenLayout;