import "../css/Cart.css";
import Navbar from "../Components/HeaderComponet";
export default function CartPage() {
    return(<>
     <Navbar/>
     <div className="cart-parent-box">
      <div className="cart-img-box"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"/></div>
     <div className="cart-content1"><h2>Your cart is empty</h2></div>
     <div className="cart-content2">You can go to home page to view more restaurants</div>
     <button className="cart-button">See restaurants near you</button>
      </div>
      </>
    )
}