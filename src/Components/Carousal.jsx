
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Carousal.css'
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        // position: "absolute", 
        borderRadius: "50%",
        top: "10%",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "gray",
        color: "black",
        // position: "absolute", 
        borderRadius: "50%",
        top: "10%",
        // right: "40px",
        marginLeft: "1190px",
      }}
      onClick={onClick}
    />
  );
}


function CarousalComponent() {
  var navigate = useNavigate()
  const [data, setData] = useState([{ categoryId: "1", name: "North Indian", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/3/1/27af148a-4db6-4070-94c1-eb5c0299b978_PCTIleRamadansSpecial.png" },
  { categoryId: "2", name: "Pizza", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" },
  { categoryId: "3", name: "Chinese", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png" },
  { categoryId: "4", name: "Biriyani", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" },
  { categoryId: "5", name: "Cake", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png" },
  ])


  var settings = {
    // dots: true,

    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    // arrow:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // prevArrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleClick = (categoryId) => {
    navigate("/product",{state:{categoryId:categoryId}})
  }

  return (
    <div className="slider-container">
      <h2>Aachal, what's on your mind?</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="small-container" key={item.categoryId} onClick={() => handleClick(item.categoryId)}>
            <img src={item.url} />

          </div>
        ))}

      </Slider>
    </div>
  );
}
export default CarousalComponent
