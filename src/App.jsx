
import GlobalProvider from "./context";
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Routers/Home';
import Detail from './Routers/Detail';
import Contact from './Routers/Contact';
import Favs from './Routers/Favs';
import NoPage from './Routers/NoPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
  useNavigate
} from "react-router-dom";

function App() {


  return (
    <GlobalProvider>
        <Router>
          <div className="App">      
              <Navbar/>
                <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/dentist/:id' element={<Detail/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/favs' element={<Favs/>}></Route>
                  <Route path="*" element={<NoPage/>}></Route>
                </Routes>
              <Footer/>
          </div>
        </Router>
    </GlobalProvider>
  )
}

export default App
