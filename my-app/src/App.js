import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Navbar } from './components/Navbar.js';
import { About } from './components/About';
import { Information } from './components/Information';
import { Home } from './components/Home';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home />}></Route> 
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/information' element={<Information />}></Route>
      </Routes>
    </>
  );
}

export default App;
