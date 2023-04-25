import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import womenData from "assets/data/womenData.json";
const BestPickLayout: React.FC = () => {
    // Filter 예시
    // const filterTest = womenData.filter
    // tab 관련 
    const tabItems = ['APPAREL', 'SHOES', 'BAG', 'ACC', 'LUXURY', 'ACTIVE'];
    // slide 관련
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex: number, newIndex: number) =>
            handleSlideChange(newIndex),
    };
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);  
    
    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
      };

    const handleButtonClick = (index: number) => {
    console.log(index);
    if (sliderRef.current) {
        sliderRef.current.slickGoTo(index);
    }
    };

    interface Slide {
        id: number;
        text: string;
      }
    return (
        <div className="thumbnail__container best-pick-container">
            <h2 className="thumbnail__title">style story</h2>
                <div className="best-pick-tab">
                    {womenData.bestpick.map((slide, index) => (
                    <button
                        key={index}
                        className={
                        currentSlideIndex === index ? "active" : "non-active"
                        }
                        onClick={() => handleButtonClick(index)}
                    >
                        {slide.category}
                    </button>
                    ))}
                </div>
                {/* <Slider {...settings} ref={sliderRef}>
                    {womenData.bestpick.entries(groupedItems).map(([category, items]) => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <ul>
                            <li key={item.}></li>
                        </ul>

                        </div>
                    </div>
                    ))}
                </Slider> */}
        </div>
    )
};

export default BestPickLayout;