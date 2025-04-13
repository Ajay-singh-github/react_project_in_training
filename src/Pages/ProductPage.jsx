
import { useState } from "react"
import { useLocation } from "react-router-dom";
import Header from "../Components/HeaderComponet";
import "../css/product.css";
export default function ProductPage() {
    const location = useLocation()
    const categoryId = location.state.categoryId
    // console.log("what is in location:",location)
    // console.log("Category Id:",categoryId)

    const [allproducts, setAllProducts] = useState([
        { productId: 21, productname: "Chole", imageUrl: "https://png.pngtree.com/png-clipart/20230425/ourmid/pngtree-pozole-and-chole-phature-on-isloated-transparent-background-png-image_6730832.png", rating: 5, description: "chole descript", price: 400, categoryId: 1 },
        { productId: 22, productname: "Aloo Gobhi", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/025/268/559/small/aloo-gobi-with-ai-generated-free-png.png", rating: 6, description: "Aloo Gobhi description", price: 500, categoryId: 1 },
        { productId: 23, productname: "Mozzarella cheese", imageUrl: "https://static.vecteezy.com/system/resources/previews/042/841/530/non_2x/delicious-slices-of-mozzarella-pizza-on-transparent-background-png.png", rating: 6, description: "Mozzarella cheese description", price: 200, categoryId: 2 },
        { productId: 24, productname: "Cheddar cheese", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/039/651/536/small/ai-generated-pizza-cut-out-pizza-on-transparent-background-cheese-pizza-cut-out-png.png", rating: 6, description: "Cheddar cheese description", price: 200, categoryId: 2 },
        { productId: 25, productname: "Noodles & Rice", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Noodles & Rice description", price: 300, categoryId: 3 },
        { productId: 26, productname: "Noodles & Rice", imageUrl: "https://png.pngtree.com/png-vector/20240828/ourmid/pngtree-white-cooked-rice-isolated-png-image_13655088.png", rating: 6, description: "Noodles & Rice description", price: 400, categoryId: 3 },
    ])

    return (<div>
        <Header/>
        <div className="parent-of-main-container-product">
        {allproducts.map((item) => (
            <div className="main-container-product">
               {item.productname}
            </div>
        ))}
        </div>
    </div>)
}