import './App.css';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Filters from './components/Filters/Filters';
import ProductGrid from './components/ProductGrid/ProductGrid';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Navbar />
        <Filters />
        <ProductGrid />
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
