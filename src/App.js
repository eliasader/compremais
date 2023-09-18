import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Products from './Components/Products';
import Contact from './Components/Contact';
import productsList from "./Components/Products/productsList";
import productsListEN from "./Components/Products/productsList";
import { AppContext } from './CompreContext/AppContext';
import { useState} from 'react';

function App() {
  const [lang,setLang] = useState(false);
  
  const [listProd,setList] = useState(productsList)
 
  
  return (
    <AppContext.Provider value={{lang,setLang,listProd,setList}}> ''   
      <div className="App">
        <Navbar/>
        <Welcome/>
        <Products title="Tudo no precinho :D" list={listProd} />
        <Contact/>
      </div>
    </AppContext.Provider>

  );
}

export default App;
