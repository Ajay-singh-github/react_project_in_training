
import './App.css'
import HomePage from './Pages/Home'
import ServicePage from './Pages/Service';
import Marksheet from './Components/Marksheet';
import ExampleOfLoop from './Components/ExampleOfLoopComponent';
import ProductPage from './Pages/ProductPage';
import  {BrowserRouter as Router , Routes , Route}  from "react-router-dom";
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

        </Routes>
      </Router>


    </div>

  )
}

export default App
