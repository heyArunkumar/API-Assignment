import './App.css';
import 'antd/dist/antd.css'; 
import HeaderCom from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <div className="App">
     {/* <Router> */}
     <HeaderCom />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListing/>} />
        
          <Route path="/product/:productID" element={<ProductDetail />} />
        
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
