
import './App.css'
import HomePage from './Pages/Home'
import ServicePage from './Pages/Service';
import  {BrowserRouter as Router , Routes , Route}  from "react-router-dom";
function App() {
  

  return (


    <div>
      <Router>
        <Routes>
          <Route path='/home'  element={<HomePage/>}></Route>
          <Route path='/service'  element={<ServicePage/>}></Route>

        </Routes>
      </Router>


    </div>

  )
}

export default App
