import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Navbar1 from './Components/navbar';
import Homepage from './MainPages/homepage';
import Footer from './footer';
import Servicepg from './MainPages/servicespg';
import Contactpg from './MainPages/contactpg';
import Aboutpg from './MainPages/aboutpg';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/service' element={<Servicepg />} />
          <Route path='/contact' element={<Contactpg />} />
          <Route path='/about' element={<Aboutpg />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
