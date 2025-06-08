import "../css/Cart.css";
import Navbar from "../Components/HeaderComponet";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as React from 'react';

import {
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  Grid,
  MenuItem
} from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
export default function CartPage() {
  var navigate = useNavigate()
  var dispatch = useDispatch()
  const cartData = useSelector((state) => state?.productData);
  const valueofcartdata = Object.values(cartData || {});
  console.log("CART ITEMS :", valueofcartdata)
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [addressline1, setAddressLine1] = useState()
  const [addressline2, setAddressLine2] = useState()
  const [city, setCity] = useState()
  const [stater, setStateR] = useState()
  const [postalcode, setPostalCode] = useState()
  const [country, setCountry] = useState()
  const [shippingaddress, setShippingAddress] = useState()
 

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

  const totalItem = valueofcartdata.reduce((item1, item2) => { return item1 + item2.quantity }, 0)
  const totalPrice = valueofcartdata.reduce((item1, item2) => { return item1 + (item2.quantity * item2.price) }, 0)

  const [state, setState] = React.useState({
    top: false,
  });
  const [countries, setCountries] = React.useState(["India", "USA"])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleAddress = () => {
    const body = { "firstname": firstname, "lastname": lastname, "addressline1": addressline1, "addressline2": addressline2, "city": city, "stater": stater, "postalcode": postalcode, "country": country }
    const isLogin = JSON.parse(localStorage.getItem("login"))?.loginstatus || false

    if (isLogin) {
      localStorage.setItem("address", JSON.stringify(body))
      setState({ top: false })
      fetchAddressFromLocalStorage()
    } else {
      navigate('/signin')
    }

  }


  const fetchAddressFromLocalStorage = () => {
    const add = JSON.parse(localStorage.getItem("address"))
    setShippingAddress(add)
    console.log("YES FETCHED ADDRESS", add)
  }

  const AddressForm = () => (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Shipping Address
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First Name" variant="outlined" onChange={(e) => setFirstName(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last Name" variant="outlined" onChange={(e) => setLastName(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Address Line 1" variant="outlined" onChange={(e) => setAddressLine1(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Address Line 2" variant="outlined" onChange={(e) => setAddressLine2(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="City" variant="outlined" onChange={(e) => setCity(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="State/Province/Region" variant="outlined" onChange={(e) => setStateR(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Zip / Postal Code" variant="outlined" onChange={(e) => setPostalCode(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Country"
            variant="outlined"
            defaultValue=""
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country} fullWidth>
                {country}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={() => handleAddress()}>
            Save Address
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

    const loadRazorpayScript = () => {
    return new Promise((resolve) => { 
      if (document.getElementById("razorpay-script")) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  ////////////////////Payment API/////////////////////
  
  const handlePayment = useCallback(async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_GQ6XaPC6gMPNwH", // Replace with your Razorpay key
      amount: totalPrice * 100, // in paise
      currency: "INR",
      name: "Food Shop",
      description: "Online Payments",
      handler: function (response) {
        localStorage.removeItem("productData")
        alert("Your Order has been ordered Successfully & Payment")
        window.location.reload()
        // alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        // You can add further payment success logic here
      },
      prefill: {
        name: `${shippingaddress?.firstname} ${shippingaddress?.lastname}` || "",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: `${shippingaddress?.addressline1} ${shippingaddress?.addressline2} ${shippingaddress?.city} ${shippingaddress?.stater} ${shippingaddress?.postalcode}`,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }, [shippingaddress, totalPrice]);

////////////////////////////////////////////////////////



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
            {shippingaddress?.firstname?.length > 0 ? 
            <button style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>
            :
              <button style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
                onClick={toggleDrawer("top", true)}
              >
                Proceed to Address
              </button>
            }
          </div>



        )}
      </div>
      {shippingaddress?.firstname?.length > 0 ?
        <div style={{ width: '448px', height: "180px", background: '#ffffff', borderRadius: "5px", boxShadow: "0px 0px 1px 0px", position: 'absolute', left: 10 }}>
          <h2 style={{ paddingLeft: "5px", paddingTop: "5px" }}>Shipping address</h2>
          <div><span>{shippingaddress?.firstname} {shippingaddress?.lastname} {shippingaddress?.addressline1} {shippingaddress?.addressline2} {shippingaddress?.city
          }</span> {shippingaddress?.stater} {shippingaddress?.postalcode
            }</div>
          <p></p>
        </div> :
        ""
      }



      {/* drawer */}
      <div>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              PaperProps={{ sx: { height: "100vh" } }}
            >
              {AddressForm()}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>

  );
}









// step -1

// import { useCallback } from "react";


//     const loadRazorpayScript = () => {
//     return new Promise((resolve) => { 
//       if (document.getElementById("razorpay-script")) {
//         resolve(true);
//         return;
//       }
//       const script = document.createElement("script");
//       script.id = "razorpay-script";
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };
  
  
  
//     ////////////////////Payment API/////////////////////
    
//     const handlePayment = useCallback(async () => {
//       const res = await loadRazorpayScript();
  
//       if (!res) {
//         alert("Razorpay SDK failed to load. Are you online?");
//         return;
//       }
  
//       const options = {
//         key: "rzp_test_GQ6XaPC6gMPNwH", // Replace with your Razorpay key
//         amount: totalPrice * 100, // in paise
//         currency: "INR",
//         name: "Food Shop",
//         description: "Online Payments",
//         handler: function (response) {
//           alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
//           // You can add further payment success logic here
//         },
//         prefill: {
//           name: `${shippingaddress?.firstname} ${shippingaddress?.lastname}` || "",
//           email: "youremail@example.com",
//           contact: "9999999999",
//         },
//         notes: {
//           address: `${shippingaddress?.addressline1} ${shippingaddress?.addressline2} ${shippingaddress?.city} ${shippingaddress?.stater} ${shippingaddress?.postalcode}`,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };
  
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     }, [shippingaddress, totalPrice]);
  
// ////////////////////////////////////////////////////////


//   step -4  onClick={handlePayment}