import React from "react";
import menData from "assets/data/menData.json";
import ProductCard from "components/ProductCard";
const MenLayout: React.FC = () => {
    const menlist = [
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
                        MEN
                    </h2>
                    {/* exhibition */}
                    <div className="exhibition-container">
                        <ul className="exhibition-area">
                            <li>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + '/images/man_banner01.jpg'} alt="banner1" />
                                    <div className="txt">
                                        <strong>DUNST FOR MEN</strong>
                                        <p>던스트포맨의 여름 시즌오프, 최대 40%세일</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + '/images/man_banner02.jpg'} alt="banner1" />
                                    <div className="txt">
                                        <strong>THE NORTH FACE</strong>
                                        <p>HOT SUMMER ITEM</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + '/images/man_banner03.jpg'} alt="banner1" />
                                    <div className="txt">
                                        <strong>ISLAND SLIPPER</strong>
                                        <p>튼튼하고 편안한 슈즈 아일랜드슬리퍼</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* category link */}
                    <div className="cate-link-area">
                        <ul>
                            {menlist.map((value)=>(
                            <li>
                                <a href="!#">
                                    <em>MEN</em>
                                    <p>{value}</p>
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </section>
                {/* BEST PICK */} 
                {/* EXCLUSIVE */}
                <section className='thumbnail-container exclusive-container'>
                    <h2 className='thumbnail-title'>EXCLUSIVE <span className='plus'></span></h2>
                </section>
                {/* md banner */}
                <section className="md-banner-container">
                    <div className="video-area">
                        <iframe 
                            width="800" 
                            height="373" 
                            src="https://www.youtube.com/embed/D9vtDMPypv4?list=TLGG5ODNlAulQ-EyMDA1MjAyMw" title="W컨셉 라이브 | 비비(BIBI) | 하이서울쇼룸 | FedexxGirl | 플레이리스트" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="issue-area">
                        <a href="!#">
                            <img src="/images/man_banner04.jpg" alt="women issue banner" />
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
                            {menData.hotkeyword
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
                            {menData.hotkeyword
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
export default MenLayout;