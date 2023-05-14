import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Products title="Tudo no precinho :D"/>
      <Products title="SOCORRO"/>
      <Products title="FERRO"/>
    </div>
  );
}

export default App;
