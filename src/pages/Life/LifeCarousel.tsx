import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LifeCarousel: React.FC = () => {
  type slideData = {
    id: number;
    url: string;
  };
  const [carousels, setCarousels] = useState<slideData[]>([]);

  // USEEFFECT에 담고, []를 작성해야 한번만 호출됨, 여기 안에 안담기면 무한 루프에 빠짐
  useEffect(() => {
    fetch("/data/lifeCarousel.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("ok");
        setCarousels(data);
      });
    return () => {
      console.log("unmount 될 때 청소하는 일을 담당");
    };
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  return (
    <div className="life-carousel">
      <Slider {...settings}>
        {carousels!.map((carousel) => (
          <li key={carousel.id}>
            <img src={carousel.url} alt="test" />
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default LifeCarousel;
