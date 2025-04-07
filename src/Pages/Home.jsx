
import HeaderComponent from "../Components/HeaderComponet"
import CarousalComponent from "../Components/carousal"
import BoxComponent from "../Components/BoxComponent"
import FooterComponent from "../Components/Footer"
import AddTwoNumberComponent from "../Components/AddTwoNumberComponent"
import SwipeToSlide from "../Components/SwipeToSlideComponent"
export default  function HomePage(){

    return(
    <div>
        <HeaderComponent/>
      <CarousalComponent/>
      <h1>Product</h1>
      <SwipeToSlide/>


      {/* <BoxComponent/>
      <FooterComponent/>
      <AddTwoNumberComponent/> */}
     </div>
    )
}