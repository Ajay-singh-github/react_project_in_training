import HeaderComponent from "../Components/HeaderComponet";
import CarousalComponent from "../Components/carousal";
import SwipeToSlide from "../Components/SwipeToSlideComponent";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "sans-serif", width: "100%", boxSizing: "border-box" }}>
      <HeaderComponent />
      <CarousalComponent />

      {/* Product Section */}
      <h1
        style={{
          marginLeft: "7%",
          fontSize: "1.8rem",
          marginTop: "30px",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Product
      </h1>

      <SwipeToSlide />

      {/* Restaurant Section */}
      <div
        style={{
          marginTop: "50px",
          paddingLeft: "7%",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
          Restaurants with online food delivery in Bihar
        </h2>

        <div
          className="menuitem"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "9px",
            fontWeight: "normal",
            fontSize: "15px",
            color: "#555",
          }}
        >
          <div style={pillStyle}>Filter</div>
          <div style={pillStyle}>Sort By</div>
          <div style={pillStyle}>Fast Delivery</div>
          <div style={pillStyle}>Ratings 4.0+</div>
          <div style={pillStyle}>Pure Veg</div>
          <div style={pillStyle}>Offers</div>
          <div style={pillStyle}>Rs.300-Rs.600</div>
          <div style={pillStyle}>Less than Rs. 300</div>
        </div>
      </div>

      {/* Another Swipe */}
      <div style={{ marginBottom: "80px" }}>
        <SwipeToSlide />
      </div>

      <Footer />
    </div>
  );
}

const pillStyle = {
  padding: "8px 16px",
  backgroundColor: "#f5f5f5",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

