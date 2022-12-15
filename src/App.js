import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
