import "../css/Cart.css";
import Navbar from "../Components/HeaderComponet";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function CartPage() {
  var dispatch = useDispatch()
  const cartData = useSelector((state) => state?.productData);
  const valueofcartdata = Object.values(cartData || {});
  console.log("CART ITEMS :", valueofcartdata)

  const handleIncrease = (item) => {
    console.log("ITEM INCREASE:", item)
    dispatch({ type: "EDIT_PRODUCT", payload: [item.productId, { ...item, "quantity": item.quantity + 1 }] })
  }

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: "EDIT_PRODUCT", payload: [item.productId, { ...item, "quantity": item.quantity - 1 }] })
    } else {
      dispatch({ type: "DEL_PRODUCT", payload: [item.productId] })

    }
  }

  const totalItem = valueofcartdata.reduce((item1,item2)=>{ return item1+item2.quantity},0)
  const totalPrice = valueofcartdata.reduce((item1,item2)=>{return item1+(item2.quantity*item2.price)},0)
  
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", padding: "20px", gap: "30px" }}>
        {/* Left Side - Cart Table */}
        <div style={{ width: "65%" }}>
          {valueofcartdata.length > 0 ? (
            <div>
              <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f4f4f4" }}>
                    <th style={{ paddingLeft: "10px", border: "1px solid #ddd", textAlign: "left" }}>Picture</th>
                    <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left" }}>Name</th>
                    <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left" }}>Price</th>
                    <th style={{ padding: "5px", border: "1px solid #ddd", textAlign: "left" }}>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {valueofcartdata.map((item, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ border: "1px solid #ddd" }}>
                        <img src={item.imageUrl} alt={item.productname} width="60" />
                      </td>
                      <td style={{ padding: "5px", border: "1px solid #ddd" }}>{item.productname}</td>
                      <td style={{ padding: "5px", border: "1px solid #ddd" }}>{item.price}</td>
                      <td style={{ padding: "5px", border: "1px solid #ddd" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                          <RemoveIcon style={{ cursor: "pointer" }} onClick={() => handleDecrease(item)} />
                          <div style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            padding: "4px 10px",
                            background: "red",
                            color: "white",
                            borderRadius: "4px",
                            minWidth: "30px",
                            textAlign: "center"
                          }}>
                            {item.quantity}
                          </div>
                          <AddIcon style={{ cursor: "pointer" }} onClick={() => handleIncrease(item)} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="cart-parent-box">
              <div className="cart-img-box">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty cart" />
              </div>
              <div className="cart-content1">
                <h2>Your cart is empty</h2>
              </div>
              <div className="cart-content2">You can go to home page to view more restaurants</div>
              <button className="cart-button">See restaurants near you</button>
            </div>
          )}
        </div>

        {/* Right Side - Cart Summary */}
        {valueofcartdata.length > 0 && (
          <div style={{
            width: "30%",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            background: "#fff",
            height: "fit-content"
          }}>
            <h2 style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>Order Summary</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>Total Items:</span>
              <span>{totalItem}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span>Total Price:</span>
              <span>₹{totalPrice}</span>
            </div>
            <button style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>

  );
}
