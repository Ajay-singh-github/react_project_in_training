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

  const handleIncrease =(item)=>{
    console.log("ITEM INCREASE:",item)
    dispatch({type:"EDIT_PRODUCT",payload:[item.productId,{...item,"quantity":item.quantity+1}]})
  }

  return (
    <>
      <Navbar />
      <div style={{ width: "60%", marginTop: "20px", marginLeft: "20px" }}>

        {valueofcartdata.length > 0 ? (
          <div style={{ padding: "2px" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
            }}>
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
                      <img src={item.imageUrl} alt={item.productname} />
                    </td>
                    <td style={{ padding: "5px", border: "1px solid #ddd" }}>{item.productname}</td>
                    <td style={{ padding: "5px", border: "1px solid #ddd" }}>{item.price}</td>
                    <td style={{ padding: "5px", border: "1px solid #ddd" }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        justifyContent: "center"
                      }}>
                        <RemoveIcon style={{ cursor: "pointer" }} />
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
                        <AddIcon style={{ cursor: "pointer" }} onClick={()=>handleIncrease(item)} />
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
    </>
  );
}
