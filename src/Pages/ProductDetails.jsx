import "../css/ProductDetails.css";
import Navbar from "../Components/HeaderComponet";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import Slider from '@mui/material/Slider';

import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function detailsPage() {
   
        const smallImages = [
          "https://th.bing.com/th/id/OIP.1DRnsBD2M-hvbyq3dfoWOAHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7",
          "https://th.bing.com/th/id/OIP.uSYLE0mMQNrJChgh_uFLnAAAAA?rs=1&pid=ImgDetMain",
          "https://th.bing.com/th/id/OIP.kMU_wHklQB82vpjkLRZFlQHaFP?w=278&h=197&c=7&r=0&o=5&pid=1.7",
          "https://th.bing.com/th/id/OIP.Yegw4FkBZKUu8SoA2bNB6QHaE5?w=253&h=180&c=7&r=0&o=5&pid=1.7",
        ];
      
        const [mainImage, setMainImage] = useState("https://static.vecteezy.com/system/resources/previews/042/841/530/non_2x/delicious-slices-of-mozzarella-pizza-on-transparent-background-png.png");

       
    return (<>
        <Navbar />
        {/* <hr/> */}
        <div className="details-parent-container">

  <div className="details-left-container">
      <div className="details-upper-section">
        <div className="details-left-left">
          {smallImages.map((img, index) => (
            <div key={index}>
              <img src={img} onMouseEnter={() => setMainImage(img)} />
            </div>
          ))}
        </div>

        <div className="details-left-right">
          <div className="details-icon"> <FavoriteBorderIcon /></div>
          <img src={mainImage} alt="Main" />
        </div>
      </div>

      <div className="details-lower-section">
        <button className="button1"><AddShoppingCartIcon />Add to Cart</button>
        <button className="button2"><ShoppingBagTwoToneIcon />Buy Now</button>
      </div>
    </div>
 

            <div className="details-right-container">
                
               <h4 style={{color:"gray",marginLeft:"10px",marginTop:"50px"}}>Buy fresh Cheese & other Cheese products online in India @ great prices - Up to 25% OFF. Buy mozzarella cheese, pizza cheese, cheese blocks & slices, cheddar cheese </h4>
               
                <div className="details-right-content" >
                <div className="details-right-img1" style={{marginLeft:"-60px"}}><img src="https://th.bing.com/th?q=Green+Star+Rating+None+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/></div> 
                <div className="details-right-rating" style={{marginLeft:"20px"}}>2,156 Ratings & 198 Reviews</div>
                </div>

                <div className="details-right-offer" style={{marginLeft:"10px"}}>
                <div style={{fontSize:"27px",fontWeight:"bold"}}>₹8,250</div>
                <div style={{marginTop:"8px"}}><strike>₹13,990</strike></div>
                <div style={{backgroundColor:"green",color:"white",height:"20px",marginTop:"10px"}}><span>41% off</span></div>
                
                </div>
                <h4  style={{marginLeft:"10px"}}>+ ₹29 Protect Promise Fee <span style={{color:"green"}} >Learn more</span></h4>
                <h3 style={{marginTop:"20px",marginLeft:"10px"}}>Available offers</h3>
                <ul style={{flexDirection:"column",marginTop:"-10px"}}>
                    <li ><LocalOfferIcon/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</li>
                    <li  style={{marginTop:"-8px"}}><LocalOfferIcon/>Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000</li>
                    <li style={{marginTop:"-8px"}}><LocalOfferIcon/>Bank Offer10% off up to ₹1,000 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹7,490 </li>
                    <li style={{marginTop:"-8px"}}><LocalOfferIcon/>Special PriceGet extra 22% off (price inclusive of cashback/coupon)T&C</li>
                </ul>


                {/================================== rating and review =========================================/}
                <div style={{border:"1px solid rgb(207, 205, 205)",height:"260px",width:"90%",marginLeft:"20px",marginTop:"60px"}}>
                 <h2 style={{marginLeft:"30px",marginTop:"30px"}}>Rating & Reviews</h2>
                   <div style={{height:"200px",width:"100%",marginTop:"10px",display:"flex",justifyContent:"center"}}>
                   <div style={{width:"30%",height:"150px",margin:"20px"}}>
                    <h1 style={{marginLeft:"20px"}}>4.1<StarIcon/></h1>
                    <p style={{color:"gray",marginTop:"20px"}}>7,31,021 Ratings </p>
                    <p style={{marginLeft:"50px" ,color:"gray"}}>&</p>
                    <p style={{color:"gray"}}>40,745 Reviews</p>
                    <Stack spacing={1} style={{marginTop:"20px"}}>
                      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                     </Stack>
                   </div>

                   <div style={{width:"40%",height:"150px",margin:"30px"}}>
                      <div style={{display:"flex",height:"15px"}}>
                        <div>5</div>
                        <div ><span  style={{height:"2px",width:"5px"}}>< StarIcon/></span></div>
                        <div style={{border:"1px solid gray",width:"100px",height:"4px",marginTop:"8px",borderRadius:"40px",backgroundColor:"green"}}></div>
                        <div style={{color:"gray"}}>67854</div>
                      </div>
                      <div style={{display:"flex",height:"15px",marginTop:"10px"}}>
                        <div>4</div>
                        <div ><span  style={{height:"2px",width:"5px"}}>< StarIcon/></span></div>
                        <div style={{border:"1px solid gray",width:"100px",height:"4px",marginTop:"8px",borderRadius:"40px"}}><div style={{width:"50px",backgroundColor:"green",height:"4px",borderRadius:"40px"}}></div></div>
                        <div style={{color:"gray"}}>67854</div>
                      </div>
                      <div style={{display:"flex",height:"15px",marginTop:"10px"}}>
                        <div>3</div>
                        <div ><span  style={{height:"2px",width:"5px"}}>< StarIcon/></span></div>
                        <div style={{border:"1px solid gray",width:"100px",height:"4px",marginTop:"8px",borderRadius:"40px"}}><div style={{width:"30px",backgroundColor:"green",height:"4px",borderRadius:"40px"}}></div></div>
                        <div style={{color:"gray"}}>67854</div>
                      </div>
                      <div style={{display:"flex",height:"15px",marginTop:"10px"}}>
                        <div>2</div>
                        <div ><span  style={{height:"2px",width:"5px"}}>< StarIcon/></span></div>
                        <div style={{border:"1px solid gray",width:"100px",height:"4px",marginTop:"8px",borderRadius:"40px"}}><div style={{width:"20px",backgroundColor:"yellow",height:"4px",borderRadius:"40px"}}></div></div>
                        <div style={{color:"gray"}}>67854</div>
                      </div>
                      <div style={{display:"flex",height:"15px",marginTop:"10px"}}>
                        <div>1</div>
                        <div ><span  style={{height:"2px",width:"5px"}}>< StarIcon/></span></div>
                        <div style={{border:"1px solid gray",width:"100px",height:"4px",marginTop:"8px",borderRadius:"40px"}}><div style={{width:"40px",backgroundColor:"red",height:"4px",borderRadius:"40px"}}></div></div>
                        <div style={{color:"gray"}}>67854</div>
                      </div>
                   </div>

                   <div style={{width:"50%",height:"150px",margin:"30px",display:"flex",gap:"10px"}}>
                    <div class="outer-circle">
                   <div class="inner-circle"><p style={{margin:"15px"}}>4.6</p></div>
                   </div>
                   <div class="outer-circle">
                   <div class="inner-circle"><p style={{margin:"15px"}}>2.6</p></div>
                   </div>
                   <div class="outer-circle">
                   <div class="inner-circle"><p style={{margin:"15px"}}>1.0</p></div>
                   </div>
                   <div class="outer-circle" >
                   <div class="inner-circle"><p style={{margin:"15px"}}>6.1</p></div>
                   </div>
                   </div>

                   </div>
                   </div>

            </div>

        </div>
    </>
    )
}