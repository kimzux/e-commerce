import Foot from "./components/Foot";
import { Navbar } from "./components";
import Home from "./pages/home";
import  ProductDetail  from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/product-details" element={<ProductDetail/>}></Route>
        </Routes>
      </Router>
      <Foot/>

    </div>
  );
}

export default App;
