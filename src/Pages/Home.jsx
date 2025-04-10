
import HeaderComponent from "../Components/HeaderComponet"
import CarousalComponent from "../Components/carousal"
import BoxComponent from "../Components/BoxComponent"
import FooterComponent from "../Components/Footer"
import AddTwoNumberComponent from "../Components/AddTwoNumberComponent"
import SwipeToSlide from "../Components/SwipeToSlideComponent"
import Cardmenu from "../Components/TopRestaurant"
import Footer from "../Components/Footer"
export default  function HomePage(){

    return(
    <div>
        <HeaderComponent/>
      <CarousalComponent/>
      <h1 style={{marginLeft:"7%"}}>Product</h1>
      <SwipeToSlide/>

      <div style={{marginTop:"50px",paddingLeft:"7%",fontWeight:'bold',marginBottom:"50px"}}>
      <div ><h2>Restaurants with online food delivery in Bihar</h2></div>
      <div className="menuitem">
        <div>Filter</div>
        <div>Sort By</div>
        <div>Fast Delivery</div>
        <div>Ratings 4.0+</div>
        <div>Pure Veg</div>
        <div>Offers</div>
        <div>Rs.300-Rs.600</div>
        <div>Less than Rs. 300</div>
      </div>
     </div>

     <div style={{marginBottom:"80px"}}><SwipeToSlide /></div>
     <Footer/>
     </div>
    )
}