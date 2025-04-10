import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/SwipeToSlider.css";

import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
      
        borderRadius: "50%",
        top: "-5%", 
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
        color:"black",
        borderRadius: "50%",
        top: "-5%", 
        marginLeft:"1080px",
      }}
      onClick={onClick}
    />
  );
}

function SwipeToSlide() {
  var navigate = useNavigate()
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4, // Default value for larger screens
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For medium-sized screens (tablets)
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // For small-sized screens (mobile landscape)
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480, // For very small screens (mobile portrait)
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
    afterChange: function (index) {
      
          },
  };
  
  
  const [data,setData]  =useState([{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/615950282510979d66ee2399b320770f",restaurant:"Haveli Restaurant",rating:"4.1 • 70-75 mins",description:"North Indian, South Indian, Chinese Grand Trunk Road"},
    {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5fe4444a065b60c4fe39ef975222c12b",restaurant:"La Pino'z Pizza",rating:"4.1 • 70-75 mins",description:"Pizzas, Pastas, Italian, Desserts, Beverages Sasaram"},
    {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dbf749b863c540b56738db880a6c733",restaurant:"Maurya Roya",rating:"4.1 • 70-75 mins",description:"North Indian, Chinese, South"},
    {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dbf749b863c540b56738db880a6c733",restaurant:"Maurya Roya",rating:"4.1 • 70-75 mins",description:"North Indian, Chinese, South"},
    {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5fe4444a065b60c4fe39ef975222c12b",restaurant:"La Pino'z Pizza",rating:"4.1 • 70-75 mins",description:"Pizzas, Pastas, Italian, Desserts, Beverages Sasaram"},

  ])
  
   console.log(data)
  return (
    <div className="sliders2-container">
      <Slider {...settings}>
       {
        data.map((item)=>(
          <div className="sliders2-content" onClick={()=>navigate("/secondscreen")}>
          <div>
            <img  src={item.img} />
          </div>
          <div style={{marginTop:"10px"}}>
            <h3>{item.restaurant}</h3>
            <h4>{item.rating}</h4>
            <p>{item.description}</p>
          </div>
        </div>
        ))
       }
      </Slider>
    </div>
  );
}

export default SwipeToSlide;























  // setting


 // const [data ,setData] = useState([{img:img_url,title:Haveli Restaurant,title2:4.1 • 70-75 mins,title3:"North Indian"},
 // {img:img_url,title:Haveli Restaurant,title2:4.1 • 70-75 mins,title3:"North Indian"},
 // {},{},{}]) 


//  //data.map((item)=>(<div className="sliders2-content" onClick={()=>navigate("/secondscreen")}>
//           <div>
//           <img src={item.img} />
//         </div>
//         <div>
//           <h3>{item.title}</h3>
//           <h4>{item.title2}</h4>
//           <p>{item.title3}</p>
//         </div>
//       </div>))
