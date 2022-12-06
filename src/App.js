import { Route, Routes } from 'react-router';
import './App.css';
// import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
