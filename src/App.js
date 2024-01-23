
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import Details from './Components/Detail/Details'

function App() {
  return (
    <div className='max-w-8xl justify-center mx-auto px-15 '>
      <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route  path='detail/:id' element={<Details></Details>}></Route>
           
          </Routes>
          <Footer></Footer>
    </div>
  );
}

export default App;
