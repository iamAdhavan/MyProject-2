import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login'
import Main from './Main';
import Signup from './Signup';
import MovieSection from './MovieSection';
import Menu1 from './Data/Menu1'
import MenuMovie1 from './Data/MenuMovie1'
import Brother from './Data/Brother';
import Vikram from './Data/Vikram';
import Meiyazhagan from './Data/Meiyazhagan';
import Amaran from './Data/Amaran';
import Lovetoday from './Data/Lovetoday';
import Lubberpandhu from './Data/Lubberpandhu';
import Goat from './Data/Goat';
import Bloodybeggar from './Data/Bloodybeggar';
import Mankatha from './Components/Mankatha';
import Markantony from './Components/Markantony';
import Ponniyinselvan from './Components/Ponniyinselvan';
import Vettaiyan from './Components/Vettaiyan';



function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/MovieSection' element={<MovieSection />}></Route>
          <Route path="/Brother" element={<Brother />} />
          <Route path="/Vikram" element={<Vikram />} />
          <Route path="/Meiyazhagan" element={<Meiyazhagan />} />
          <Route path="/Amaran" element={<Amaran />} />
          <Route path="/Lovetoday" element={<Lovetoday />} />
          <Route path="/Lubberpandhu" element={<Lubberpandhu />} />
          <Route path="/Goat" element={<Goat />} />
          <Route path="/Bloodybeggar" element={<Bloodybeggar />} />
          <Route path="/Menu1" element={<Menu1 />} />
          <Route path="/MenuMovie1" element={<MenuMovie1 />} />
          <Route path="/Mankatha" element={<Mankatha />} />
          <Route path="/Markantony" element={<Markantony />} />
          <Route path="/Ponniyinselvan" element={<Ponniyinselvan />} />
          <Route path="/Vettaiyan" element={<Vettaiyan />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
