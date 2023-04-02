import './App.css';

//Data
import { Api } from './api/Api'

//Component
import Header from './components/header/Header'
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <Header />
      <Home Api={Api}/>
    </div>
  );
}

export default App;
