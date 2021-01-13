import './App.css';
import { AddItem } from './components/AddItem';
import { Header } from './components/Header';
import { ShoppingList } from './components/ShoppingList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
      <div className="container">
        <Header />
        <GlobalProvider>
          {/* Components that will have access to the global state go here*/}
          <ShoppingList />
          <AddItem />
        </GlobalProvider>
    </div>

    
    
  );
}

export default App;


