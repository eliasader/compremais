import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Products from './Components/Products';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Products title="Tudo no precinho :D"/>
      <Contact/>
    </div>
  );
}

export default App;
