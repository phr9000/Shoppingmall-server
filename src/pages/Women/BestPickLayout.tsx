import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import womenData from "assets/data/womenData.json";
import ProductCard from "components/ProductCard";
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
        <section className="thumbnail-container best-pick-container">
            <h2 className="thumbnail-title">best pick</h2>
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
                <div className="preshow-content">
            <div className="event-list-wrap">
                <ul className="event-list">
                    <div className='product-container'>
                        <ul className='product-inner'>
                            {womenData.bestpick
                            .filter(
                                (list) =>
                                list.category === tabItems[clickedIndex]
                            )
                            .map((list) => {
                                return (
                                    <ProductCard datalist={[list]} key={list.id}/>
                                );
                            })}
                        </ul>
                    </div>    
                    
                </ul>
            </div>
      </div>
        </section>
    )
};

export default BestPickLayout;