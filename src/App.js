import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Greate from './components/greate';
import Product from './components/Product';
import Deteils from './components/productDeteils';
import Basket from './components/Basket';
import Favorite from './components/Favorite';
import Search from './components/search';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState("")
  return (
    <div className="App">
     <Header setValue={setValue}/>
    <Routes>
    <Route path='/Greate' element={<Greate/>}/>
    <Route path='/Product' element={<Product/>}/>
    <Route path='/Deteils' element={<Deteils/>}/>
    <Route path='/Basket' element={<Basket/>}/>
    <Route path='/Favorite' element={<Favorite/>}/>
    <Route path='/Search' element={<Search value={value}/>}/>

    </Routes>

    </div>
  );
}

export default App;
