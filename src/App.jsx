
import './App.css'
import HomePage from './Pages/Home'
import ServicePage from './Pages/Service';
import Marksheet from './Components/Marksheet';
import ExampleOfLoop from './Components/ExampleOfLoopComponent';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import  {BrowserRouter as Router , Routes , Route}  from "react-router-dom";
import ProductDetails from "../src/Pages/ProductDetails";
import SignIn from './Pages/SignIn';
function App() {
  

  return (


    <div>
      <Router>
        <Routes>
          <Route path='/'  element={<HomePage/>}/>
          <Route path='/service'  element={<ServicePage/>}/>
          <Route path='/marksheet'  element={<Marksheet/>}/>
          <Route path='/exampleofloop'  element={<ExampleOfLoop/>}/>
          <Route path='/product'  element={<ProductPage/>}/>
          <Route path='/cart'  element={<Cart/>}/>
          <Route path='/productdetails'  element={<ProductDetails/>}/>
          <Route path='/signin'  element={<SignIn/>}/>

        </Routes>
      </Router>


    </div>

  )
}

export default App
