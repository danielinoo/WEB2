// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenti/NavBar';
import RicercaVolo from './componenti/RicercaVolo';
import Vis_volo from './componenti/Vis_volo';
import Vis_Aer from './componenti/Vis_Aer';
import Vis_com from './componenti/Vis_com';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Contenuto delle rotte */}
        <Routes>
          
          <Route path='/RicercaVolo' element={<RicercaVolo />} />
          <Route path="/volo" element={<Vis_volo />} />
          <Route path="/aer" element={<Vis_Aer />} />
          <Route path="/comp" element={<Vis_com />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
