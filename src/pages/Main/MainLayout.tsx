import React, {useState} from 'react'
import MainCarousel from './MainCarousel';
// import TestPage from './test';
import styleStory from 'assets/data/styleStory.json';
import ProductCarousel from '../../components/ProductCarousel';
import ComCarousel from '../../components/ComCarousel';
import whatsNew from 'assets/data/whatsNew.json';
import makeItNew from 'assets/data/makeItYours.json';
import BeautyPick from './BeautyPick';
import TrendLayout from './TrendLayout';

const MainLayout:React.FC = ()=>{
  // what's new 
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      spaceBetween: 10,
      autoplay:true,
      autoplaySpeed: 2000,
  };
  // make it yours 
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    spaceBetween: 10
  };
  const [ToggleState, setToggleState] = useState(1);
  const toggleTab = (index:any) => {
    setToggleState(index);
  };
  const getActiveClass = (index:any, className:string) =>
    ToggleState === index ? className : "";

  return (
    <div className='main-layout-container'>
        <MainCarousel/>
        {/* style story */}
        <div className='thumbnail__container style-story-contianer'>
          <h2 className='thumbnail__title'>style story</h2>
          <ul className='thumbnail__area'>
              {
                styleStory.map((list)=>
                <li key={list.id}>
                   <a href="#!" className='style-story-area'>
                    <div className='img'><img src={list.url} alt={list.alt} /></div>
                    <em className='title'>{list.title}</em>
                    <p className='des'>
                      {list.des1}<br/>
                      {list.des2}
                    </p>
                  </a>
                </li>
                )
              }
          </ul>
        </div>
        {/* banner */}
        <div className='banner__container'>
            <ul>
              <li>
                <a href="#!">
                  <img src="images/main_banner01.jpg" alt="뉴 컨셉 챌린지" />
                </a>
              </li>
              <li>
                  <a href="#!">
                    <img src="images/main_banner02.jpg" alt="w컨셉토스" />
                  </a>
              </li>
            </ul>
        </div>
        {/* what's new */}
        <div className='thumbnail__container whats-new-container'>
          <h2 className='thumbnail__title'>WHAT'S NEW</h2>
            <ProductCarousel setting={settings} dataList={whatsNew}/>
        </div>
        {/* make it yours */}
        <div className='thumbnail__container whats-new-container'>
          <h2 className='thumbnail__title'>MAKE IT YOURS </h2>
            <ProductCarousel setting={settings2} dataList={makeItNew}/>
        </div>
        {/* EXCLUSIVE */}
        <div className='thumbnail__container exclusive-container'>
          <h2 className='thumbnail__title'>EXCLUSIVE <span className='plus'></span></h2>
            <ComCarousel/>
        </div>
        {/* BeautyPick */}
        <div className='thumbnail__container BeautyPick-container'>
          <h2 className='thumbnail__title'>BEAUTY PICK <span className='plus'></span></h2>
              <BeautyPick/>
        </div>
        {/* TV */}
        <div className='thumbnail__container exclusive-container'>
          <h2 className='thumbnail__title'>W<span className='small-txt'>컨셉</span> TV <span className='plus'></span></h2>
            <ComCarousel/>
        </div>
        {/* edirorial */}
        <div className='edirorial-container'>
            <ul>
              <li>
                <a href="!#" className='display-block'>
                  <img src={process.env.PUBLIC_URL + '/images/main_edition01.jpg'} alt="edition01" />
                  <div className='txt-area'>
                    <strong className='title'>
                      GOLBAL CAMPAIGN with OLIVIA
                    </strong>
                    <em className='des'>
                      글로벌 인플루언서 올리비아와 함께한 런던
                    </em>
                  </div>
                  <div className='view-detail-area'>
                    <a href="!#">
                      VIEW DETAIL &gt;
                    </a>
                  </div>
                </a>
              </li>
              <li>
                <a href="!#" className='display-block'>
                  <img src={process.env.PUBLIC_URL + '/images/main_edition02.jpg'} alt="edition02" />
                  <div className='txt-area'>
                      <strong className='title'>
                        HI SEOUL SHOWROOM
                      </strong>
                      <em className='des'>
                        SOLE's WONDERLAND
                      </em>
                  </div>
                  <div className='view-detail-area'>
                    <a href="!#">
                      VIEW DETAIL &gt;
                    </a>
                  </div>
                </a>
              </li>
              <li>
                <a href="!#" className='display-block'>
                  <img src={process.env.PUBLIC_URL + '/images/main_edition03.jpg'} alt="edition03" />
                  <div className='txt-area'>
                      <strong className='title'>
                        EENK GLOBAL CAMPAIGN
                      </strong>
                      <em className='des'>
                        잉크와 함께한 리앤드라 메딘의 유토피아
                      </em>
                  </div>
                  <div className='view-detail-area'>
                    <a href="!#">
                      VIEW DETAIL &gt;
                    </a>
                  </div>
                </a>
              </li>
              <li>
                <a href="!#" className='display-block'>
                  <img src={process.env.PUBLIC_URL + '/images/main_edition04.jpg'} alt="edition04" />
                  <div className='txt-area'>
                      <strong className='title'>
                        HI SEOULSHOWROOM
                      </strong>
                      <em className='des'>
                        유라X하이 서울쇼룸 드림라이브
                      </em>
                  </div>
                  <div className='view-detail-area'>
                    <a href="!#">
                      VIEW DETAIL &gt;
                    </a>
                  </div>
                </a>
              </li>
            </ul>
        </div>
        {/* trend */}
        <TrendLayout/>
        {/* footer banner */}
        <div className='footer-banner-container'>
          <ul>
            <li>
              <a href="!#">
                <img src={process.env.PUBLIC_URL + '/images/main_footer_banner01.png'} alt="footer_banner01" />
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={process.env.PUBLIC_URL + '/images/main_footer_banner02.png'} alt="footer_banner02" />
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={process.env.PUBLIC_URL + '/images/main_footer_banner03.png'} alt="footer_banner03" />
              </a>
            </li>
          </ul>
        </div>
        {/* footer info */}
        <div className='footer-info-container'>
          <div className='left'>
            <ul className='tab-list'>
              <li 
                className={`tabs ${getActiveClass(1, "active-tabs")}`}
                onMouseEnter={() => toggleTab(1)}
              >
                news
              </li>
              <li   
                className={`tabs ${getActiveClass(2, "active-tabs")}`}
                onMouseEnter={() => toggleTab(2)}
              >
                이벤트발표
              </li>
            </ul>
            <div className={`tab-content ${getActiveClass(1, "active-content")}`}>
              <ul>
                <li>
                  <div className='flex align-center justify-between'>
                    <div className='flex align-center'>
                      <i className='maker'></i>
                      <p>[안내] 개인정보 안내</p>
                    </div>
                    <p>2023-08-23</p>
                  </div>
                </li>
                <li>
                  <div className='flex align-center justify-between'>
                    <div className='flex align-center'>
                      <i className='maker'></i>
                      <p>[안내] 개인정보 안내</p>
                    </div>
                    <p>2023-08-23</p>
                  </div>
                </li>
                <li>
                    <div className='flex align-center justify-between'>
                      <div className='flex align-center'>
                        <i className='maker'></i>
                        <p>[안내] 개인정보 안내</p>
                      </div>
                      <p>2023-08-23</p>
                    </div>
                </li>
                <li>
                    <div className='flex align-center justify-between'>
                      <div className='flex align-center'>
                        <i className='maker'></i>
                        <p>[안내] 개인정보 안내</p>
                      </div>
                      <p>2023-08-23</p>
                    </div>
                </li>
                <li>
                  <div className='flex align-center justify-between'>
                    <div className='flex align-center'>
                      <i className='maker'></i>
                      <p>[안내] 개인정보 안내</p>
                    </div>
                    <p>2023-08-23</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`tab-content ${getActiveClass(2, "active-content")}`}>
            <ul>
                <li>
                  <div className='flex align-center justify-between'>
                    <div className='flex align-center'>
                      <i className='maker'></i>
                      <p>[W컨셉] 개인정보 안내</p>
                    </div>
                    <p>2023-08-23</p>
                  </div>
                </li>
                <li>
                  <div className='flex align-center justify-between'>
                    <div className='flex align-center'>
                      <i className='maker'></i>
                      <p>[W컨셉] 개인정보 안내</p>
                    </div>
                    <p>2023-08-23</p>
                  </div>
                </li>
                <li>
                    <div className='flex align-center justify-between'>
                      <div className='flex align-center'>
                        <i className='maker'></i>
                        <p>[W컨셉] 개인정보 안내</p>
                      </div>
                      <p>2023-08-23</p>
                    </div>
                </li>
                <li>
                    <div className='flex align-center justify-between'>
                      <div className='flex align-center'>
                        <i className='maker'></i>
                        <p>[W컨셉] 개인정보 안내</p>
                      </div>
                      <p>2023-08-23</p>
                    </div>
                </li>
                <li>
                  <div className='flex align-center justify-between'>
                    <div className='flex align-center'>
                      <i className='maker'></i>
                      <p>[W컨셉] 개인정보 안내</p>
                    </div>
                    <p>2023-08-23</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='right'>
            <h1>
              <span>고객센터</span>
              <span className='phone'>1566-5027</span>
            </h1>
            <div className='info'>
              <p>운영시간 : 평일 09:00~18:00 (점심시간 : 12:30~13:30)</p>
              <p>cs_help@wconcept.co.kr</p>
            </div>
            <div className='btn-wrap'>
              <div className='btn-wrap__left'>
                <a href="!#">FAQ</a>
                <a href="!#">1:1 문의</a>
              </div>
              <ul className='btn-wrap__right'>
                <li>
                  <a href="!#" className='icon facebook-icon ir'>facebook</a>
                </li>
                <li>
                  <a href="!#" className='icon insta-icon ir'>insta</a>
                </li>
                <li> 
                  <a href="!#" className='icon pinter-icon ir'>pinterest</a>
                </li>
                <li>
                  <a href="!#" className='icon youtube-icon ir'>youtube</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
    </div>
  )
}

export default MainLayout;