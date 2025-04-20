
import { useState } from "react"
import { useLocation } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponet";
import "../css/product.css";
export default function ProductPage() {
    const location = useLocation()
    const categoryId = location.state.categoryId    //2
    // console.log("what is in location:",location)
    // console.log("Category Id:",categoryId)
    const [searchitem,setSearchItem]=useState()    

    const [allproducts, setAllProducts] = useState([
        { productId: 21, productname: "Chole", imageUrl: "https://png.pngtree.com/png-clipart/20230425/ourmid/pngtree-pozole-and-chole-phature-on-isloated-transparent-background-png-image_6730832.png", rating: 5, description: "chole descript", price: 400, offerprice: 300, categoryId: 1 },
        { productId: 22, productname: "Aloo Gobhi", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/025/268/559/small/aloo-gobi-with-ai-generated-free-png.png", rating: 6, description: "Aloo Gobhi description", price: 500, offerprice: 400, categoryId: 1 },
        { productId: 23, productname: "Mozzarella cheese", imageUrl: "https://static.vecteezy.com/system/resources/previews/042/841/530/non_2x/delicious-slices-of-mozzarella-pizza-on-transparent-background-png.png", rating: 6, description: "Mozzarella cheese description", price: 200, offerprice: 150, categoryId: 2 },
        { productId: 24, productname: "Cheddar cheese", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/039/651/536/small/ai-generated-pizza-cut-out-pizza-on-transparent-background-cheese-pizza-cut-out-png.png", rating: 6, description: "Cheddar cheese description", price: 200, offerprice: 120, categoryId: 2 },
        { productId: 25, productname: "Noodles & Rice", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Noodles & Rice description", price: 300, categoryId: 3 },
        { productId: 26, productname: "Noodles & Rice", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Noodles & Rice description", price: 400, categoryId: 3 },
        { productId: 27, productname: "Chicken Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Biriyani description", price: 300, categoryId: 4 },
        { productId: 28, productname: "Hyderabadi Dum Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Hyderabadi Dum Biryani description", price: 400, categoryId: 4 },
        { productId: 29, productname: "Veg Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Veg Biryani description", price: 300, categoryId: 4 },
        { productId: 30, productname: "Paneer Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Paneer Biryani description", price: 400, categoryId: 4 },
    
        { productId: 31, productname: "Egg Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Egg Biryani description", price: 300, categoryId: 4 },
        { productId: 32, productname: "Fish Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Fish Biryani description", price: 400, categoryId: 4 },
        { productId: 33, productname: "Prawns Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Prawns Biryani description", price: 300, categoryId: 4 },
        { productId: 34, productname: "Kolkata Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Kolkata Biryani description", price: 400, categoryId: 4 },
        { productId: 35, productname: "Kolkata Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Kolkata Biryani description", price: 400, categoryId: 4 },
        { productId: 36, productname: "Kolkata Biryani", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Kolkata Biryani description", price: 400, categoryId: 4 },

    ])

    // const filter = allproducts.filter((item)=>item.categoryId==categoryId && item.offerprice>120 && item.productname.startsWith("M"))
    // console.log(filter)
    
    const filter = allproducts.filter((item)=>item.categoryId==categoryId)
    
    const searchfn=(element)=>{
    const d = filter.filter((item)=>item.productname.toLowerCase().includes(element.target.value.toLowerCase()))    // india     in    indigo
    setSearchItem(d)
    }
    
    return (<div>
        <HeaderComponent/>

        
         <div className="Search-btn">
             <input type="text" placeholder="Search..." onChange={(element)=>searchfn(element)}/>
         </div>

        <div className="parent-of-main-container-product">
            {searchitem?.length>0?searchitem.map((item) => (
                <div className="main-container-product" key={item.productId}>
                    <div className="img-div"><img src={item.imageUrl} /></div>
                    <hr></hr>
                    <h3 className="product-name">{item.productname}</h3>
                    <p className="product-description">{item.description}</p>
                    <div className="main-div-of-add-to-cart">
                        {item.offerprice ? <div className="product-price">&#8377;<s>{item.price}</s> {item.offerprice}</div> : <div className="product-price">&#8377;{item.price}</div>}
                        <div className="add-to-cart">Add To Cart</div>
                    </div>
                </div>
            )):
            filter.map((item) => (
                <div className="main-container-product" key={item.productId}>
                    <div className="img-div"><img src={item.imageUrl} /></div>
                    <hr></hr>
                    <h3 className="product-name">{item.productname}</h3>
                    <p className="product-description">{item.description}</p>
                    <div className="main-div-of-add-to-cart">
                        {item.offerprice ? <div className="product-price">&#8377;<s>{item.price}</s> {item.offerprice}</div> : <div className="product-price">&#8377;{item.price}</div>}
                        <div className="add-to-cart">Add To Cart</div>
                    </div>
                </div>
            ))
        }
        </div>
    </div>)
}