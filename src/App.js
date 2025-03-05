import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filters/>
      <Items/>
    </div>
  );
}

export default App;
