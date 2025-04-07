import React from "react";
import Slider from "react-slick";
// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/SwipeToSlider.css";

import { useNavigate } from "react-router-dom";
// >>>>>>> 7348e4f8bdf8cc09b530c6fdfa89e905b2b94500

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
        // position: "absolute", 
        borderRadius: "50%",
        top: "-5%", 
        // right: "40px",
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

  return (
    <div className="sliders2-container">
      <Slider {...settings}>
        <div className="sliders2-content" onClick={()=>navigate("/secondscreen")}>
          <div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/615950282510979d66ee2399b320770f" />
          </div>
          <div>
            <h3>Haveli Restaurant</h3>
            <h4>4.1 • 70-75 mins</h4>
            <p>North Indian, South Indian, Chinese Grand Trunk Road</p>
          </div>
        </div>

        <div className="sliders2-content">
          <div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5fe4444a065b60c4fe39ef975222c12b" />
          </div>
          <div>
            <h3>La Pino'z Pizza</h3>
            <h4>4.1 • 70-75 mins</h4>
            <p>Pizzas, Pastas, Italian, Desserts, Beverages Sasaram</p>
          </div>
        </div>

        <div className="sliders2-content">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dbf749b863c540b56738db880a6c733" />
          <h3>Maurya Roya</h3>
          <h4>4.1 • 70-75 mins</h4>
          <p>North Indian, Chinese, South<br /> India Rauza Roadh</p>
        </div>

        <div className="sliders2-content">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/fe4be499-c9a9-4685-aa56-996987165436_598730.JPG" />
          <h3>Winni Cakes And More</h3>
          <h4>4.1 • 70-75 mins</h4>
          <p>Desserts, Sweets MAHAVIR ASTHAN</p>
        </div>

        <div className="sliders2-content">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4407f82019825c080e47d36e991ab179" />
          <h3>Momo magic cafe</h3>
          <h4>4.1 • 70-75 mins</h4>
          <p>Desserts, Sweets MAHAVIR ASTHAN</p>
        </div>

        <div className="sliders2-content">
          <h3>6</h3>
        </div>

        <div className="sliders2-content">
          <h3>7</h3>
        </div>

        <div className="sliders2-content">
          <h3>8</h3>
        </div>

        <div className="sliders2-content">
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;