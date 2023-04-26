import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import womenData from "assets/data/womenData.json";
import ProductIntro2 from "components/ProductIntro2";
const BestPickLayout: React.FC = () => {
    // Filter 예시
    // const filterTest = womenData.filter
    // tab 관련
    const tabItems = ['apparel', 'shoes', 'bag', 'acc', 'luxury', 'active'];
    const [clickedIndex, setClickedIndex] = useState<number>(0);
    const handleClick = (index: number) => {
        setClickedIndex(index);
    };

    return (
        <div className="thumbnail__container best-pick-container">
            <h2 className="thumbnail__title">style story</h2>
            <ul className="best-pick-tab">
                {tabItems.map((item, index) => (
                <li
                    key={index}
                    className={index === clickedIndex ? "active" : ""}
                    onClick={() => handleClick(index)}
                >
                    <button>{item}</button>
                </li>
                ))}
            </ul>
            <div className="best-pick-content">
                <div className="best-pick-wrap">
                    <ul>
                        {womenData.bestpick
                        .filter(
                            (list) =>
                            list.category === tabItems[clickedIndex]
                        )
                        .map((list) => {
                            return (
                                <ProductIntro2 datalist={womenData.bestpick}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default BestPickLayout;