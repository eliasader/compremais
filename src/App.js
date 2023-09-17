import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Products from './Components/Products';
import Contact from './Components/Contact';
import productsList from "./Components/Products/productsList"; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Products title="Tudo no precinho :D" list={productsList} />
      <Contact/>
    </div>
  );
}

export default App;
